import crypto from 'node:crypto';
import { existsSync } from 'node:fs';
import path from 'node:path';
import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { findPaytrProduct } from '../shared/paytrProducts.js';
import { FileOrderStore } from './orderStore.mjs';
import {
  buildReturnUrl,
  createCallbackHash,
  createPaytrHash,
  safeTokenEquals,
  validateCheckout,
} from './paytrUtils.mjs';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const orderStore = new FileOrderStore(
  process.env.PAYTR_ORDER_STORE_PATH || path.join(serverDirectory, '..', '.data', 'paytr-orders'),
);
await orderStore.init();

app.disable('x-powered-by');
app.set('trust proxy', process.env.TRUST_PROXY === '1' ? 1 : false);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: false, limit: '16kb' }));
app.use((req, res, next) => {
  if (req.path === '/api' || req.path.startsWith('/api/')) {
    res.setHeader('Cache-Control', 'no-store');
  }
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

const requiredEnv = [
  'PAYTR_MERCHANT_ID',
  'PAYTR_MERCHANT_KEY',
  'PAYTR_MERCHANT_SALT',
  'PAYTR_OK_URL',
  'PAYTR_FAIL_URL',
];

for (const envName of requiredEnv) {
  if (!process.env[envName]) {
    console.warn(`[paytr] Missing environment variable: ${envName}`);
  }
}

const allowedOrigins = new Set(
  (process.env.PAYTR_ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
);
const rateBuckets = new Map();

function getClientIp(req) {
  return (req.ip || req.socket.remoteAddress || '127.0.0.1').replace(/^::ffff:/, '');
}

function enforceAllowedOrigin(req, res, next) {
  const origin = req.get('origin');
  if (origin && allowedOrigins.size > 0 && !allowedOrigins.has(origin)) {
    return res.status(403).json({ error: 'Bu kaynaktan ödeme başlatılamaz.' });
  }
  return next();
}

function checkoutRateLimit(req, res, next) {
  const now = Date.now();
  const ip = getClientIp(req);
  const current = rateBuckets.get(ip);

  if (!current || now > current.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return next();
  }

  if (current.count >= 10) {
    res.setHeader('Retry-After', String(Math.ceil((current.resetAt - now) / 1000)));
    return res.status(429).json({ error: 'Çok fazla ödeme denemesi yapıldı. Lütfen biraz bekleyin.' });
  }

  current.count += 1;
  return next();
}

function buildBasket(product) {
  const basket = [[product.title, product.amountTRY.toFixed(2), 1]];
  return Buffer.from(JSON.stringify(basket)).toString('base64');
}

function getPublicOrder(order) {
  return {
    orderId: order.orderId,
    status: order.status,
    product: {
      title: order.product.title,
      amountTRY: order.product.amountTRY,
    },
    createdAt: order.createdAt,
    updatedAt: order.updatedAt || null,
    failedReasonMessage: order.status === 'failed' ? order.failedReasonMessage || null : null,
  };
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/paytr/token', enforceAllowedOrigin, checkoutRateLimit, async (req, res) => {
  try {
    const { productType, productSourceId } = req.body || {};
    const product = findPaytrProduct(productType, productSourceId);
    if (!product) {
      return res.status(400).json({ error: 'Geçersiz ürün seçimi.' });
    }

    const validation = validateCheckout(req.body);
    if (validation.error) {
      return res.status(400).json({ error: validation.error });
    }

    const merchantId = process.env.PAYTR_MERCHANT_ID;
    const merchantKey = process.env.PAYTR_MERCHANT_KEY;
    const merchantSalt = process.env.PAYTR_MERCHANT_SALT;
    const okUrl = process.env.PAYTR_OK_URL;
    const failUrl = process.env.PAYTR_FAIL_URL;

    if (!merchantId || !merchantKey || !merchantSalt || !okUrl || !failUrl) {
      return res.status(503).json({ error: 'Ödeme sistemi şu anda kullanılamıyor.' });
    }

    // PayTR merchant_oid yalnızca alfanümerik karakter kabul eder.
    const merchantOid = `TMX${crypto.randomUUID().replaceAll('-', '')}`;
    const publicToken = crypto.randomBytes(24).toString('base64url');
    const userIp = getClientIp(req);
    const { customer, acceptances } = validation.value;
    const paymentAmount = Math.round(product.amountTRY * 100);
    const userBasket = buildBasket(product);
    const noInstallment = '0';
    const maxInstallment = '0';
    const currency = 'TL';
    const testMode = process.env.PAYTR_TEST_MODE === '1' ? '1' : '0';
    const debugOn = process.env.PAYTR_DEBUG_ON === '1' ? '1' : '0';
    const timeoutLimit = process.env.PAYTR_TIMEOUT_LIMIT || '30';
    const createdAt = new Date().toISOString();

    const order = {
      orderId: merchantOid,
      publicToken,
      status: 'token_requested',
      createdAt,
      customer,
      product,
      expectedAmount: paymentAmount,
      acceptances: {
        ...acceptances,
        acceptedAt: createdAt,
        ip: userIp,
        userAgent: String(req.get('user-agent') || '').slice(0, 300),
      },
    };
    await orderStore.set(merchantOid, order);

    const paytrToken = createPaytrHash({
      merchantId,
      userIp,
      merchantOid,
      email: customer.email,
      paymentAmount,
      userBasket,
      noInstallment,
      maxInstallment,
      currency,
      testMode,
      merchantSalt,
      merchantKey,
    });

    const returnParams = { siparis: merchantOid, anahtar: publicToken };
    const payload = new URLSearchParams({
      merchant_id: merchantId,
      user_ip: userIp,
      merchant_oid: merchantOid,
      email: customer.email,
      payment_amount: String(paymentAmount),
      paytr_token: paytrToken,
      user_basket: userBasket,
      debug_on: debugOn,
      no_installment: noInstallment,
      max_installment: maxInstallment,
      user_name: customer.fullName,
      user_address: customer.address,
      user_phone: customer.phone,
      merchant_ok_url: buildReturnUrl(okUrl, { ...returnParams, durum: 'kontrol' }),
      merchant_fail_url: buildReturnUrl(failUrl, { ...returnParams, durum: 'basarisiz' }),
      timeout_limit: timeoutLimit,
      currency,
      test_mode: testMode,
      lang: 'tr',
    });

    const paytrResponse = await fetch('https://www.paytr.com/odeme/api/get-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
      signal: AbortSignal.timeout(20_000),
    });

    const responseText = await paytrResponse.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = null;
    }

    if (!paytrResponse.ok || data?.status !== 'success' || !data.token) {
      await orderStore.set(merchantOid, {
        ...order,
        status: 'token_failed',
        updatedAt: new Date().toISOString(),
      });
      console.error('[paytr] Token request failed', data?.reason || paytrResponse.status);
      return res.status(502).json({ error: 'Ödeme oturumu oluşturulamadı. Lütfen tekrar deneyin.' });
    }

    await orderStore.set(merchantOid, {
      ...order,
      status: 'pending',
      updatedAt: new Date().toISOString(),
    });

    return res.json({
      token: data.token,
      iframeUrl: `https://www.paytr.com/odeme/guvenli/${data.token}`,
      orderId: merchantOid,
      orderToken: publicToken,
    });
  } catch (error) {
    console.error('[paytr] Token endpoint error', error);
    return res.status(500).json({ error: 'Ödeme başlatılırken beklenmeyen bir hata oluştu.' });
  }
});

