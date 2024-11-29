import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

export const generatePagesSitemap = () => {
  const sitemap = new SitemapStream({ hostname: 'https://appliancerepairsedmonton.com' });
  const writeStream = createWriteStream('./dist/sitemap-pages.xml');
  sitemap.pipe(writeStream);

  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    { url: '/calculator', changefreq: 'weekly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/areas', changefreq: 'monthly', priority: 0.8 },
    { url: '/troubleshooting', changefreq: 'monthly', priority: 0.7 },
    { url: '/faq', changefreq: 'monthly', priority: 0.6 }
  ];

  pages.forEach(page => {
    sitemap.write(page);
  });

  sitemap.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
};