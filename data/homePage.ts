/** Demo tema görüntüleri - marquee ve sektör kartları için */
export const DEMO_TEMA_IMAGES = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556742111-a301067d7105?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556742044-3c52e6a827ce?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&h=250&q=80',
];

/** Ana sayfa paket özeti - ilk 3 özellik + fiyat */
export const HOME_PACKAGES = [
  { title: 'Pazar Yeri Stoksuz E-Ticaret Birebir Eğitim Paketi', price: '8.500', features: ['Şirket Kuruluşu', '2 Pazar Yeri Mağaza Açılışı', '8.000+ Hazır Ürün'], highlight: false },
  { title: 'Sıfır Sermaye E-Ticaret Sitesi Paketi', price: '12.500', features: ['24 Saatte Hazır E-Ticaret Sitesi', '8.000+ Farklı Hazır Ürün', 'Şirket Kurmak Yok, Vergi Yok'], highlight: true },
  { title: "Full + Full 2'si Bir Arada Paketi", price: '18.000', features: ['Pazar Yeri + E-Ticaret Sitesi', 'Tüm Eğitimler Dahil', 'Kargo ve Depolama Hizmeti'], highlight: false },
  { title: 'Trendyol Profesyonel Kurulum Paketi', price: '18.500', features: ['Hesap Açılışı', '2K En Çok Satanlar Listesi', 'Sipariş & Müşteri Yönetimi'], highlight: false },
];

/** Pazaryeri / kargo — logo.clearbit.com/{domain} ile marka logoları (yüklenemezse isim gösterilir) */
export type HomeIntegrationLogo = {
  name: string;
  category: 'Pazaryeri' | 'Kargo';
  domain: string;
  /** Varsa doğrudan kullanılır (ör. resmi SVG CDN); yoksa logo.clearbit.com/{domain} */
  logoUrl?: string;
};

export const ENTEGRASYON_LOGOS: HomeIntegrationLogo[] = [
  { name: 'Trendyol', category: 'Pazaryeri', domain: 'trendyol.com' },
  { name: 'Hepsiburada', category: 'Pazaryeri', domain: 'hepsiburada.com' },
  { name: 'N11', category: 'Pazaryeri', domain: 'n11.com' },
  { name: 'GittiGidiyor', category: 'Pazaryeri', domain: 'gittigidiyor.com' },
  {
    name: 'Amazon',
    category: 'Pazaryeri',
    domain: 'amazon.com.tr',
    logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/amazon.svg',
  },
  { name: 'Çiçeksepeti', category: 'Pazaryeri', domain: 'ciceksepeti.com' },
  { name: 'Aras Kargo', category: 'Kargo', domain: 'aras.com.tr' },
  { name: 'Yurtiçi Kargo', category: 'Kargo', domain: 'yurticikargo.com' },
  { name: 'MNG Kargo', category: 'Kargo', domain: 'mng.com.tr' },
  { name: 'PTT Kargo', category: 'Kargo', domain: 'ptt.gov.tr' },
  { name: 'Sürat Kargo', category: 'Kargo', domain: 'suratkargo.com.tr' },
  {
    name: 'UPS',
    category: 'Kargo',
    domain: 'ups.com',
    logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/ups.svg',
  },
];
