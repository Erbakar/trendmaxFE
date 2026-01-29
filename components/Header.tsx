
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, TrendingUp } from 'lucide-react';
import { NAVIGATION_MENU } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Trendmax Style */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setActiveMenu(null)}>
            <div className="bg-orange-600 text-white p-1.5 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" strokeWidth={3} />
            </div>
            <div className="text-2xl font-black tracking-tight flex items-baseline">
              <span className="text-gray-900">Trend</span>
              <span className="text-orange-600">max</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {NAVIGATION_MENU.map((menu) => (
              <div 
                key={menu.title} 
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setActiveMenu(menu.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors">
                  {menu.title}
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === menu.title ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMenu === menu.title && menu.items && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {menu.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="flex items-start p-3 rounded-xl hover:bg-orange-50 transition-colors group/item"
                      >
                        <div className="p-2 bg-gray-50 rounded-lg group-hover/item:bg-white transition-colors">
                          {React.cloneElement(subItem.icon as React.ReactElement, { className: (subItem.icon as any).props.className.replace('text-orange-600', 'text-orange-600') })}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-bold text-gray-900">{subItem.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{subItem.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-semibold text-gray-700 hover:text-orange-600">Giriş Yap</button>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-black hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 active:scale-95">
              Ücretsiz Dene
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg bg-gray-50 text-gray-900">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {NAVIGATION_MENU.map((menu) => (
              <div key={menu.title} className="space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3">{menu.title}</p>
                {menu.items?.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center p-4 rounded-xl hover:bg-orange-50 active:bg-orange-100 transition-colors"
                  >
                    {React.cloneElement(subItem.icon as React.ReactElement, { className: 'w-5 h-5 text-orange-600' })}
                    <span className="ml-4 text-sm font-bold text-gray-800">{subItem.title}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
              <button className="w-full text-center font-bold text-gray-700 py-3">Giriş Yap</button>
              <button className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-100">Ücretsiz Dene</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
