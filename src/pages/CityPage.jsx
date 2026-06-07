import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FaqList from '../components/FaqList';
import CtaBanner from '../components/CtaBanner';
import BenefitIcon from '../components/BenefitIcon';
import NotFound from './NotFound';
import { SITE } from '../data/site';
import {
  CITY_CONTENT,
  CITY_WHY_ITEMS,
  CITY_BENEFITS,
  CITY_FAQS,
} from '../data/cities';
import { combineJsonLd, faqPageSchema, localBusinessSchema } from '../utils/jsonLd';

export default function CityPage({ slug }) {
  const city = CITY_CONTENT[slug];
  if (!city) return <NotFound />;

  const whyItems = CITY_WHY_ITEMS(city.name);
  const benefits = CITY_BENEFITS(city.name);
  const faqs = CITY_FAQS(city.name);

  return (
    <>
      <SEO
        title={`${city.title} | Ball Bros Screens – Free Quote`}
        description={city.description}
        path={city.path}
        jsonLd={combineJsonLd(
          localBusinessSchema(),
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
              { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.domain}/service-areas` },
              { '@type': 'ListItem', position: 3, name: city.name, item: `${SITE.domain}${city.path}` },
            ],
          },
          faqPageSchema(faqs)
        )}
      />

      <main id="main-content">
        <PageHero title={city.title} subtitle={city.heroSub}>
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Service Areas', to: '/service-areas' },
              { label: city.name },
            ]}
          />
        </PageHero>

        <section className="section bg-white" aria-labelledby="intro-heading">
          <div className="container">
            <div className="city-intro">
              <div>
                <div className="section-tag">{city.introTag}</div>
                <h2 id="intro-heading">{city.introHeading}</h2>
                {city.introParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} style={{ color: 'var(--gray)' }}>
                    {paragraph}
                  </p>
                ))}
                <div style={{ marginTop: 24 }} className="cta-group">
                  <Link to="/contact" className="btn btn-primary">{city.quoteBtn}</Link>
                  <a href={`tel:${SITE.phone}`} className="phone-cta">{SITE.phoneDisplay}</a>
                </div>
              </div>
              <div className="city-quick-cta">
                <h3>{city.ctaSidebarTitle}</h3>
                <p>{city.ctaSidebarText}</p>
                <Link to="/contact" className="btn btn-primary">Get My Free Quote</Link>
                <a href={`tel:${SITE.phone}`} className="btn btn-outline-copper">Call Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-tan" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">{city.name} Homeowners</div>
              <h2 id="why-heading">{city.whyHeading}</h2>
            </div>
            <div className="why-list">
              {whyItems.map((item) => (
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

        <section className="section bg-white" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">What You&apos;ll Notice</div>
              <h2 id="benefits-heading">What Solar Screens Do for {city.name} Homes</h2>
            </div>
            <div className="benefits-grid">
              {benefits.map((b) => (
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

        <section className="section bg-offwhite" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">Common Questions</div>
              <h2 id="faq-heading">{city.name} Solar Screen FAQ</h2>
            </div>
            <FaqList items={faqs} />
          </div>
        </section>

        <CtaBanner
          title={`Ready for Solar Screens in ${city.name}?`}
          text={`Ball Bros Screens offers free, no-obligation quotes for ${city.name} homeowners. Let us come measure your windows and show you what's possible.`}
          primaryLabel="Get a Free Quote"
        />
      </main>
    </>
  );
}
