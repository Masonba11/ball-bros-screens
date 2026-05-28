/* ============================================================
   JB Screens — Main JavaScript
   jbscreens.com
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Nav Toggle ── */
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Active Nav Link ── */
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.primary-nav a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = this.nextElementSibling;
      var isOpen = answer.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-answer').forEach(function (a) {
        a.classList.remove('open');
      });
      document.querySelectorAll('.faq-question').forEach(function (q) {
        q.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isOpen) {
        answer.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Smooth Scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Quote Form Submission (placeholder) ── */
  var forms = document.querySelectorAll('.quote-form form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Replace this block with your actual form handler (e.g., Netlify Forms, Formspree, etc.)
      var btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Thank you! We\'ll be in touch soon.';
      btn.disabled = true;
      btn.style.background = '#2e7d32';
    });
  });
})();

