import type { EntegrasyonBilgiSection } from './entegrasyonlarBilgi';
import { CreditCard, Globe, Languages, Truck } from 'lucide-react';

/** E-İhracat sayfası — Entegrasyonlar “bilgi merkezi” düzeni ile uyumlu bloklar */
export const EIHRACAT_BILGI_SECTIONS: EntegrasyonBilgiSection[] = [
  {
    id: 'global-pazaryerleri',
    name: 'Amazon ve küresel pazaryerleri',
    categoryLabel: 'Pazaryeri',
    logoUrl: '/logos/integrations/amazon.svg',
    paragraphs: [
      'AB, ABD, İngiltere ve Orta Doğu gibi bölgelerde faaliyet gösteren pazaryerlerinde mağaza ve listeleme süreçlerinizi tek panelden takip edersiniz. Ürün, stok ve sipariş akışı API uyumlu senkronizasyonla güncel kalır.',
      'Kampanya dönemleri, ülke bazlı fiyatlandırma ve çoklu depo senaryolarında kurallar tanımlayarak e-ihracat operasyonunuzu merkezi yönetirsiniz.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online satış ve global ticaret',
    accentClass: 'from-orange-500 to-amber-600',
    icon: Globe,
  },
  {
    id: 'coklu-dil',
    name: 'Çoklu dil ve yerelleştirme',
    categoryLabel: 'Deneyim',
    logoUrl: null,
    paragraphs: [
      'Mağaza ve ürün sayfalarınızı hedef ülkeye göre dil ve para birimiyle uyumlu hale getirerek dönüşüm oranını artırırsınız. Otomatik çeviri ve manuel düzeltme akışlarıyla içerik kalitesini korursunuz.',
      'Yerel ölçü birimleri, KDV / satış vergisi gösterimi ve teslimat bilgilerini ziyaretçi diline göre sunarak güven oluşturursunuz.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dünya çapında ticaret',
    accentClass: 'from-emerald-600 to-teal-700',
    icon: Languages,
  },
  {
    id: 'global-odeme',
    name: 'Global ödeme ve uyumluluk',
    categoryLabel: 'Ödeme',
    logoUrl: null,
    paragraphs: [
      'PayPal, kart ağları ve bölgesel ödeme yöntemleriyle müşterilerinizin tercih ettiği kanallardan tahsilat alırsınız. Döviz ve mutabakat süreçlerini tek rapor setinde izlersiniz.',
      'E-ihracat kapsamında fatura, e-arşiv ve yurt dışı satış bildirimleri için süreçlerinizi şeffaf ve izlenebilir tutmanıza yardımcı oluruz.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Ödeme ve güvenli işlem',
    accentClass: 'from-violet-600 to-purple-700',
    icon: CreditCard,
  },
  {
    id: 'uluslararasi-kargo',
    name: 'Uluslararası kargo ve gümrük',
    categoryLabel: 'Lojistik',
    logoUrl: '/logos/integrations/ups.svg',
    paragraphs: [
      'UPS ve anlaşmalı uluslararası taşıyıcılarla gönderi oluşturma, barkod ve takip bilgisini siparişle ilişkilendirme tek akışta yapılır. Ağırlık, boyut ve ülke kurallarına göre servis seçimi kolaylaşır.',
      'Gümrük beyanı ve teslimat süreleri hakkında operasyon ekibinize net bilgi sunarak iade ve gecikme risklerini azaltırsınız.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kargo ve lojistik',
    accentClass: 'from-sky-600 to-blue-700',
    icon: Truck,
  },
];

export type EIhracatMarketLogo = {
  name: string;
  category: string;
  logoUrl: string | null;
};

/** Küresel satış kanalları — logo dosyası yoksa kartta metin gösterilir */
export const EIHRACAT_MARKET_LOGOS: EIhracatMarketLogo[] = [
  { name: 'Amazon', category: 'Küresel pazaryeri', logoUrl: '/logos/integrations/amazon.svg' },
  { name: 'eBay', category: 'Küresel pazaryeri', logoUrl: null },
  { name: 'Etsy', category: 'Küresel pazaryeri', logoUrl: null },
  { name: 'AliExpress', category: 'Küresel pazaryeri', logoUrl: null },
  { name: 'Wish', category: 'Küresel pazaryeri', logoUrl: null },
  { name: 'UPS', category: 'Uluslararası kargo', logoUrl: '/logos/integrations/ups.svg' },
];
