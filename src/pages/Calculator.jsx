import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import SquareFootageCalculator from '../components/SquareFootageCalculator';
import CtaBanner from '../components/CtaBanner';
import { SITE } from '../data/site';

export default function Calculator() {
  return (
    <>
      <SEO
        title="Solar Screen Price Calculator | Ball Bros Screens"
        description="Estimate your solar screen square footage and project price. Add multiple window sizes at $8/sq ft. Free quotes for East Valley Arizona homeowners."
        path="/calculator"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
            { '@type': 'ListItem', position: 2, name: 'Price Calculator', item: `${SITE.domain}/calculator` },
          ],
        }}
      />

      <main>
        <PageHero
          title="Solar Screen Price Calculator"
          subtitle="Add each window size in your home to estimate total square footage and a rough project price before you request your free quote."
        >
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Price Calculator' }]} />
        </PageHero>

        <SquareFootageCalculator standalone />

        <CtaBanner
          title="Ready for an Exact Quote?"
          text="Our calculator gives you a ballpark estimate. For precise pricing, we'll visit your home, measure every window, and provide a free no-obligation quote."
          primaryLabel="Get a Free Quote"
        />
      </main>
    </>
  );
}
