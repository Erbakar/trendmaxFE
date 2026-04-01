
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../data/heroImages';

/** Ana sayfa hero — mobil 480x640, web 1440x500 */
const SLIDES = [
  {
    title: "Türkiye'nin En Gelişmiş E-Ticaret Altyapısı",
    subtitle: "Satışlarınızı artırmak ve markanızı büyütmek için profesyonel çözümler.",
    cta1: "Ücretsiz Dene",
    cta2: "Teklif Al",
    imageWeb: HERO_IMAGES.homesliderWeb1,
    imageMobile: HERO_IMAGES.homesliderMobile1,
    imageAlt: "E-ticaret paneli ve satış analitiği",
  },
  {
    title: "E-İhracat ile Sınırları Ortadan Kaldırın",
    subtitle: "Dünyanın her yerine kolayca satış yapın, döviz ile kazanın.",
    cta1: "Hemen Başla",
    cta2: "Detayları Gör",
    imageWeb: HERO_IMAGES.homesliderWeb2,
    imageMobile: HERO_IMAGES.homesliderMobile2,
    imageAlt: "Küresel ticaret ve dünya pazarları",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const safeCurrent = SLIDES.length > 0 ? current % SLIDES.length : 0;
  const swipeThreshold = 50;

  const goToNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const goToPrev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    // Keep index in range (helps after hot-reload / slide count changes)
    if (current >= SLIDES.length) {
      setCurrent(0);
    }
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950 aspect-[480/640] md:aspect-[1440/500]"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || touchStartY.current === null) return;

        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaY = e.changedTouches[0].clientY - touchStartY.current;

        if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY)) {
          didSwipe.current = true;
          if (deltaX < 0) goToNext();
          else goToPrev();
        }

        touchStartX.current = null;
        touchStartY.current = null;
      }}
    >
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === safeCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Link
            to="/fiyatlar"
            aria-label="Fiyatlar sayfasına git"
            className="absolute inset-0 block"
            onClick={(e) => {
              if (didSwipe.current) {
                e.preventDefault();
                didSwipe.current = false;
              }
            }}
          >
            <picture className="contents">
              <source media="(max-width: 767px)" srcSet={slide.imageMobile} type="image/png" />
              <source media="(min-width: 768px)" srcSet={slide.imageWeb} type="image/png" />
              <img
                src={slide.imageMobile}
                alt={slide.imageAlt}
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
            </picture>
          </Link>
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
              index === safeCurrent ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
