
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { HOME_PACKAGES, HOME_SEKTOR_TEMA_CARDS, THEME_MARQUEE_IMAGES } from '../data/homePage';
import HomeIntegrationShowcase from '../components/HomeIntegrationShowcase';
import { YAZILIM_PACKAGES } from '../data/eticaretPaketOzellikleri';
import SikcaSorulanSorularGrid from '../components/SikcaSorulanSorularGrid';
import { COMPANY_CONTACT } from '../data/company';
import {
  Zap, Shield, Smartphone, Globe, CheckCircle, ArrowRight,
} from 'lucide-react';

/** Sizi Arayalım - ad, telefon, e-posta, mesaj formu */
function SiziArayalimForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`Trendmax iletişim talebi - ${form.fullName}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${form.fullName}\nTelefon: ${form.phone}\nE-posta: ${form.email}\n\nMesaj:\n${form.message || 'Belirtilmedi'}`,
    );
    window.location.href = `mailto:${COMPANY_CONTACT.email}?subject=${subject}&body=${body}`;
  };
  if (sent) {
    return (
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
        <p className="font-bold text-gray-900">E-posta uygulamanız açıldı. Mesajınızı göndererek talebinizi tamamlayabilirsiniz.</p>
        <a href={`mailto:${COMPANY_CONTACT.email}`} className="mt-3 inline-block text-sm font-bold text-orange-600 hover:underline">
          {COMPANY_CONTACT.email}
        </a>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="callback-name" className="block text-sm font-bold text-gray-700 mb-1">Ad Soyad</label>
        <input id="callback-name" name="name" autoComplete="name" maxLength={60} type="text" required value={form.fullName} onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))} className="min-h-12 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500" placeholder="Adınız Soyadınız" />
      </div>
      <div>
        <label htmlFor="callback-phone" className="block text-sm font-bold text-gray-700 mb-1">Telefon</label>
        <input id="callback-phone" name="tel" inputMode="tel" autoComplete="tel" maxLength={20} type="tel" required value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="min-h-12 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500" placeholder="05XX XXX XX XX" />
      </div>
      <div>
        <label htmlFor="callback-email" className="block text-sm font-bold text-gray-700 mb-1">E-posta</label>
        <input id="callback-email" name="email" inputMode="email" autoComplete="email" maxLength={254} type="email" required value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="min-h-12 w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500" placeholder="ornek@email.com" />
      </div>
      <div>
        <label htmlFor="callback-message" className="block text-sm font-bold text-gray-700 mb-1">Mesaj (isteğe bağlı)</label>
        <textarea id="callback-message" name="message" rows={4} value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500" placeholder="Merak ettiklerinizi yazabilirsiniz..." />
      </div>
      <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-relaxed text-gray-600">
        <input type="checkbox" required className="mt-0.5 h-5 w-5 shrink-0 accent-orange-600" />
        <span>
          <Link to="/yasal/kvkk-aydinlatma-metni" target="_blank" className="font-bold text-orange-700 hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum.
        </span>
      </label>
      <button type="submit" className="w-full py-4 bg-orange-600 text-white font-black rounded-xl hover:bg-orange-700 transition-colors">
        Gönder
      </button>
    </form>
  );
}

