import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FaqList from '../components/FaqList';
import CtaBanner from '../components/CtaBanner';
import BenefitIcon from '../components/BenefitIcon';
import { SITE, CITIES } from '../data/site';
import { HOME_FAQS } from '../data/faqs';
import { INSTALLATION_PROCESS_STEPS } from '../data/process';
import { combineJsonLd, faqPageSchema, howToSchema, localBusinessSchema } from '../utils/jsonLd';

const BENEFITS = [
  { icon: 'heat', title: 'Reduce Heat Entering Your Home', text: 'Solar screens block a significant portion of solar heat before it passes through your glass, helping to keep rooms cooler.' },
  { icon: 'sun', title: 'Block Harsh Arizona Sun', text: "Arizona's intense UV exposure can be relentless. Solar screens are designed to absorb and reflect sunlight before it hits your windows." },
  { icon: 'glare', title: 'Reduce Glare', text: 'Glare on TVs, monitors, and furniture is a daily frustration in the Valley. Solar screens dramatically cut glare without darkening your rooms.' },
  { icon: 'privacy', title: 'Increase Daytime Privacy', text: 'See out clearly while making it difficult for neighbors or passersby to see into your home during the day.' },
  { icon: 'furniture', title: 'Protect Flooring & Furniture', text: 'UV rays fade carpets, hardwood floors, furniture, and artwork over time. Solar screens help shield your interiors from sun damage.' },
  { icon: 'ac', title: 'Help Your AC Work Less Hard', text: 'By reducing solar heat gain through windows, solar screens can help reduce the load on your air conditioning system.' },
  { icon: 'house', title: 'Improve Curb Appeal', text: "Modern solar screens have a clean, professional look that complements your home's exterior and gives it a finished appearance." },
  { icon: 'measure', title: 'Custom Fit for Every Window', text: 'Every screen is measured and built specifically for your windows — no gaps, no sag, no one-size-fits-all shortcuts.' },
];

