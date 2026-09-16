import { useEffect } from 'react';
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { BLOG_POSTS, getPostBySlug } from '../data/blogPosts';
import { COMPANY_CONTACT } from '../data/company';
import { getLegalPageBySlug } from '../data/legalPages';
import { TRENDMAX_ETICARET_FAQS } from '../data/sssFaqs';
import { PAYTR_PRODUCTS } from '../shared/paytrProducts.js';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_TITLE,
  NOINDEX_SEO_ROUTES,
  SITE_NAME,
  SITE_URL,
  STATIC_SEO_ROUTES,
} from '../shared/seoData.js';

type JsonLd = Record<string, unknown>;

type SeoState = {
  title: string;
  description: string;
  canonicalPath: string;
  label: string;
  noIndex?: boolean;
  image?: string;
  ogType?: 'website' | 'article';
  schemaKind?: string;
  parent?: { name: string; path: string };
  article?: (typeof BLOG_POSTS)[number];
};

const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).toString();

function getOrCreateMeta(attribute: 'name' | 'property', value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  return element;
}

function getOrCreateLink(rel: string, selectorSuffix = '') {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${selectorSuffix}`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  return element;
}

function resolveSeo(pathname: string): SeoState {
  const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
  const staticRoute = STATIC_SEO_ROUTES.find((route) => route.path === normalizedPath);
  if (staticRoute) {
    return {
      ...staticRoute,
      canonicalPath: staticRoute.path,
      ogType: 'website',
    };
  }

  const noIndexRoute = NOINDEX_SEO_ROUTES.find((route) => route.path === normalizedPath);
  if (noIndexRoute) {
    return {
      ...noIndexRoute,
      canonicalPath: noIndexRoute.path,
      label: noIndexRoute.title.replace(' | Trendmax', ''),
      noIndex: true,
      ogType: 'website',
    };
  }

  if (normalizedPath.startsWith('/kampus/')) {
    const slug = normalizedPath.slice('/kampus/'.length);
    const article = getPostBySlug(slug);
    if (article) {
      return {
        title: `${article.title} | Trendmax Kampüs`,
        description: article.excerpt,
        canonicalPath: `/kampus/${article.slug}`,
        label: article.title,
        image: article.image,
        ogType: 'article',
        schemaKind: 'article',
        parent: { name: 'Kampüs', path: '/kampus' },
        article,
      };
    }
  }

  if (normalizedPath.startsWith('/yasal/')) {
    const legalPage = getLegalPageBySlug(normalizedPath.slice('/yasal/'.length));
    if (legalPage) {
      return {
        title: `${legalPage.title} | Trendmax`,
        description: legalPage.summary,
        canonicalPath: `/yasal/${legalPage.slug}`,
        label: legalPage.title,
        schemaKind: 'legal',
        ogType: 'website',
      };
    }
  }

  if (normalizedPath.startsWith('/tema/')) {
    return {
      title: 'Tema Önizlemesi | Trendmax',
      description: 'Trendmax e-ticaret tema önizleme sayfası.',
      canonicalPath: normalizedPath,
      label: 'Tema Önizlemesi',
      noIndex: true,
      ogType: 'website',
    };
  }

  return {
    title: 'Sayfa Bulunamadı | Trendmax',
    description: 'Aradığınız sayfa bulunamadı.',
    canonicalPath: normalizedPath,
    label: 'Sayfa Bulunamadı',
    noIndex: true,
    ogType: 'website',
  };
}

function createBreadcrumbSchema(seo: SeoState, canonicalUrl: string): JsonLd | null {
  if (seo.canonicalPath === '/' || seo.noIndex) return null;

  const crumbs = [
    { name: 'Ana Sayfa', path: '/' },
    ...(seo.parent ? [seo.parent] : []),
    { name: seo.label, path: seo.canonicalPath },
  ];

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function createRouteSchema(seo: SeoState, canonicalUrl: string, socialImage: string): JsonLd[] {
  const pageType =
    seo.schemaKind === 'about'
      ? 'AboutPage'
      : seo.schemaKind === 'contact'
        ? 'ContactPage'
        : seo.schemaKind === 'collection'
          ? 'CollectionPage'
          : seo.schemaKind === 'faq'
            ? 'FAQPage'
            : 'WebPage';

  const page: JsonLd = {
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: socialImage,
    },
  };

  const graph: JsonLd[] = [page];
  const breadcrumb = createBreadcrumbSchema(seo, canonicalUrl);
  if (breadcrumb) {
    page.breadcrumb = { '@id': `${canonicalUrl}#breadcrumb` };
    graph.push(breadcrumb);
  }

  if (seo.schemaKind === 'faq') {
    page.mainEntity = TRENDMAX_ETICARET_FAQS.slice(0, 5).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    }));
  }

  if (seo.schemaKind === 'pricing') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#packages`,
      name: 'Trendmax e-ticaret, kurulum ve eğitim paketleri',
      numberOfItems: PAYTR_PRODUCTS.length,
      itemListElement: PAYTR_PRODUCTS.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: product.title,
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          offers: {
            '@type': 'Offer',
            price: product.amountTRY,
            priceCurrency: 'TRY',
            url: `${canonicalUrl}#${product.sourceId}`,
          },
        },
      })),
    });
    page.mainEntity = { '@id': `${canonicalUrl}#packages` };
  }

  if (seo.schemaKind === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: seo.label,
      description: seo.description,
      url: canonicalUrl,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
    });
    page.mainEntity = { '@id': `${canonicalUrl}#service` };
  }

  if (seo.schemaKind === 'article' && seo.article) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: seo.article.title,
      description: seo.article.excerpt,
      image: socialImage,
      datePublished: seo.article.date,
      dateModified: seo.article.date,
      inLanguage: 'tr-TR',
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      author: { '@type': 'Organization', name: seo.article.author },
      publisher: { '@id': `${SITE_URL}/#organization` },
    });
    page.mainEntity = { '@id': `${canonicalUrl}#article` };
  }

  return graph;
}

