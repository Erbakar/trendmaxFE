import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ShoppingBag, CreditCard, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';
import SikcaSorulanSorularGrid from '../../components/SikcaSorulanSorularGrid';

const SifirRisk: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Sıfır Risk E-Ticaret Paketi"
        subtitle="Şirket kurmadan e-ticaret yapın! Vergi, stok ve kargo yükü olmadan kendi mağazanızın sahibi olun."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'Sıfır Risk E-Ticaret Paketi' },
        ]}
        icon={ShieldCheck}
        badge="E-Ticaret Çözümü"
        image={HERO_IMAGES.ecommerce}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Sıfır Risk Sistemi Hakkında</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sıfır Risk E-Ticaret sisteminde ürün, stok, şirket kurma, kargo, vergi ve operasyonel maliyetiniz yoktur. Tüm operasyon tarafımızca finanse edilir; siz sadece satış ve kar marjına odaklanırsınız.
              </p>
              <ul className="space-y-4">
                {[
                  'Şirket & vergi mükellefi olmadan mağaza sahibi olun',
                  'Vergi, fatura ve tedarik süreçleri bizde',
                  'Kazancınız panelde anlık, ödeme ay sonu',
                  '30.000+ ürün kataloğu hazır',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Paket Özellikleri</h3>
              <div className="space-y-4">
                {[
                  { icon: ShoppingBag, title: 'Hazır E-Ticaret Sitesi', desc: '24 saatte mağazanız açılır.' },
                  { icon: CreditCard, title: 'Ödeme Altyapısı', desc: 'Güvenli ödeme sistemleri dahil.' },
                  { icon: Truck, title: 'Kargo & Lojistik', desc: 'Tüm süreç bizim sorumluluğumuzda.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50">
                    <item.icon className="w-6 h-6 text-green-600 flex-shrink-0" />
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Sıfır Risk ile Hemen Başlayın</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SifirRisk;
