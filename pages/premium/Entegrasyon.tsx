import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, CreditCard, BarChart3, Package, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';

const Entegrasyon: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const integrations = [
    { name: 'Trendyol', category: 'Pazaryeri', status: 'Aktif' },
    { name: 'Hepsiburada', category: 'Pazaryeri', status: 'Aktif' },
    { name: 'Amazon', category: 'Pazaryeri', status: 'Aktif' },
    { name: 'iyzico', category: 'Ödeme', status: 'Aktif' },
    { name: 'PayTR', category: 'Ödeme', status: 'Aktif' },
    { name: 'Aras Kargo', category: 'Kargo', status: 'Aktif' },
    { name: 'Yurtiçi Kargo', category: 'Kargo', status: 'Aktif' },
    { name: 'Logo Tiger', category: 'ERP', status: 'Aktif' },
    { name: 'SAP', category: 'ERP', status: 'Özel' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Entegrasyon Çözümleri"
        subtitle="ERP, kargo, ödeme sistemleri ve pazaryeri platformları ile tam uyum. Tek panelden tüm operasyonlarınızı yönetin."
        breadcrumb={[
          { label: 'Premium Çözümler', path: '/premium' },
          { label: 'Entegrasyon Çözümleri' },
        ]}
        icon={Truck}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Tek Noktadan Tüm Sistemler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sipariş yönetiminden stok senkronizasyonuna, fatura kesiminden kargo takibine kadar 
              tüm süreçlerinizi otomatikleştirin. Manuel veri girişine son verin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: 'Pazaryeri Entegrasyonları', desc: 'Trendyol, Hepsiburada, Amazon, N11 ve daha fazlası. Tek tıkla ürün, stok ve sipariş senkronizasyonu.', color: 'orange' },
              { icon: CreditCard, title: 'Ödeme Sistemleri', desc: 'iyzico, PayTR, Param ve 10+ ödeme altyapısı. Taksit, havale ve kapıda ödeme seçenekleri.', color: 'green' },
              { icon: Truck, title: 'Kargo & Lojistik', desc: 'Aras, Yurtiçi, MNG, PTT ve tüm kargo firmaları. Otomatik barkod, takip numarası ve bildirim.', color: 'blue' },
              { icon: BarChart3, title: 'ERP & Muhasebe', desc: 'Logo Tiger, Netsis, SAP ve özel ERP sistemleri. Canlı stok, cari hesap ve raporlama entegrasyonu.', color: 'purple' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
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
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
            Desteklenen Entegrasyonlar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((int, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 transition-all"
              >
                <div>
                  <div className="font-bold text-gray-900">{int.name}</div>
                  <div className="text-sm text-gray-500">{int.category}</div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{int.status}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            Özel entegrasyon ihtiyaçlarınız için bizimle iletişime geçin. 50+ ek platform desteği sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8">Entegrasyon Süreci</h2>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'İhtiyaç Analizi', desc: 'Mevcut sistemleriniz ve iş akışlarınız analiz edilir.' },
                  { step: '02', title: 'API Eşleştirme', desc: 'Hedef platformlarla teknik bağlantı kurulur.' },
                  { step: '03', title: 'Test & Doğrulama', desc: 'Canlıya almadan önce kapsamlı test yapılır.' },
                  { step: '04', title: 'Go-Live & Destek', desc: '7/24 teknik destek ile kesintisiz çalışma.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-orange-500/50">{s.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                      <p className="text-slate-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-8">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { q: 'Mevcut ERP sistemimle uyumlu mu?', a: 'Logo Tiger, Netsis, SAP ve özel yazılımlarla entegrasyon deneyimimiz var. Özel API gerektiren sistemler için analiz sonrası uygunluk belirlenir.' },
                  { q: 'Entegrasyon maliyeti nedir?', a: 'Standart entegrasyonlar paket fiyatına dahildir. Özel geliştirme gerektiren sistemler için ayrı teklif sunulur.' },
                ].map((faq, i) => (
                  <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800"
                    >
                      <span className="font-bold">{faq.q}</span>
                      {activeFaq === i ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-500" />}
                    </button>
                    {activeFaq === i && <div className="px-6 pb-6 text-slate-400">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Sistemlerinizi Trendmax ile Birleştirin
          </h2>
          <Link
            to="/fiyatlar"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors"
          >
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Entegrasyon;
