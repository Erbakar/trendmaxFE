import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Crown, Settings, Globe, ArrowRight, Zap } from 'lucide-react';

const cozumlerItems = [
  { title: 'E-Ticaret Paketleri', path: '/cozumler/paketler', desc: 'Her ölçekteki işletme için uygun e-ticaret altyapısı.', icon: ShoppingBag },
  { title: 'Premium E-Ticaret Paketleri', path: '/cozumler/premium', desc: 'Büyük ölçekli işletmeler için yüksek performans.', icon: Crown },
  { title: 'Özel E-Ticaret Çözümleri', path: '/cozumler/ozel', desc: 'İşletmenize özel butik geliştirme süreçleri.', icon: Settings },
  { title: 'E-İhracat Paketleri', path: '/cozumler/e-ihracat', desc: 'Sınırları aşın, dünyaya satış yapın.', icon: Globe },
];

const CozumlerLanding: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white/60">E-Ticaret Çözümleri</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Zap className="w-5 h-5" />
            <span>Dijital Ticaret</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            E-Ticaret Çözümleri
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10">
            Küçük işletmeden kurumsal devlere, her ölçeğe uygun e-ticaret altyapıları ve özel çözümlerle dijital satış yolculuğunuza başlayın.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
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
