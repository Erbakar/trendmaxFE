
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    title: "Türkiye'nin En Gelişmiş E-Ticaret Altyapısı",
    subtitle: "Satışlarınızı artırmak ve markanızı büyütmek için profesyonel çözümler.",
    cta1: "Ücretsiz Dene",
    cta2: "Teklif Al",
    image: "https://picsum.photos/id/180/1200/600",
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "E-İhracat ile Sınırları Ortadan Kaldırın",
    subtitle: "Dünyanın her yerine kolayca satış yapın, döviz ile kazanın.",
    cta1: "Hemen Başla",
    cta2: "Detayları Gör",
    image: "https://picsum.photos/id/119/1200/600",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Native Mobil Uygulama ile Her An Yanlarında",
    subtitle: "Yüksek dönüşüm oranlı mobil uygulamalarla müşteri sadakatini artırın.",
    cta1: "Mobil Uygulamanı Kur",
    cta2: "Özellikleri İncele",
    image: "https://picsum.photos/id/160/1200/600",
    color: "from-slate-700 to-slate-900"
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-85 mix-blend-multiply`}></div>
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center pb-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-50 mb-6 md:mb-8 opacity-90 leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all flex items-center justify-center group">
                  {slide.cta1}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all">
                  {slide.cta2}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${index === current ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
