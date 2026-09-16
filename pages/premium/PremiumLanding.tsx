import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Truck, Search, Palette, ArrowRight, Zap } from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import AnimatedHero from '../../components/AnimatedHero';

const premiumItems = [
  { title: 'Native Mobil Uygulama', path: '/premium/mobil', desc: 'iOS & Android için yüksek performanslı uygulamalar.', icon: Smartphone },
  { title: 'Entegrasyon Çözümleri', path: '/premium/entegrasyon', desc: 'ERP, Kargo ve Ödeme sistemleri ile tam uyum.', icon: Truck },
  { title: 'SEO Yönetim Araçları', path: '/premium/seo', desc: 'Arama motorlarında zirveye yerleşin.', icon: Search },
  { title: 'Özel Temalar', path: '/premium/temalar', desc: 'Modern ve dönüşüm odaklı tasarım seçenekleri.', icon: Palette },
];

const PremiumLanding: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Premium Çözümler"
        subtitle="Büyüyen işletmeler için mobil uygulama, özel entegrasyon, SEO ve markaya özel tasarım süreçlerini birlikte planlayın."
        breadcrumb={[{ label: 'Premium Çözümler' }]}
        icon={Zap}
        badge="Kurumsal Çözümler"
        image={HERO_IMAGES.digital}
        imagePosition="center"
        primaryAction={{ label: 'Çözüm Görüşmesi', to: '/iletisim' }}
        secondaryActionLabel="Çözümleri Keşfedin"
      />

      <section id="icerik" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-16">
            Çözümlerimizi Keşfedin
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumItems.map((item, i) => (
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

export default PremiumLanding;