const SeoManager: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = resolveSeo(location.pathname);
    const canonicalUrl = absoluteUrl(seo.canonicalPath);
    const socialImage = absoluteUrl(seo.image || DEFAULT_SOCIAL_IMAGE);
    const robots = seo.noIndex
      ? 'noindex, nofollow, noarchive'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    document.title = seo.title || DEFAULT_TITLE;
    getOrCreateMeta('name', 'description').content = seo.description || DEFAULT_DESCRIPTION;
    getOrCreateMeta('name', 'robots').content = robots;
    getOrCreateMeta('name', 'googlebot').content = robots;
    getOrCreateMeta('name', 'author').content = COMPANY_CONTACT.brandName;
    getOrCreateMeta('name', 'application-name').content = SITE_NAME;

    getOrCreateMeta('property', 'og:type').content = seo.ogType || 'website';
    getOrCreateMeta('property', 'og:locale').content = 'tr_TR';
    getOrCreateMeta('property', 'og:site_name').content = SITE_NAME;
    getOrCreateMeta('property', 'og:title').content = seo.title;
    getOrCreateMeta('property', 'og:description').content = seo.description;
    getOrCreateMeta('property', 'og:url').content = canonicalUrl;
    getOrCreateMeta('property', 'og:image').content = socialImage;
    getOrCreateMeta('property', 'og:image:alt').content = `${seo.label} — ${SITE_NAME}`;

    getOrCreateMeta('name', 'twitter:card').content = 'summary_large_image';
    getOrCreateMeta('name', 'twitter:title').content = seo.title;
    getOrCreateMeta('name', 'twitter:description').content = seo.description;
    getOrCreateMeta('name', 'twitter:image').content = socialImage;

    const canonical = getOrCreateLink('canonical');
    canonical.href = canonicalUrl;

    const localeAlternate = getOrCreateLink('alternate', '[hreflang="tr-TR"]');
    localeAlternate.hreflang = 'tr-TR';
    localeAlternate.href = canonicalUrl;
    const defaultAlternate = getOrCreateLink('alternate', '[hreflang="x-default"]');
    defaultAlternate.hreflang = 'x-default';
    defaultAlternate.href = canonicalUrl;

    const llmsDescription = getOrCreateLink('describedby');
    llmsDescription.href = absoluteUrl('/llms.txt');
    llmsDescription.type = 'text/markdown';

    let schema = document.head.querySelector<HTMLScriptElement>('#trendmax-route-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'trendmax-route-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': seo.noIndex ? [] : createRouteSchema(seo, canonicalUrl, socialImage),
    });
  }, [location.pathname]);

  return null;
};

export default SeoManager;
