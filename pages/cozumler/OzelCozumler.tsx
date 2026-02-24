import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Layout, Code, Headphones, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';

const OzelCozumler: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Özel E-Ticaret Çözümleri"
        subtitle="İşletmenize özel butik geliştirme süreçleri. Benzersiz iş modelleri, özel entegrasyonlar ve markanıza özel tasarımla rakiplerinizden sıyrılın."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'Özel E-Ticaret Çözümleri' },
        ]}
        icon={Settings}
        badge="E-Ticaret Çözümü"
        image={HERO_IMAGES.custom}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Sıfırdan Size Özel Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hazır paketler sizin için yeterli değilse, ihtiyaçlarınıza göre sıfırdan tasarlanmış e-ticaret çözümleri sunuyoruz. 
                B2B, subscription, marketplace veya hibrit modeller için özel geliştirme yapıyoruz.
              </p>
              <ul className="space-y-4">
                {[
                  'İş modelinize özel iş akışları ve süreçler',
                  'Özel tema ve kullanıcı deneyimi tasarımı',
                  'Mevcut sistemlerinizle entegrasyon',
                  'Sürekli bakım ve geliştirme desteği',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8">Geliştirme Süreci</h3>
                <ol className="space-y-6">
                  {[
                    'İhtiyaç analizi ve keşif',
                    'Teknik mimari ve tasarım',
                    'Geliştirme ve test',
                    'Lansman ve eğitim',
                    'Sürekli destek',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16">Özel Çözüm Alanları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: 'Özel Tasarım', desc: 'Markanıza özel, benzersiz arayüz tasarımı.' },
              { icon: Code, title: 'Özel Geliştirme', desc: 'İş akışlarınıza uygun modüller.' },
              { icon: Settings, title: 'Entegrasyon', desc: 'ERP, CRM ve diğer sistemlerle bağlantı.' },
              { icon: Headphones, title: 'Dedicated Destek', desc: 'Özel destek ekibi ve SLA garantisi.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-purple-600" />
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
          <h2 className="text-3xl font-black text-center mb-12">Özel Çözüm SSS</h2>
          <div className="space-y-4">
            {[
              { q: 'Proje süresi ne kadar?', a: 'Proje kapsamına göre değişir. Basit özelleştirmeler 4-6 hafta, kapsamlı platformlar 3-6 ay sürebilir.' },
              { q: 'Maliyet nasıl belirlenir?', a: 'İhtiyaç analizi sonrası sabit fiyat veya Agile sprint bazlı teklif sunuyoruz. Şeffaf fiyatlandırma garantisi.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Özel Çözüm İçin Görüşelim</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            Teklif Al <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OzelCozumler;
