/** Eğitim & Stoksuz Paketleri (Pazar Yeri, Sıfır Sermaye, Full+Full) — Paketler & çözüm sayfaları */

export type EgitimStoksuzPaket = {
  id: string;
  title: string;
  price: string;
  highlight: boolean;
  features: string[];
};

export const EGITIM_STOKSUZ_PACKAGES: EgitimStoksuzPaket[] = [
  {
    id: 'pazaryeri',
    title: 'Pazar Yeri Stoksuz E-Ticaret Birebir Eğitim Paketi',
    price: '12.500',
    highlight: false,
    features: [
      'Şirket Kuruluşu',
      '2 Pazar Yeri Mağaza Açılışı',
      'Ücretsiz Entegratör Yazılım Kurulumu',
      'Ücretsiz Logo Tasarımı',
      'Ürün Yükleme Eğitimi',
      'Trendyol Panel Eğitimi & Ürün Yükleme',
      'Gittigidiyor Panel Eğitimi & Ürün Yükleme',
      'Satış Garantili Ürün Desteği',
      "5 Farklı Sektör, 50'den Fazla Kategori",
      "8.000 + Hazır Farklı Ürün",
      'Tedarikçi İlişkileri',
      'Kar Marjı Düzenleme & Finans Eğitimi',
      'Kargo ve Sevkiyat',
      'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)',
      'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim',
      'Tüm Paketlerde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'sifir-sermaye',
    title: 'Sıfır Sermaye E-Ticaret Sitesi Paketi',
    price: '18.500',
    highlight: true,
    features: [
      '24 Saatte Hazır E-Ticaret Sitesi',
      "8.000 + Farklı Hazır Ürün",
      'Hazır Ödeme Alt Yapısı',
      '1 Yıllık Hosting Hizmeti',
      'Ücretsiz Logo Tasarımı',
      'Kargo ve Lojistik Hizmeti',
      'Şirket Kurmak Yok',
      'Vergi Yok',
      'Kargo ve Depolama Hizmeti',
      'Tedarikçi Desteği Hizmeti',
      "5 Farklı Sektör, 50'den Fazla Kategori",
      'Kargo ve Sevkiyat',
      'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)',
      'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim',
      'Tüm Paketlerde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'full-full',
    title: "Full + Full 2'si Bir Arada Paketi",
    price: '28.500',
    highlight: false,
    features: [
      'Şirket Kuruluşu',
      '2 Pazar Yeri Mağaza Açılışı',
      'Ücretsiz Entegratör Yazılım Kurulumu',
      'Ücretsiz Logo Tasarımı',
      'Ürün Yükleme Eğitimi',
      'Trendyol Panel Eğitimi & Ürün Yükleme',
      'Gittigidiyor Panel Eğitimi & Ürün Yükleme',
      'Satış Garantili Ürün Desteği',
      "5 Farklı Sektör, 50'den Fazla Kategori",
      'Tedarikçi İlişkileri',
      'Kar Marjı Düzenleme & Finans Eğitimi',
      'Kargo ve Sevkiyat',
      '24 Saatte Hazır E-Ticaret Sitesi',
      "8.000 + Farklı Hazır Ürün",
      '1 Yıllık Hosting Hizmeti',
      'Şirket Kurmak Yok, Vergi Yok',
      'Kargo ve Depolama Hizmeti',
      'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)',
      'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim',
      'Tüm Paketlerde %15 İndirim Hakkı',
    ],
  },
];
