/**
 * E-Ticaret Paket Özellikleri — yazılım paketleri (Başlangıç, Uzman, Üst Düzey)
 */

export interface YazilimPaket {
  id: string;
  title: string;
  price: string;
  highlight: boolean;
  features: string[];
}

export const YAZILIM_PACKAGES: YazilimPaket[] = [
  {
    id: 'basic',
    title: 'Başlangıç',
    price: '19.500',
    highlight: false,
    features: [
      'Trendyol Entegrasyonu',
      '%100 Mobil Uyumlu (Full Responsive Tasarım)',
      'Mobil Uyumlu Yönetim Paneli',
      'PayTR, İyzico, Shopier Sanal POS Entegrasyonu',
      'Kapıda Ödeme & Havale/EFT Seçenekleri',
      'Google SEO Uyumlu Altyapı',
      'E-Posta Bildirim Sistemi',
      '7/24 Destek Hizmeti',
      'Manuel ve Excel ile Ürün Yükleme',
      'Tüm Trendmax Paketlerinde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'plus',
    title: 'Uzman',
    price: '27.500',
    highlight: true,
    features: [
      'Başlangıç paketindeki tüm özellikler dahil',
      'Trendmax Dropshipping (Hazır 15.000 Ürün)',
      '2 Pazar Yeri Entegrasyonu',
      'E-fatura & E-arşiv GİB Entegrasyonu',
      'XML Import / Export Sistemi',
      'Cimri & Akakçe XML Entegrasyonu',
      'Blog Yönetim Modülü',
      'SSS (Sıkça Sorulan Sorular) Modülü',
      'Sınırsız Ürün Varyantları',
      'Favorilere Ekleme Özelliği',
      'Toplu Ürün Güncelleme Modülü',
      '15.000 Ürün ve Kategori Girişi',
      '9 Farklı Entegrasyon',
      'Tüm Trendmax Paketlerinde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'extreme',
    title: 'Üst Düzey',
    price: '35.500',
    highlight: false,
    features: [
      'Uzman paketindeki tüm özellikler dahil',
      'Çift Taraflı Pazar Yeri Entegrasyonu',
      'Dropshipping 15.000 Ürün + 2 XML Ürün Kaynağı',
      'Trendmax AI (Yapay Zeka Araçları)',
      '20 Adet E-Posta Hesabı',
      '10 GB Depolama Alanı',
      '5000 GB / Yıl Trafik',
      'Sınırsız Ürün',
      'Tema Özelleştirme',
      'Tüm Trendmax Paketlerinde %15 İndirim Hakkı',
    ],
  },
];
