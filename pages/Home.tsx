
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { HOME_PACKAGES, HOME_SEKTOR_TEMA_CARDS, THEME_MARQUEE_IMAGES } from '../data/homePage';
import HomeIntegrationShowcase from '../components/HomeIntegrationShowcase';
import { YAZILIM_PACKAGES } from '../data/eticaretPaketOzellikleri';
import SikcaSorulanSorularGrid from '../components/SikcaSorulanSorularGrid';
import {
  Zap, Shield, Smartphone, Globe, CheckCircle, ArrowRight, Star,
} from 'lucide-react';

/** Sizi Arayalım - ad, telefon, e-posta, mesaj formu */
function SiziArayalimForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent) {
    return (
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
        <p className="font-bold text-gray-900">Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Ad Soyad</label>
        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Adınız Soyadınız" />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Telefon</label>
        <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="05XX XXX XX XX" />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">E-posta</label>
        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="ornek@email.com" />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Mesaj (isteğe bağlı)</label>
        <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none" placeholder="Merak ettiklerinizi yazabilirsiniz..." />
      </div>
      <button type="submit" className="w-full py-4 bg-orange-600 text-white font-black rounded-xl hover:bg-orange-700 transition-colors">
        Gönder
      </button>
    </form>
  );
}

const Home: React.FC = () => {
  return (
    <div className="pt-20 overflow-x-hidden">
      <HeroSlider />

      {/* Modern Referans Marquee - Updated with Trendmax context */}
      <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Mutlu Müşteriler</h2>
          
          {/* Mock User Avatars Stack */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex -space-x-3 mb-4">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&h=64&q=80"
              ].map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt="User avatar" 
                  className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm ring-1 ring-orange-100"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600 shadow-sm ring-1 ring-orange-100">
                +1K
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-500 max-w-md mx-auto leading-relaxed">
              Türkiye'nin önde gelen 1.000'den fazla markası, e-ticaret süreçlerini <span className="text-orange-600 font-bold">Trendmax</span> ile yöneterek büyümeye devam ediyor.
            </p>
          </div>
        </div>

        <div className="relative flex">
          <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap py-8">
            {THEME_MARQUEE_IMAGES.map((img, i) => (
              <div
                key={`tema-1-${i}`}
                className="relative h-100 w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50 opacity-90 shadow shadow-gray-900/15 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:shadow-gray-900/10"
              >
                <img
                  src={img}
                  alt="Trendmax tema önizlemesi"
                  className="h-full w-[calc(100%+2px)] max-w-none -translate-x-[2px] object-cover object-top"
                  draggable={false}
                />
              </div>
            ))}
            {THEME_MARQUEE_IMAGES.map((img, i) => (
              <div
                key={`tema-2-${i}`}
                className="relative h-100 w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50 opacity-90 shadow shadow-gray-900/15 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:shadow-gray-900/10"
              >
                <img
                  src={img}
                  alt="Trendmax tema önizlemesi"
                  className="h-full w-[calc(100%+2px)] max-w-none -translate-x-[2px] object-cover object-top"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Trust Builder */}
      <section className="py-12 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">25.000+</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Trendmax Mağazası</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">150M+</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Yıllık Sipariş</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">21 Yıl</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Sektör Tecrübesi</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">7/24</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Teknik Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlighting - Content Rich */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                E-Ticaret'te <span className="text-orange-600 underline decoration-orange-200">Sınırları Zorlayan</span> Trendmax Teknolojileri
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: <Zap />, 
                    title: "Bulut Tabanlı Yüksek Performans", 
                    desc: "Yüksek trafikli kampanya dönemlerinde bile sıfır yavaşlama ve %99.9 uptime garantisi." 
                  },
                  { 
                    icon: <Globe />, 
                    title: "Uluslararası E-İhracat Modülü", 
                    desc: "Yurtdışı pazaryeri entegrasyonları, yerel ödeme sistemleri ve çoklu dil seçeneği ile dünyaya açılın." 
                  },
                  { 
                    icon: <Smartphone />, 
                    title: "Dönüşüm Odaklı Mobil Uygulama", 
                    desc: "Müşterilerinizin cebindeki mağazanız. Push bildirimler ve native kullanıcı deneyimi." 
                  }
                ].map((f, i) => (
                  <div key={i} className="flex group">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      {React.cloneElement(f.icon as React.ReactElement, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{f.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Trendmax Panel" 
                className="relative rounded-[2rem] shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sektörünüze Özel — demo mağazalar (harici link, yeni sekme) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Sektörünüze Özel Çözümler</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Trendmax ile işinizin gereksinimlerini biliyor, her sektöre özel e-ticaret dinamikleri geliştiriyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {HOME_SEKTOR_TEMA_CARDS.map((card) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="overflow-hidden rounded-3xl relative h-56 mb-4 border border-gray-100 shadow-md hover:shadow-xl transition-all">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <span className="text-white font-bold">Tema Önizleme</span>
                    <span className="text-orange-300 text-sm">İncele →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeIntegrationShowcase />

      {/* Success Stories / Testimonials */}
      <section className="py-24 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <h2 className="text-4xl font-black mb-4">Trendmax Deneyimi</h2>
              <p className="text-gray-500 text-lg">Platformumuzla büyüyen markaların başarı serüvenleri.</p>
            </div>
            <button className="bg-white px-6 py-3 rounded-full font-bold shadow-sm border border-orange-100 hover:bg-orange-600 hover:text-white transition-all">
              Tüm Başarı Hikayeleri
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mert Yılmaz", brand: "ModaX CEO", quote: "Trendmax'e geçtikten sonra site hızımız 2 kat arttı, dönüşüm oranlarımız %30 yükseldi.", stars: 5 },
              { name: "Ayşe Erden", brand: "GurmeMarket", quote: "Özellikle bölgesel teslimat ve stok yönetimi modülleri sayesinde operasyonumuzu %50 daha verimli yönetiyoruz.", stars: 5 },
              { name: "Burak Sağlam", brand: "TechStore", quote: "E-ihracat modülü sayesinde Amazon ve Etsy entegrasyonlarını tek bir panelden yönetmek büyük kolaylık.", stars: 4 }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="flex text-orange-400 mb-6">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mr-4 flex items-center justify-center font-bold text-orange-600">{t.name[0]}</div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-xs text-orange-500 font-semibold">{t.brand}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trendmax Paketlerimiz - Fiyatlar ile tutarlı: Yazılım (Başlangıç/Uzman/Üst Düzey) + Eğitim & Stoksuz (3 paket) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Trendmax Paketlerimiz</h2>
            <p className="text-gray-500 text-lg">Her ihtiyaca uygun şeffaf fiyatlandırma.</p>
          </div>

          {/* E-Ticaret Yazılım Paketleri - xlsx ile aynı (Başlangıç, Uzman, Üst Düzey) */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">E-Ticaret Yazılım Paketleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {YAZILIM_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-gray-50 rounded-[2.5rem] p-8 transition-transform hover:-translate-y-2 relative shadow-sm border border-gray-100 ${pkg.highlight ? 'ring-2 ring-orange-500 shadow-xl' : ''}`}
                >
                  {pkg.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popüler</span>}
                  <h4 className="text-xl font-black text-gray-900 mb-3">{pkg.title}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 font-bold text-sm"> TL</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center text-gray-700 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/fiyatlar" className={`block w-full py-4 rounded-2xl font-black text-center text-sm transition-all ${pkg.highlight ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Satın Al
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Eğitim & Stoksuz Paketleri - Fiyatlar sayfası ile aynı (3 paket) */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Eğitim & Stoksuz E-Ticaret Paketleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HOME_PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-50 rounded-[2.5rem] p-8 transition-transform hover:-translate-y-2 relative shadow-sm border border-gray-100 ${pkg.highlight ? 'ring-2 ring-orange-500 shadow-xl' : ''}`}
                >
                  {pkg.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popüler</span>}
                  <h4 className="text-lg font-black text-gray-900 mb-3 line-clamp-2">{pkg.title}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 font-bold text-sm"> TL</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center text-gray-700 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/fiyatlar" className={`block w-full py-4 rounded-2xl font-black text-center text-sm transition-all ${pkg.highlight ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Satın Al
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid
        sectionClassName="py-24 bg-gray-50 border-y border-gray-100"
        introTitle="Sıkça Sorulan Sorular"
        introDescription="Merak ettiklerinizin yanıtları burada."
        footer={
          <div className="text-center">
            <Link to="/sss" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline">
              Tüm SSS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        }
      />

      {/* Sizi Arayalım Formu */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Sizi Arayalım</h2>
            <p className="text-gray-500">İletişim bilgilerinizi bırakın, sizinle en kısa sürede iletişime geçelim.</p>
          </div>
          <SiziArayalimForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
