import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { THEME_DEMOS } from '../data/homePage';
import { getWhatsAppUrl } from '../data/company';

const TemaOnizleme: React.FC = () => {
  const { slug } = useParams();
  const theme = THEME_DEMOS.find((item) => item.slug === slug);

  if (!theme) return <Navigate to="/premium/temalar" replace />;

  return (
    <div className="min-h-screen bg-slate-100 pt-20">
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <Link to="/premium/temalar" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700">
              <ArrowLeft className="h-4 w-4" /> Tüm Temalar
            </Link>
            <h1 className="text-3xl font-black text-slate-900">{theme.name} Tema Önizlemesi</h1>
            <p className="mt-2 text-slate-500">Masaüstü mağaza görünümü</p>
          </div>
          <a
            href={getWhatsAppUrl(`Merhaba, ${theme.name} teması hakkında bilgi almak istiyorum.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-4 font-black text-white hover:bg-orange-700"
          >
            <MessageCircle className="h-5 w-5" /> Bu Temayı Sor
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] p-4 sm:p-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <div className="ml-4 flex-1 rounded-lg bg-white px-4 py-2 text-xs font-medium text-slate-400 ring-1 ring-slate-200">
              {theme.name.toLocaleLowerCase('tr-TR')}.trendmax-demo.com
            </div>
          </div>
          <img src={theme.landscapeImage} alt={`${theme.name} tema masaüstü önizlemesi`} className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default TemaOnizleme;

