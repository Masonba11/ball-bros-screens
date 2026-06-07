const DEFAULTS = {
  VITE_SITE_NAME: 'Ball Bros Screens',
  VITE_SITE_DOMAIN: 'https://ballbrosscreens.com',
  VITE_SITE_PHONE: '+1-480-555-0100',
  VITE_SITE_PHONE_DISPLAY: '(480) 555-0100',
  VITE_SITE_EMAIL: 'info@ballbrosscreens.com',
  VITE_SITE_FACEBOOK: 'https://www.facebook.com/ballbrosscreens',
  VITE_SITE_INSTAGRAM: 'https://www.instagram.com/ballbrosscreens',
  VITE_SITE_ADDRESS_STREET: '',
  VITE_SITE_ADDRESS_LOCALITY: 'Queen Creek',
  VITE_SITE_ADDRESS_REGION: 'AZ',
  VITE_SITE_ADDRESS_POSTAL_CODE: '85142',
  VITE_SITE_ADDRESS_COUNTRY: 'US',
  VITE_SITE_GEO_LAT: '33.2481',
  VITE_SITE_GEO_LNG: '-111.6343',
};

function readEnv(env, key) {
  const value = env[key] ?? DEFAULTS[key];
  return typeof value === 'string' ? value.trim() : value;
}

/** Build the SITE object from Vite env (import.meta.env or loadEnv output). */
export function createSiteConfig(env) {
  const domain = readEnv(env, 'VITE_SITE_DOMAIN').replace(/\/$/, '');
  const street = readEnv(env, 'VITE_SITE_ADDRESS_STREET');

  const address = {
    street: street || undefined,
    locality: readEnv(env, 'VITE_SITE_ADDRESS_LOCALITY'),
    region: readEnv(env, 'VITE_SITE_ADDRESS_REGION'),
    postalCode: readEnv(env, 'VITE_SITE_ADDRESS_POSTAL_CODE'),
    country: readEnv(env, 'VITE_SITE_ADDRESS_COUNTRY'),
  };

  return {
    name: readEnv(env, 'VITE_SITE_NAME'),
    domain,
    hostname: new URL(domain).hostname,
    phone: readEnv(env, 'VITE_SITE_PHONE'),
    phoneDisplay: readEnv(env, 'VITE_SITE_PHONE_DISPLAY'),
    email: readEnv(env, 'VITE_SITE_EMAIL'),
    facebook: readEnv(env, 'VITE_SITE_FACEBOOK'),
    instagram: readEnv(env, 'VITE_SITE_INSTAGRAM'),
    logo: '/logo.png',
    logoFooter: '/logo-footer.png',
    ogImage: '/og-image.jpg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    address,
    geo: {
      latitude: Number.parseFloat(readEnv(env, 'VITE_SITE_GEO_LAT')),
      longitude: Number.parseFloat(readEnv(env, 'VITE_SITE_GEO_LNG')),
    },
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
      { dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
    ],
  };
}
