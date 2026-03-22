
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGES } from '../data/heroImages';

/** Ana sayfa hero — e-ticaret altyapısı, küresel satış, mobil mağaza temalı görseller */
const SLIDES = [
  {
    title: "Türkiye'nin En Gelişmiş E-Ticaret Altyapısı",
    subtitle: "Satışlarınızı artırmak ve markanızı büyütmek için profesyonel çözümler.",
    cta1: "Ücretsiz Dene",
    cta2: "Teklif Al",
    image: HERO_IMAGES.homeHeroInfrastructure,
    imageAlt: "E-ticaret paneli ve satış analitiği",
  },
  {
    title: "E-İhracat ile Sınırları Ortadan Kaldırın",
    subtitle: "Dünyanın her yerine kolayca satış yapın, döviz ile kazanın.",
    cta1: "Hemen Başla",
    cta2: "Detayları Gör",
    image: HERO_IMAGES.export,
    imageAlt: "Küresel ticaret ve dünya pazarları",
  },
  {
    title: "Native Mobil Uygulama ile Her An Yanlarında",
    subtitle: "Yüksek dönüşüm oranlı mobil uygulamalarla müşteri sadakatini artırın.",
    cta1: "Mobil Uygulamanı Kur",
    cta2: "Özellikleri İncele",
    image: HERO_IMAGES.mobile,
    imageAlt: "Mobil telefonda alışveriş ve mağaza uygulaması",
  },
];

/** Tüm slaytlarda aynı nötr maske — turuncu tonlu multiply katmanı yok */
const HERO_MASK_CLASS =
  'absolute inset-0 bg-gradient-to-r from-slate-950/[0.88] via-slate-900/55 to-slate-900/25';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[min(72vh,640px)] min-h-[420px] sm:min-h-[480px] md:min-h-[520px] overflow-hidden bg-slate-950">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover scale-105 motion-reduce:scale-100"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
            <div className={HERO_MASK_CLASS} aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none"
              aria-hidden
            />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center pb-20 sm:pb-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold mb-4 md:mb-6 leading-[1.12] tracking-tight drop-shadow-sm">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-6 md:mb-8 leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  type="button"
                  className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-slate-100 transition-all flex items-center justify-center group shadow-lg shadow-black/20"
                >
                  {slide.cta1}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/15 transition-all"
                >
                  {slide.cta2}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 sm:bottom-7 md:bottom-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/25 backdrop-blur-md px-3 py-2 border border-white/10">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Slayt ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
