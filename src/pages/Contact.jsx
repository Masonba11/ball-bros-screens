import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';
import { SITE, CITIES } from '../data/site';

export default function Contact() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#quote-form') {
      const form = document.getElementById('quote-form');
      form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Free Solar Screen Quote | Contact Ball Bros Screens – East Valley AZ"
        description="Request a free solar screen installation quote from Ball Bros Screens. Serving Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and the East Valley."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE.domain}/contact` },
          ],
        }}
      />

      <main>
        <PageHero
          title="Request a Free Solar Screen Quote"
          subtitle="Fill out the form below and we'll be in touch to schedule your free in-home measurement and quote. No pressure, no obligation."
        >
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact / Free Quote' }]} />
        </PageHero>

        <section className="section bg-tan" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="section-tag">Get in Touch</div>
                <h2 id="contact-heading">We&apos;d Love to Help</h2>
                <p style={{ color: 'var(--gray)' }}>
                  Whether you have questions about solar screens or you&apos;re ready to schedule your free quote, we&apos;re here and happy to help. Ball Bros Screens serves homeowners throughout the East Valley.
                </p>

                <div className="contact-detail">
                  <div className="icon" aria-hidden="true" />
                  <div className="text">
                    <strong>Phone</strong>
                    <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="icon" aria-hidden="true" />
                  <div className="text">
                    <strong>Email</strong>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="icon" aria-hidden="true" />
                  <div className="text">
                    <strong>Service Area</strong>
                    <p>East Valley, Arizona — Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and surrounding communities</p>
                  </div>
                </div>

                <div style={{ marginTop: 32, background: 'var(--white)', borderRadius: 10, padding: 24, border: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>What to Expect</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      "We'll reach out within 1 business day to confirm your quote request.",
                      "We'll schedule a time to visit your home and measure your windows.",
                      "We'll walk you through your screen options and give you a clear, honest quote.",
                      'You decide what works for you — no pressure, ever.',
                    ].map((text, i) => (
                      <li key={text} style={{ display: 'flex', gap: 10, fontSize: '.93rem', color: 'var(--gray)' }}>
                        <span style={{ color: 'var(--copper)', fontWeight: 700 }}>{i + 1}.</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <QuoteForm showWindowsField />
            </div>
          </div>
        </section>

        <section className="section-sm bg-white" aria-labelledby="serving-heading">
          <div className="container text-center">
            <h2 id="serving-heading" style={{ fontSize: '1.3rem', marginBottom: 16 }}>Serving the East Valley</h2>
            <div className="area-grid" style={{ maxWidth: 700, margin: '0 auto' }}>
              {CITIES.map((city) => (
                <div key={city.path} className="area-card">
                  <div className="area-icon" aria-hidden="true" />
                  <h3>{city.name}</h3>
                  <Link to={city.path}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
