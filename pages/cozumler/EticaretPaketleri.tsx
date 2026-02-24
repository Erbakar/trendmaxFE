import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';

const EticaretPaketleri: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="E-Ticaret Paketleri"
        subtitle="Her ölçekteki işletme için hazır e-ticaret altyapısı. Hızlı kurulum, mobil uyumlu tasarım ve pazaryeri entegrasyonlarıyla hemen satışa başlayın."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'E-Ticaret Paketleri' },
        ]}
        icon={ShoppingBag}
        badge="E-Ticaret Çözümü"
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                İşletmenize Uygun Paketi Seçin
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Trendmax e-ticaret paketleri, yeni başlayanlardan büyüyen işletmelere kadar her kesime hitap eder. 
                Hazır temalar, pazaryeri entegrasyonları ve teknik destek ile minimum yatırımla maksimum sonuç alın.
              </p>
              <ul className="space-y-4">
                {[
                  'Soft, Plus, Special ve Premium paket seçenekleri',
                  'Trendyol, Hepsiburada ve N11 entegrasyonu',
                  'Mobil uyumlu ve SEO dostu altyapı',
                  '7/24 teknik destek ve güvenlik güncellemeleri',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Paket Karşılaştırması</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Soft', desc: 'Yeni başlayanlar', price: 'Başlangıç' },
                    { name: 'Plus', desc: 'Büyüyen işletmeler', price: 'Popüler' },
                    { name: 'Special', desc: 'Profesyoneller', price: 'İleri' },
                    { name: 'Premium', desc: 'Kurumsal', price: 'Tam' },
                  ].map((p) => (
                    <div key={p.name} className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
                      <div>
                        <div className="font-bold text-gray-900">{p.name}</div>
                        <div className="text-sm text-gray-500">{p.desc}</div>
                      </div>
                      <span className="text-sm font-bold text-orange-600">{p.price}</span>
                    </div>
                  ))}
                </div>
                <Link to="/fiyatlar" className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700">
                  Detaylı Fiyatlandırma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16">Paket Özellikleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Hızlı Kurulum', desc: '24 saat içinde mağazanız hazır.' },
              { icon: Shield, title: 'Güvenli Altyapı', desc: 'SSL ve PCI-DSS uyumluluğu.' },
              { icon: BarChart3, title: 'Analitik', desc: 'Satış ve ziyaretçi raporları.' },
              { icon: ShoppingBag, title: 'Ürün Yönetimi', desc: 'Sınırsız ürün ve kategori.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all">
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

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {[
              { q: 'Paket yükseltmesi yapabilir miyim?', a: 'Evet, ihtiyacınız arttıkça bir üst pakete geçiş yapabilirsiniz. Verileriniz taşınır, kesintisiz devam edersiniz.' },
              { q: 'Deneme süresi var mı?', a: 'Evet, tüm paketlerde 14 gün ücretsiz deneme sunuyoruz. Kredi kartı bilgisi gerektirmez.' },
            ].map((faq, i) => (
              <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800">
                  <span className="font-bold">{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-500" />}
                </button>
                {activeFaq === i && <div className="px-6 pb-6 text-slate-400">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hemen Başlayın</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            Paketleri İncele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EticaretPaketleri;
