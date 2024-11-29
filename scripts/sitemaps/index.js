import { create } from 'xmlbuilder2';
import { writeFileSync } from 'fs';
import { generatePagesSitemap } from './pages.js';
import { generatePostsSitemap } from './posts.js';
import { generateAreasSitemap } from './areas.js';

const generateSitemapIndex = () => {
  const sitemapIndex = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('sitemapindex', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  const sitemaps = [
    'sitemap-pages.xml',
    'sitemap-posts.xml',
    'sitemap-areas.xml'
  ];

  sitemaps.forEach(sitemap => {
    sitemapIndex.ele('sitemap')
      .ele('loc').txt(`https://appliancerepairsedmonton.com/${sitemap}`).up()
      .ele('lastmod').txt(new Date().toISOString());
  });

  return sitemapIndex.end({ prettyPrint: true });
};

const generateAllSitemaps = async () => {
  try {
    // Generate individual sitemaps
    await Promise.all([
      generatePagesSitemap(),
      generatePostsSitemap(),
      generateAreasSitemap()
    ]);

    // Generate sitemap index
    const sitemapIndex = generateSitemapIndex();
    writeFileSync('./dist/sitemap.xml', sitemapIndex, { encoding: 'utf8' });
    
    console.log('Sitemaps generated successfully');
  } catch (error) {
    console.error('Error generating sitemaps:', error);
    process.exit(1);
  }
};

generateAllSitemaps();