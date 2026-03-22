import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Truck, CreditCard, Languages, ArrowRight } from 'lucide-react';
import AnimatedHero from '../../components/AnimatedHero';
import { HERO_IMAGES } from '../../data/heroImages';
import SikcaSorulanSorularGrid from '../../components/SikcaSorulanSorularGrid';
import RevealOnScroll from '../../components/RevealOnScroll';
import { EIHRACAT_BILGI_SECTIONS, EIHRACAT_MARKET_LOGOS } from '../../data/eIhracatBilgi';

const Reveal = RevealOnScroll;

function teaserFromParagraphs(paragraphs: string[], maxLen = 118): string {
  const raw = paragraphs[0]?.trim() ?? '';
  if (raw.length <= maxLen) return raw;
  const cut = raw.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

const EIhracat: React.FC = () => {
  const bilgiByLogoUrl = useMemo(() => {
    const m = new Map<string, (typeof EIHRACAT_BILGI_SECTIONS)[number]>();
    EIHRACAT_BILGI_SECTIONS.forEach((b) => {
      if (b.logoUrl) m.set(b.logoUrl, b);
    });
    return m;
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="E-İhracat Paketleri"
        subtitle="Sınırları aşın, dünyaya satış yapın. Çoklu dil, para birimi ve uluslararası kargo entegrasyonlarıyla global pazarlara açılın."
        breadcrumb={[
          { label: 'E-Ticaret Çözümleri', path: '/cozumler' },
          { label: 'E-İhracat Paketleri' },
        ]}
        icon={Globe}
        badge="E-Ticaret Çözümü"
        image={HERO_IMAGES.export}
      />

      <section id="icerik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Global Satış İmkanı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amazon, eBay, Etsy ve dünya çapındaki pazaryerlerine entegre olun. Vergi, gümrük ve lojistik süreçlerinde size rehberlik ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Çoklu Pazar',
                desc: 'AB, ABD, UK ve Orta Doğu pazarlarına erişim.',
              },
              {
                icon: Languages,
                title: 'Çoklu Dil',
                desc: 'Otomatik çeviri ve yerelleştirme desteği.',
              },
              {
                icon: CreditCard,
                title: 'Global Ödeme',
                desc: 'PayPal, Stripe ve yerel ödeme yöntemleri.',
              },
              {
                icon: Truck,
                title: 'Uluslararası Kargo',
                desc: 'DHL, FedEx, UPS ve yerel kargo entegrasyonları.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
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

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/80 to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-3">Bilgi merkezi</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              E-İhracat ile neler yapabilirsiniz?
            </h2>
            <p className="text-gray-500 text-lg">
              Küresel pazaryerleri, dil ve ödeme seçenekleri ile uluslararası kargo tarafında Trendmax ile süreçlerinizi nasıl
              yönetebileceğinize dair özet bilgiler.
            </p>
          </Reveal>

          <div className="space-y-20 lg:space-y-28">
            {EIHRACAT_BILGI_SECTIONS.map((block, i) => {
              const Icon = block.icon;
              const iconCorner =
                i % 2 === 0
                  ? '-bottom-6 -right-2 sm:right-4 lg:right-10'
                  : '-bottom-6 -left-2 sm:left-4 lg:left-10';
              return (
                <div key={block.id}>
                  <Reveal>
                    <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      <div className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 ring-1 ring-gray-200/90">
                          <img
                            src={block.imageUrl}
                            alt={block.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-slate-900/10 to-transparent pointer-events-none" />
                          <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                            {block.logoUrl ? (
                              <div className="rounded-2xl bg-white/95 backdrop-blur-sm px-8 py-6 shadow-xl ring-1 ring-gray-200/80 max-w-[min(100%,280px)]">
                                <img
                                  src={block.logoUrl}
                                  alt=""
                                  className="max-h-14 md:max-h-16 w-full object-contain"
                                />
                              </div>
                            ) : (
                              <div
                                className={`rounded-2xl bg-gradient-to-br ${block.accentClass} p-8 shadow-xl ring-4 ring-white/90`}
                                aria-hidden
                              >
                                <Icon className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                              </div>
                            )}
                          </div>
                          <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-800 shadow-lg">
                            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                            {block.categoryLabel}
                          </div>
                        </div>
                        <div
                          className={`absolute ${iconCorner} w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${block.accentClass} shadow-xl flex items-center justify-center visual-float ring-4 ring-white`}
                          aria-hidden
                        >
                          <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-white" strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                        <Reveal delayMs={120}>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-snug">
                            {block.name}
                          </h3>
                          <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                            {block.paragraphs.map((p, pi) => (
                              <p key={pi}>{p}</p>
                            ))}
                          </div>
                        </Reveal>
                      </div>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-3">Küresel kanallar</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">
              Desteklenen pazaryerleri ve lojistik
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Aşağıdaki kanallar ve taşıyıcılarla ürün, stok ve sipariş süreçlerinizi e-ihracat odağında planlayabilirsiniz.
              Detaylı anlatım için sayfanın üst kısmındaki bilgi merkezine göz atabilirsiniz.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EIHRACAT_MARKET_LOGOS.map((row) => {
              const bilgi = row.logoUrl ? bilgiByLogoUrl.get(row.logoUrl) : undefined;
              const teaser = bilgi ? teaserFromParagraphs(bilgi.paragraphs) : '';
              return (
                <div key={row.name}>
                  <Reveal>
                    <div className="h-full flex flex-col p-6 rounded-3xl bg-gray-50 hover:bg-orange-50/60 border border-gray-100 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="shrink-0 w-20 h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-3 shadow-sm">
                          {row.logoUrl ? (
                            <img
                              src={row.logoUrl}
                              alt=""
                              className="max-w-full max-h-full w-auto h-auto object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-lg font-black text-orange-600 tracking-tight">{row.name.slice(0, 2)}</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-black text-gray-900 text-lg leading-tight">{row.name}</div>
                          <div className="text-sm font-semibold text-orange-600 mt-1">{row.category}</div>
                        </div>
                      </div>
                      {teaser ? (
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{teaser}</p>
                      ) : (
                        <p className="text-gray-500 text-sm flex-1">
                          Detaylar yukarıdaki bilgi merkezinde ve danışmanlık sürecinde paylaşılır.
                        </p>
                      )}
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SikcaSorulanSorularGrid introTitle="Sıkça Sorulan Sorular" />

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Dünyaya Açılın</h2>
          <Link
            to="/fiyatlar"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors"
          >
            E-İhracat Paketleri <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EIhracat;
