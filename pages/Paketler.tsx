import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { YAZILIM_PACKAGES } from '../data/eticaretPaketOzellikleri';
import { EGITIM_STOKSUZ_PACKAGES as PACKAGES } from '../data/paketlerEgitimStoksuz';
import { PAKET_BILGI_SECTIONS } from '../data/paketlerBilgi';
import RevealOnScroll from '../components/RevealOnScroll';

const Reveal = RevealOnScroll;

/** E-Ticaret Yazılım Paketleri (Başlangıç, Uzman, Üst Düzey) - xlsx'ten */
const PACKAGES_YAZILIM = YAZILIM_PACKAGES;

const getCheckoutPath = (type: 'yazilim' | 'egitim', packageId: string) =>
  `/odeme?tip=${type}&paket=${packageId}`;

const COMPARISON_FEATURES = [
  { name: 'Şirket Kuruluşu', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: '2 Pazar Yeri Mağaza Açılışı', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Ücretsiz Entegratör Yazılım Kurulumu', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Ücretsiz Logo Tasarımı', pazaryeri: true, sifirSermaye: true, fullFull: true },
  { name: 'Ürün Yükleme Eğitimi', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Trendyol Panel Eğitimi & Ürün Yükleme', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Gittigidiyor Panel Eğitimi & Ürün Yükleme', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Satış Garantili Ürün Desteği', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: "5 Farklı Sektör, 50'den Fazla Kategori", pazaryeri: true, sifirSermaye: true, fullFull: true },
  { name: 'Tedarikçi İlişkileri', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Kar Marjı Düzenleme & Finans Eğitimi', pazaryeri: true, sifirSermaye: false, fullFull: true },
  { name: 'Kargo ve Sevkiyat', pazaryeri: true, sifirSermaye: true, fullFull: true },
  { name: '24 Saatte Hazır E-Ticaret Sitesi', pazaryeri: false, sifirSermaye: true, fullFull: true },
  { name: "8.000 + Farklı Hazır Ürün", pazaryeri: true, sifirSermaye: true, fullFull: true },
  { name: 'Hazır Ödeme Alt Yapısı', pazaryeri: false, sifirSermaye: true, fullFull: true },
  { name: '1 Yıllık Hosting Hizmeti', pazaryeri: false, sifirSermaye: true, fullFull: true },
  { name: 'Şirket Kurmak Yok, Vergi Yok', pazaryeri: false, sifirSermaye: true, fullFull: true },
  { name: 'Kargo ve Lojistik Hizmeti', pazaryeri: false, sifirSermaye: true, fullFull: true },
  { name: 'Tedarikçi Desteği Hizmeti', pazaryeri: false, sifirSermaye: true, fullFull: true },
  { name: 'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)', pazaryeri: true, sifirSermaye: true, fullFull: true },
  { name: 'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim', pazaryeri: true, sifirSermaye: true, fullFull: true },
  { name: 'Tüm Paketlerde %15 İndirim Hakkı', pazaryeri: true, sifirSermaye: true, fullFull: true },
];

const Paketler: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/fiyatlar" className="hover:text-white transition-colors">Fiyatlar</Link>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              E-Ticaret Paketlerimiz
            </h1>
            <p className="text-xl text-slate-300">
              Stoksuz & sermayesiz e-ticaret projemize dahil olun. Şirket kurmadan, depo ve ürün maliyetini düşünmeden satış yapın.
            </p>
          </div>
        </div>
      </section>
      {/* E-Ticaret Yazılım Paketleri — E-Ticaret Paket Özellikleri.xlsx */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              E-Ticaret Yazılım Paketleri
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Trendmax hazır e-ticaret altyapısı ile sitenizi hızlıca açın. Her bütçeye uygun paketler.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES_YAZILIM.map((pkg) => (
              <div key={pkg.id}>
              <Reveal>
              <div
                className={`relative bg-white rounded-3xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                  pkg.highlight ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-100'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white text-center py-2 text-sm font-bold">
                    Popüler
                  </div>
                )}
                <div className={`flex flex-col flex-1 p-8 ${pkg.highlight ? 'pt-14' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{pkg.title}</h3>
                  <ul className="space-y-3 mb-8 max-h-[320px] overflow-y-auto pr-1 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 font-semibold"> TL</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">Paket Fiyatlarımıza KDV Dahildir</p>
                  <Link
                    to={getCheckoutPath('yazilim', pkg.id)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-black text-lg transition-all mt-auto text-center"
                  >
                    Satın Al
                  </Link>
                </div>
              </div>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eğitim & Stoksuz Paketleri */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Eğitim & Stoksuz E-Ticaret Paketleri
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Stoksuz & sermayesiz e-ticaret projemize dahil olun. Şirket kurmadan, depo ve ürün maliyetini düşünmeden satış yapın.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id}>
              <Reveal>
              <div
                className={`relative bg-white rounded-3xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                  pkg.highlight ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-100'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white text-center py-2 text-sm font-bold">
                    Popüler
                  </div>
                )}
                <div className={`flex flex-col flex-1 p-8 ${pkg.highlight ? 'pt-14' : ''}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 leading-tight min-h-[3.5rem]">
                    {pkg.title}
                  </h3>
                  <ul className="space-y-3 mb-8 max-h-[320px] overflow-y-auto pr-1 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 font-semibold"> TL</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">Paket Fiyatlarımıza KDV Dahildir</p>
                  <Link
                    to={getCheckoutPath('egitim', pkg.id)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-black text-lg transition-all mt-auto text-center"
                  >
                    Satın Al
                  </Link>
                </div>
              </div>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Size Uygun En Profesyonel Paketlerimiz
            </h2>
          </Reveal>
          <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 text-left text-sm font-black text-gray-500 uppercase">Özellikler</th>
                  <th className="py-4 px-4 text-center text-sm">
                    <div className="font-bold text-gray-900">Pazar Yeri</div>
                    <div className="text-orange-600 font-black">8.500 TL</div>
                  </th>
                  <th className="py-4 px-4 text-center text-sm bg-orange-50">
                    <div className="font-bold text-gray-900">Sıfır Sermaye</div>
                    <div className="text-orange-600 font-black">12.500 TL</div>
                  </th>
                  <th className="py-4 px-4 text-center text-sm">
                    <div className="font-bold text-gray-900">Full + Full</div>
                    <div className="text-orange-600 font-black">18.000 TL</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700 text-sm">{row.name}</td>
                    <td className="py-3 px-4 text-center">
                      {row.pazaryeri ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-3 px-4 text-center bg-orange-50/30">
                      {row.sifirSermaye ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.fullFull ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-200 bg-gray-50">
                  <td className="py-4 px-4"></td>
                  {['pazaryeri', 'sifir-sermaye', 'full-full'].map((id) => (
                    <td key={id} className="py-4 px-4 text-center">
                      <Link
                        to={getCheckoutPath('egitim', id)}
                        className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold text-sm"
                      >
                        Satın Al
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          </Reveal>
        </div>
      </section>
      {/* E-ticaret paketleri bilgilendirme — animasyon + görseller */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/80 to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-3">
              Bilgi merkezi
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Trendmax e-ticaret paketleri hakkında merak edilenler
            </h2>
            <p className="text-gray-500 text-lg">
              Paket seçimi, platforma geçiş, ödeme altyapısı ve destek konularında özet bilgiler.
            </p>
          </Reveal>

          <div className="space-y-20 lg:space-y-28">
            {PAKET_BILGI_SECTIONS.map((block, i) => {
              const Icon = block.icon;
              const iconCorner =
                i % 2 === 0
                  ? '-bottom-6 -right-2 sm:right-4 lg:right-10'
                  : '-bottom-6 -left-2 sm:left-4 lg:left-10';
              return (
                <div key={block.id}>
                <Reveal>
                  <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div
                      className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                    >
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 ring-1 ring-gray-200/90">
                        <img
                          src={block.imageUrl}
                          alt={block.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-slate-900/10 to-transparent pointer-events-none" />
                        <div
                          className={`absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-800 shadow-lg`}
                        >
                          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                          Trendmax
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
                          {block.title}
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



      {/* CTA */}
      <section className="py-16 lg:py-24 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Reveal>
          <p className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
            Stoksuz & Sermayesiz E-Ticaret projemize dahil olun ve şirket kurmadan, depo ve ürün maliyetini düşünmeden, vergi ödemeden, kargo operasyonu ile uğraşmadan ürün satarak kazanmanın keyfini çıkarın.
          </p>
          <a
            href="tel:08503098419"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition-all shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Danışmanlarımızla İletişime Geçin: 0850 309 84 19
          </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Paketler;
