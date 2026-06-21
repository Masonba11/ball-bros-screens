import { Link } from 'react-router-dom';
import { SITE, CITIES } from '../data/site';
import SiteLogo from './SiteLogo';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="site-logo" aria-label={`${SITE.name} Home`}>
              <SiteLogo loading="lazy" variant="footer" />
            </Link>
            <p>
              Custom solar screen installation for homeowners throughout the East Valley, Arizona.
              Locally owned and focused entirely on solar screens.
            </p>
            <p style={{ fontSize: '.9rem', color: '#c0c8d0', marginBottom: 8 }}>
              Arizona ROC {SITE.roc}
            </p>
            <a href={`mailto:${SITE.email}`} className="footer-contact-link" style={{ fontSize: '.95rem', marginTop: 8 }}>
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="phone">
              {SITE.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="footer-col-title">Services</h2>
            <ul>
              <li><Link to="/solar-screen-installation">Solar Screen Installation</Link></li>
              <li><Link to="/contact">Get a Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-col-title">Service Areas</h2>
            <ul>
              {CITIES.map((city) => (
                <li key={city.path}>
                  <Link to={city.path}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-col-title">Company</h2>
            <ul>
              <li><Link to="/about">About {SITE.name}</Link></li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>ROC {SITE.roc} · {SITE.hostname} · East Valley Solar Screen Installation</span>
        </div>
      </div>
    </footer>
  );
}
