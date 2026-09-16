export const COMPANY_CONTACT = {
  brandName: 'Trendmax',
  legalName: 'AYŞE KIRAĞI',
  website: 'https://trendmaxtr.com',
  phoneDisplay: '0850 309 84 19',
  phoneHref: 'tel:+908503098419',
  whatsappDisplay: '0532 390 86 18',
  whatsappNumber: '905323908618',
  email: 'info@trendmaxtr.com',
  bursaAddress: 'Konak Mah. Lefkoşe Cad. Barış Sok. Ofis + Plaza Nilüfer, Bursa',
  londonAddress: '71-75 Shelton Street, Covent Garden, London, United Kingdom WC2H 9JQ',
} as const;

export const LEGAL_DOCUMENT_VERSION = '23.08.2026';

export const getWhatsAppUrl = (message = 'Merhaba, Trendmax çözümleri hakkında bilgi almak istiyorum.') =>
  `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
