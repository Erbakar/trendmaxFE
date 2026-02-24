
import React from 'react';
import { 
  ShoppingBag, 
  Globe, 
  Crown, 
  Zap, 
  Smartphone, 
  Truck, 
  Settings, 
  Search, 
  Palette, 
  BarChart 
} from 'lucide-react';
import { NavItem } from './types';

export const NAVIGATION_MENU: NavItem[] = [
  {
    title: "E-Ticaret Çözümleri",
    path: "/cozumler",
    items: [
      { title: "E-Ticaret Paketleri", path: "/cozumler/paketler", description: "Her ölçekteki işletme için uygun e-ticaret altyapısı.", icon: <ShoppingBag className="w-6 h-6 text-orange-600" /> },
      { title: "Premium E-Ticaret Paketleri", path: "/cozumler/premium", description: "Büyük ölçekli işletmeler için yüksek performans.", icon: <Crown className="w-6 h-6 text-yellow-600" /> },
      { title: "Özel E-Ticaret Çözümleri", path: "/cozumler/ozel", description: "İşletmenize özel butik geliştirme süreçleri.", icon: <Settings className="w-6 h-6 text-purple-600" /> },
      { title: "E-İhracat Paketleri", path: "/cozumler/e-ihracat", description: "Sınırları aşın, dünyaya satış yapın.", icon: <Globe className="w-6 h-6 text-green-600" /> },
    ]
  },
  {
    title: "Fiyatlar",
    path: "/fiyatlar",
  },
  {
    title: "Premium Çözümler",
    path: "/premium",
    items: [
      { title: "Native Mobil Uygulama", path: "/premium/mobil", description: "iOS & Android için yüksek performanslı uygulamalar.", icon: <Smartphone className="w-6 h-6 text-orange-600" /> },
      { title: "Entegrasyon Çözümleri", path: "/premium/entegrasyon", description: "ERP, Kargo ve Ödeme sistemleri ile tam uyum.", icon: <Truck className="w-6 h-6 text-red-500" /> },
      { title: "SEO Yönetim Araçları", path: "/premium/seo", description: "Arama motorlarında zirveye yerleşin.", icon: <Search className="w-6 h-6 text-cyan-500" /> },
      { title: "Özel Temalar", path: "/premium/temalar", description: "Modern ve dönüşüm odaklı tasarım seçenekleri.", icon: <Palette className="w-6 h-6 text-pink-500" /> },
    ]
  },
  {
    title: "Referanslar",
    path: "/referanslar",
    items: [
      { title: "Müşteri Logoları", path: "/referanslar/logolar", description: "Bize güvenen binlerce marka.", icon: <ShoppingBag className="w-6 h-6 text-gray-600" /> },
      { title: "Vaka Çalışmaları", path: "/referanslar/vaka", description: "Başarıya giden yolda gerçek hikayeler.", icon: <BarChart className="w-6 h-6 text-orange-600" /> },
      { title: "Başarı Hikayeleri", path: "/referanslar/hikayeler", description: "Müşterilerimizin büyüme serüvenleri.", icon: <Crown className="w-6 h-6 text-yellow-500" /> },
    ]
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
