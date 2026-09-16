import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Store, Globe, ArrowRight, Zap } from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import AnimatedHero from '../../components/AnimatedHero';

const cozumlerItems = [
  { title: 'E-Ticaret Paketleri', path: '/cozumler/paketler', desc: 'Her ölçekteki işletme için uygun e-ticaret altyapısı.', icon: ShoppingBag },
  { title: 'Sıfır Risk E-Ticaret Paketi', path: '/cozumler/sifir-risk', desc: 'Stok ve lojistik operasyonunu tedarikçi modeliyle planlayın.', icon: ShieldCheck },
  { title: 'Pazar Yeri Pro Expert', path: '/cozumler/pazar-yeri-pro', desc: 'Pazaryeri mağaza, ürün ve entegrasyon kurulumunu birlikte yönetin.', icon: Store },
  { title: 'E-İhracat', path: '/cozumler/e-ihracat', desc: 'Çoklu dil, para birimi ve global satış kanalı çözümleri.', icon: Globe },
];

const CozumlerLanding: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="E-Ticaret Çözümleri"
        subtitle="Yeni başlayan işletmelerden büyüyen markalara kadar farklı operasyon ihtiyaçları için yazılım, entegrasyon ve eğitim çözümleri."
        breadcrumb={[{ label: 'E-Ticaret Çözümleri' }]}
        icon={Zap}
        badge="Dijital Ticaret"
        image={HERO_IMAGES.corporateOperations}
        imagePosition="center right"
        primaryAction={{ label: 'Paketleri Karşılaştırın', to: '/fiyatlar' }}
        secondaryActionLabel="Çözümleri Keşfedin"
      />

      <section id="icerik" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-16">
            Çözümlerimizi Keşfedin
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cozumlerItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <item.icon className="w-7 h-7 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-orange-600 font-bold">
                  Detaylar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CozumlerLanding;
