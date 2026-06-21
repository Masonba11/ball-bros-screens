import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import RebateNotice from '../components/RebateNotice';
import { SITE } from '../data/site';
import { SERVICE_AREA_CARDS } from '../data/cities';
import { combineJsonLd, localBusinessSchema } from '../utils/jsonLd';

const WHY_ITEMS = [
  { title: 'Intense Year-Round Sun', text: 'The East Valley receives over 300 days of sunshine per year. Solar screens work hard in every season — not just summer.' },
  { title: 'High Cooling Costs', text: 'Air conditioning is a major expense in Arizona. Reducing solar heat gain through windows may help ease that burden.' },
  { title: 'Interior Damage from UV', text: 'Arizona UV exposure is relentless. Solar screens help protect floors, furniture, and art from premature fading.' },
  { title: 'Newer Homes with Large Windows', text: 'Modern East Valley homes feature large glass areas that look great but can let in a lot of heat — solar screens address this directly.' },
];

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Solar Screen Service Areas – East Valley AZ | Ball Bros Screens"
        description="Ball Bros Screens installs custom solar screens in Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and surrounding East Valley communities."
        path="/service-areas"
        jsonLd={combineJsonLd(
          localBusinessSchema(),
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
              { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.domain}/service-areas` },
            ],
          }
        )}
      />

      <main id="main-content">
        <PageHero
          title="Solar Screen Installation Throughout the East Valley"
          subtitle="Ball Bros Screens serves homeowners in Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and the surrounding East Valley communities."
        >
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]} />
        </PageHero>

        <section className="section bg-white" aria-labelledby="intro-heading">
          <div className="container">
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <div className="section-tag">Where We Work</div>
              <h2 id="intro-heading">East Valley Solar Screen Service</h2>
              <p style={{ color: 'var(--gray)', fontSize: '1.05rem' }}>
                Arizona&apos;s East Valley is one of the fastest-growing regions in the country — and one of the most sun-intense. Ball Bros Screens was built to serve this area specifically.
              </p>
              <p style={{ color: 'var(--gray)', fontSize: '1.05rem' }}>
                Whether you&apos;re in a newer development in Queen Creek, an established neighborhood in Mesa, or anywhere in between, we provide custom-fit solar screens installed with care and professionalism.
              </p>
              <p style={{ color: 'var(--gray)', fontSize: '1.05rem' }}>
                Ball Bros Screens is Arizona ROC {SITE.roc}, and we can help qualifying SRP customers understand and pursue the current $1 per square foot solar screen rebate.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-offwhite" aria-label="SRP rebate and contractor license">
          <div className="container">
            <RebateNotice />
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="cities-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Service Areas</div>
              <h2 id="cities-heading">Cities We Serve</h2>
              <p>Click your city for local solar screen information and to request a free quote.</p>
            </div>
            <div className="areas-grid-2">
              {SERVICE_AREA_CARDS.map((area) => (
                <div key={area.path} className="area-detail-card">
                  <h3>{area.name}</h3>
                  <p>{area.text}</p>
                  <Link to={area.path} className="btn btn-outline-copper btn-sm">{area.label} →</Link>
                </div>
              ))}
              <div className="area-detail-card" style={{ border: '2px dashed var(--border)', background: 'var(--offwhite)' }}>
                <h3>Nearby Communities</h3>
                <p>Don&apos;t see your city listed? Ball Bros Screens also serves many surrounding East Valley communities. Give us a call or send us a message.</p>
                <Link to="/contact" className="btn btn-primary btn-sm">Contact Us →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Built for the East Valley</div>
              <h2 id="why-heading">Solar Screens Are Especially Valuable in Arizona</h2>
            </div>
            <div className="why-list">
              {WHY_ITEMS.map((item) => (
                <div key={item.title} className="why-item">
                  <div className="check" aria-hidden="true">✓</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Get a Free Quote for Your East Valley Home"
          text="We'll come to you, measure your windows, and give you a clear quote. No pressure, no obligation."
          primaryLabel="Get a Free Quote"
        />
      </main>
    </>
  );
}
