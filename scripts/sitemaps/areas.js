import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

export const generateAreasSitemap = () => {
  const sitemap = new SitemapStream({ hostname: 'https://appliancerepairsedmonton.com' });
  const writeStream = createWriteStream('./dist/sitemap-areas.xml');
  sitemap.pipe(writeStream);

  const areas = [
    { url: '/areas/downtown-edmonton', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas/south-edmonton', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas/north-edmonton', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas/st-albert', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas/sherwood-park', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas/spruce-grove', changefreq: 'monthly', priority: 0.7 }
  ];

  areas.forEach(area => {
    sitemap.write(area);
  });

  sitemap.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
};