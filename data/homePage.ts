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

export type HomeSektorTemaCard = {
  image: string;
  href: string;
  /** img alt ve kart erişilebilir adı */
  title: string;
};

/** Ana sayfa “Sektörünüze Özel Çözümler” — demo mağazalar (yeni sekmede) */
export const HOME_SEKTOR_TEMA_CARDS: HomeSektorTemaCard[] = [
  { image: '/theme/butik-web.png', href: 'https://trendmaxtr.com/butik/', title: 'Butik demo mağazası' },
  { image: '/theme/mobilya-web.png', href: 'https://trendmaxtr.com/mobilya/', title: 'Mobilya demo mağazası' },
  { image: '/theme/telefon-web.png', href: 'https://trendmaxtr.com/telefon/', title: 'Telefon demo mağazası' },
  { image: '/theme/petshop-web.png', href: 'https://trendmaxtr.com/petshop/', title: 'Pet shop demo mağazası' },
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