app.post('/api/paytr/callback', async (req, res) => {
  try {
    const merchantOid = String(req.body?.merchant_oid || '');
    const status = String(req.body?.status || '');
    const totalAmount = String(req.body?.total_amount || '');
    const hash = String(req.body?.hash || '');
    const failedReasonMessage = String(req.body?.failed_reason_msg || '').slice(0, 250);
    const merchantKey = process.env.PAYTR_MERCHANT_KEY;
    const merchantSalt = process.env.PAYTR_MERCHANT_SALT;

    if (!merchantKey || !merchantSalt) {
      return res.status(500).send('PAYTR config error');
    }
    if (!merchantOid || !['success', 'failed'].includes(status) || !/^\d+$/.test(totalAmount) || !hash) {
      return res.status(400).send('invalid callback');
    }

    const calculatedHash = createCallbackHash({
      merchantOid,
      status,
      totalAmount,
      merchantSalt,
      merchantKey,
    });
    if (!safeTokenEquals(calculatedHash, hash)) {
      return res.status(400).send('invalid hash');
    }

    const order = await orderStore.get(merchantOid);
    if (!order) {
      console.error(`[paytr] Callback received for unknown order: ${merchantOid}`);
      return res.status(404).send('order not found');
    }

    if (order.status === 'success' || order.status === 'failed') {
      return res.send('OK');
    }

    await orderStore.set(merchantOid, {
      ...order,
      status,
      paidAmount: Number(totalAmount),
      failedReasonMessage: status === 'failed' ? failedReasonMessage || null : null,
      updatedAt: new Date().toISOString(),
    });

    return res.send('OK');
  } catch (error) {
    console.error('[paytr] Callback error', error);
    return res.status(500).send('callback error');
  }
});

