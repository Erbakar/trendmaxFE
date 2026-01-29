
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { CLIENT_LOGOS } from '../constants';
import { 
  ShoppingBag, Zap, Shield, Rocket, Smartphone, Globe, 
  BarChart, Users, CheckCircle, ArrowRight, Star, 
  CreditCard, Truck, RefreshCcw, Search
} from 'lucide-react';

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
                +25K
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-500 max-w-md mx-auto leading-relaxed">
              Türkiye'nin önde gelen 25.000'den fazla markası, e-ticaret süreçlerini <span className="text-orange-600 font-bold">Trendmax</span> ile yöneterek büyümeye devam ediyor.
            </p>
          </div>
        </div>

        <div className="relative flex">
          <div className="animate-marquee flex items-center space-x-10 whitespace-nowrap py-8">
            {CLIENT_LOGOS.map((logo, i) => (
              <img key={`logo-1-${i}`} src={logo} alt="Referans" className="h-20 w-auto rounded-lg opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md hover:shadow-xl" />
            ))}
            {/* Double the logos for seamless scroll */}
            {CLIENT_LOGOS.map((logo, i) => (
              <img key={`logo-2-${i}`} src={logo} alt="Referans" className="h-20 w-auto rounded-lg opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md hover:shadow-xl" />
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
              <div className="text-4xl font-black text-orange-600 mb-2">15 Yıl</div>
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

      {/* Industry Solutions - More Corporate */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Sektörünüze Özel Çözümler</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Trendmax ile işinizin gereksinimlerini biliyor, her sektöre özel e-ticaret dinamikleri geliştiriyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Giyim & Moda", tags: "Beden Tablosu, Renk Kartelası", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&q=80" },
              { title: "Gıda & Market", tags: "Teslimat Saatleri, Bölgesel Stok", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" },
              { title: "Elektronik", tags: "Seri No Takibi, Teknik Servis", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=400&q=80" },
              { title: "B2B / Kurumsal", tags: "Cari Yönetimi, Bayi İndirimi", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=400&q=80" }
            ].map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl relative h-64 mb-4">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{s.title}</h3>
                    <p className="text-orange-300 text-sm font-medium">{s.tags}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Cloud Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-12">Yüzlerce Sistemle Tam Entegre</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { icon: <CreditCard />, name: "Ödeme Sistemleri" },
              { icon: <Truck />, name: "Kargo Firmaları" },
              { icon: <RefreshCcw />, name: "ERP & Muhasebe" },
              { icon: <ShoppingBag />, name: "Pazaryerleri" },
              { icon: <Search />, name: "Arama Motorları" },
              { icon: <Star />, name: "Puan & Sadakat" }
            ].map((int, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors border border-gray-100">
                <div className="text-orange-600 flex justify-center mb-4">
                  {React.cloneElement(int.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <div className="text-sm font-bold text-gray-700">{int.name}</div>
              </div>
            ))}
          </div>
          <button className="mt-12 text-orange-600 font-bold flex items-center mx-auto hover:underline">
            Tüm Entegrasyonları Gör <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

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

      {/* Pricing Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Trendmax Paketlerimiz</h2>
            <p className="text-gray-500 text-lg">Her ihtiyaca uygun şeffaf fiyatlandırma.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Soft Paket", price: "4.999", color: "orange", features: ["100 Ürün", "Hazır Temalar", "Temel Raporlama"] },
              { title: "Plus Paket", price: "9.999", color: "orange", features: ["1000 Ürün", "Pazaryeri Entegrasyonları", "Mobil Uyumlu Temalar"], highlight: true },
              { title: "Special Paket", price: "19.999", color: "orange", features: ["Sınırsız Ürün", "E-İhracat Modülü", "Özel Tasarım Desteği"] }
            ].map((pkg) => (
              <div 
                key={pkg.title} 
                className={`bg-white rounded-[2.5rem] p-10 transition-transform hover:-translate-y-2 relative shadow-sm border border-gray-100 ${pkg.highlight ? 'ring-2 ring-orange-500 scale-105 shadow-xl' : ''}`}
              >
                {pkg.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Popüler Seçim</span>}
                <h3 className="text-2xl font-black mb-4">{pkg.title}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500 font-bold"> TL /Yıl</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center text-gray-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${pkg.highlight ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  Satın Al
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA - High Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              E-Ticaret'te <span className="text-orange-500">Trendmax</span> ile Zirveye Çıkın
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium">
              Geleceği Trendmax ile inşa edin. 15 günlük ücretsiz deneme sürenizi hemen başlatın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <button className="bg-orange-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-orange-700 hover:scale-105 transition-all shadow-2xl shadow-orange-600/30">
                Ücretsiz Denemeyi Başlat
              </button>
              <button className="bg-transparent border-2 border-slate-700 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/5 transition-all">
                Sunum İste
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
