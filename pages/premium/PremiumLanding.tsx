import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Truck, Search, Palette, ArrowRight, Zap } from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';

const premiumItems = [
  { title: 'Native Mobil Uygulama', path: '/premium/mobil', desc: 'iOS & Android için yüksek performanslı uygulamalar.', icon: Smartphone },
  { title: 'Entegrasyon Çözümleri', path: '/premium/entegrasyon', desc: 'ERP, Kargo ve Ödeme sistemleri ile tam uyum.', icon: Truck },
  { title: 'SEO Yönetim Araçları', path: '/premium/seo', desc: 'Arama motorlarında zirveye yerleşin.', icon: Search },
  { title: 'Özel Temalar', path: '/premium/temalar', desc: 'Modern ve dönüşüm odaklı tasarım seçenekleri.', icon: Palette },
];

const PremiumLanding: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGES.digital} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white/60">Premium Çözümler</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Zap className="w-5 h-5" />
            <span>Kurumsal Çözümler</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Premium Çözümler
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10">
            Büyüyen işletmeniz için mobil uygulama, entegrasyon, SEO ve özel tasarım çözümleriyle sınırları zorlayın.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
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
