import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Package,
  Sparkles,
  Crown,
} from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';
import { YAZILIM_PACKAGES } from '../../data/eticaretPaketOzellikleri';
import SikcaSorulanSorularGrid from '../../components/SikcaSorulanSorularGrid';
import RevealOnScroll from '../../components/RevealOnScroll';

const Reveal = RevealOnScroll;

const PACKAGES_YAZILIM = YAZILIM_PACKAGES;

const CARD_VISUAL: Record<
  string,
  { gradient: string; icon: typeof Package; tag: string }
> = {
  basic: {
    gradient: 'from-slate-700 via-slate-600 to-slate-800',
    icon: Package,
    tag: 'Başlangıç',
  },
  plus: {
    gradient: 'from-orange-500 via-orange-600 to-amber-600',
    icon: Sparkles,
    tag: 'En çok tercih',
  },
  extreme: {
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    icon: Crown,
    tag: 'Kurumsal güç',
  },
};

const EticaretPaketleri: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="E-Ticaret Paketleri"
        subtitle="Her ölçekteki işletme için hazır e-ticaret altyapısı. Hızlı kurulum, mobil uyumlu tasarım ve pazaryeri entegrasyonlarıyla hemen satışa başlayın."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'E-Ticaret Paketleri' },
        ]}
        icon={ShoppingBag}
        badge="E-Ticaret Çözümü"
        image={HERO_IMAGES.ecommerce}
      />

      {/* E-Ticaret Yazılım Paketleri (Paketler.tsx ile aynı veri) */}
      <section id="icerik" className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white to-orange-50/40" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-400/15 blur-3xl animate-pulse" />
        <div
          className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14 lg:mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-3">
              Hazır yazılım paketleri
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              E-Ticaret Yazılım Paketleri
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Trendmax hazır e-ticaret altyapısı ile sitenizi hızlıca açın. Basic, Plus ve Extreme seçenekleriyle
              her bütçeye uygun paketler — tüm özellikler ve güncel fiyatlar için fiyatlar sayfamızı da
              inceleyebilirsiniz.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {PACKAGES_YAZILIM.map((pkg, idx) => {
              const visual = CARD_VISUAL[pkg.id] ?? CARD_VISUAL.basic;
              const Icon = visual.icon;
              return (
                <div key={pkg.id}>
                  <Reveal delayMs={idx * 80}>
                    <div
                      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                        pkg.highlight
                          ? 'border-orange-500 ring-2 ring-orange-200/80'
                          : 'border-gray-100 hover:border-orange-200/80'
                      }`}
                    >
                      <div
                        className={`relative bg-gradient-to-br ${visual.gradient} px-6 py-8 text-white`}
                      >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M20 20h20v20H20zM0 0h20v20H0z\'/%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
                        <div className="relative flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
                              {visual.tag}
                            </span>
                            <h3 className="mt-4 text-2xl font-black tracking-tight">{pkg.title}</h3>
                          </div>
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-2 ring-white/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>

                      {pkg.highlight && (
                        <div className="bg-orange-600 py-2 text-center text-sm font-bold text-white">
                          Popüler
                        </div>
                      )}

                      <div className="flex flex-1 flex-col p-8">
                        <ul className="mb-8 max-h-[320px] flex-1 space-y-3 overflow-y-auto pr-1">
                          {pkg.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mb-2 border-t border-gray-100 pt-6">
                          <div className="mb-1 flex items-baseline gap-1">
                            <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                            <span className="font-semibold text-gray-500">TL</span>
                          </div>
                          <p className="mb-6 text-xs text-gray-400">Paket fiyatlarımıza KDV dahildir</p>
                          <button
                            type="button"
                            className="w-full rounded-2xl bg-orange-600 py-4 text-lg font-black text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/25"
                          >
                            Kayıt Ol
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/fiyatlar"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-bold text-gray-800 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50/50 hover:text-orange-700"
            >
              Tüm paketleri ve eğitim seçeneklerini karşılaştır
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Görsel + metin */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-orange-500/20 via-transparent to-violet-500/20 blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
                    alt=""
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                    <p className="text-sm font-bold text-gray-900">Tek panelden mağaza, stok ve sipariş</p>
                    <p className="text-xs text-gray-500">Mobil uyumlu yönetim ve anlık bildirimler</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-xl ring-4 ring-white visual-float">
                  <ShoppingBag className="h-9 w-9" strokeWidth={1.5} />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-3">
                  Neden Trendmax?
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  İşletmenize uygun paketi seçin
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Yeni başlayanlardan büyüyen işletmelere kadar her kesime hitap eden paketler; hazır temalar,
                  pazaryeri entegrasyonları ve teknik destek ile minimum yatırımla maksimum sonuç.
                </p>
              </Reveal>
              <div className="space-y-4">
                {[
                  'Basic, Plus ve Extreme yazılım paketleri',
                  'Trendyol, Hepsiburada ve N11 entegrasyonu (paket kapsamına göre)',
                  'Mobil uyumlu ve SEO dostu altyapı',
                  '7/24 teknik destek ve güvenlik güncellemeleri',
                ].map((item, i) => (
                  <div key={i}>
                    <Reveal delayMs={i * 60}>
                      <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-4 transition-all hover:border-orange-200 hover:bg-orange-50/40">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="pt-1 font-medium text-gray-800">{item}</span>
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Paket Özellikleri</h2>
            <p className="text-gray-500 text-lg">
              Altyapıdan analitiğe — e-ticaret operasyonunuzu destekleyen başlıca yetenekler.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Hızlı Kurulum', desc: 'Kısa sürede mağazanız yayında; eğitim ve kurulum desteği.' },
              { icon: Shield, title: 'Güvenli Altyapı', desc: 'SSL, güvenli ödeme ve düzenli güvenlik güncellemeleri.' },
              { icon: BarChart3, title: 'Analitik', desc: 'Satış ve ziyaretçi raporlarıyla veriye dayalı kararlar.' },
              { icon: ShoppingBag, title: 'Ürün Yönetimi', desc: 'Esnek katalog, varyant ve kampanya yönetimi.' },
            ].map((item, i) => (
              <div key={i}>
                <Reveal delayMs={i * 70}>
                  <div className="group h-full rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition-transform group-hover:scale-110 group-hover:bg-orange-100">
                      <item.icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid introTitle="Sıkça Sorulan Sorular" />

      <section className="py-20 bg-orange-600 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hemen başlayın</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Tüm paketleri tek ekranda karşılaştırın ve size uygun planı seçin.
          </p>
          <Link
            to="/fiyatlar"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors shadow-lg"
          >
            Paketleri incele <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EticaretPaketleri;
