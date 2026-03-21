import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CreditCard, BarChart3, Package, ArrowRight } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import { HERO_IMAGES } from '../data/heroImages';
import SikcaSorulanSorularGrid from '../components/SikcaSorulanSorularGrid';

const Entegrasyonlar: React.FC = () => {
  const integrations = [
    { name: 'Trendyol', category: 'Pazaryeri', status: 'Aktif' },
    { name: 'Hepsiburada', category: 'Pazaryeri', status: 'Aktif' },
    { name: 'Amazon', category: 'Pazaryeri', status: 'Aktif' },
    { name: 'iyzico', category: 'Ödeme', status: 'Aktif' },
    { name: 'PayTR', category: 'Ödeme', status: 'Aktif' },
    { name: 'Aras Kargo', category: 'Kargo', status: 'Aktif' },
    { name: 'Yurtiçi Kargo', category: 'Kargo', status: 'Aktif' },
    { name: 'Logo Tiger', category: 'ERP', status: 'Aktif' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Entegrasyonlar"
        subtitle="Pazar yeri, muhasebe ve kargo entegrasyonları ile tek panelden tüm operasyonlarınızı yönetin."
        breadcrumb={[{ label: 'Entegrasyonlar' }]}
        icon={Truck}
        badge="Entegrasyon"
        image={HERO_IMAGES.integration}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Tek Noktadan Tüm Sistemler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sipariş yönetiminden stok senkronizasyonuna, fatura kesiminden kargo takibine kadar tüm süreçlerinizi otomatikleştirin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: 'Pazaryeri Entegrasyonları', desc: 'Trendyol, Hepsiburada, Amazon, N11 ve daha fazlası. Tek tıkla ürün, stok ve sipariş senkronizasyonu.', color: 'orange' },
              { icon: CreditCard, title: 'Ödeme Sistemleri', desc: 'iyzico, PayTR, Param ve 10+ ödeme altyapısı. Taksit, havale ve kapıda ödeme seçenekleri.', color: 'green' },
              { icon: Truck, title: 'Kargo & Lojistik', desc: 'Aras, Yurtiçi, MNG, PTT ve tüm kargo firmaları. Otomatik barkod, takip numarası ve bildirim.', color: 'blue' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Desteklenen Entegrasyonlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((int, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-100 transition-all">
                <div>
                  <div className="font-bold text-gray-900">{int.name}</div>
                  <div className="text-sm text-gray-500">{int.category}</div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{int.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid introTitle="Sıkça Sorulan Sorular" />

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Sistemlerinizi Trendmax ile Birleştirin</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Entegrasyonlar;
