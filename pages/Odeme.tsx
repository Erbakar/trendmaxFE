import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { findPaytrProduct } from '../shared/paytrProducts';

type PaytrTokenResponse = {
  token: string;
  iframeUrl: string;
  orderId: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const Odeme: React.FC = () => {
  const [params] = useSearchParams();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaytrTokenResponse | null>(null);

  const type = params.get('tip') ?? '';
  const sourceId = params.get('paket') ?? '';
  const selectedProduct = useMemo(() => findPaytrProduct(type, sourceId), [type, sourceId]);

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProduct) {
      setError('Seçilen paket bulunamadı.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/paytr/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: selectedProduct.type,
          productSourceId: selectedProduct.sourceId,
          customer: {
            fullName,
            email,
            phone,
            address,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? 'Ödeme başlatılamadı.');
      }

      setPaymentInfo(data);
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : 'Beklenmeyen bir hata oluştu.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!selectedProduct) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <h1 className="text-2xl font-black text-gray-900 mb-4">Paket bulunamadı</h1>
            <p className="text-gray-600 mb-6">
              Ödeme sayfasına eksik veya hatalı parametre ile geldiniz.
            </p>
            <Link
              to="/fiyatlar"
              className="inline-flex px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors"
            >
              Paketlere Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 h-fit">
          <h1 className="text-3xl font-black text-gray-900 mb-3">PayTR ile Güvenli Ödeme</h1>
          <p className="text-gray-600 mb-6">
            Aşağıdaki formu doldurduktan sonra PayTR ödeme ekranına yönlendirilirsiniz.
          </p>

          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 mb-8">
            <p className="text-sm text-gray-600">Seçilen paket</p>
            <p className="text-lg font-bold text-gray-900">{selectedProduct.title}</p>
            <p className="text-2xl font-black text-orange-600 mt-1">
              {selectedProduct.amountTRY.toLocaleString('tr-TR')} TL
            </p>
          </div>

          {!paymentInfo ? (
            <form className="space-y-4" onSubmit={handlePayment}>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ad Soyad"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="E-posta"
              />
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Telefon"
              />
              <textarea
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-28"
                placeholder="Fatura adresi"
              />

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl bg-orange-600 text-white font-black text-lg hover:bg-orange-700 transition-colors disabled:bg-orange-300"
              >
                {loading ? 'Ödeme Başlatılıyor...' : 'Ödemeye Geç'}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-green-700 font-semibold">
                Ödeme oturumu oluşturuldu. Aşağıdaki ekrandan işlemi tamamlayabilirsiniz.
              </p>
              <p className="text-xs text-gray-500">Sipariş No: {paymentInfo.orderId}</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 min-h-[580px]">
          {paymentInfo ? (
            <iframe
              title="PayTR Odeme"
              src={paymentInfo.iframeUrl}
              className="w-full h-[560px] rounded-xl border border-gray-200"
              allow="payment"
            />
          ) : (
            <div className="h-[560px] rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-center px-8">
              Formu doldurup ödeme oturumu başlattığınızda PayTR ekranı burada açılır.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Odeme;
