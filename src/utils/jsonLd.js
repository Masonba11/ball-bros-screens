import { SITE, CITIES, BUSINESS_ID } from '../data/site';

/** Combine one or more schema.org objects into a single JSON-LD document. */
export function combineJsonLd(...schemas) {
  const items = schemas.filter(Boolean);
  if (items.length === 0) return null;
  if (items.length === 1) return { '@context': 'https://schema.org', ...items[0] };

  return {
    '@context': 'https://schema.org',
    '@graph': items.map(({ '@context': _ctx, ...rest }) => rest),
  };
}

/** FAQPage schema for pages with question/answer lists. */
export function faqPageSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/** Full LocalBusiness / HomeAndConstructionBusiness schema for the site. */
export function localBusinessSchema() {
  const sameAs = [SITE.facebook, SITE.instagram].filter(Boolean);

  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.domain}${SITE.logo}`,
    logo: `${SITE.domain}${SITE.logo}`,
    description: 'Custom solar screen installation for homeowners in the East Valley, Arizona.',
    sameAs,
    address: {
      '@type': 'PostalAddress',
      ...(SITE.address.street ? { streetAddress: SITE.address.street } : {}),
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: CITIES.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: 'Arizona' },
    })),
    openingHoursSpecification: SITE.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    priceRange: '$$',
    knowsAbout: [
      'Solar screen installation',
      'Exterior window screens',
      'Custom solar screens',
      'Arizona heat protection',
    ],
  };
}

/** Reference the site business entity from other schema types. */
export function businessProviderRef() {
  return { '@id': BUSINESS_ID };
}

/** HowTo schema for the solar screen installation process. */
export function howToSchema({ name, description, steps, path }) {
  return {
    '@type': 'HowTo',
    name,
    description,
    url: `${SITE.domain}${path}`,
    totalTime: 'P7D',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };
}
