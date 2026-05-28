import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    document.body.classList.remove('nav-open');
  }, [location]);

  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((open) => {
      const next = !open;
      document.body.classList.toggle('nav-open', next);
      return next;
    });
  };

  return (
    <header id="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-logo" aria-label="Ball Bros Screens Home">
          <img src="/Ballbros.png" alt="Ball Bros Screens" className="logo-img" width="120" height="120" />
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="primary-nav">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <NavLink to={path} end={path === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary btn-sm header-cta">
          Get Free Quote
        </Link>

        <button
          type="button"
          className={`nav-toggle${mobileOpen ? ' open' : ''}`}
          id="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobile-nav" aria-label="Mobile navigation">
        <ul>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <NavLink to={path} end={path === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary">
          Get Free Quote
        </Link>
      </nav>
    </header>
  );
}
