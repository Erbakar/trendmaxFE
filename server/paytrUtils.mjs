import crypto from 'node:crypto';

export const LEGAL_ACCEPTANCE_VERSION = '2026-08-23';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9]{10,15}$/;

const cleanText = (value) => (typeof value === 'string' ? value.trim() : '');

export function validateCheckout(body) {
  const customer = body?.customer ?? {};
  const fullName = cleanText(customer.fullName);
  const email = cleanText(customer.email).toLowerCase();
  const phone = cleanText(customer.phone).replace(/[\s()-]/g, '');
  const address = cleanText(customer.address);
  const acceptances = body?.acceptances ?? {};

  if (fullName.length < 3 || fullName.length > 60) {
    return { error: 'Ad soyad 3-60 karakter arasında olmalıdır.' };
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { error: 'Geçerli bir e-posta adresi girin.' };
  }
  if (!PHONE_PATTERN.test(phone)) {
    return { error: 'Geçerli bir telefon numarası girin.' };
  }
  if (address.length < 10 || address.length > 400) {
    return { error: 'Fatura adresi 10-400 karakter arasında olmalıdır.' };
  }
  if (
    acceptances.preInformation !== true ||
    acceptances.distanceSales !== true ||
    acceptances.privacyNotice !== true ||
    acceptances.earlyPerformance !== true
  ) {
    return { error: 'Ödeme öncesi bilgilendirme ve sözleşme onayları eksik.' };
  }

  return {
    value: {
      customer: { fullName, email, phone, address },
      acceptances: {
        preInformation: true,
        distanceSales: true,
        privacyNotice: true,
        earlyPerformance: true,
        version: LEGAL_ACCEPTANCE_VERSION,
      },
    },
  };
}

export function createPaytrHash({
  merchantId,
  userIp,
  merchantOid,
  email,
  paymentAmount,
  userBasket,
  noInstallment,
  maxInstallment,
  currency,
  testMode,
  merchantSalt,
  merchantKey,
}) {
  const hashString = `${merchantId}${userIp}${merchantOid}${email}${paymentAmount}${userBasket}${noInstallment}${maxInstallment}${currency}${testMode}${merchantSalt}`;
  return crypto.createHmac('sha256', merchantKey).update(hashString).digest('base64');
}

export function createCallbackHash({ merchantOid, status, totalAmount, merchantSalt, merchantKey }) {
  return crypto
    .createHmac('sha256', merchantKey)
    .update(`${merchantOid}${merchantSalt}${status}${totalAmount}`)
    .digest('base64');
}

export function safeTokenEquals(first, second) {
  if (typeof first !== 'string' || typeof second !== 'string') {
    return false;
  }
  const firstBuffer = Buffer.from(first);
  const secondBuffer = Buffer.from(second);
  return firstBuffer.length === secondBuffer.length && crypto.timingSafeEqual(firstBuffer, secondBuffer);
}

export function buildReturnUrl(baseUrl, params) {
  const hashIndex = baseUrl.indexOf('#');
  if (hashIndex === -1) {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
    return url.toString();
  }

  const base = baseUrl.slice(0, hashIndex);
  const hash = baseUrl.slice(hashIndex + 1);
  const [hashPath, hashQuery = ''] = hash.split('?');
  const search = new URLSearchParams(hashQuery);
  Object.entries(params).forEach(([key, value]) => search.set(key, value));
  return `${base}#${hashPath}?${search.toString()}`;
}
