import { SITE } from '../data/site';

export default function SiteLogo({
  className = 'logo-img',
  width = 120,
  height = 90,
  loading,
  fetchPriority,
  variant = 'default',
}) {
  const isFooter = variant === 'footer';
  const pngSrc = isFooter ? SITE.logoFooter : SITE.logo;
  const webpSrc = isFooter ? '/logo-footer.webp' : '/logo.webp';

  const imgProps = {
    alt: SITE.name,
    className,
    width,
    height,
  };

  if (loading) imgProps.loading = loading;
  if (fetchPriority) imgProps.fetchPriority = fetchPriority;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={pngSrc} {...imgProps} decoding={loading === 'lazy' ? 'async' : 'auto'} />
    </picture>
  );
}
