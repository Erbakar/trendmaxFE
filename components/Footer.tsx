
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, TrendingUp } from 'lucide-react';
import { NAVIGATION_MENU } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-orange-600 text-white p-1.5 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" strokeWidth={3} />
              </div>
              <div className="text-2xl font-black tracking-tight flex items-baseline">
                <span className="text-white">Trend</span>
                <span className="text-orange-600">max</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Trendmax, Türkiye'nin en modern ve kurumsal e-ticaret çözümlerini sunar. Global standartlarda altyapımızla markanızı dijital dünyanın zirvesine taşıyoruz.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-slate-900 rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Links */}
          {NAVIGATION_MENU.slice(0, 3).map((menu) => (
            <div key={menu.title}>
              <h4 className="font-bold text-lg mb-8 text-white">{menu.title}</h4>
              <ul className="space-y-4">
                {menu.items?.length ? (
                  menu.items.map((item) => (
                    <li key={item.title}>
                      <Link to={item.path} className="text-slate-500 hover:text-orange-400 text-sm font-medium transition-colors">{item.title}</Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link to={menu.path} className="text-slate-500 hover:text-orange-400 text-sm font-medium transition-colors">{menu.title}</Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
          {/* Kampüs */}
          {NAVIGATION_MENU.filter((m) => m.title === "Kampüs").map((menu) => (
            <div key={menu.title}>
              <h4 className="font-bold text-lg mb-8 text-white">{menu.title}</h4>
              <ul className="space-y-4">
                {menu.items?.length ? (
                  menu.items.map((item) => (
                    <li key={item.title}>
                      <Link to={item.path} className="text-slate-500 hover:text-orange-400 text-sm font-medium transition-colors">{item.title}</Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link to={menu.path} className="text-slate-500 hover:text-orange-400 text-sm font-medium transition-colors">{menu.title}</Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-slate-900">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="p-3 bg-slate-900 rounded-full group-hover:bg-orange-600 transition-colors">
              <Phone className="w-5 h-5 text-orange-500 group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Bize Ulaşın</p>
              <p className="text-sm font-bold">0850 441 55 66</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="p-3 bg-slate-900 rounded-full group-hover:bg-orange-600 transition-colors">
              <Mail className="w-5 h-5 text-orange-500 group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">E-Posta</p>
              <p className="text-sm font-bold">info@trendmax.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="p-3 bg-slate-900 rounded-full group-hover:bg-orange-600 transition-colors">
              <MapPin className="w-5 h-5 text-orange-500 group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Lokasyon</p>
              <p className="text-sm font-bold">Maslak Tech Plaza, İstanbul</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-900 text-slate-600 text-xs font-bold gap-4">
          <p>© 2024 Trendmax Bilişim Teknolojileri A.Ş. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-6 flex-wrap gap-2">
            <Link to="/sss" className="hover:text-orange-500">SSS</Link>
            <a href="#" className="hover:text-orange-500">Kullanım Koşulları</a>
            <a href="#" className="hover:text-orange-500">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-orange-500">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
