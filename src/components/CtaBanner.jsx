import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

export default function CtaBanner({
  title = 'Ready for Cooler, More Comfortable Windows?',
  text = 'Get a free quote for custom solar screen installation. We respond within one business day.',
  primaryLabel = 'Get Your Free Quote',
  primaryTo = '/contact',
}) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-group" style={{ justifyContent: 'center' }}>
          <Link to={primaryTo} className="btn btn-primary btn-lg">
            {primaryLabel}
          </Link>
          <a href={`tel:${SITE.phone}`} className="btn btn-outline btn-lg">
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
