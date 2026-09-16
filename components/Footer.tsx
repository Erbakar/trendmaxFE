import React from 'react';
import { ArrowRight, ChevronDown, Headphones, Mail, MapPin, Phone, ReceiptText, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_CONTACT } from '../data/company';
import { PAZARYERI_DEMO_URL } from '../data/homePage';

type FooterNavLink =
  | { label: string; to: string; href?: never }
  | { label: string; href: string; to?: never };

const solutionLinks = [
  { label: 'E-Ticaret Paketleri', to: '/cozumler/paketler' },
  { label: 'Pazaryeri Entegrasyonları', to: '/entegrasyonlar' },
  { label: 'Stoksuz Satış', to: '/stoksuz-satis' },
  { label: 'E-İhracat', to: '/cozumler/e-ihracat' },
  { label: 'Premium Çözümler', to: '/premium' },
];

const resourceLinks: FooterNavLink[] = [
  { label: 'Fiyatlar ve Paketler', to: '/fiyatlar' },
  { label: 'Trendmax Kampüs', to: '/kampus' },
  { label: 'Tema Örnekleri', to: '/referanslar' },
  { label: 'Mağaza Demoları', to: '/premium/temalar' },
  { label: 'Entegratör Demo', href: PAZARYERI_DEMO_URL },
];

const corporateLinks = [
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
  { label: 'Sıkça Sorulan Sorular', to: '/sss' },
  { label: 'KVKK Aydınlatma Metni', to: '/yasal/kvkk-aydinlatma-metni' },
  { label: 'Gizlilik ve Güvenlik', to: '/yasal/gizlilik-ve-guvenlik' },
];

const footerColumns = [
  { title: 'Çözümler', links: solutionLinks },
  { title: 'Kaynaklar', links: resourceLinks },
  { title: 'Kurumsal', links: corporateLinks },
];

const FooterLink: React.FC<{ link: FooterNavLink; className: string }> = ({ link, className }) => (
  link.href ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>{link.label}</a>
  ) : (
    <Link to={link.to} className={className}>{link.label}</Link>
  )
);

