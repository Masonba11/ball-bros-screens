import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FaqList from '../components/FaqList';
import CtaBanner from '../components/CtaBanner';
import { SITE, CITIES } from '../data/site';
import { INSTALLATION_FAQS } from '../data/faqs';

const BENEFITS = [
  { title: 'Reduce Heat Gain', text: 'Solar screens block a significant portion of solar heat before it reaches your glass, helping to reduce the temperature of sun-exposed rooms.' },
  { title: 'UV Protection', text: 'High-quality solar screen material filters out harmful UV rays that cause fading in flooring, furniture, artwork, and other interior surfaces.' },
  { title: 'Glare Reduction', text: 'Harsh glare on TVs, computer screens, and throughout rooms is dramatically reduced — without requiring curtains or blackout shades.' },
  { title: 'Daytime Privacy', text: 'From outside your home, solar screens make it difficult to see in during daylight hours — while you maintain a clear view from inside.' },
  { title: 'Lighter AC Load', text: 'By reducing solar heat gain through windows, solar screens can help your air conditioning system work less hard.' },
  { title: 'Enhanced Curb Appeal', text: "Modern solar screens have a clean, uniform appearance that adds a finished, polished look to your home's exterior." },
];

const STEPS = [
  { num: 1, title: 'Request a Free Quote', text: "Contact us online or call. We'll set up a time that works for you — no pressure." },
  { num: 2, title: 'We Measure Your Windows', text: 'We come to your home and take precise measurements to ensure a perfect, custom fit on every screen.' },
  { num: 3, title: 'Choose Your Screen Options', text: "We walk you through screen density and color options to match your home's look and your comfort priorities." },
  { num: 4, title: 'We Install Your Screens', text: 'We return to professionally install your custom-built screens, working cleanly and efficiently.' },
  { num: 5, title: 'Start Enjoying Your Home', text: 'Feel the difference immediately — reduced heat, less glare, more comfort, and a better-looking exterior.' },
];

export default function Installation() {
  return (
    <>
      <SEO
        title="Solar Screen Installation in the East Valley, AZ | Ball Bros Screens"
        description="Professional solar screen installation for East Valley Arizona homeowners. Custom-fit screens for every window. Serving Queen Creek, Gilbert, Chandler, Mesa, San Tan Valley."
        path="/solar-screen-installation"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Solar Screen Installation',
          provider: { '@type': 'HomeAndConstructionBusiness', name: SITE.name, url: SITE.domain },
          areaServed: 'East Valley, Arizona',
          description: 'Custom exterior solar screen installation for residential windows in the East Valley, AZ.',
          url: `${SITE.domain}/solar-screen-installation`,
        }}
      />

      <main>
        <PageHero
          title="Solar Screen Installation in the East Valley, AZ"
          subtitle="Custom-fit exterior solar screens professionally installed for homeowners throughout Queen Creek, Gilbert, Chandler, Mesa, San Tan Valley, and the surrounding East Valley."
        >
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Solar Screen Installation' },
            ]}
          />
        </PageHero>

        <section className="section bg-white" aria-labelledby="intro-heading">
          <div className="container">
            <div className="service-intro">
              <div className="col-text">
                <div className="section-tag">Custom Solar Screens for Arizona Homes</div>
                <h2 id="intro-heading">What Are Solar Screens — and Why Do Arizona Homeowners Install Them?</h2>
                <p>Solar screens are exterior window screens engineered to block solar heat and UV radiation before it passes through your window glass. Unlike interior blinds or curtains, exterior solar screens intercept the sun&apos;s energy from the outside — where it does the most good.</p>
                <p>In the East Valley, where summer temperatures regularly climb above 110°F, solar screens are one of the most practical upgrades a homeowner can make.</p>
                <p>Ball Bros Screens installs custom solar screens measured and built specifically for your home&apos;s windows — not generic off-the-shelf products.</p>
                <div style={{ marginTop: 24 }}>
                  <Link to="/contact" className="btn btn-primary" style={{ marginRight: 14 }}>Get a Free Quote</Link>
                  <a href={`tel:${SITE.phone}`} className="phone-cta">{SITE.phoneDisplay}</a>
                </div>
              </div>
              <div className="service-sidebar">
                <h3>What&apos;s Included</h3>
                <ul>
                  <li>Free in-home measurement</li>
                  <li>Custom screen fabrication</li>
                  <li>Professional installation</li>
                  <li>Screen density options (80%, 90%)</li>
                  <li>Multiple frame color choices</li>
                  <li>Clean installation with no mess left behind</li>
                  <li>Screens built for Arizona&apos;s climate</li>
                </ul>
                <div style={{ marginTop: 24 }}>
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Request a Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Benefits of Solar Screens</div>
              <h2 id="benefits-heading">What Solar Screens Do for Your Home</h2>
              <p>Every home in the East Valley deals with intense sun. Here&apos;s how solar screens help.</p>
            </div>
            <div className="benefits-grid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="benefit-card">
                  <div className="benefit-icon" aria-hidden="true" />
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="ev-heading">
          <div className="container">
            <div className="problem-solution">
              <div className="col-text">
                <div className="section-tag">Built for East Valley Heat</div>
                <h2 id="ev-heading">Solar Screens Designed for Arizona&apos;s Climate</h2>
                <p>Not every product built for general use holds up in Arizona. The combination of extreme heat, intense UV exposure, and wide seasonal temperature swings creates a demanding environment for any exterior material.</p>
                <p>Ball Bros Screens uses solar screen materials specifically suited for Arizona&apos;s climate — designed to withstand long summers, resist UV degradation, and maintain their structure and appearance over time.</p>
              </div>
              <div className="col-visual">
                <div className="stat-item">
                  <div className="stat-label">Arizona summers</div>
                  <div className="stat-value">Months of 100°F+ temperatures</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Most vulnerable windows</div>
                  <div className="stat-value">South- and west-facing exposures</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Screen density options</div>
                  <div className="stat-value">80% and 90% solar screen material</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Service coverage</div>
                  <div className="stat-value">Queen Creek, Gilbert, Chandler, Mesa, San Tan Valley</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Our Installation Process</div>
              <h2 id="process-heading">Simple, Professional, Hassle-Free</h2>
              <p>From your first call to your finished screens, the process is straightforward.</p>
            </div>
            <div className="process-steps">
              {STEPS.map((step) => (
                <div key={step.num} className="step">
                  <div className="step-num" aria-hidden="true">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="areas-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Service Areas</div>
              <h2 id="areas-heading">Solar Screen Installation Across the East Valley</h2>
              <p>We install solar screens for homeowners throughout the East Valley. Click your city to learn more.</p>
            </div>
            <div className="area-grid">
              {CITIES.map((city) => (
                <div key={city.path} className="area-card">
                  <div className="area-icon" aria-hidden="true" />
                  <h3>{city.name}</h3>
                  <Link to={city.path}>Solar Screens →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-offwhite" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Frequently Asked Questions</div>
              <h2 id="faq-heading">Solar Screen Installation Questions</h2>
            </div>
            <FaqList items={INSTALLATION_FAQS} />
          </div>
        </section>

        <CtaBanner
          title="Get a Free Solar Screen Quote Today"
          text="Ball Bros Screens provides free, no-obligation quotes for homeowners across the East Valley."
          primaryLabel="Request My Free Quote"
        />
      </main>
    </>
  );
}