app.get('/api/paytr/order/:orderId', async (req, res) => {
  try {
    const order = await orderStore.get(req.params.orderId);
    const publicToken = typeof req.query.anahtar === 'string' ? req.query.anahtar : '';

    if (!order || !safeTokenEquals(order.publicToken, publicToken)) {
      return res.status(404).json({ error: 'Sipariş bulunamadı.' });
    }

    return res.json(getPublicOrder(order));
  } catch (error) {
    console.error('[paytr] Order status error', error);
    return res.status(500).json({ error: 'Sipariş durumu alınamadı.' });
  }
});

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Servis bulunamadı.' });
});

if (process.env.NODE_ENV === 'production') {
  const distDirectory = path.join(serverDirectory, '..', 'dist');

  app.get('*splat', (req, res, next) => {
    if (req.path === '/' || !req.path.endsWith('/')) return next();
    const requestUrl = new URL(req.originalUrl, 'http://localhost');
    requestUrl.pathname = requestUrl.pathname.replace(/\/+$/, '');
    return res.redirect(301, `${requestUrl.pathname}${requestUrl.search}`);
  });

  app.get('/e-ihracat', (_req, res) => {
    res.redirect(301, '/cozumler/e-ihracat');
  });

  app.get('*splat', (req, res, next) => {
    const distRoot = path.resolve(distDirectory);
    const relativePath = req.path.replace(/^\/+/, '');
    const routeIndex = path.resolve(distRoot, relativePath, 'index.html');
    if (!routeIndex.startsWith(`${distRoot}${path.sep}`) || !existsSync(routeIndex)) {
      return next();
    }
    res.setHeader('Cache-Control', 'no-cache');
    return res.sendFile(routeIndex);
  });

  app.use(
    express.static(distDirectory, {
      etag: true,
      maxAge: '1y',
      redirect: false,
      setHeaders: (res, filePath) => {
        if (/\.(?:html|xml|txt|md)$/.test(filePath)) {
          res.setHeader('Cache-Control', 'no-cache');
        } else {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      },
    }),
  );

  app.get('*splat', (req, res) => {
    const isThemePreview = req.path.startsWith('/tema/');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    res.status(isThemePreview ? 200 : 404).sendFile(path.join(distDirectory, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`[trendmax] ${process.env.NODE_ENV === 'production' ? 'web and API' : 'API'} server ready on port ${port}`);
});
