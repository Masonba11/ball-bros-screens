import { Link, Outlet } from 'react-router-dom';
import { SITE } from '../data/site';
import SiteLogo from './SiteLogo';

export default function LpLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="lp-header">
        <div className="container lp-header-inner">
          <Link to="/" className="site-logo" aria-label={`${SITE.name} Home`}>
            <SiteLogo fetchPriority="high" />
          </Link>
          <div className="lp-header-actions">
            <span className="roc-nav-badge" aria-label={`Arizona ROC ${SITE.roc}`}>
              ROC {SITE.roc}
            </span>
            <a href={`tel:${SITE.phone}`} className="btn btn-primary btn-sm lp-header-phone">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="lp-footer">
        <div className="container lp-footer-inner">
          <p>
            © {new Date().getFullYear()} {SITE.name} · Arizona ROC {SITE.roc} · Queen Creek &amp; East
            Valley
          </p>
          <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
        </div>
      </footer>

      <div className="lp-sticky" aria-label="Quick actions">
        <a href={`tel:${SITE.phone}`} className="btn btn-outline-copper">
          Call Now
        </a>
        <a href="#quote" className="btn btn-primary">
          Free Quote
        </a>
      </div>
    </>
  );
}
