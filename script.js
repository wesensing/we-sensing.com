(function () {
  'use strict';

  const header = document.querySelector('#site-header');
  const nav = document.querySelector('#primary-navigation');
  const toggle = document.querySelector('.nav-toggle');
  const menuLinks = Array.from(document.querySelectorAll('.primary-nav a'));
  const navLinks = menuLinks.filter((link) => link.getAttribute('href').startsWith('#'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Directory routes do not resolve when index.html is opened directly from
  // disk. Preserve clean routes on a server while providing a deterministic
  // local-file preview destination.
  if (window.location.protocol === 'file:') {
    document.querySelectorAll('[data-local-page]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = new URL(link.dataset.localPage, document.baseURI).href;
      });
    });
  }

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menuLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 32);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.querySelector('#inquiry-form');
  if (form) {
    const inquiry = new URLSearchParams(window.location.search).get('inquiry');
    if (inquiry === 'eva') {
      const evaCategory = form.querySelector('input[value="EVA clinical or research partnership"]');
      if (evaCategory) evaCategory.checked = true;
    }

    form.addEventListener('submit', () => {
      const category = form.querySelector('input[name="inquiry-category"]:checked');
      if (category) form.action = `mailto:wesensing.ct@gmail.com?subject=${encodeURIComponent(`WE-Sensing inquiry: ${category.value}`)}`;
    });
  }
})();
