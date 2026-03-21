
import React from 'react';
import {
  ShoppingBag,
  ShieldCheck,
  Store,
  Globe,
} from 'lucide-react';
import { NavItem } from './types';

export const NAVIGATION_MENU: NavItem[] = [
  {
    title: "E-Ticaret Çözümleri",
    path: "/cozumler",
    items: [
      { title: "E-Ticaret Paketleri", path: "/cozumler/paketler", description: "Her ölçekteki işletme için uygun e-ticaret altyapısı.", icon: <ShoppingBag className="w-6 h-6 text-orange-600" /> },
      { title: "Sıfır Risk E-Ticaret Paketi", path: "/cozumler/sifir-risk", description: "Şirket kurmadan e-ticaret yapın!", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
      { title: "Pazar Yeri Pro Expert", path: "/cozumler/pazar-yeri-pro", description: "Pazaryerlerinde 24 saatte 10.000+ ürün ile satışa başlayın.", icon: <Store className="w-6 h-6 text-orange-600" /> },
      { title: "E-İhracat", path: "/cozumler/e-ihracat", description: "Satışa hazır ürünler ile Amazon ve Etsy Global'de yerinizi alın.", icon: <Globe className="w-6 h-6 text-green-600" /> },
    ]
  },
  {
    title: "Fiyatlar",
    path: "/fiyatlar",
  },
  {
    title: "Entegrasyonlar",
    path: "/entegrasyonlar",
  },
  {
    title: "Stoksuz Satış",
    path: "/stoksuz-satis",
  },
  {
    title: "E-İhracat",
    path: "/e-ihracat",
  },
  {
    title: "Kampüs",
    path: "/kampus",
  }
];

export const CLIENT_LOGOS = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%231f2937'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EModaStore%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23ea580c'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3ETrendShop%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%230891b2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EStyleHub%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%237c3aed'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EFashionX%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23059669'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EMegaMarket%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23dc2626'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EShopMax%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%231f2937'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EModaStore%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23ea580c'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3ETrendShop%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%230891b2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EStyleHub%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%237c3aed'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EFashionX%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23059669'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EMegaMarket%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='60' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23dc2626'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='white'%3EShopMax%3C/text%3E%3C/svg%3E",
];
