import { createSiteConfig } from '../config/site-config.js';

export const SITE = createSiteConfig(import.meta.env);

/** Canonical @id for linking LocalBusiness schema across pages. */
export const BUSINESS_ID = `${SITE.domain}/#business`;

export { NAV_LINKS, CITIES, SITEMAP_ROUTES, SITEMAP_PATHS } from './routes.js';
