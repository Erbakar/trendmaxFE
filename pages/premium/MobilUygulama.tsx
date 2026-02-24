import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Zap, Shield, Bell, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';

const MobilUygulama: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Native Mobil Uygulama"
        subtitle="iOS ve Android için yüksek performanslı, kullanıcı deneyimini zirveye taşıyan native mobil uygulamalarla müşterilerinize her an ulaşın."
        breadcrumb={[
          { label: 'Premium Çözümler', path: '/premium' },
          { label: 'Native Mobil Uygulama' },
        ]}
        icon={Smartphone}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Mobil Öncelikli Çağda Satışlarınızı Katlayın
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Türkiye'de e-ticaret trafiğinin %70'inden fazlası mobil cihazlardan geliyor. Native mobil uygulamalarımız, 
                web sitenizden çok daha hızlı yükleme süreleri, push bildirimleri ve offline erişim özellikleriyle 
                dönüşüm oranlarınızı artırır.
              </p>
              <ul className="space-y-4">
                {[
                  'Swift (iOS) ve Kotlin (Android) ile tam native geliştirme',
                  'App Store ve Google Play için optimize edilmiş yayın',
                  'Gerçek zamanlı push bildirimleri ile kampanya yönetimi',
                  'Biometrik giriş, favoriler ve geçmiş siparişler',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-12 text-white shadow-2xl shadow-orange-500/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Tek Kod Tabanı</h3>
                    <p className="text-orange-100">iOS + Android birlikte</p>
                  </div>
                </div>
                <p className="text-orange-50 leading-relaxed mb-6">
                  React Native ve Flutter alternatiflerine kıyasla %40 daha hızlı performans sunan native çözümlerimizle 
                  müşteri memnuniyetini maksimize edin.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-black">2x</div>
                    <div className="text-sm text-orange-100">Ortalama sepet değeri</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-black">3x</div>
                    <div className="text-sm text-orange-100">Geri dönüş oranı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-16">
            Mobil Uygulama Özellikleri
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Anında Yükleme', desc: 'Native performans ile sayfa geçişlerinde sıfır gecikme.' },
              { icon: Shield, title: 'Güvenli Ödeme', desc: 'Apple Pay, Google Pay ve kart bilgisi güvenli saklama.' },
              { icon: Bell, title: 'Akıllı Bildirimler', desc: 'Stok, kampanya ve sipariş durumu push bildirimleri.' },
              { icon: Smartphone, title: 'Offline Mod', desc: 'İnternet yokken bile favori ürünlere göz atın.' },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
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
              { q: 'Uygulama geliştirme süreci ne kadar sürer?', a: 'Standart bir e-ticaret uygulaması için iOS ve Android geliştirmesi ortalama 8-12 hafta sürmektedir. Özel entegrasyonlar ve karmaşık iş akışları için süre uzayabilir.' },
              { q: 'App Store ve Google Play yayın desteği var mı?', a: 'Evet, uygulama geliştirmesiyle birlikte store yayın süreçlerinde (metadata, ekran görüntüleri, açıklamalar) tam destek sağlıyoruz.' },
              { q: 'Mevcut e-ticaret sitemle entegre olur mu?', a: 'Trendmax altyapısıyla çalışan tüm mağazalar otomatik entegredir. Diğer platformlar için API entegrasyonu sunuyoruz.' },
            ].map((faq, i) => (
              <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold">{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-500" />}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-slate-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Mobil Uygulamanızı Hemen Başlatın
          </h2>
          <p className="text-orange-100 text-xl mb-10">
            Uzman ekibimizle görüşerek ihtiyaçlarınıza özel bir teklif alın.
          </p>
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

export default MobilUygulama;
