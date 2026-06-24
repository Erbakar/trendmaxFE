import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Layout, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';
import SikcaSorulanSorularGrid from '../../components/SikcaSorulanSorularGrid';
import { HOME_SEKTOR_TEMA_CARDS } from '../../data/homePage';

const Temalar: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 via-white to-orange-50/40">
      <AnimatedHero
        title="Özel Temalar"
        subtitle="Modern ve dönüşüm odaklı tasarım seçenekleri. Markanıza özel, mobil uyumlu ve yüksek performanslı e-ticaret teması ile fark yaratın."
        breadcrumb={[
          { label: 'Premium Çözümler', path: '/premium' },
          { label: 'Özel Temalar' },
        ]}
        icon={Palette}
        image={HERO_IMAGES.design}
      />

      <section id="icerik" className="py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-orange-200/45 blur-3xl" />
          <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-violet-200/35 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">
              Liquid Theme Showcase
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Temalarımızı Canlı Olarak İnceleyin
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm temalarımız mobil uyumlu, hızlı ve dönüşüm odaklıdır. Kartlara tıklayarak
              canlı demo mağaza örneklerini inceleyebilirsiniz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SEKTOR_TEMA_CARDS.map((theme) => (
              <a
                key={theme.href}
                href={theme.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.22)] block"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-slate-900/30 opacity-90 pointer-events-none" />
                <div className="h-56 overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{theme.title}</h3>
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-orange-700 bg-orange-100/80 ring-1 ring-orange-200/70 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    Canlı demoyu aç
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-16">
            Tema Özellikleri
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: Layout, title: 'Özelleştirilebilir Bileşenler', desc: 'Header, footer, ürün kartları ve kategori sayfaları tamamen özelleştirilebilir. Renk, tipografi ve boşluklar tek tıkla değiştirilir.' },
                { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Tüm temalar önce mobil deneyim için tasarlanır. Touch-friendly navigasyon ve hızlı yükleme garantisi.' },
                { icon: Sparkles, title: 'Animasyonlar & Mikro Etkileşimler', desc: 'Hover efektleri, scroll animasyonları ve sayfa geçişleri ile kullanıcı deneyimini zenginleştirin.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-5 rounded-3xl border border-white/70 bg-white/70 backdrop-blur-lg shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
                  <div className="w-14 h-14 bg-orange-100/90 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="rounded-3xl p-8 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
                <h3 className="text-xl font-bold mb-6">Özel Tema Süreci</h3>
                <ol className="space-y-6">
                  {[
                    'Marka analizi ve hedef kitle belirleme',
                    'Wireframe ve tasarım konsepti',
                    'Görsel onay ve revizyon turu',
                    'Geliştirme ve entegrasyon',
                    'Test, lansman ve eğitim',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-orange-500/30">
                        {i + 1}
                      </span>
                      <span className="text-slate-200">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid introTitle="Sıkça Sorulan Sorular" />

      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-12 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 w-72 h-72 rounded-full bg-amber-100/30 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="relative text-3xl md:text-4xl font-black text-white mb-6">
            Mağazanızı Güzelleştirin
          </h2>
          <Link
            to="/fiyatlar"
            className="relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-orange-700 px-10 py-4 rounded-2xl font-bold hover:bg-white transition-colors shadow-xl"
          >
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Temalar;
