import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, BarChart3, FileText, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';

const SEO: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="SEO Yönetim Araçları"
        subtitle="Arama motorlarında zirveye yerleşin. Teknik SEO, içerik optimizasyonu ve raporlama araçlarıyla organik trafiğinizi katlayın."
        breadcrumb={[
          { label: 'Premium Çözümler', path: '/premium' },
          { label: 'SEO Yönetim Araçları' },
        ]}
        icon={Search}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Google'da Üst Sıralara Çıkın
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                E-ticarette organik trafik, en düşük maliyetle en yüksek dönüşümü getirir. 
                Trendmax SEO araçları ile meta etiketleri, schema markup, sitemap ve core web vitals 
                optimizasyonlarını tek panelden yönetin.
              </p>
              <ul className="space-y-4">
                {[
                  'Otomatik meta title ve description önerileri',
                  'Ürün ve kategori sayfaları için schema.org yapılandırılmış veri',
                  'XML sitemap otomatik oluşturma ve Google Search Console entegrasyonu',
                  'Sayfa hızı, Core Web Vitals ve mobil uyumluluk raporları',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">SEO Skor Kartı Örneği</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Teknik SEO', value: 94, color: 'bg-green-500' },
                    { label: 'İçerik Kalitesi', value: 88, color: 'bg-orange-500' },
                    { label: 'Sayfa Hızı', value: 96, color: 'bg-green-500' },
                    { label: 'Mobil Uyumluluk', value: 100, color: 'bg-green-500' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="font-bold text-gray-900">{item.value}/100</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16">
            SEO Araç Seti
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Anahtar Kelime Analizi', desc: 'Rekabet ve hacim verileriyle en karlı anahtar kelimeleri keşfedin.' },
              { icon: FileText, title: 'İçerik Optimizasyonu', desc: 'AI destekli meta etiket ve açıklama önerileri alın.' },
              { icon: BarChart3, title: 'Performans Takibi', desc: 'Sıralama, tıklanma ve görünüm verilerini canlı takip edin.' },
              { icon: TrendingUp, title: 'Rakip Analizi', desc: 'Rakiplerinizin SEO stratejilerini inceleyin, fırsatları yakalayın.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all"
              >
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
          <h2 className="text-3xl font-black text-center mb-12">SEO Hakkında SSS</h2>
          <div className="space-y-4">
            {[
              { q: 'SEO sonuçları ne kadar sürede görülür?', a: 'Teknik SEO düzeltmeleri 2-4 hafta içinde etkisini gösterir. İçerik ve backlink çalışmaları için 3-6 ay sabırlı olmak gerekir. Trendmax araçları süreci hızlandırır.' },
              { q: 'E-ticaret için özel SEO özellikleri var mı?', a: 'Evet. Ürün schema, kategori yapısı, canonical URL yönetimi, duplicate content önleme ve çoklu dil SEO desteği dahildir.' },
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
            Organik Trafiğinizi Artırın
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

export default SEO;
