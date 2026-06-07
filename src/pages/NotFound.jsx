import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Ball Bros Screens"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <main id="main-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>Page Not Found</h1>
            <p className="page-hero-sub">Sorry, we couldn&apos;t find that page.</p>
            <div className="cta-group" style={{ justifyContent: 'center', marginTop: 24 }}>
              <Link to="/" className="btn btn-primary">Back to Home</Link>
              <Link to="/contact" className="btn btn-outline-copper">Get a Free Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
