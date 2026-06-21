import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import SquareFootageCalculator from '../components/SquareFootageCalculator';
import CtaBanner from '../components/CtaBanner';
import RebateNotice from '../components/RebateNotice';
import { SITE } from '../data/site';
import { combineJsonLd, localBusinessSchema } from '../utils/jsonLd';

export default function Calculator() {
  return (
    <>
      <SEO
        title="Solar Screen Price Calculator | Ball Bros Screens"
        description="Estimate your solar screen square footage, project price, and possible SRP rebate. Ball Bros Screens is Arizona ROC 366324."
        path="/calculator"
        jsonLd={combineJsonLd(
          localBusinessSchema(),
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
              { '@type': 'ListItem', position: 2, name: 'Price Calculator', item: `${SITE.domain}/calculator` },
            ],
          }
        )}
      />

      <main id="main-content">
        <PageHero
          title="Solar Screen Price Calculator"
          subtitle="Add each window size in your home to estimate total square footage and a rough project price before you request your free quote."
        >
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Price Calculator' }]} />
        </PageHero>

        <SquareFootageCalculator standalone />

        <section className="section bg-white" aria-label="SRP rebate and contractor license">
          <div className="container">
            <RebateNotice />
          </div>
        </section>

        <CtaBanner
          title="Ready for an Exact Quote?"
          text="Our calculator gives you a ballpark estimate. For precise pricing, we'll visit your home, measure every window, and provide a free no-obligation quote."
          primaryLabel="Get a Free Quote"
        />
      </main>
    </>
  );
}
