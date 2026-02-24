import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; path?: string }[];
  icon?: LucideIcon;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  breadcrumb = [],
  icon: Icon,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {breadcrumb.length > 0 && (
          <nav className="flex flex-wrap items-center gap-2 text-orange-400 text-sm font-bold mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                <span className="text-white/40">/</span>
                {item.path ? (
                  <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-white/60">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-8">
          {Icon && <Icon className="w-5 h-5" />}
          <span>Premium Çözüm</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/fiyatlar"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-orange-600/25 hover:scale-105"
          >
            Paketleri İncele
          </Link>
          <a
            href="#icerik"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Detayları Gör
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
