import React from 'react';
import { ArrowRight, ChevronRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroAction {
  label: string;
  to: string;
}

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; path?: string }[];
  icon?: LucideIcon;
  badge?: string;
  image?: string;
  imagePosition?: string;
  primaryAction?: HeroAction;
  secondaryActionLabel?: string;
  showActions?: boolean;
  compact?: boolean;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  breadcrumb = [],
  icon: Icon,
  badge = 'Trendmax Çözümü',
  image,
  imagePosition = 'center',
  primaryAction = { label: 'Paketleri İncele', to: '/fiyatlar' },
  secondaryActionLabel = 'Detayları Gör',
  showActions = true,
  compact = false,
}) => {
  const scrollToContent = () => {
    document.getElementById('icerik')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className={`page-hero relative isolate flex overflow-hidden bg-[#07101f] text-white ${
        compact ? 'min-h-[390px]' : 'min-h-[500px] lg:min-h-[540px]'
      }`}
    >
      {image && (
        <div className="absolute inset-0 -z-20 lg:left-[35%]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
            fetchPriority="high"
          />
        </div>
      )}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#07101f_0%,rgba(7,16,31,0.98)_34%,rgba(7,16,31,0.78)_60%,rgba(7,16,31,0.34)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(234,88,12,0.2),transparent_30%)]" />
      <div className="page-hero-grid absolute inset-0 -z-10 opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

      <div className={`mx-auto flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 ${compact ? 'py-16 lg:py-20' : 'py-16 lg:py-24'}`}>
        {breadcrumb.length > 0 && (
          <nav aria-label="Sayfa yolu" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            <Link to="/" className="transition-colors hover:text-orange-400">Ana Sayfa</Link>
            {breadcrumb.map((item) => (
              <React.Fragment key={`${item.label}-${item.path ?? 'current'}`}>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
                {item.path ? (
                  <Link to={item.path} className="transition-colors hover:text-orange-400">{item.label}</Link>
                ) : (
                  <span className="text-orange-400">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-[760px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300 backdrop-blur-sm">
            {Icon && <Icon className="h-4 w-4" />}
            <span>{badge}</span>
          </div>

          <h1 className={`max-w-4xl font-black leading-[1.05] tracking-[-0.045em] text-white ${compact ? 'text-4xl md:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
            {title}
          </h1>
          <p className={`mt-6 max-w-2xl leading-relaxed text-slate-300 ${compact ? 'text-lg' : 'text-lg md:text-xl'}`}>
            {subtitle}
          </p>

          {showActions && (
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to={primaryAction.to}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_32px_rgba(234,88,12,0.26)] transition-all hover:-translate-y-0.5 hover:bg-orange-500 max-sm:w-full"
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={scrollToContent}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-black text-white backdrop-blur-md transition-colors hover:bg-white/14 max-sm:w-full"
              >
                {secondaryActionLabel}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
