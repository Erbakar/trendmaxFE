import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { HERO_IMAGES } from '../data/heroImages';
import SikcaSorulanSorularGrid from '../components/SikcaSorulanSorularGrid';

const SSS: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGES.support} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/58 to-slate-900/46 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/15 via-transparent to-transparent z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white/60">SSS</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <HelpCircle className="w-5 h-5" />
            <span>Yardım Merkezi</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            E-ticaret paketleri ve pazaryeri eğitimleri hakkında merak ettiklerinize buradan ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <SikcaSorulanSorularGrid defaultOpenId="0-0" />
    </div>
  );
};

export default SSS;
