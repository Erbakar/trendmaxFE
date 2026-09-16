import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_LAST_UPDATED, SITE_URL, STATIC_SEO_ROUTES } from '../shared/seoData.js';

const projectDirectory = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const blogSource = await readFile(path.join(projectDirectory, 'data', 'blogPosts.ts'), 'utf8');
const legalSource = await readFile(path.join(projectDirectory, 'data', 'legalPages.ts'), 'utf8');

const blogEntries = [...blogSource.matchAll(/"slug":\s*"([^"]+)"[\s\S]*?"date":\s*"([^"]+)"/g)].map(
  ([, slug, date]) => ({
    path: `/kampus/${slug}`,
    lastmod: date,
    changefreq: 'yearly',
    priority: '0.5',
  }),
);

const legalEntries = [...legalSource.matchAll(/^\s+slug:\s*'([^']+)'/gm)].map(([, slug]) => ({
  path: `/yasal/${slug}`,
  lastmod: SEO_LAST_UPDATED,
  changefreq: 'yearly',
  priority: '0.4',
}));

const entries = [
  ...STATIC_SEO_ROUTES.map((route) => ({
    path: route.path,
    lastmod: SEO_LAST_UPDATED,
    changefreq: route.changefreq,
    priority: route.priority,
  })),
  ...blogEntries,
  ...legalEntries,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${new URL(entry.path, `${SITE_URL}/`).toString()}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(path.join(projectDirectory, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`[seo] sitemap.xml generated with ${entries.length} canonical URLs`);
