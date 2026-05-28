import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';

export default function SEO({ title, description, path = '/', jsonLd }) {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const canonical = `${SITE.domain}${path === '/' ? '/' : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
