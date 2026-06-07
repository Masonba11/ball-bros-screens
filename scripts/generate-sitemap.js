import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createSiteConfig } from '../src/config/site-config.js';
import { CITIES, NAV_LINKS, SITEMAP_ROUTES } from '../src/data/routes.js';
import { loadViteEnv } from './load-vite-env.js';

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Write sitemap.xml, robots.txt, site.webmanifest, and llms.txt from env + routes. */
export function generatePublicSeoFiles(outDir, env = loadViteEnv()) {
  const site = createSiteConfig(env);
  generateSitemap(outDir, site);
  generateRobotsTxt(outDir, site);
  generateWebManifest(outDir, site);
  generateLlmsTxt(outDir, site);
}

function generateSitemap(outDir, site) {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = SITEMAP_ROUTES.map(({ path, priority, changefreq }) => {
    const loc = path === '/' ? `${site.domain}/` : `${site.domain}${path}`;
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const file = join(outDir, 'sitemap.xml');
  writeFileSync(file, xml, 'utf8');
  console.log(`[seo] sitemap: ${SITEMAP_ROUTES.length} URLs → ${file}`);
}

function generateRobotsTxt(outDir, site) {
  const txt = `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap.xml

# AI / answer-engine context: ${site.domain}/llms.txt
`;

  const file = join(outDir, 'robots.txt');
  writeFileSync(file, txt, 'utf8');
  console.log(`[seo] robots.txt → ${file}`);
}

function generateWebManifest(outDir, site) {
  const manifest = {
    name: site.name,
    short_name: site.name.split(' ').slice(0, 2).join(' '),
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#0f1419',
    background_color: '#faf8f5',
    display: 'standalone',
  };

  const file = join(outDir, 'site.webmanifest');
  writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(`[seo] site.webmanifest → ${file}`);
}

function generateLlmsTxt(outDir, site) {
  const cityNames = CITIES.map((c) => c.name).join(', ');
  const navLinks = NAV_LINKS.map(
    (link) => `- [${link.label}](${site.domain}${link.path === '/' ? '/' : link.path})`
  ).join('\n');
  const cityLinks = CITIES.map(
    (city) => `- [Solar Screens in ${city.name}, AZ](${site.domain}${city.path})`
  ).join('\n');

  const txt = `# ${site.name}

> Custom exterior solar screen installation for homeowners in the East Valley, Arizona.

${site.name} installs custom-fit solar screens that block heat and UV before it reaches your windows. Service is focused on residential solar screen installation — not general contracting.

## Contact

- Phone: ${site.phoneDisplay} (${site.phone})
- Email: ${site.email}
- Website: ${site.domain}
- Service area: ${cityNames}, and surrounding East Valley communities

## Key pages

${navLinks}

## City service pages

${cityLinks}

## Topics we cover

- What solar screens do and how they reduce Arizona heat and glare
- Custom measurement and professional installation process
- 80% vs 90% solar screen density options
- Free, no-obligation quotes for East Valley homeowners
- Ballpark pricing via the square-footage calculator ($8/sq ft estimate)

## FAQ sources

- Home FAQ: ${site.domain}/
- Installation FAQ: ${site.domain}/solar-screen-installation
- City-specific FAQs: each city page listed above

## Optional

- [Sitemap](${site.domain}/sitemap.xml)
- [Full service areas overview](${site.domain}/service-areas)
`;

  const file = join(outDir, 'llms.txt');
  writeFileSync(file, txt, 'utf8');
  console.log(`[seo] llms.txt → ${file}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  generatePublicSeoFiles(fileURLToPath(new URL('../public', import.meta.url)));
}