const WHY_ITEMS = [
  { title: 'Local East Valley Company', text: 'We live and work in the same communities we serve. We know the sun exposure, the neighborhoods, and what homeowners here need.' },
  { title: 'Focused Only on Solar Screens', text: 'Solar screen installation is our specialty — not a side service. That focus means better results and more informed recommendations.' },
  { title: 'Custom Measurements', text: 'Every screen is measured to fit your windows precisely. No generic sizing. No gaps. No hassle.' },
  { title: 'Clean, Professional Installation', text: "We take pride in how the job looks when we leave. Clean edges, secure mounting, and a finished look your home deserves." },
  { title: 'Free Quotes with No Pressure', text: 'We give you a clear, straightforward quote. You decide what\'s right for your home — at your pace, on your terms.' },
  { title: 'Responsive & Easy to Work With', text: 'We respond quickly, communicate clearly, and respect your time. Friendly local service from start to finish.' },
  { title: "Built for Arizona Heat", text: "We use materials designed for Arizona's climate — durable, UV-resistant screens that can handle extreme heat year after year." },
  { title: 'Designed for Curb Appeal', text: "Our screens look great on the outside too. We help you choose colors and styles that complement your home's appearance." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Ball Bros Screens | Solar Screen Installation in the East Valley, AZ"
        description="Ball Bros Screens installs custom solar screens for homeowners in Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and the East Valley. Get a free quote today."
        path="/"
        jsonLd={combineJsonLd(
          localBusinessSchema(),
          faqPageSchema(HOME_FAQS),
          howToSchema({
            name: 'How to Get Solar Screens Installed',
            description: 'The Ball Bros Screens process from free quote request through professional installation.',
            steps: INSTALLATION_PROCESS_STEPS,
            path: '/',
          })
        )}
      />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-tag">East Valley, Arizona</div>
              <h1 id="hero-heading">
                Solar Screen Installation
                <br />
                <span>Built for Arizona Heat</span>
              </h1>
              <p>
                Custom solar screens installed for homeowners in Queen Creek, San Tan Valley, Gilbert,
                Chandler, Mesa, and surrounding East Valley communities.
              </p>
              <div className="cta-group">
                <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
                <a href={`tel:${SITE.phone}`} className="btn btn-outline btn-lg">Call Now</a>
              </div>
              <div className="hero-trust">
                {['Local East Valley Company', 'Custom-Fit Screens', 'Free Quotes', 'Professional Installation'].map((item) => (
                  <div key={item} className="hero-trust-item">
                    <div className="icon">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Why Solar Screens?</div>
              <h2 id="benefits-heading">Make Your Home More Comfortable</h2>
              <p>Solar screens are one of the most effective ways to manage Arizona heat — and they work on every window in your home.</p>
            </div>
            <div className="benefits-grid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="benefit-card">
                  <div className="benefit-icon" aria-hidden="true">
                    <BenefitIcon name={b.icon} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="problem-heading">
          <div className="container">
            <div className="problem-solution">
              <div className="col-text">
                <div className="section-tag">The Arizona Problem</div>
                <h2 id="problem-heading">Arizona Sun Is Hard on Your Home — and Your AC</h2>
                <p>If you live in the East Valley, you know what direct afternoon sun does to certain rooms. Temperatures spike, glare makes screens unwatchable, and your air conditioning runs harder to keep up.</p>
                <p>The problem isn&apos;t just outside — it&apos;s pouring through your windows every day. Standard window screens do nothing to block heat or UV. And window tint or blackout curtains mean giving up your view and natural light.</p>
                <p>Solar screens offer a better solution. They&apos;re installed on the outside of your windows — blocking heat and UV before it ever reaches the glass — while still letting you see out and keeping your home bright.</p>
                <div style={{ marginTop: 28 }}>
                  <Link to="/solar-screen-installation" className="btn btn-primary">Learn About Solar Screen Installation</Link>
                </div>
              </div>
              <div className="col-visual">
                <div className="stat-item">
                  <div className="stat-label">The Challenge</div>
                  <div className="stat-value">Intense Arizona sun entering through windows</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Common Results</div>
                  <div className="stat-value">Hot rooms, glare, fading interiors, overworked AC</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">The Solution</div>
                  <div className="stat-value">Custom exterior solar screens — installed by Ball Bros Screens</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Coverage</div>
                  <div className="stat-value">East Valley: Queen Creek, Gilbert, Chandler, Mesa, San Tan Valley</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">How It Works</div>
              <h2 id="process-heading">Getting Solar Screens Installed Is Simple</h2>
              <p>From your first call to the finished install, Ball Bros Screens keeps the process clear and stress-free.</p>
            </div>
            <div className="process-steps">
              {INSTALLATION_PROCESS_STEPS.map((step) => (
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
              <div className="section-tag">Where We Work</div>
              <h2 id="areas-heading">Serving the East Valley, AZ</h2>
              <p>Ball Bros Screens installs custom solar screens throughout the East Valley. Click your city to learn more.</p>
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
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <Link to="/service-areas" className="btn btn-outline-copper">View All Service Areas</Link>
            </div>
          </div>
        </section>

        <section className="section bg-charcoal" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag" style={{ color: '#f0a068' }}>Why Choose Ball Bros Screens</div>
              <h2 id="why-heading">A Solar Screen Company Built for the East Valley</h2>
              <p>We&apos;re not a general contractor dabbling in screens. Solar screen installation is all we do — and we do it right.</p>
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

        <section className="section bg-offwhite" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Common Questions</div>
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Have questions about solar screens? We&apos;ve got answers.</p>
            </div>
            <FaqList items={HOME_FAQS} />
          </div>
        </section>

        <CtaBanner
          title="Ready to Make Your Home More Comfortable?"
          text="Request a free solar screen quote from Ball Bros Screens today. We serve Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and the surrounding East Valley."
          primaryLabel="Get a Free Quote"
        />
      </main>
    </>
  );
}
