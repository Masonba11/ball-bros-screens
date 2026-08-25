import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

/** Work-truck feature band for trust / local presence. */
export default function TruckFeature({
  heading = 'Local East Valley crew — we come to you',
  text = 'Ball Bros Screens is a local solar screen company serving Queen Creek and the East Valley. Licensed, insured, and ready to measure your windows.',
  ctaTo = '/contact',
  ctaLabel = 'Get a Free Quote',
  ctaHref,
}) {
  return (
    <section className="truck-feature" aria-labelledby="truck-feature-heading">
      <div className="truck-feature-media">
        <picture>
          <source
            type="image/webp"
            srcSet="/images/work-truck-800.webp 800w, /images/work-truck.webp 1600w"
            sizes="(max-width: 960px) 100vw, 55vw"
          />
          <img
            src="/images/work-truck.jpg"
            alt={`${SITE.name} work truck ready for solar screen installation in the East Valley`}
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="truck-feature-copy">
        <p className="section-tag">On the Job</p>
        <h2 id="truck-feature-heading">{heading}</h2>
        <p>{text}</p>
        <p className="truck-feature-meta">Arizona ROC {SITE.roc}</p>
        {ctaHref ? (
          <a href={ctaHref} className="btn btn-primary">
            {ctaLabel}
          </a>
        ) : (
          <Link to={ctaTo} className="btn btn-primary">
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
