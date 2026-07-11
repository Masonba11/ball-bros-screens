export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Solar Screen Installation', shortLabel: 'Installation', path: '/solar-screen-installation' },
  { label: 'Price Calculator', shortLabel: 'Calculator', path: '/calculator' },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const CITIES = [
  { name: 'Queen Creek', slug: 'queen-creek', path: '/solar-screens-queen-creek-az' },
  { name: 'San Tan Valley', slug: 'san-tan-valley', path: '/solar-screens-san-tan-valley-az' },
  { name: 'Gilbert', slug: 'gilbert', path: '/solar-screens-gilbert-az' },
  { name: 'Chandler', slug: 'chandler', path: '/solar-screens-chandler-az' },
  { name: 'Mesa', slug: 'mesa', path: '/solar-screens-mesa-az' },
];

/** Static pages for sitemap (city pages are appended from CITIES). */
const STATIC_SITEMAP_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/solar-screen-installation', priority: 0.9, changefreq: 'monthly' },
  { path: '/calculator', priority: 0.8, changefreq: 'monthly' },
  { path: '/service-areas', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
];

/** All indexable routes — used by the sitemap generator and 404 middleware. */
export const SITEMAP_ROUTES = [
  ...STATIC_SITEMAP_ROUTES,
  ...CITIES.map((city) => ({
    path: city.path,
    priority: 0.8,
    changefreq: 'monthly',
  })),
];

export const SITEMAP_PATHS = SITEMAP_ROUTES.map((route) => route.path);

/** App routes that should return 200 but are not indexed (e.g. thank-you). */
export const APP_PATHS = [...SITEMAP_PATHS, '/thank-you'];
