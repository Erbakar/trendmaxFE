import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Sayfa Bulunamadı | Trendmax';
    document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center bg-gray-50 pb-16 pt-28">
    <div className="mx-auto max-w-3xl px-4 text-center">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-600">404</p>
      <h1 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl">Aradığınız sayfa bulunamadı.</h1>
      <p className="mt-5 text-lg leading-relaxed text-gray-600">
        Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Ana sayfaya dönebilir ya da güncel paketleri inceleyebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Ana Sayfa</Link>
        <Link to="/fiyatlar" className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-800 hover:bg-gray-100">Paketler</Link>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
