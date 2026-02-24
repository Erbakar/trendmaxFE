import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Truck, CreditCard, Languages, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';

const EIhracat: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="E-İhracat Paketleri"
        subtitle="Sınırları aşın, dünyaya satış yapın. Çoklu dil, para birimi ve uluslararası kargo entegrasyonlarıyla global pazarlara açılın."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'E-İhracat Paketleri' },
        ]}
        icon={Globe}
        badge="E-Ticaret Çözümü"
        image={HERO_IMAGES.export}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Global Satış İmkanı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amazon, eBay, Etsy ve dünya çapındaki pazaryerlerine entegre olun. Vergi, gümrük ve lojistik süreçlerinde size rehberlik ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Çoklu Pazar', desc: 'AB, ABD, UK ve Orta Doğu pazarlarına erişim.' },
              { icon: Languages, title: 'Çoklu Dil', desc: 'Otomatik çeviri ve yerelleştirme desteği.' },
              { icon: CreditCard, title: 'Global Ödeme', desc: 'PayPal, Stripe ve yerel ödeme yöntemleri.' },
              { icon: Truck, title: 'Uluslararası Kargo', desc: 'DHL, FedEx, UPS ve yerel kargo entegrasyonları.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-green-600" />
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
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Desteklenen Pazaryerleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Amazon', 'eBay', 'Etsy', 'AliExpress', 'Wish', 'Cdiscount'].map((name, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center font-bold text-gray-700">
                {name}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">Daha fazla platform için özel entegrasyon sunuyoruz.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">E-İhracat SSS</h2>
          <div className="space-y-4">
            {[
              { q: 'Gümrük ve vergi süreçlerinde destek var mı?', a: 'Evet, e-ihracat paketlerimizde gümrük danışmanlığı, vergi hesaplama araçları ve lojistik süreç yönetimi dahildir.' },
              { q: 'Hangi diller destekleniyor?', a: 'İngilizce, Almanca, Fransızca, Arapça ve daha birçok dil için otomatik çeviri ve yerelleştirme sunuyoruz.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Dünyaya Açılın</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            E-İhracat Paketleri <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EIhracat;
