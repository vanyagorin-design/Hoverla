import { writeFileSync } from 'fs';

const BASE = 'https://hoverlaplzen.cz';
const routes = ['/', '/about', '/team', '/matches', '/news', '/gallery', '/contact'];
const now = new Date().toISOString();

const urls = routes
  .map((path) => `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync('public/sitemap.xml', xml);
console.log('sitemap.xml generated');
