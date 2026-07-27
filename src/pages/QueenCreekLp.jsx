import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import RebateNotice from '../components/RebateNotice';
import { SITE } from '../data/site';

const BENEFITS = [
  {
    title: 'Cut afternoon heat',
    text: 'Exterior solar screens block a large share of solar heat before it enters your Queen Creek home — so rooms stay cooler and your AC works less.',
  },
  {
    title: 'Reduce glare & fade',
    text: 'Keep TVs watchable and furniture from UV fading while still seeing outdoors. Better comfort without blackout curtains.',
  },
  {
    title: 'Custom-fit install',
    text: 'Every screen is measured and built for your exact windows — clean look on the curb, tight fit that lasts in Arizona sun.',
  },
  {
    title: 'Local Queen Creek service',
    text: `Licensed Arizona contractor (ROC ${SITE.roc}). Free in-home measurement. No pressure — just a clear quote.`,
  },
];

const STEPS = [
  {
    num: '1',
    title: 'Request your free quote',
    text: 'Tell us about your home. We respond within one business day.',
  },
  {
    num: '2',
    title: 'We measure on-site',
    text: 'We visit your Queen Creek home, check sun exposure, and measure each window.',
  },
  {
    num: '3',
    title: 'Custom install',
    text: 'Screens are fabricated to fit, then installed professionally — usually in one visit.',
  },
];

const FAQS = [
  {
    q: 'How much do solar screens cost in Queen Creek?',
    a: 'Most projects are priced by square footage. Use our $8/sq ft calculator for a ballpark, then get an exact quote after we measure your windows.',
  },
  {
    q: 'Will I still be able to see outside?',
    a: 'Yes. Quality solar screens reduce heat and glare while keeping your outdoor view. They’re designed for Arizona living — not to darken your home like heavy curtains.',
  },
  {
    q: 'Do you help with the SRP rebate?',
    a: `Yes. As a registered contractor (ROC ${SITE.roc}), we can help qualifying SRP customers pursue the solar screen rebate — typically about $${SITE.srpRebatePerSqFt} per square foot when the program is available.`,
  },
  {
    q: 'How fast can you install?',
    a: 'After your free measurement and quote, most Queen Creek installs are scheduled quickly. We’ll give you a clear timeline when we visit.',
  },
];

export default function QueenCreekLp() {
  return (
    <>
      <SEO
        title="Solar Screens Queen Creek AZ | Free Install Quote"
        description="Custom solar screen & sun screen installation in Queen Creek, AZ. Cut heat, reduce glare, and get a free in-home quote from Ball Bros Screens. ROC 366324."
        path="/lp/queen-creek-solar-screens"
        noindex
      />

      <main id="main-content" className="lp-page">
        <section className="lp-hero" aria-labelledby="lp-hero-heading">
          <div className="container lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="lp-eyebrow">Queen Creek, Arizona · Solar &amp; Sun Screens</p>
              <h1 id="lp-hero-heading">
                Solar Screen Installation in <span>Queen Creek</span>
              </h1>
              <p className="lp-hero-sub">
                Custom-fit exterior screens that cut Arizona heat and glare — measured, built, and
                installed for your windows. Free quote. No obligation.
              </p>
              <ul className="lp-trust-list" aria-label="Why homeowners choose us">
                <li>Arizona ROC {SITE.roc}</li>
                <li>Free in-home measurement</li>
                <li>SRP rebate help when available</li>
                <li>Local East Valley installers</li>
              </ul>
              <a href={`tel:${SITE.phone}`} className="phone-cta lp-hero-phone">
                <span className="ph-icon" aria-hidden="true">
                  ☎
                </span>
                Prefer to talk? {SITE.phoneDisplay}
              </a>
            </div>

            <div className="lp-hero-form" id="quote">
              <QuoteForm
                showWindowsField
                heading="Get Your Free Queen Creek Quote"
              />
            </div>
          </div>
        </section>

        <section className="section-sm lp-proof" aria-label="Trust signals">
          <div className="container lp-proof-row">
            <div>
              <strong>Licensed</strong>
              <span>ROC {SITE.roc}</span>
            </div>
            <div>
              <strong>Local</strong>
              <span>Queen Creek &amp; East Valley</span>
            </div>
            <div>
              <strong>Pricing</strong>
              <span>From $8 / sq ft</span>
            </div>
            <div>
              <strong>Rebate</strong>
              <span>~${SITE.srpRebatePerSqFt}/sq ft SRP*</span>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Built for Queen Creek Heat</div>
              <h2 id="benefits-heading">Why Queen Creek Homes Need Solar Screens</h2>
              <p>
                Large windows and west/south exposure turn living rooms into heat traps by afternoon.
                Exterior solar screens stop heat at the glass — before it enters your home.
              </p>
            </div>
            <div className="lp-benefits">
              {BENEFITS.map((item) => (
                <div key={item.title} className="lp-benefit">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: 36 }}>
              <a href="#quote" className="btn btn-primary btn-lg">
                Request My Free Quote
              </a>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="steps-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Simple Process</div>
              <h2 id="steps-heading">From Quote to Cooler Rooms</h2>
            </div>
            <ol className="lp-steps">
              {STEPS.map((step) => (
                <li key={step.num} className="lp-step">
                  <span className="lp-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-sm bg-white">
          <div className="container" style={{ maxWidth: 760 }}>
            <RebateNotice />
          </div>
        </section>

        <section className="section bg-offwhite" aria-labelledby="faq-heading">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="section-header text-center">
              <div className="section-tag">Common Questions</div>
              <h2 id="faq-heading">Queen Creek Solar Screen FAQs</h2>
            </div>
            <div className="lp-faqs">
              {FAQS.map((item) => (
                <details key={item.q} className="lp-faq">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <p className="lp-disclaimer">
              *SRP rebate eligibility and amounts are set by SRP and may change. Final savings depend
              on program rules and installed square footage.
            </p>
          </div>
        </section>

        <section className="section lp-final-cta" aria-labelledby="final-cta-heading">
          <div className="container text-center">
            <h2 id="final-cta-heading">Ready for Cooler Queen Creek Afternoons?</h2>
            <p>
              Get a free, no-pressure quote from Ball Bros Screens — custom solar screens measured
              and installed for your home.
            </p>
            <div className="cta-group" style={{ justifyContent: 'center' }}>
              <a href="#quote" className="btn btn-primary btn-lg">
                Get My Free Quote
              </a>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline btn-lg">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