const Footer: React.FC = () => (
  <footer className="bg-[#07101f] text-white">
    <div className="border-b border-white/8 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-4 py-4 sm:px-6 md:gap-px md:py-0 lg:px-8">
        {[
          { icon: ShieldCheck, title: 'Güvenli ödeme akışı', text: 'Korunan ve doğrulanan ödeme adımları' },
          { icon: ReceiptText, title: 'Şeffaf paket kapsamı', text: 'KDV dahil fiyat ve görünür sözleşmeler' },
          { icon: Headphones, title: 'Kurulum ve destek', text: 'Paket kapsamına uygun uzman desteği' },
        ].map((item) => (
          <div key={item.title} className="flex min-w-0 flex-col items-center gap-2 rounded-xl border border-white/8 bg-white/[0.025] px-2 py-3 text-center md:flex-row md:gap-4 md:rounded-none md:border-y-0 md:border-r-0 md:bg-transparent md:px-7 md:py-6 md:text-left md:first:border-l-0">
            <span className="rounded-lg border border-orange-400/20 bg-orange-500/10 p-2.5 text-orange-400 md:rounded-xl md:p-3"><item.icon className="h-4 w-4 md:h-5 md:w-5" /></span>
            <div className="min-w-0">
              <p className="text-[11px] font-black leading-tight text-white sm:text-xs md:text-sm">{item.title}</p>
              <p className="mt-1 hidden text-xs leading-relaxed text-slate-400 sm:block">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-8 lg:pt-20">
      <div className="grid gap-8 border-b border-white/8 pb-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.9fr] lg:gap-12 lg:pb-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Trendmax ana sayfa">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 shadow-[0_10px_28px_rgba(234,88,12,0.24)]">
              <TrendingUp className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="text-2xl font-black tracking-[-0.04em]">Trend<span className="text-orange-500">max</span></span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400 lg:mt-6 lg:leading-7">
            E-ticaret yazılımı, pazaryeri entegrasyonu, kurulum ve eğitim süreçlerini tek bir çözüm çatısı altında planlıyoruz.
          </p>
          <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.035] p-3.5 lg:mt-6 lg:p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">İşletmeci / Satıcı</p>
            <p className="mt-2 text-sm font-black text-slate-200">{COMPANY_CONTACT.legalName}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{COMPANY_CONTACT.brandName} markası üzerinden hizmet verir.</p>
          </div>
        </div>

        <div className="space-y-2 sm:col-span-2 lg:hidden">
          {footerColumns.map((column) => (
            <details key={column.title} className="group overflow-hidden rounded-xl border border-white/8 bg-white/[0.025]">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between px-4 text-sm font-black text-slate-200 [&::-webkit-details-marker]:hidden">
                {column.title}
                <ChevronDown className="h-4 w-4 text-orange-400 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="border-t border-white/8 px-4 py-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} className="flex min-h-11 items-center border-b border-white/5 text-sm font-medium text-slate-400 transition-colors last:border-b-0 hover:text-orange-400" />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="hidden lg:block">
            <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">{column.title}</h2>
            <ul className="mt-6 space-y-3.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} className="flex min-h-11 items-center text-sm font-medium text-slate-500 transition-colors hover:text-orange-400 lg:min-h-0" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid gap-2 border-b border-white/8 py-6 md:grid-cols-2 md:gap-4 md:py-8 lg:grid-cols-4">
        <a href={COMPANY_CONTACT.phoneHref} className="group flex min-h-14 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.035]">
          <span className="rounded-lg bg-white/5 p-2.5 text-orange-400"><Phone className="h-4 w-4" /></span>
          <span><span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Telefon</span><span className="mt-1 block text-sm font-bold text-slate-200">{COMPANY_CONTACT.phoneDisplay}</span></span>
        </a>
        <a href={`mailto:${COMPANY_CONTACT.email}`} className="group flex min-h-14 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.035]">
          <span className="rounded-lg bg-white/5 p-2.5 text-orange-400"><Mail className="h-4 w-4" /></span>
          <span><span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">E-posta</span><span className="mt-1 block text-sm font-bold text-slate-200">{COMPANY_CONTACT.email}</span></span>
        </a>
        <div className="flex items-start gap-3 rounded-xl p-2">
          <span className="rounded-lg bg-white/5 p-2.5 text-orange-400"><MapPin className="h-4 w-4" /></span>
          <span><span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Bursa Ofisi</span><span className="mt-1 block text-xs leading-relaxed text-slate-300">{COMPANY_CONTACT.bursaAddress}</span></span>
        </div>
        <div className="flex items-start gap-3 rounded-xl p-2">
          <span className="rounded-lg bg-white/5 p-2.5 text-orange-400"><MapPin className="h-4 w-4" /></span>
          <span><span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">London Office</span><span className="mt-1 block text-xs leading-relaxed text-slate-300">{COMPANY_CONTACT.londonAddress}</span></span>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:pt-8">
        <p className="text-center lg:text-left">© 2026 Trendmax. Tüm hakları saklıdır.</p>
        <div className="grid grid-cols-2 gap-x-4 lg:flex lg:flex-wrap lg:gap-x-5 lg:gap-y-2 lg:pr-36">
          <Link to="/yasal/kullanim-kosullari" className="inline-flex min-h-11 items-center hover:text-orange-400">Kullanım Koşulları</Link>
          <Link to="/yasal/on-bilgilendirme-formu" className="inline-flex min-h-11 items-center hover:text-orange-400">Ön Bilgilendirme</Link>
          <Link to="/yasal/mesafeli-satis-sozlesmesi" className="inline-flex min-h-11 items-center hover:text-orange-400">Mesafeli Satış</Link>
          <Link to="/yasal/teslimat-politikasi" className="inline-flex min-h-11 items-center hover:text-orange-400">Teslimat</Link>
          <Link to="/yasal/iade-politikasi" className="inline-flex min-h-11 items-center hover:text-orange-400">İptal ve İade</Link>
          <Link to="/iletisim" className="inline-flex min-h-11 items-center gap-1 font-bold text-slate-300 hover:text-orange-400">Bize Ulaşın <ArrowRight className="h-3 w-3" /></Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
