import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import { HERO_IMAGES } from '../data/heroImages';
import SikcaSorulanSorularGrid from '../components/SikcaSorulanSorularGrid';

const StoksuzSatis: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Stoksuz Satış"
        subtitle="Dropshipping yöntemi ile stok tutmadan, sermaye riski olmadan e-ticaret yapın. 2 XML yüklü demo site ile hemen inceleyin."
        breadcrumb={[{ label: 'Stoksuz Satış' }]}
        icon={Package}
        badge="Dropshipping"
        image={HERO_IMAGES.ecommerce}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Stoksuz E-Ticaret Nasıl Çalışır?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dropshipping (stoksuz satış) yöntemiyle kendi mağazanızı açın, ürünleri listeleyin; sipariş geldiğinde tedarikçi ürünü müşterinize kargolar. Stok maliyeti ve depolama derdi olmadan satış yaparsınız.
              </p>
              <ul className="space-y-4">
                {[
                  'E-Ticaret paketi aldığınızda ürün kataloğu ile birlikte gelir',
                  '2 XML yüklü demo site ile canlı örnekleri inceleyebilirsiniz',
                  'Şirket kurmadan, vergi ve stok riski olmadan başlayın',
                  'Pazaryerleri ve kendi sitenizde aynı anda satış',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Neden Stoksuz Satış?</h3>
              <div className="space-y-4">
                {[
                  { icon: Package, title: 'Sıfır Stok Maliyeti', desc: 'Ürün alıp depolamazsınız.' },
                  { icon: Truck, title: 'Kargo Tedarikçide', desc: 'Sevkiyat tedarikçi tarafından yapılır.' },
                  { icon: Zap, title: 'Hızlı Başlangıç', desc: '24 saatte mağaza açılır.' },
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
              <Link to="/cozumler/paketler" className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700">
                Demo İncele & Satın Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid introTitle="Sıkça Sorulan Sorular" />

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Stoksuz Satışa Hemen Başlayın</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoksuzSatis;
