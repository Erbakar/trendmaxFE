import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  CreditCard,
  Globe,
  Package,
  ShoppingBag,
  Store,
  Truck,
  Wallet,
} from 'lucide-react';

export type EntegrasyonBilgiSection = {
  id: string;
  name: string;
  categoryLabel: string;
  /** null ise görsel alanda yalnızca ikon kullanılır */
  logoUrl: string | null;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
  accentClass: string;
  icon: LucideIcon;
};

/** Entegrasyonlar sayfası — Paketler “bilgi merkezi” düzenine paralel bloklar */
export const ENTEGRASYON_BILGI_SECTIONS: EntegrasyonBilgiSection[] = [
  {
    id: 'trendyol',
    name: 'Trendyol',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/trendyol.svg',
    paragraphs: [
      'Trendyol entegrasyonu ile ürünlerinizi, stok ve fiyat bilgilerinizi mağazanız ile pazaryeri arasında çift yönlü senkronize edersiniz. Siparişler panelinize düştüğünde kargo ve fatura süreçlerine tek akıştan devam edebilirsiniz.',
      'Kampanya dönemlerinde toplu güncelleme, kategori eşleştirme ve performans raporları ile satış operasyonunuzu merkezi yönetirsiniz.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'E-ticaret ve online satış',
    accentClass: 'from-orange-500 to-amber-600',
    icon: Store,
  },
  {
    id: 'hepsiburada',
    name: 'Hepsiburada',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/hepsiburada.svg',
    paragraphs: [
      'Hepsiburada mağazanızdaki listelerinizi Trendmax panelinden yönetir; stok uyumsuzluğu ve manuel güncelleme yükünü azaltırsınız.',
      'Sipariş durumları, iade talepleri ve müşteri mesajları için bildirimler tek ekranda toplanır, ekibiniz aynı veri üzerinden çalışır.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Alışveriş ve paket',
    accentClass: 'from-orange-600 to-red-600',
    icon: ShoppingBag,
  },
  {
    id: 'n11',
    name: 'N11',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/n11.svg',
    paragraphs: [
      'N11 üzerinden gelen siparişler otomatik olarak sipariş havuzunuza aktarılır; ürün görselleri ve açıklamaları şablonlarla hızlıca güncellenebilir.',
      'Çoklu mağaza veya marka yapınızda her kanal için ayrı kurallar tanımlayıp raporlamayı tek rapor setinde birleştirebilirsiniz.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dijital mağaza',
    accentClass: 'from-violet-600 to-purple-700',
    icon: Package,
  },
  {
    id: 'gittigidiyor',
    name: 'GittiGidiyor',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/gittigidiyor.svg',
    paragraphs: [
      'GittiGidiyor mağazanızla ürün ve sipariş köprüsü kurarak açık artırma ve sabit fiyatlı ilanlarınızı merkezi envanterle ilişkilendirirsiniz.',
      'Müşteri soruları ve sipariş onayları için zaman kazanırsınız; hata riski azalır ve operasyon ekibiniz tek panelden ilerler.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online alışveriş',
    accentClass: 'from-blue-600 to-indigo-700',
    icon: Store,
  },
  {
    id: 'amazon',
    name: 'Amazon',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/amazon.svg',
    paragraphs: [
      'Amazon.com.tr ve global pazarlar için listeleme, stok ve fiyat güncellemelerini API uyumlu akışla yönetirsiniz. Çoklu ülke ve depo senaryolarına göre kurallar tanımlanabilir.',
      'FBA veya kendi kargoladığınız model fark etmeksizin sipariş ve iade süreçleri panelinizde izlenir, muhasebe ve ERP çıktılarıyla uyumlu hale getirilebilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5d62?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Küresel ticaret',
    accentClass: 'from-amber-500 to-orange-700',
    icon: Globe,
  },
  {
    id: 'ciceksepeti',
    name: 'Çiçeksepeti',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/ciceksepeti.svg',
    paragraphs: [
      'Çiçeksepeti kanalındaki ürün ve siparişlerinizi diğer satış kanallarınızla aynı stok mantığında tutarsınız; sezonsal ürün ve hediye kategorilerinde hızlı güncelleme yapabilirsiniz.',
      'Teslimat zaman pencereleri ve özel gün yoğunluklarında toplu işlemler ve bildirimler operasyon yükünü azaltır.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hediye ve perakende',
    accentClass: 'from-fuchsia-600 to-pink-600',
    icon: ShoppingBag,
  },
  {
    id: 'aras',
    name: 'Aras Kargo',
    categoryLabel: 'Kargo',
    logoUrl: '/logos/integrations/aras.svg',
    paragraphs: [
      'Aras Kargo ile anlaşmalı gönderilerinizde barkod oluşturma, takip numarası alma ve müşteriye otomatik bilgilendirme adımlarını sistem üzerinden tamamlarsınız.',
      'Toplu sevkiyat ve iade kargo süreçlerinde manuel veri girişi azalır; kargo durumu sipariş kartına işlenir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kargo ve depo',
    accentClass: 'from-red-600 to-rose-700',
    icon: Truck,
  },
  {
    id: 'yurtici',
    name: 'Yurtiçi Kargo',
    categoryLabel: 'Kargo',
    logoUrl: '/logos/integrations/yurtici.svg',
    paragraphs: [
      'Yurtiçi Kargo entegrasyonu ile gönderi oluşturma ve etiket yazdırma işlemlerini sipariş bazında tetikleyebilir, şube ve desi bilgilerini otomatik doldurabilirsiniz.',
      'Teslimat ve iade istatistikleri raporlanarak müşteri deneyimi ve maliyet analizi için veri üretir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Lojistik',
    accentClass: 'from-red-500 to-orange-600',
    icon: Truck,
  },
  {
    id: 'mng',
    name: 'MNG Kargo',
    categoryLabel: 'Kargo',
    logoUrl: '/logos/integrations/mng.svg',
    paragraphs: [
      'MNG Kargo bağlantısı sayesinde sipariş onayından sonra tek tıkla gönderi kaydı açılır; müşteri takip linki SMS veya e-posta ile iletilebilir.',
      'Yüksek hacimli günlerde toplu barkod üretimi ve iptal / değişiklik senaryoları yönetilebilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kargo taşıma',
    accentClass: 'from-yellow-500 to-orange-600',
    icon: Truck,
  },
  {
    id: 'ptt',
    name: 'PTT Kargo',
    categoryLabel: 'Kargo',
    logoUrl: '/logos/integrations/ptt.svg',
    paragraphs: [
      'PTT Kargo ile yaygın şube ağından faydalanan işletmeler, gönderi kodlarını ve teslimat durumlarını panel üzerinden takip eder.',
      'Kısmi iade ve kapıda ödeme senaryolarında süreçler sipariş satırı ile eşleştirilerek muhasebe uyumu kolaylaştırılır.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Posta ve teslimat',
    accentClass: 'from-blue-800 to-slate-900',
    icon: Package,
  },
  {
    id: 'surat',
    name: 'Sürat Kargo',
    categoryLabel: 'Kargo',
    logoUrl: '/logos/integrations/surat.svg',
    paragraphs: [
      'Sürat Kargo entegrasyonu ile gönderi oluşturma ve fiyat önizleme adımları sipariş ekranına gömülür; operasyon ekibi ek yazılım açmadan işlem yapar.',
      'Çoklu depo çıkış noktası kullanan firmalar için şube seçimi kurallarla otomatikleştirilebilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Nakliye',
    accentClass: 'from-sky-600 to-blue-800',
    icon: Truck,
  },
  {
    id: 'ups',
    name: 'UPS',
    categoryLabel: 'Kargo',
    logoUrl: '/logos/integrations/ups.svg',
    paragraphs: [
      'UPS ile ulusal ve uluslararası gönderilerinizde etiket, gümrük evrakı ön bilgisi ve takip numarası süreçleri dijitalleştirilir.',
      'E-ihracat yapan mağazalar için ağırlık / boyut kuralları ve ülke bazlı servis seçenekleri tek akışta yönetilebilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Uluslararası kargo',
    accentClass: 'from-amber-700 to-yellow-900',
    icon: Globe,
  },
  {
    id: 'iyzico',
    name: 'iyzico',
    categoryLabel: 'Ödeme',
    logoUrl: null,
    paragraphs: [
      'iyzico sanal POS ve pazaryeri ödeme çözümleri ile taksit, 3D Secure ve iade işlemlerini güvenli ödeme altyapısı üzerinden yürütürsünüz.',
      'Ödeme sayfası deneyimi markanıza uyumlu tutulabilir; işlem geçmişi ve mutabakat raporları muhasebe süreçlerinize aktarılabilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Ödeme ve kart',
    accentClass: 'from-emerald-600 to-teal-700',
    icon: CreditCard,
  },
  {
    id: 'paytr',
    name: 'PayTR',
    categoryLabel: 'Ödeme',
    logoUrl: null,
    paragraphs: [
      'PayTR entegrasyonu ile kredi kartı, havale ve mobil ödeme seçeneklerini mağazanızda sunar; fraud ve limit yönetimi için sağlayıcı araçlarıyla uyumlu çalışırsınız.',
      'Tekrarlayan ödeme ve abonelik modelleri desteklenerek üyelik ve hizmet satışları kolaylaştırılabilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556742111-a301067d7105?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online ödeme',
    accentClass: 'from-cyan-600 to-blue-700',
    icon: Wallet,
  },
  {
    id: 'logo-tiger',
    name: 'Logo Tiger',
    categoryLabel: 'ERP / Muhasebe',
    logoUrl: null,
    paragraphs: [
      'Logo Tiger ile stok kartları, cari hesaplar ve fatura verileri senkronize edilerek e-ticaret ile muhasebe arasında çift kayıt riski azaltılır.',
      'Satış ve iade hareketleri muhasebe fişlerine uygun formatta aktarılabilir; dönem kapanışlarında manuel düzeltme ihtiyacı düşer.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'İş analitiği',
    accentClass: 'from-slate-600 to-slate-800',
    icon: Building2,
  },
  {
    id: 'param',
    name: 'Param',
    categoryLabel: 'Ödeme',
    logoUrl: null,
    paragraphs: [
      'Param altyapısı ile sanal POS ve alternatif ödeme yöntemleri mağazanıza eklenir; kampanya ve komisyon kuralları iş modelinize göre yapılandırılabilir.',
      'Çoklu POS veya alt bayi yapılarında yetkilendirme ve raporlama merkezi panelden yönetilebilir.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Finans',
    accentClass: 'from-indigo-600 to-violet-700',
    icon: CreditCard,
  },
];
