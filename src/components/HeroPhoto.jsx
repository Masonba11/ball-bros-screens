/** Full-bleed install photo used behind site heroes. */
export default function HeroPhoto({ priority = false }) {
  return (
    <div className="hero-photo" aria-hidden="true">
      <picture>
        <source
          type="image/webp"
          srcSet="/images/solar-screen-install-640.webp 960w, /images/solar-screen-install.webp 1448w"
          sizes="100vw"
        />
        <img
          src="/images/solar-screen-install.jpg"
          alt=""
          width={1448}
          height={1086}
          fetchPriority={priority ? 'high' : undefined}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
    </div>
  );
}
