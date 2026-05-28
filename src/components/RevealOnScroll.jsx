import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTORS =
  '.benefit-card, .step, .area-card, .why-item, .faq-item, .area-detail-card, .stat-item, .service-sidebar, .city-quick-cta, .contact-detail, .section-header';

export default function RevealOnScroll({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const els = document.querySelectorAll(SELECTORS);
    els.forEach((el) => {
      el.classList.add('reveal');
      el.classList.remove('is-visible');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return children;
}
