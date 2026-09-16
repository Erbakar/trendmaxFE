import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { FileOrderStore } from './orderStore.mjs';
import {
  buildReturnUrl,
  createCallbackHash,
  safeTokenEquals,
  validateCheckout,
} from './paytrUtils.mjs';

const validCheckout = {
  customer: {
    fullName: 'Test Kullanıcı',
    email: 'TEST@example.com',
    phone: '0555 555 55 55',
    address: 'Konak Mahallesi Nilüfer Bursa',
  },
  acceptances: {
    preInformation: true,
    distanceSales: true,
    privacyNotice: true,
    earlyPerformance: true,
  },
};

test('checkout verilerini temizler ve zorunlu onayları doğrular', () => {
  const result = validateCheckout(validCheckout);
  assert.equal(result.error, undefined);
  assert.equal(result.value.customer.email, 'test@example.com');
  assert.equal(result.value.customer.phone, '05555555555');

  const rejected = validateCheckout({
    ...validCheckout,
    acceptances: { ...validCheckout.acceptances, distanceSales: false },
  });
  assert.match(rejected.error, /onayları eksik/i);
});

test('temiz dönüş URL’sine sipariş verilerini doğru ekler', () => {
  assert.equal(
    buildReturnUrl('https://trendmaxtr.com/odeme-sonuc', { siparis: 'TMX-1', durum: 'kontrol' }),
    'https://trendmaxtr.com/odeme-sonuc?siparis=TMX-1&durum=kontrol',
  );
});

test('eski HashRouter dönüş URL’leriyle geriye dönük uyumluluğu korur', () => {
  assert.equal(
    buildReturnUrl('https://trendmaxtr.com/#/odeme-sonuc', { siparis: 'TMX-1', durum: 'kontrol' }),
    'https://trendmaxtr.com/#/odeme-sonuc?siparis=TMX-1&durum=kontrol',
  );
});

test('callback hash karşılaştırması sabit zamanlı doğrulanır', () => {
  const hash = createCallbackHash({
    merchantOid: 'TMX-test',
    status: 'success',
    totalAmount: '1950000',
    merchantSalt: 'salt',
    merchantKey: 'key',
  });
  assert.equal(safeTokenEquals(hash, hash), true);
  assert.equal(safeTokenEquals(hash, `${hash}x`), false);
});

test('sipariş deposu yeniden başlatma sonrasında kaydı korur', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'trendmax-orders-'));
  try {
    const orderId = 'TMX123e4567e89b12d3a456426614174000';
    const firstStore = new FileOrderStore(directory);
    await firstStore.init();
    await firstStore.set(orderId, { orderId, status: 'pending' });

    const reopenedStore = new FileOrderStore(directory);
    await reopenedStore.init();
    assert.deepEqual(await reopenedStore.get(orderId), { orderId, status: 'pending' });
    assert.equal(await reopenedStore.get('../invalid'), null);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
