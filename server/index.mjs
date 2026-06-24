import crypto from 'node:crypto';
import express from 'express';
import dotenv from 'dotenv';
import { findPaytrProduct } from '../shared/paytrProducts.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

const orders = new Map();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0]?.trim() || req.socket.remoteAddress || '127.0.0.1';
  }
  return req.socket.remoteAddress || '127.0.0.1';
}

function buildBasket(product) {
  const basket = [[product.title, product.amountTRY.toFixed(2), 1]];
  return Buffer.from(JSON.stringify(basket)).toString('base64');
}

app.post('/api/paytr/token', async (req, res) => {
  try {
    const { productType, productSourceId, customer } = req.body || {};

    const product = findPaytrProduct(productType, productSourceId);
    if (!product) {
      return res.status(400).json({ error: 'Geçersiz ürün seçimi.' });
    }

    if (!customer?.fullName || !customer?.email || !customer?.phone || !customer?.address) {
      return res.status(400).json({ error: 'Müşteri bilgileri eksik.' });
    }

    const merchantId = process.env.PAYTR_MERCHANT_ID;
    const merchantKey = process.env.PAYTR_MERCHANT_KEY;
    const merchantSalt = process.env.PAYTR_MERCHANT_SALT;

    if (!merchantId || !merchantKey || !merchantSalt) {
      return res.status(500).json({ error: 'PayTR ayarları eksik. .env dosyasını kontrol edin.' });
    }

    const merchantOid = `TMX-${Date.now()}-${Math.floor(Math.random() * 9000 + 1000)}`;
    const userIp = getClientIp(req);
    const email = customer.email;
    const paymentAmount = product.amountTRY * 100;
    const userBasket = buildBasket(product);

    const noInstallment = '0';
    const maxInstallment = '0';
    const currency = 'TL';
    const testMode = process.env.PAYTR_TEST_MODE === '1' ? '1' : '0';
    const debugOn = process.env.PAYTR_DEBUG_ON === '1' ? '1' : '0';
    const timeoutLimit = process.env.PAYTR_TIMEOUT_LIMIT || '30';
    const lang = 'tr';

    const hashStr = `${merchantId}${userIp}${merchantOid}${email}${paymentAmount}${userBasket}${noInstallment}${maxInstallment}${currency}${testMode}${merchantSalt}`;
    const paytrToken = crypto
      .createHmac('sha256', merchantKey)
      .update(hashStr)
      .digest('base64');

    const payload = new URLSearchParams({
      merchant_id: merchantId,
      user_ip: userIp,
      merchant_oid: merchantOid,
      email,
      payment_amount: String(paymentAmount),
      paytr_token: paytrToken,
      user_basket: userBasket,
      debug_on: debugOn,
      no_installment: noInstallment,
      max_installment: maxInstallment,
      user_name: customer.fullName,
      user_address: customer.address,
      user_phone: customer.phone,
      merchant_ok_url: process.env.PAYTR_OK_URL,
      merchant_fail_url: process.env.PAYTR_FAIL_URL,
      timeout_limit: timeoutLimit,
      currency,
      test_mode: testMode,
      lang,
    });

    const paytrResponse = await fetch('https://www.paytr.com/odeme/api/get-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
    });

    const data = await paytrResponse.json();

    if (data.status !== 'success') {
      return res.status(400).json({
        error: data.reason || 'PayTR token üretilemedi.',
      });
    }

    orders.set(merchantOid, {
      status: 'pending',
      createdAt: new Date().toISOString(),
      customer,
      product,
      totalAmount: paymentAmount,
    });

    return res.json({
      token: data.token,
      iframeUrl: `https://www.paytr.com/odeme/guvenli/${data.token}`,
      orderId: merchantOid,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Beklenmeyen sunucu hatası.';
    return res.status(500).json({ error: message });
  }
});

app.post('/api/paytr/callback', (req, res) => {
  try {
    const {
      merchant_oid: merchantOid,
      status,
      total_amount: totalAmount,
      hash,
      failed_reason_msg: failedReasonMessage,
    } = req.body || {};

    const merchantKey = process.env.PAYTR_MERCHANT_KEY;
    const merchantSalt = process.env.PAYTR_MERCHANT_SALT;

    if (!merchantKey || !merchantSalt) {
      return res.status(500).send('PAYTR config error');
    }

    const calculatedHash = crypto
      .createHmac('sha256', merchantKey)
      .update(`${merchantOid}${merchantSalt}${status}${totalAmount}`)
      .digest('base64');

    if (calculatedHash !== hash) {
      return res.status(400).send('invalid hash');
    }

    const order = orders.get(merchantOid);
    if (order) {
      orders.set(merchantOid, {
        ...order,
        status,
        totalAmount,
        failedReasonMessage: failedReasonMessage || null,
        updatedAt: new Date().toISOString(),
      });
    }

    return res.send('OK');
  } catch (error) {
    return res.status(500).send(error instanceof Error ? error.message : 'callback error');
  }
});

app.get('/api/paytr/order/:orderId', (req, res) => {
  const order = orders.get(req.params.orderId);

  if (!order) {
    return res.status(404).json({ error: 'Sipariş bulunamadı.' });
  }

  return res.json(order);
});

app.listen(port, () => {
  console.log(`[paytr] API server ready on port ${port}`);
});
