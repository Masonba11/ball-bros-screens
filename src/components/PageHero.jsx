export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {children}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub areas-hero-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
