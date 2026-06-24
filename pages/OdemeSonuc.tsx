import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const OdemeSonuc: React.FC = () => {
  const [params] = useSearchParams();
  const status = params.get('durum');
  const isSuccess = status === 'basarili';

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <h1 className="text-3xl font-black text-gray-900 mb-4">
            {isSuccess ? 'Ödeme Alındı' : 'Ödeme Tamamlanamadı'}
          </h1>
          <p className="text-gray-600 mb-8">
            {isSuccess
              ? 'Ödemeniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.'
              : 'Ödeme işlemi başarısız veya iptal edildi. Tekrar deneyebilir ya da bizimle iletişime geçebilirsiniz.'}
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/fiyatlar"
              className="inline-flex px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors"
            >
              Paketlere Dön
            </Link>
            <a
              href="tel:08503098419"
              className="inline-flex px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition-colors"
            >
              Bizi Arayın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdemeSonuc;
