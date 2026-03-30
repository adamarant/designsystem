// Navigation — mobile menu toggle
(function () {
  document.querySelectorAll('.demo-preview .ds-nav').forEach(function (nav) {
    var toggle = nav.querySelector('.ds-nav__toggle') ||
                 nav.querySelector('[data-demo-nav-toggle]');
    var menu = nav.querySelector('.ds-nav__menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.contains('ds-nav__menu--open');
      menu.classList.toggle('ds-nav__menu--open');
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();
