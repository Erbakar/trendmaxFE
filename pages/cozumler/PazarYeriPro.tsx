import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Package, Zap, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';
import { EGITIM_STOKSUZ_PACKAGES } from '../../data/paketlerEgitimStoksuz';
import SikcaSorulanSorularGrid from '../../components/SikcaSorulanSorularGrid';
import RevealOnScroll from '../../components/RevealOnScroll';

const Reveal = RevealOnScroll;

const PazarYeriPro: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Pazar Yeri Pro Expert"
        subtitle="Pazaryerlerinde 24 saatte 10.000+ ürün ile satışa başlayın. Trendyol, Hepsiburada, N11 ve diğer platformlarda mağazanız anında hazır."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'Pazar Yeri Pro Expert' },
        ]}
        icon={Store}
        badge="E-Ticaret Çözümü"
        image={HERO_IMAGES.ecommerce}
      />

      {/* Eğitim & Stoksuz E-Ticaret Paketleri — Paketler.tsx ile aynı blok */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Eğitim & Stoksuz E-Ticaret Paketleri
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Stoksuz & sermayesiz e-ticaret projemize dahil olun. Şirket kurmadan, depo ve ürün maliyetini düşünmeden satış yapın.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EGITIM_STOKSUZ_PACKAGES.map((pkg) => (
              <div key={pkg.id}>
                <Reveal>
                  <div
                    className={`relative bg-white rounded-3xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                      pkg.highlight ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-100'
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white text-center py-2 text-sm font-bold">
                        Popüler
                      </div>
                    )}
                    <div className={`flex flex-col flex-1 p-8 ${pkg.highlight ? 'pt-14' : ''}`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-6 leading-tight min-h-[3.5rem]">
                        {pkg.title}
                      </h3>
                      <ul className="space-y-3 mb-8 max-h-[320px] overflow-y-auto pr-1 flex-1">
                        {pkg.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mb-6">
                        <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                        <span className="text-gray-500 font-semibold"> TL</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-6">Paket Fiyatlarımıza KDV Dahildir</p>
                      <button
                        type="button"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-black text-lg transition-all mt-auto"
                      >
                        Kayıt Ol
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">24 Saatte Satışa Hazır</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pazar Yeri Pro Expert paketi ile şirket kurulumunuzdan mağaza açılışına, ürün yüklemeden entegratör kurulumuna kadar her adımda yanınızdayız. 10.000+ ürün ile pazaryerlerinde hemen satışa başlayın.
              </p>
              <ul className="space-y-4">
                {[
                  'Trendyol, Gittigidiyor, Hepsiburada, N11 ve daha fazlası',
                  'Ücretsiz entegratör yazılım kurulumu',
                  'Şirket kuruluşu ve mali müşavir desteği',
                  'Ürün yükleme eğitimi ve panel eğitimleri',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Paket İçeriği</h3>
              <div className="space-y-4">
                {[
                  { icon: Store, title: '2 Pazar Yeri Mağaza', desc: 'Trendyol + Gittigidiyor veya Hepsiburada.' },
                  { icon: Package, title: '10.000+ Ürün', desc: 'Hazır ürün kataloğu ile anında liste.' },
                  { icon: Zap, title: 'Entegratör', desc: 'Stok ve fiyat senkronizasyonu otomatik.' },
                  { icon: Truck, title: 'Kargo Entegrasyonu', desc: 'Tüm kargo firmaları ile anlaşmalı.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50">
                    <item.icon className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/fiyatlar" className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700">
                Paketi İncele & Satın Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid introTitle="Sıkça Sorulan Sorular" />

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Pazaryerlerinde Hemen Yerinizi Alın</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PazarYeriPro;
