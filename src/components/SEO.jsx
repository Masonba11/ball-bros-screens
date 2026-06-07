import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';

export default function SEO({ title, description, path = '/', jsonLd, noindex = false }) {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const canonical = `${SITE.domain}${path === '/' ? '/' : path}`;
  const ogImage = `${SITE.domain}${SITE.ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <link rel="canonical" href={canonical} />
      )}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {!noindex && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(SITE.ogImageWidth)} />
      <meta property="og:image:height" content={String(SITE.ogImageHeight)} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
