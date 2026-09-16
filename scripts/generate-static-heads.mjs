import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_SOCIAL_IMAGE,
  NOINDEX_SEO_ROUTES,
  SITE_NAME,
  SITE_URL,
  STATIC_SEO_ROUTES,
} from '../shared/seoData.js';

const projectDirectory = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDirectory = path.join(projectDirectory, 'dist');
const assetRevision = '20260826';
const template = (await readFile(path.join(distDirectory, 'index.html'), 'utf8'))
  .replace(/(href="\/assets\/index-[^"]+\.css)"/, `$1?v=${assetRevision}"`);
const blogSource = await readFile(path.join(projectDirectory, 'data', 'blogPosts.ts'), 'utf8');
const legalSource = await readFile(path.join(projectDirectory, 'data', 'legalPages.ts'), 'utf8');

const decodeJsonString = (value) => JSON.parse(`"${value}"`);
const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const blogRoutes = [
  ...blogSource.matchAll(
    /"slug":\s*"([^"]+)"[\s\S]*?"title":\s*"((?:\\.|[^"])*)"[\s\S]*?"excerpt":\s*"((?:\\.|[^"])*)"[\s\S]*?"image":\s*"([^"]+)"[\s\S]*?"author":\s*"((?:\\.|[^"])*)"[\s\S]*?"date":\s*"([^"]+)"/g,
  ),
].map(([, slug, title, description, image, author, date]) => ({
  path: `/kampus/${slug}`,
  label: decodeJsonString(title),
  title: `${decodeJsonString(title)} | Trendmax Kampüs`,
  description: decodeJsonString(description),
  image,
  ogType: 'article',
  parent: { name: 'Kampüs', path: '/kampus' },
  article: { author: decodeJsonString(author), date },
}));

const legalRoutes = [
  ...legalSource.matchAll(
    /^\s+slug:\s*'([^']+)'[\s\S]*?^\s+title:\s*'([^']+)'[\s\S]*?^\s+summary:\s*'([^']+)'/gm,
  ),
].map(([, slug, title, description]) => ({
  path: `/yasal/${slug}`,
  label: title,
  title: `${title} | Trendmax`,
  description,
  schemaKind: 'legal',
}));

const replaceMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*">`);
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}">`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n</head>`);
};

function createSchema(route, canonicalUrl, imageUrl) {
  if (route.noIndex) return { '@context': 'https://schema.org', '@graph': [] };
  const pageType =
    route.schemaKind === 'about'
      ? 'AboutPage'
      : route.schemaKind === 'contact'
        ? 'ContactPage'
        : route.schemaKind === 'collection'
          ? 'CollectionPage'
          : route.schemaKind === 'faq'
            ? 'FAQPage'
            : 'WebPage';
  const page = {
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
  };
  const graph = [page];

  if (route.path !== '/') {
    const crumbs = [
      { name: 'Ana Sayfa', path: '/' },
      ...(route.parent ? [route.parent] : []),
      { name: route.label, path: route.path },
    ];
    page.breadcrumb = { '@id': `${canonicalUrl}#breadcrumb` };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: new URL(crumb.path, `${SITE_URL}/`).toString(),
      })),
    });
  }

  if (route.article) {
    page.mainEntity = { '@id': `${canonicalUrl}#article` };
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: route.label,
      description: route.description,
      image: imageUrl,
      datePublished: route.article.date,
      dateModified: route.article.date,
      inLanguage: 'tr-TR',
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      author: { '@type': 'Organization', name: route.article.author },
      publisher: { '@id': `${SITE_URL}/#organization` },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

function buildHead(route) {
  const canonicalUrl = new URL(route.path, `${SITE_URL}/`).toString();
  const imageUrl = new URL(route.image || DEFAULT_SOCIAL_IMAGE, `${SITE_URL}/`).toString();
  const robots = route.noIndex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', route.description);
  html = replaceMeta(html, 'name', 'robots', robots);
  html = replaceMeta(html, 'name', 'googlebot', robots);
  html = replaceMeta(html, 'property', 'og:type', route.ogType || 'website');
  html = replaceMeta(html, 'property', 'og:title', route.title);
  html = replaceMeta(html, 'property', 'og:description', route.description);
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
  html = replaceMeta(html, 'property', 'og:image', imageUrl);
  html = replaceMeta(html, 'property', 'og:image:alt', `${route.label} — ${SITE_NAME}`);
  html = replaceMeta(html, 'name', 'twitter:title', route.title);
  html = replaceMeta(html, 'name', 'twitter:description', route.description);
  html = replaceMeta(html, 'name', 'twitter:image', imageUrl);

  const routeTags = route.noCanonical
    ? ''
    : `    <link rel="canonical" href="${canonicalUrl}">
    <link rel="alternate" hreflang="tr-TR" href="${canonicalUrl}">
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">\n`;
  const schema = JSON.stringify(createSchema(route, canonicalUrl, imageUrl)).replaceAll('<', '\\u003c');
  return html.replace(
    '</head>',
    `${routeTags}    <script id="trendmax-route-schema" type="application/ld+json">${schema}</script>\n</head>`,
  );
}

const routes = [
  ...STATIC_SEO_ROUTES,
  ...blogRoutes,
  ...legalRoutes,
  ...NOINDEX_SEO_ROUTES.map((route) => ({
    ...route,
    label: route.title.replace(' | Trendmax', ''),
    noIndex: true,
  })),
];

for (const route of routes) {
  const output = buildHead(route);
  if (route.path === '/') {
    await writeFile(path.join(distDirectory, 'index.html'), output, 'utf8');
    continue;
  }
  const outputDirectory = path.join(distDirectory, route.path.slice(1));
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, 'index.html'), output, 'utf8');
}

await writeFile(
  path.join(distDirectory, '404.html'),
  buildHead({
    path: '/404',
    label: 'Sayfa Bulunamadı',
    title: 'Sayfa Bulunamadı | Trendmax',
    description: 'Aradığınız sayfa bulunamadı.',
    noIndex: true,
    noCanonical: true,
  }),
  'utf8',
);

console.log(`[seo] static route heads generated for ${routes.length} routes`);
