/** `public/theme/` — ana sayfa “Mutlu Müşteriler” tema marquee şeridi */
export const THEME_MARQUEE_IMAGES = [
  '/theme/butik.png',
  '/theme/aqua.png',
  '/theme/telefon.png',
  '/theme/mobilya.png',
  '/theme/petshop.png',
  '/theme/soft.png',
  '/theme/defaukt.png',
];

/** Demo tema görüntüleri - sektör kartları vb. */
export const DEMO_TEMA_IMAGES = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&h=250&q=80',
];

/** Ana sayfa paket özeti - ilk 3 özellik + fiyat */
export const HOME_PACKAGES = [
  { title: 'Pazar Yeri Stoksuz E-Ticaret Birebir Eğitim Paketi', price: '12.500', features: ['Şirket Kuruluşu', '2 Pazar Yeri Mağaza Açılışı', '8.000+ Hazır Ürün'], highlight: false },
  { title: 'Sıfır Sermaye E-Ticaret Sitesi Paketi', price: '18.500', features: ['24 Saatte Hazır E-Ticaret Sitesi', '8.000+ Farklı Hazır Ürün', 'Şirket Kurmak Yok, Vergi Yok'], highlight: true },
  { title: "Full + Full 2'si Bir Arada Paketi", price: '28.500', features: ['Pazar Yeri + E-Ticaret Sitesi', 'Tüm Eğitimler Dahil', 'Kargo ve Depolama Hizmeti'], highlight: false },
];

/** Ana sayfa entegrasyon şeritleri — görseller `public/logos/integrations/` altında */
export type HomeIntegrationLogo = {
  name: string;
  category: 'Pazaryeri' | 'Kargo';
  /** Vite public kökü: /logos/... */
  logoUrl: string;
};

export const ENTEGRASYON_LOGOS: HomeIntegrationLogo[] = [
  { name: 'Trendyol', category: 'Pazaryeri', logoUrl: '/logos/integrations/trendyol.svg' },
  { name: 'Hepsiburada', category: 'Pazaryeri', logoUrl: '/logos/integrations/hepsiburada.svg' },
  { name: 'N11', category: 'Pazaryeri', logoUrl: '/logos/integrations/n11.svg' },
  { name: 'GittiGidiyor', category: 'Pazaryeri', logoUrl: '/logos/integrations/gittigidiyor.svg' },
  { name: 'Amazon', category: 'Pazaryeri', logoUrl: '/logos/integrations/amazon.svg' },
  { name: 'Çiçeksepeti', category: 'Pazaryeri', logoUrl: '/logos/integrations/ciceksepeti.svg' },
  { name: 'Aras Kargo', category: 'Kargo', logoUrl: '/logos/integrations/aras.svg' },
  { name: 'Yurtiçi Kargo', category: 'Kargo', logoUrl: '/logos/integrations/yurtici.svg' },
  { name: 'MNG Kargo', category: 'Kargo', logoUrl: '/logos/integrations/mng.svg' },
  { name: 'PTT Kargo', category: 'Kargo', logoUrl: '/logos/integrations/ptt.svg' },
  { name: 'Sürat Kargo', category: 'Kargo', logoUrl: '/logos/integrations/surat.svg' },
  { name: 'UPS', category: 'Kargo', logoUrl: '/logos/integrations/ups.svg' },
];
