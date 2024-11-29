import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

export const generatePostsSitemap = () => {
  const sitemap = new SitemapStream({ hostname: 'https://appliancerepairsedmonton.com' });
  const writeStream = createWriteStream('./dist/sitemap-posts.xml');
  sitemap.pipe(writeStream);

  const posts = [
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog/winter-proofing-appliances-edmonton', changefreq: 'monthly', priority: 0.6 }
  ];

  posts.forEach(post => {
    sitemap.write(post);
  });

  sitemap.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
};