const Home: React.FC = () => {
  return (
    <div className="pt-20 overflow-x-hidden">
      <h1 className="sr-only">Trendmax e-ticaret yazılımı, pazaryeri entegrasyonu ve kurulum çözümleri</h1>
      <HeroSlider />

      {/* Tema önizlemeleri */}
      <section className="overflow-hidden border-b border-gray-100 bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">E-Ticaret Vitrin Örnekleri</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
            Farklı sektörler için hazırlanan masaüstü ve mobil uyumlu tema seçeneklerini satın alma öncesinde inceleyin.
          </p>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-black text-gray-900">Örnek Siteler</h3>
        </div>

        <div className="mobile-horizontal-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">
          {THEME_MARQUEE_IMAGES.map((theme) => (
            <Link
              key={`tema-mobile-${theme.href}`}
              to={theme.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-96 w-[78vw] max-w-72 shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-md"
            >
              <img src={theme.image} alt={theme.title} className="h-full w-full object-cover object-top" draggable={false} />
              <span className="absolute inset-x-3 bottom-3 rounded-xl bg-slate-950/85 px-4 py-3 text-center text-sm font-black text-white backdrop-blur-sm">
                Temayı İncele
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-2 px-4 text-center text-xs font-semibold text-gray-400 md:hidden">Diğer temalar için yana kaydırın</p>

        <div className="relative hidden md:flex">
          <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap py-8">
            {THEME_MARQUEE_IMAGES.map((theme, i) => (
              <Link
                key={`tema-1-${i}`}
                to={theme.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-100 w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50 opacity-90 shadow shadow-gray-900/15 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:shadow-gray-900/10"
              >
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="h-full w-[calc(100%+2px)] max-w-none -translate-x-[2px] object-cover object-top"
                  draggable={false}
                />
              </Link>
            ))}
            {THEME_MARQUEE_IMAGES.map((theme, i) => (
              <Link
                key={`tema-2-${i}`}
                to={theme.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-100 w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50 opacity-90 shadow shadow-gray-900/15 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:shadow-gray-900/10"
              >
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="h-full w-[calc(100%+2px)] max-w-none -translate-x-[2px] object-cover object-top"
                  draggable={false}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Şeffaf hizmet bilgileri */}
      <section className="py-12 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-black text-orange-600 mb-2">KDV Dahil</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Şeffaf Fiyatlar</div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-600 mb-2">PayTR</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Güvenli Ödeme</div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-600 mb-2">Bursa</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Türkiye Operasyonu</div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-600 mb-2">Dijital</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Kurulum ve Teslimat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlighting - Content Rich */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                E-Ticaret'te <span className="text-orange-600 underline decoration-orange-200">Sınırları Zorlayan</span> Trendmax Teknolojileri
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: <Zap />, 
                    title: "Bulut Tabanlı Yüksek Performans", 
                    desc: "Kampanya dönemlerinde performansı korumaya yönelik ölçeklenebilir altyapı ve düzenli teknik iyileştirmeler."
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
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-black sm:text-4xl">Sektörünüze Özel Çözümler</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Trendmax ile işinizin gereksinimlerini biliyor, her sektöre özel e-ticaret dinamikleri geliştiriyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {HOME_SEKTOR_TEMA_CARDS.map((card) => (
              <Link
                key={card.href}
                to={card.href}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeIntegrationShowcase />

      {/* Satın alma güven unsurları */}
      <section className="bg-orange-50/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <h2 className="mb-4 text-3xl font-black sm:text-4xl">Satın Alma Öncesinde Netlik</h2>
              <p className="text-gray-500 text-lg">Karar vermeden önce kapsamı, fiyatı ve teslim sürecini açıkça inceleyin.</p>
            </div>
            <Link to="/referanslar" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-orange-100 bg-white px-6 py-3 font-bold shadow-sm transition-all hover:bg-orange-600 hover:text-white sm:w-auto sm:rounded-full">
              Tema Örneklerini İncele
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Paket Kapsamı', description: 'Her pakete dahil özellikleri ve güncel KDV dahil fiyatı tek ekranda karşılaştırın.' },
              { title: 'Teslimat Planı', description: 'Dijital kurulum ve hizmet başlangıcı için gerekli adımları teslimat politikasından inceleyin.' },
              { title: 'Güvenli Ödeme', description: 'Kart bilgileriniz Trendmax tarafından tutulmadan PayTR güvenli ödeme ekranında işlenir.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm sm:p-10 sm:rounded-[2.5rem]">
                <CheckCircle className="mb-6 h-8 w-8 text-orange-600" />
                <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trendmax Paketlerimiz - Fiyatlar ile tutarlı: Yazılım (Başlangıç/Uzman/Üst Düzey) + Eğitim & Stoksuz (3 paket) */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-black sm:text-4xl">Trendmax Paketlerimiz</h2>
            <p className="text-gray-500 text-lg">Her ihtiyaca uygun şeffaf fiyatlandırma.</p>
          </div>

          {/* E-Ticaret Yazılım Paketleri - xlsx ile aynı (Başlangıç, Uzman, Üst Düzey) */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">E-Ticaret Yazılım Paketleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {YAZILIM_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-transform hover:-translate-y-2 sm:rounded-[2.5rem] sm:p-8 ${pkg.highlight ? 'ring-2 ring-orange-500 shadow-xl' : ''}`}
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
                    Detaylı İncele
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Eğitim & Stoksuz Paketleri - görünürlük fiyatlar sayfasıyla aynıdır */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Eğitim & Stoksuz E-Ticaret Paketleri</h3>
            <div className={`grid grid-cols-1 gap-6 ${HOME_PACKAGES.length === 1 ? 'mx-auto max-w-xl' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {HOME_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-transform hover:-translate-y-2 sm:rounded-[2.5rem] sm:p-8 ${pkg.highlight ? 'ring-2 ring-orange-500 shadow-xl' : ''}`}
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
        sectionClassName="py-16 lg:py-24 bg-gray-50 border-y border-gray-100"
        introTitle="Sıkça Sorulan Sorular"
        introDescription="Merak ettiklerinizin yanıtları burada."
        footer={
          <div className="text-center">
            <Link to="/sss" className="inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-orange-600 font-bold hover:bg-orange-50 hover:underline">
              Tüm SSS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        }
      />

      {/* Sizi Arayalım Formu */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-black sm:text-4xl">Sizi Arayalım</h2>
            <p className="text-gray-500">İletişim bilgilerinizi bırakın, sizinle en kısa sürede iletişime geçelim.</p>
          </div>
          <SiziArayalimForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
