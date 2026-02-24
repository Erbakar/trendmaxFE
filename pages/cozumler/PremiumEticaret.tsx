import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Zap, Users, BarChart3, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';

const PremiumEticaret: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Premium E-Ticaret Paketleri"
        subtitle="Büyük ölçekli işletmeler için yüksek performans, özel API entegrasyonları ve kurumsal destek. Yüksek trafikte bile kesintisiz çalışın."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'Premium E-Ticaret Paketleri' },
        ]}
        icon={Crown}
        badge="E-Ticaret Çözümü"
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Kurumsal Seviye Altyapı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yüksek sipariş hacmi, çoklu mağaza yönetimi ve özel entegrasyon ihtiyaçları için tasarlanmış premium paketler.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Yüksek Performans', desc: 'CDN, önbellekleme ve sunucu optimizasyonu ile milisaniye seviyesinde yanıt süreleri.' },
              { icon: Users, title: 'Çoklu Mağaza', desc: 'Tek panelden sınırsız mağaza, marka ve dil yönetimi.' },
              { icon: BarChart3, title: 'Özel API', desc: 'ERP, CRM ve özel yazılımlarla tam entegrasyon imkanı.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-yellow-600" />
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
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Premium Özellikler</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Özel sunucu ve alan adı yönetimi',
              'Sınırsız ürün ve sipariş kapasitesi',
              'Tüm pazaryeri entegrasyonları + özel API',
              'Öncelikli 7/24 teknik destek',
              'Özel tema ve UX danışmanlığı',
              'Güvenlik denetimi ve penetrasyon testi',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">Premium SSS</h2>
          <div className="space-y-4">
            {[
              { q: 'Premium paket kimler için uygun?', a: 'Aylık 10.000+ sipariş işleyen, çoklu marka yöneten veya özel sistem entegrasyonu gerektiren işletmeler için idealdir.' },
              { q: 'Özel API entegrasyonu ne sunuyor?', a: 'Mevcut ERP, stok ve muhasebe sistemlerinizle REST/SOAP API üzerinden iki yönlü veri senkronizasyonu sağlanır.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Premium Teklifi Alın</h2>
          <Link to="/fiyatlar" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors">
            İletişime Geç <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PremiumEticaret;
