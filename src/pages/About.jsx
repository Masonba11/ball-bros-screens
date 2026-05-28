import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import { SITE, CITIES } from '../data/site';

const VALUES = [
  { title: 'Custom Measurements on Every Job', text: 'We never guess or use generic sizing. We measure every window individually to make sure each screen fits perfectly and performs as it should.' },
  { title: 'Quality Materials Built for Arizona', text: 'We use solar screen materials rated for the kind of UV exposure and heat Arizona dishes out — not generic materials that degrade quickly in the desert.' },
  { title: 'Clean, Professional Installation', text: 'We take care on every job — mounting screens securely, finishing edges cleanly, and leaving your home in better condition than we found it.' },
  { title: 'Honest, No-Pressure Quotes', text: 'We give you a straight quote with no upselling or pressure. You decide what\'s right for your home on your timeline.' },
  { title: 'Responsive Communication', text: 'We respond to calls and messages quickly. If you have questions before, during, or after your installation, we\'re here to help.' },
  { title: 'Homeowner-First Approach', text: "We're focused on what's best for your home and your comfort — not on maximizing the size of every job." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Ball Bros Screens | East Valley Solar Screen Installer"
        description="Ball Bros Screens is a local East Valley Arizona company focused entirely on custom solar screen installation. Learn about our approach and service commitment."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.domain}/about` },
          ],
        }}
      />

      <main>
        <PageHero
          title="About Ball Bros Screens"
          subtitle="A local East Valley company focused on one thing: professional solar screen installation for Arizona homeowners."
        >
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About Ball Bros Screens' }]} />
        </PageHero>

        <section className="section bg-white" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-grid">
              <div>
                <div className="section-tag">Who We Are</div>
                <h2 id="about-heading">Local, Focused, and Built for the East Valley</h2>
                <p style={{ color: 'var(--gray)' }}>
                  Ball Bros Screens is a local solar screen installation company serving homeowners throughout the East Valley, Arizona. We started Ball Bros Screens because we saw a need for a focused, professional solar screen service — one that takes the work seriously, measures every window properly, and installs screens that actually perform.
                </p>
                <p style={{ color: 'var(--gray)' }}>
                  We&apos;re not a general contractor adding screen installation as a side offering. Solar screens are all we do. That focus means you get someone who knows the product well, measures carefully, and installs with attention to detail.
                </p>
                <p style={{ color: 'var(--gray)' }}>
                  We live and work in the East Valley. We know these communities, and we understand the challenges that come with Arizona&apos;s intense sun and heat.
                </p>
                <div style={{ marginTop: 28 }}>
                  <Link to="/contact" className="btn btn-primary" style={{ marginRight: 14 }}>Get a Free Quote</Link>
                  <Link to="/solar-screen-installation" className="btn btn-outline-copper">Learn About Our Service</Link>
                </div>
              </div>
              <div>
                <div style={{ background: 'var(--tan)', borderRadius: 12, padding: 36, borderLeft: '4px solid var(--copper)', marginBottom: 24 }}>
                  <h3 style={{ marginBottom: 8 }}>Our Service Area</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '.93rem', marginBottom: 16 }}>We serve homeowners throughout the East Valley, including:</p>
                  <ul className="value-list">
                    {CITIES.map((city) => (
                      <li key={city.path}>
                        <span className="dot" />
                        <div>
                          <strong>{city.name}</strong> — <Link to={city.path}>Solar screens for {city.name} homes</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="values-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">How We Work</div>
              <h2 id="values-heading">What You Can Expect from Ball Bros Screens</h2>
              <p>We&apos;re building a business on doing good work and treating homeowners the right way.</p>
            </div>
            <div className="why-list">
              {VALUES.map((item) => (
                <div key={item.title} className="why-item">
                  <div className="check">✓</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="focus-heading">
          <div className="container">
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
              <div className="section-tag">Our Focus</div>
              <h2 id="focus-heading">We Only Do Solar Screen Installation</h2>
              <p style={{ color: 'var(--gray)', fontSize: '1.05rem' }}>
                Some home service companies offer a long list of services. Ball Bros Screens doesn&apos;t. We focus exclusively on solar screen installation because that&apos;s where we can do our best work.
              </p>
              <p style={{ color: 'var(--gray)', fontSize: '1.05rem' }}>
                When you call us, you&apos;re talking to someone who spends every working day thinking about solar screens — the right materials, the best colors, the correct measurements for different window types.
              </p>
              <div className="cta-group" style={{ marginTop: 32, justifyContent: 'center' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
                <Link to="/solar-screen-installation" className="btn btn-outline-copper btn-lg">Learn About Solar Screens</Link>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner title="Ready to Get Started?" text="Contact Ball Bros Screens for a free, no-obligation solar screen quote. We serve the entire East Valley." primaryLabel="Request a Free Quote" />
      </main>
    </>
  );
}
