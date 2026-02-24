import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Building2, Quote, ArrowRight, Star } from 'lucide-react';
import { HERO_IMAGES } from '../data/heroImages';
import { REFERANS_MARKALAR, REFERANS_ISTATISTIKLER, BASARI_HIKAYELERI } from '../data/referanslar';

const Referanslar: React.FC = () => {
  const [activeSector, setActiveSector] = React.useState('Tümü');

  const filteredMarkalar = activeSector === 'Tümü'
    ? REFERANS_MARKALAR
    : REFERANS_MARKALAR.filter((m) => m.sector === activeSector);

  const sectors = [...new Set(REFERANS_MARKALAR.map((m) => m.sector))];
  const allSectors = ['Tümü', ...sectors];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-[420px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGES.premium} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white/60">Referanslar</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Award className="w-5 h-5" />
            <span>Güvenilir İş Ortakları</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
            Referanslarımız
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Türkiye&apos;nin önde gelen 25.000+ markası Trendmax ile dijital ticarette büyümeye devam ediyor.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {REFERANS_ISTATISTIKLER.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-orange-600 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marka Logoları */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Bize Güvenen Markalar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moda&apos;dan elektroniğe, kozmetikten gıdaya farklı sektörlerden binlerce marka Trendmax altyapısıyla satış yapıyor.
            </p>
          </div>

          {/* Sektör Filtre */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allSectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                  activeSector === sector
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMarkalar.map((marka, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all min-h-[160px]"
              >
                <img
                  src={marka.logo}
                  alt={marka.name}
                  className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                />
                <span className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{marka.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Başarı Hikayeleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizin Trendmax ile yaşadıkları dönüşüm hikayeleri.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BASARI_HIKAYELERI.map((hikaye, i) => (
              <div
                key={i}
                className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="absolute top-6 right-6 text-orange-400">
                  <Quote className="w-10 h-10" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed mb-6">&ldquo;{hikaye.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{hikaye.author}</div>
                    <div className="text-sm text-gray-500">{hikaye.role}</div>
                    <span className="inline-block mt-1 text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      {hikaye.sector}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurumsal CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Siz de Trendmax Ailesine Katılın
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            25.000+ markanın tercihi olan Trendmax ile e-ticaret yolculuğunuza bugün başlayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/fiyatlar"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold transition-all"
            >
              Paketleri İncele <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/sss"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-2xl font-bold transition-all"
            >
              SSS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referanslar;
