import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers3, MessageCircle } from 'lucide-react';
import IntegratorPanelPreview from '../components/IntegratorPanelPreview';
import { getWhatsAppUrl } from '../data/company';

const marketplaces = ['Trendyol', 'Hepsiburada', 'Amazon TR', 'N11', 'Pazarama', 'PttAVM', 'Çiçeksepeti', 'İdefix'];

const EntegratorDemo: React.FC = () => (
  <div className="min-h-screen bg-white pt-20">
    <section className="overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex gap-2 text-sm font-bold uppercase tracking-widest text-orange-400">
          <Link to="/" className="hover:text-white">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-white/60">Entegratör Demo</span>
        </nav>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 text-sm font-bold text-orange-300">
              <Layers3 className="h-4 w-4" />
              PazarConnect
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">Pazaryerlerini Tek Panelden Yönetin</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Sipariş, ürün, stok, fiyat, e-arşiv fatura ve kargo süreçlerini sekiz pazaryeri için tek merkezde takip edin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a href={getWhatsAppUrl('Merhaba, PazarConnect entegratör demosu hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-4 text-center font-black text-white hover:bg-orange-700 sm:w-auto sm:px-7">
                <MessageCircle className="h-5 w-5" /> Canlı Demo Talep Et
              </a>
              <Link to="/entegrasyonlar" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-4 text-center font-black text-white hover:bg-white/10 sm:w-auto sm:px-7">
                Entegrasyonları İncele <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <IntegratorPanelPreview />
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">8 pazaryeri entegrasyonu</p>
          <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Tüm satış kanallarınız aynı akışta</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaces.map((marketplace) => (
            <div key={marketplace} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 font-bold text-gray-800">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600" />
              {marketplace}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default EntegratorDemo;
