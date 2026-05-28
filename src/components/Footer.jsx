import { Link } from 'react-router-dom';
import { SITE, CITIES } from '../data/site';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="site-logo" aria-label="Ball Bros Screens Home">
              <img src="/Ballbros.png" alt="Ball Bros Screens" className="logo-img" width="120" height="120" />
            </Link>
            <p>
              Custom solar screen installation for homeowners throughout the East Valley, Arizona.
              Locally owned and focused entirely on solar screens.
            </p>
            <a href={`mailto:${SITE.email}`} className="phone" style={{ fontSize: '.95rem', marginTop: 8 }}>
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="phone">
              {SITE.phoneDisplay}
            </a>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/solar-screen-installation">Solar Screen Installation</Link></li>
              <li><Link to="/contact">Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4>Service Areas</h4>
            <ul>
              {CITIES.map((city) => (
                <li key={city.path}>
                  <Link to={city.path}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Ball Bros Screens</Link></li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>ballbrosscreens.com · East Valley Solar Screen Installation</span>
        </div>
      </div>
    </footer>
  );
}
