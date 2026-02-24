import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Layout, Sparkles, Smartphone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';

const Temalar: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const themes = [
    { name: 'Minimalist', style: 'Sade, odaklı, dönüşüm odaklı', color: 'from-gray-100 to-gray-200' },
    { name: 'Lüks', style: 'Premium his, büyük görseller, animasyonlar', color: 'from-amber-100 to-amber-200' },
    { name: 'Modern Tech', style: 'Koyu mod, neon vurgular, futuristik', color: 'from-slate-800 to-slate-900' },
    { name: 'Doğal', style: 'Organik renkler, yumuşak geçişler', color: 'from-green-100 to-emerald-200' },
    { name: 'Boutique', style: 'Özel tasarım, marka odaklı', color: 'from-rose-100 to-pink-200' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Özel Temalar"
        subtitle="Modern ve dönüşüm odaklı tasarım seçenekleri. Markanıza özel, mobil uyumlu ve yüksek performanslı e-ticaret teması ile fark yaratın."
        breadcrumb={[
          { label: 'Premium Çözümler', path: '/premium' },
          { label: 'Özel Temalar' },
        ]}
        icon={Palette}
        image={HERO_IMAGES.design}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Markanızı Yansıtan Tasarımlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hazır temalarımızdan birini seçin veya sıfırdan özel tasarım yaptırın. 
              Tüm temalar dönüşüm odaklı, hızlı ve SEO dostudur.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className={`h-40 bg-gradient-to-br ${theme.color} flex items-center justify-center`}>
                  <Layout className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{theme.name}</h3>
                  <p className="text-gray-500">{theme.style}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16">
            Tema Özellikleri
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: Layout, title: 'Özelleştirilebilir Bileşenler', desc: 'Header, footer, ürün kartları ve kategori sayfaları tamamen özelleştirilebilir. Renk, tipografi ve boşluklar tek tıkla değiştirilir.' },
                { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Tüm temalar önce mobil deneyim için tasarlanır. Touch-friendly navigasyon ve hızlı yükleme garantisi.' },
                { icon: Sparkles, title: 'Animasyonlar & Mikro Etkileşimler', desc: 'Hover efektleri, scroll animasyonları ve sayfa geçişleri ile kullanıcı deneyimini zenginleştirin.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Özel Tema Süreci</h3>
                <ol className="space-y-6">
                  {[
                    'Marka analizi ve hedef kitle belirleme',
                    'Wireframe ve tasarım konsepti',
                    'Görsel onay ve revizyon turu',
                    'Geliştirme ve entegrasyon',
                    'Test, lansman ve eğitim',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-slate-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">Tema SSS</h2>
          <div className="space-y-4">
            {[
              { q: 'Hazır tema mı yoksa özel tasarım mı tercih etmeliyim?', a: 'Bütçe ve süre kısıtınız varsa hazır temalar ideal. Marka kimliğiniz çok özelse ve benzersiz bir deneyim istiyorsanız özel tasarım öneririz. İkisi arasında kararsız kalanlar için yarı-özelleştirilebilir paketler sunuyoruz.' },
              { q: 'Tema değişikliği mevcut verilerimi etkiler mi?', a: 'Hayır. Ürün, kategori ve sipariş verileriniz tema bağımsızdır. Tema değişikliği sadece görsel katmanı etkiler, verileriniz güvende kalır.' },
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
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Mağazanızı Güzelleştirin
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

export default Temalar;
