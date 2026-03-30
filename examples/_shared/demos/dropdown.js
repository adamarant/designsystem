// Dropdown — open/close menu
(function () {
  document.querySelectorAll('.demo-preview .ds-dropdown').forEach(function (dd) {
    var trigger = dd.querySelector('.ds-dropdown__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      var isOpen = dd.classList.contains('ds-dropdown--open');
      // Close all other dropdowns first
      document.querySelectorAll('.ds-dropdown--open').forEach(function (d) {
        d.classList.remove('ds-dropdown--open');
        var t = d.querySelector('.ds-dropdown__trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        dd.classList.add('ds-dropdown--open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    dd.addEventListener('click', function (e) {
      if (e.target.closest('.ds-dropdown__item')) {
        dd.classList.remove('ds-dropdown--open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('ds-dropdown--open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
