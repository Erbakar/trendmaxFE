import { VISIBLE_EGITIM_STOKSUZ_PACKAGES } from './paketlerEgitimStoksuz';

export type ThemeDemo = {
  slug: string;
  name: string;
  portraitImage: string;
  landscapeImage: string;
};

export const THEME_DEMOS: ThemeDemo[] = [
  { slug: 'butik', name: 'Butik', portraitImage: '/theme/butik.png', landscapeImage: '/theme/butik-web.png' },
  { slug: 'mobilya', name: 'Mobilya', portraitImage: '/theme/mobilya.png', landscapeImage: '/theme/mobilya-web.png' },
  { slug: 'telefon', name: 'Telefon', portraitImage: '/theme/telefon.png', landscapeImage: '/theme/telefon-web.png' },
  { slug: 'petshop', name: 'Pet Shop', portraitImage: '/theme/petshop.png', landscapeImage: '/theme/petshop-web.png' },
  { slug: 'aqua', name: 'Aqua', portraitImage: '/theme/aqua.png', landscapeImage: '/theme/aqua-web.png' },
  { slug: 'soft', name: 'Soft', portraitImage: '/theme/soft.png', landscapeImage: '/theme/soft-web.png' },
  { slug: 'default', name: 'Default', portraitImage: '/theme/defaukt.png', landscapeImage: '/theme/default-web.png' },
];

/** `public/theme/` — ana sayfa “Örnek Siteler” tema marquee şeridi */
export type HomeThemeMarqueeItem = {
  image: string;
  href: string;
  title: string;
};

export const THEME_MARQUEE_IMAGES: HomeThemeMarqueeItem[] = THEME_DEMOS.map((theme) => ({
  image: theme.portraitImage,
  href: `/tema/${theme.slug}`,
  title: `${theme.name} tema önizlemesi`,
}));

export type HomeSektorTemaCard = {
  image: string;
  href: string;
  /** img alt ve kart erişilebilir adı */
  title: string;
};

/** Ana sayfa “Sektörünüze Özel Çözümler” — dahili ve hatasız tema önizlemeleri */
export const HOME_SEKTOR_TEMA_CARDS: HomeSektorTemaCard[] = THEME_DEMOS.map((theme) => ({
  image: theme.landscapeImage,
  href: `/tema/${theme.slug}`,
  title: `${theme.name} demo mağazası`,
}));

/** Ana sayfa paket özeti — görünürlük fiyatlar sayfasıyla tek kaynaktan yönetilir. */
export const HOME_PACKAGES = VISIBLE_EGITIM_STOKSUZ_PACKAGES;

export const PAZARYERI_DEMO_URL = 'https://pazaryeri.trendmaxtr.com/';

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
  { name: 'PttAVM', category: 'Pazaryeri', logoUrl: '/logos/integrations/pttavm.svg' },
  { name: 'Amazon', category: 'Pazaryeri', logoUrl: '/logos/integrations/amazon.svg' },
  { name: 'Çiçeksepeti', category: 'Pazaryeri', logoUrl: '/logos/integrations/ciceksepeti.svg' },
  { name: 'Aras Kargo', category: 'Kargo', logoUrl: '/logos/integrations/aras.svg' },
  { name: 'Yurtiçi Kargo', category: 'Kargo', logoUrl: '/logos/integrations/yurtici.svg' },
  { name: 'MNG Kargo', category: 'Kargo', logoUrl: '/logos/integrations/mng.svg' },
  { name: 'PTT Kargo', category: 'Kargo', logoUrl: '/logos/integrations/ptt.svg' },
  { name: 'Sürat Kargo', category: 'Kargo', logoUrl: '/logos/integrations/surat.svg' },
  { name: 'UPS', category: 'Kargo', logoUrl: '/logos/integrations/ups.svg' },
];
