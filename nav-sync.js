(function () {
  'use strict';

  var nav = document.querySelector('#nav-sticky');
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav-link[href^="#jkbl"]'),
  );
  var sections = links
    .map(function (link) {
      return {
        id: link.getAttribute('href').slice(1),
        link: link,
        section: document.getElementById(link.getAttribute('href').slice(1)),
      };
    })
    .filter(function (item) {
      return item.section;
    });
  var ticking = false;

  function headerHeight() {
    return nav ? nav.getBoundingClientRect().height : 0;
  }

  function setActive(id) {
    sections.forEach(function (item) {
      item.link.classList.toggle('active', item.id === id);
      if (item.id === id) item.link.setAttribute('aria-current', 'page');
      else item.link.removeAttribute('aria-current');
    });
  }

  function syncActive() {
    var marker = window.scrollY + headerHeight() + 16;
    var active = sections[0] && sections[0].id;

    sections.forEach(function (item) {
      if (item.section.offsetTop <= marker) active = item.id;
    });

    if (active) setActive(active);
    ticking = false;
  }

  function requestSync() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(syncActive);
    }
  }

  function goToSection(event) {
    var link = event.currentTarget;
    var target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;

    event.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - headerHeight() - 8;
    window.history.pushState(null, '', link.getAttribute('href'));
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    setActive(link.getAttribute('href').slice(1));
  }

  links.forEach(function (link) {
    link.addEventListener('click', goToSection);
  });
  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync);
  window.addEventListener('load', requestSync);
  window.addEventListener('popstate', requestSync);
  requestSync();
}());
