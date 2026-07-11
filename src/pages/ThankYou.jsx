import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE } from '../data/site';

export default function ThankYou() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-18316376748' });
    }
  }, []);

  return (
    <>
      <SEO
        title="Thank You | Ball Bros Screens"
        description="Thanks for requesting a free solar screen quote. We'll be in touch shortly."
        path="/thank-you"
        noindex
      />

      <main id="main-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
            <p className="eyebrow">Quote Request Received</p>
            <h1>Thank You!</h1>
            <p className="page-hero-sub">
              We received your request and will respond within one business day to schedule your
              free in-home measurement and quote.
            </p>
            <p style={{ color: 'var(--gray)', marginTop: 16 }}>
              For immediate help, call{' '}
              <a href={`tel:${SITE.phone}`} style={{ fontWeight: 600 }}>
                {SITE.phoneDisplay}
              </a>
              .
            </p>
            <div className="cta-group" style={{ justifyContent: 'center', marginTop: 32 }}>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link to="/calculator" className="btn btn-outline-copper">
                Price Calculator
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
