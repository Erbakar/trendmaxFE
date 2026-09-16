import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, Phone, TrendingUp, X } from 'lucide-react';
import { NAVIGATION_MENU } from '../constants';
import { COMPANY_CONTACT } from '../data/company';
import { PAZARYERI_DEMO_URL } from '../data/homePage';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isDemoMenuOpen, setIsDemoMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setIsDemoMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-navigation-open', isMobileMenuOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-navigation-open');
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center gap-6">
          <Link to="/" className="group flex min-h-11 shrink-0 items-center gap-2.5" aria-label="Trendmax ana sayfa">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-[0_8px_20px_rgba(234,88,12,0.28)] transition-transform group-hover:-translate-y-0.5">
              <TrendingUp className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="flex flex-col">
              <span className="text-[22px] font-black leading-none tracking-[-0.04em] text-slate-950">
                Trend<span className="text-orange-600">max</span>
              </span>
              <span className="mt-1 hidden text-[8px] font-extrabold uppercase tracking-[0.18em] text-slate-400 sm:block">E-Ticaret Teknolojileri</span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex" aria-label="Ana menü">
            {NAVIGATION_MENU.map((menu) => {
              const menuActive = isActive(menu.path) || menu.items?.some((item) => isActive(item.path));
              return (
                <div
                  key={menu.title}
                  className="relative flex h-20 items-center"
                  onMouseEnter={() => menu.items?.length && setActiveMenu(menu.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {menu.items?.length ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveMenu(menu.title)}
                        onFocus={() => setActiveMenu(menu.title)}
                        aria-expanded={activeMenu === menu.title}
                        className={`flex items-center rounded-lg px-3 py-2.5 text-[13px] font-bold transition-colors ${menuActive ? 'bg-orange-50 text-orange-700' : 'text-slate-700 hover:bg-slate-50 hover:text-orange-600'}`}
                      >
                        {menu.title}
                        <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${activeMenu === menu.title ? 'rotate-180' : ''}`} />
                      </button>
                      {activeMenu === menu.title && (
                        <div className="absolute left-0 top-[68px] w-[620px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
                          <div className="mb-2 flex items-center justify-between rounded-xl bg-slate-950 px-5 py-4 text-white">
                            <div>
                              <p className="text-sm font-black">E-Ticaret Çözümleri</p>
                              <p className="mt-1 text-xs text-slate-400">İhtiyacınıza uygun altyapıyı keşfedin.</p>
                            </div>
                            <Link to="/cozumler" className="inline-flex items-center gap-1 text-xs font-bold text-orange-400">
                              Tümünü Gör <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {menu.items.map((subItem) => (
                              <Link key={subItem.title} to={subItem.path} className="group/item flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-orange-50">
                                <span className="rounded-lg border border-slate-100 bg-slate-50 p-2 group-hover/item:border-orange-100 group-hover/item:bg-white">
                                  {React.cloneElement(subItem.icon as React.ReactElement<{ className?: string }>, { className: 'h-5 w-5 text-orange-600' })}
                                </span>
                                <span>
                                  <span className="block text-sm font-black text-slate-900">{subItem.title}</span>
                                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">{subItem.description}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={menu.path} className={`rounded-lg px-3 py-2.5 text-[13px] font-bold transition-colors ${menuActive ? 'bg-orange-50 text-orange-700' : 'text-slate-700 hover:bg-slate-50 hover:text-orange-600'}`}>
                      {menu.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
            <Link to="/iletisim" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-800 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700">
              <Phone className="h-4 w-4" /> İletişim
            </Link>
            <div className="relative" onMouseEnter={() => setIsDemoMenuOpen(true)} onMouseLeave={() => setIsDemoMenuOpen(false)}>
              <button
                type="button"
                onClick={() => setIsDemoMenuOpen(true)}
                onFocus={() => setIsDemoMenuOpen(true)}
                aria-expanded={isDemoMenuOpen}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(234,88,12,0.22)] transition-all hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Demo Merkezi <ChevronDown className={`h-4 w-4 transition-transform ${isDemoMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDemoMenuOpen && (
                <div className="absolute right-0 top-[46px] w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
                  <Link to="/premium/temalar" target="_blank" rel="noopener noreferrer" className="block rounded-xl p-4 hover:bg-orange-50">
                    <span className="block text-sm font-black text-slate-900">Mağaza Demoları</span>
                    <span className="mt-1 block text-xs text-slate-500">Sektörel tema örneklerini inceleyin.</span>
                  </Link>
                  <a href={PAZARYERI_DEMO_URL} target="_blank" rel="noopener noreferrer" className="block rounded-xl p-4 hover:bg-orange-50">
                    <span className="block text-sm font-black text-slate-900">Entegratör Demo</span>
                    <span className="mt-1 block text-xs text-slate-500">PazarYeri panelini keşfedin.</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMobileMenuOpen}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 xl:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden">
          <div className="mx-auto max-w-2xl space-y-3 px-4 py-5 sm:px-6">
            {NAVIGATION_MENU.map((menu) => (
              <div key={menu.title}>
                {menu.items?.length ? (
                  <>
                    <Link to={menu.path} className="mb-2 flex items-center justify-between px-3 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                      {menu.title} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <div className="grid gap-1 sm:grid-cols-2">
                      {menu.items.map((subItem) => (
                        <Link key={subItem.title} to={subItem.path} className="flex items-center gap-3 rounded-xl p-3.5 hover:bg-orange-50">
                          {React.cloneElement(subItem.icon as React.ReactElement<{ className?: string }>, { className: 'h-5 w-5 text-orange-600' })}
                          <span className="text-sm font-black text-slate-800">{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={menu.path} className={`block rounded-xl px-4 py-3.5 text-sm font-black ${isActive(menu.path) ? 'bg-orange-50 text-orange-700' : 'text-slate-800 hover:bg-slate-50'}`}>
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
              <Link to="/hakkimizda" className="rounded-xl border border-slate-200 px-5 py-3.5 text-center text-sm font-black text-slate-800">Hakkımızda</Link>
              <Link to="/sss" className="rounded-xl border border-slate-200 px-5 py-3.5 text-center text-sm font-black text-slate-800">Sıkça Sorulan Sorular</Link>
              <Link to="/premium/temalar" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-orange-600 px-5 py-3.5 text-center text-sm font-black text-white">Mağaza Demoları</Link>
              <a href={PAZARYERI_DEMO_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-950 px-5 py-3.5 text-center text-sm font-black text-white">
                Entegratör Demo <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </a>
            </div>
            <a href={COMPANY_CONTACT.phoneHref} className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-5 py-3 text-sm font-bold text-slate-600">
              <Phone className="h-4 w-4 text-orange-600" /> {COMPANY_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
