import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../data/site';
import SiteLogo from './SiteLogo';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compactNav, setCompactNav] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1160px)').matches
  );
  const location = useLocation();
  const toggleRef = useRef(null);
  const mobileNavRef = useRef(null);
  const desktopNavRef = useRef(null);
  const desktopCtaRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    document.body.classList.remove('nav-open');
  }, [location]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1160px)');
    const update = () => setCompactNav(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    [desktopNavRef.current, desktopCtaRef.current].forEach((node) => {
      if (!node) return;
      if (compactNav) node.setAttribute('inert', '');
      else node.removeAttribute('inert');
    });
  }, [compactNav]);

  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const nav = mobileNavRef.current;
    if (!nav) return undefined;

    const mainElements = document.querySelectorAll('main');
    mainElements.forEach((el) => {
      el.inert = true;
    });

    const focusables = nav.querySelectorAll('a, button');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        document.body.classList.remove('nav-open');
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      mainElements.forEach((el) => {
        el.inert = false;
      });
    };
  }, [mobileOpen]);

  const toggleMobile = () => {
    setMobileOpen((open) => {
      const next = !open;
      document.body.classList.toggle('nav-open', next);
      return next;
    });
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.classList.remove('nav-open');
  };

  return (
    <header id="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-logo" aria-label={`${SITE.name} Home`}>
          <SiteLogo fetchPriority="high" />
        </Link>

        <nav ref={desktopNavRef} aria-label="Primary navigation" aria-hidden={compactNav || undefined}>
          <ul className="primary-nav">
            {NAV_LINKS.map(({ label, shortLabel, path }) => (
              <li key={path}>
                <NavLink to={path} end={path === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {shortLabel ? (
                    <>
                      <span className="nav-label nav-label--long">{label}</span>
                      <span className="nav-label nav-label--short">{shortLabel}</span>
                    </>
                  ) : (
                    label
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <span className="roc-nav-badge" aria-label={`Arizona ROC ${SITE.roc}`}>
            ROC {SITE.roc}
          </span>
          <Link
            ref={desktopCtaRef}
            to="/contact"
            className="btn btn-primary btn-sm header-cta"
            aria-hidden={compactNav || undefined}
            tabIndex={compactNav ? -1 : undefined}
          >
            Get a Free Quote
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={`nav-toggle${mobileOpen ? ' open' : ''}`}
            id="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={toggleMobile}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav
        ref={mobileNavRef}
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
      >
        <ul>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={closeMobile}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary" onClick={closeMobile}>
          Get a Free Quote
        </Link>
      </nav>
    </header>
  );
}
