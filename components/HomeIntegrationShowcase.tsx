import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Link2 } from 'lucide-react';
import { ENTEGRASYON_LOGOS, type HomeIntegrationLogo } from '../data/homePage';

function IntegrationLogoCard({ item }: { item: HomeIntegrationLogo }) {
  const [failed, setFailed] = useState(false);
  const src = item.logoUrl;

  return (
    <div className="group relative flex h-[92px] w-[168px] shrink-0 flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-200/90 hover:bg-white hover:shadow-lg hover:shadow-orange-500/15">
      {!failed ? (
        <img
          src={src}
          alt={`${item.name} logosu`}
          className="max-h-11 w-auto max-w-[132px] object-contain opacity-100 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="px-1 text-center text-xs font-black leading-snug text-slate-800">{item.name}</span>
      )}
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-600/90">
        {item.category}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: HomeIntegrationLogo[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className={reverse ? 'animate-marquee-integrations-reverse' : 'animate-marquee-integrations'}>
      {loop.map((item, i) => (
        <div key={`${item.logoUrl}-${i}`} className="mx-3 shrink-0">
          <IntegrationLogoCard item={item} />
        </div>
      ))}
    </div>
  );
}

const HomeIntegrationShowcase: React.FC = () => {
  const marketplaceItems = ENTEGRASYON_LOGOS.filter((x) => x.category === 'Pazaryeri');
  const cargoItems = ENTEGRASYON_LOGOS.filter((x) => x.category === 'Kargo');

  return (
    <section className="relative overflow-hidden border-y border-orange-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-1/4 top-0 h-[min(480px,80vw)] w-[min(480px,80vw)] rounded-full bg-orange-500/35 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[min(420px,75vw)] w-[min(420px,75vw)] rounded-full bg-violet-600/30 blur-[110px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(15,23,42,0.75))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-sm">
          <Link2 className="h-4 w-4 shrink-0" aria-hidden />
          API & Entegrasyon
        </div>
        <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
          Yüzlerce Sistemle Tam Entegre
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
          Pazaryeri ve kargo partnerlerinin güncel marka logolarıyla tanıdık bir görünüm; tek panelde stok, sipariş
          ve sevkiyat akışınızı senkronize edin.
        </p>

        <p className="mb-3 text-left text-xs font-bold uppercase tracking-widest text-orange-400/95 sm:text-center">
          Pazaryeri entegrasyonları
        </p>
        <div className="relative mb-12 -mx-4 sm:mx-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />
          <div className="overflow-hidden py-2">
            <MarqueeRow items={marketplaceItems} />
          </div>
        </div>

        <p className="mb-3 text-left text-xs font-bold uppercase tracking-widest text-orange-400/95 sm:text-center">
          Kargo & lojistik
        </p>
        <div className="relative -mx-4 sm:mx-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />
          <div className="overflow-hidden py-2">
            <MarqueeRow items={cargoItems} reverse />
          </div>
        </div>

        <div className="mt-14">
          <Link
            to="/entegrasyonlar"
            className="inline-flex items-center gap-2 rounded-full border border-orange-400/45 bg-orange-500/15 px-8 py-3.5 text-sm font-bold text-orange-100 transition-all hover:border-orange-300 hover:bg-orange-500/25 hover:text-white"
          >
            Tüm Entegrasyonları Gör
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntegrationShowcase;
