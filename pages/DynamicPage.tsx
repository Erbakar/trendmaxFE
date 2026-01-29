
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, HelpCircle, Zap, Shield, 
  BarChart, Globe, Smartphone, Settings, Users, Star, 
  X, ChevronDown, ChevronUp 
} from 'lucide-react';

// Detaylı Paket Özellikleri Verisi
const PACKAGE_FEATURES = [
  { feature: "Ürün Sayısı", soft: "100", plus: "1.000", special: "Sınırsız", premium: "Sınırsız" },
  { feature: "Yıllık Trafik (Bandwidth)", soft: "Sınırsız", plus: "Sınırsız", special: "Sınırsız", premium: "Sınırsız" },
  { feature: "Mobil Uyumlu Tasarım", soft: true, plus: true, special: true, premium: true },
  { feature: "Pazaryeri Entegrasyonları", soft: false, plus: "3 Adet", special: "Tümü", premium: "Tümü + Özel API" },
  { feature: "E-İhracat Modülü", soft: false, plus: false, special: true, premium: true },
  { feature: "IOS / Android Uygulama", soft: false, plus: "Opsiyonel", special: "Opsiyonel", premium: true },
  { feature: "Gelişmiş SEO Yönetimi", soft: "Temel", plus: "Gelişmiş", special: "Profesyonel", premium: "Full Paket" },
  { feature: "Özel Tasarım Desteği", soft: false, plus: false, max: false, premium: true },
];

