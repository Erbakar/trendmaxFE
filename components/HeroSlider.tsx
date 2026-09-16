
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../data/heroImages';

const SLIDES = [
  {
    imageWeb: HERO_IMAGES.homesliderWeb1,
    imageMobile: HERO_IMAGES.homesliderMobile1,
    imageAlt: 'Stok olmadan 10.000+ ürünle satışa başlayın',
  },
  {
    imageWeb: HERO_IMAGES.homesliderWeb2,
    imageMobile: HERO_IMAGES.homesliderMobile2,
    imageAlt: 'E-ticaret yazılım paketi ile sitenizi kurun ve büyütün',
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const safeCurrent = SLIDES.length > 0 ? current % SLIDES.length : 0;
  const swipeThreshold = 50;

  const goToNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const goToPrev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (current >= SLIDES.length) {
      setCurrent(0);
    }
  }, [current]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, reduceMotion]);

  useEffect(() => {
    const warmupNextSlide = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      SLIDES.slice(1).forEach((slide) => {
        const img = new Image();
        img.src = isMobile ? slide.imageMobile : slide.imageWeb;
      });
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(warmupNextSlide, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmupNextSlide, 400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="relative w-full bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={(e) => {
        setIsPaused(true);
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
      <div className="grid justify-items-center">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`col-start-1 row-start-1 w-full ${
              index === safeCurrent ? 'z-10 opacity-100' : 'z-0 pointer-events-none opacity-0'
            } transition-opacity duration-1000 ease-in-out`}
          >
            <Link
              to="/fiyatlar"
              aria-label="Fiyatlar sayfasına git"
              className="block w-full"
              onClick={(e) => {
                if (didSwipe.current) {
                  e.preventDefault();
                  didSwipe.current = false;
                }
              }}
            >
              <picture className="block w-full">
                <source media="(max-width: 767px)" srcSet={slide.imageMobile} type="image/jpeg" />
                <source media="(min-width: 768px)" srcSet={slide.imageWeb} type="image/jpeg" />
                <img
                  src={slide.imageWeb}
                  alt={slide.imageAlt}
                  className="block h-auto w-full"
                  width={1920}
                  height={760}
                  loading="eager"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                  draggable={false}
                />
              </picture>
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full border border-white/10 bg-black/25 p-1 backdrop-blur-md sm:bottom-4">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setCurrent(index);
              setIsPaused(true);
            }}
            aria-label={`Slayt ${index + 1}`}
            aria-current={index === safeCurrent ? 'true' : undefined}
            className="group flex h-11 w-11 items-center justify-center rounded-full"
          >
            <span className={`h-2 rounded-full transition-all duration-300 ${
              index === safeCurrent ? 'w-7 bg-white shadow-sm' : 'w-2 bg-white/40 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