const DynamicPage: React.FC = () => {
  const { category, subpage } = useParams();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const isPricingPage = category === 'fiyatlar';

  // Sayfa içeriğini belirleme
  const getContent = () => {
    const formattedTitle = subpage ? subpage.replace(/-/g, ' ') : category?.replace(/-/g, ' ');
    return {
      title: formattedTitle?.toUpperCase() || "TRENDMAX ÇÖZÜMLERİ",
      subtitle: "Dijital ticaretin geleceğini bugünden inşa edin.",
      heroImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
    };
  };

  const content = getContent();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={content.heroImg} className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl">
            <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-6 uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-white/60">{category}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Trendmax'in yüksek performanslı altyapısı ile teknik engelleri aşın, sadece işinizi büyütmeye odaklanın. 
              {isPricingPage ? " İşletmenize en uygun paketi seçerek bugün satışa başlayın." : " Profesyonel modüllerimizle satış hacminizi katlayın."}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-orange-600/20">
                Şimdi Başlayın
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-black text-lg transition-all">
                Ücretsiz Sunum İste
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section - Only for Pricing Pages */}
      {isPricingPage && (
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">Paket Karşılaştırması</h2>
              <p className="text-gray-500 text-lg">Hangi Trendmax paketinin size uygun olduğuna karar verin.</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="py-6 px-4 text-left text-sm font-black text-gray-400 uppercase tracking-widest">Özellikler</th>
                    <th className="py-6 px-4 text-center">
                      <div className="text-orange-600 font-black text-xl">Soft</div>
                      <div className="text-xs text-gray-400">Yeni Başlayanlar</div>
                    </th>
                    <th className="py-6 px-4 text-center bg-orange-50/50 rounded-t-3xl border-x border-t border-orange-100">
                      <div className="text-orange-600 font-black text-xl">Plus</div>
                      <div className="text-xs text-gray-400">Büyüyen İşletmeler</div>
                    </th>
                    <th className="py-6 px-4 text-center">
                      <div className="text-orange-600 font-black text-xl">Special</div>
                      <div className="text-xs text-gray-400">Profesyoneller</div>
                    </th>
                    <th className="py-6 px-4 text-center">
                      <div className="text-orange-600 font-black text-xl">Premium</div>
                      <div className="text-xs text-gray-400">Kurumsal Devler</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {PACKAGE_FEATURES.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-4 font-bold text-gray-700">{item.feature}</td>
                      <td className="py-5 px-4 text-center text-sm font-medium">
                        {typeof item.soft === 'boolean' ? (item.soft ? <CheckCircle2 className="mx-auto text-green-500 w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : item.soft}
                      </td>
                      <td className="py-5 px-4 text-center text-sm font-bold bg-orange-50/30 border-x border-orange-50">
                        {typeof item.plus === 'boolean' ? (item.plus ? <CheckCircle2 className="mx-auto text-orange-600 w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : item.plus}
                      </td>
                      <td className="py-5 px-4 text-center text-sm font-medium">
                        {typeof item.special === 'boolean' ? (item.special ? <CheckCircle2 className="mx-auto text-green-500 w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : item.special}
                      </td>
                      <td className="py-5 px-4 text-center text-sm font-medium">
                        {typeof item.premium === 'boolean' ? (item.premium ? <CheckCircle2 className="mx-auto text-green-500 w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : item.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Feature Grid - Enhanced Content */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap />, title: "Ultra Hızlı Altyapı", desc: "Sayfa yüklenme hızınızda %40'a varan artış sağlayın, SEO puanınızı yükseltin." },
              { icon: <Shield />, title: "Sıfır Güvenlik Riski", desc: "WAF koruması ve 256-bit SSL ile hem verileriniz hem müşterileriniz güvende." },
              { icon: <Globe />, title: "Global Satış Kanalları", desc: "Tek tıkla Amazon, eBay ve Etsy gibi dünya devlerine entegre olun." },
              { icon: <Smartphone />, title: "Mobil Uygulama Gücü", desc: "iOS ve Android uygulamalarınızla müşterilerinize her an her yerden ulaşın." },
              { icon: <BarChart />, title: "Gelişmiş Analitik", desc: "Satış verilerinizi yapay zeka destekli araçlarla analiz edin, geleceği öngörün." },
              { icon: <Users />, title: "Bayi & B2B Yönetimi", desc: "Bayi ağınızı özel fiyatlandırma ve cari yönetim araçlarıyla profesyonelce yönetin." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-orange-100 group">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {React.cloneElement(f.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-orange-600 transition-colors">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">E-Ticarette Başarıya Giden 4 Adım</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planlama", desc: "İş modelinize en uygun paketi ve modülleri belirliyoruz." },
              { step: "02", title: "Tasarım", desc: "Marka kimliğinize özel, dönüşüm odaklı arayüzler kurguluyoruz." },
              { step: "03", title: "Entegrasyon", desc: "Ödeme, kargo ve ERP sistemlerinizle tam uyum sağlıyoruz." },
              { step: "04", title: "Lansman", desc: "7/24 teknik destekle mağazanızı dünyaya açıyoruz." }
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-gray-50 absolute -top-10 left-1/2 -translate-x-1/2 z-0 group-hover:text-orange-50 transition-colors">{s.step}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                  <p className="text-gray-500 text-sm font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - High Authority */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-400">Aklınıza takılan tüm soruların kurumsal yanıtları.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Kurulum süreci ne kadar sürer?", a: "Seçtiğiniz pakete bağlı olarak temel mağaza kurulumu 24 saat içinde tamamlanır. Özel entegrasyonlar için uzman ekibimiz bir takvim belirler." },
              { q: "Verilerim güvende mi?", a: "Evet, tüm verileriniz Tier-4 standartlarındaki veri merkezlerimizde yedekli olarak saklanır ve SSL sertifikaları ile korunur." },
              { q: "Mevcut sitemden Trendmax'e geçebilir miyim?", a: "Kesinlikle. Veri taşıma modüllerimizle ürün, kategori ve müşteri verilerinizi kayıpsız bir şekilde taşıyoruz." },
              { q: "Teknik destek hizmeti ücretli mi?", a: "Hayır, tüm paketlerimizde 7/24 telefon ve ticket desteği yıllık abonelik bedeline dahildir." }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-800 rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-800 transition-colors"
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-500" />}
                </button>
                {activeFaq === i && (
                  <div className="p-8 pt-0 text-slate-400 leading-relaxed bg-slate-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-orange-600 rounded-[3rem] p-16 text-white shadow-2xl shadow-orange-600/20">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Geleceği Trendmax İle <br/>Bugünden Yönetin</h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">Uzman ekibimizle tanışmak ve size özel stratejileri belirlemek için hemen randevu alın.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-orange-600 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all">
                Ücretsiz Denemeyi Başlat
              </button>
              <button className="bg-orange-700 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-orange-800 transition-all">
                Satış Danışmanına Bağlan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicPage;
