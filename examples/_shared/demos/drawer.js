// Drawer — open/close
(function () {
  document.querySelectorAll('.demo-preview [data-demo-drawer-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var drawer = btn.closest('.demo-preview').querySelector('.ds-drawer');
      if (drawer) drawer.classList.add('ds-drawer--open');
    });
  });

  document.querySelectorAll('.demo-preview .ds-drawer').forEach(function (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('[data-demo-drawer-close]') || e.target.classList.contains('ds-drawer__backdrop')) {
        drawer.classList.remove('ds-drawer--open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('ds-drawer--open')) {
        drawer.classList.remove('ds-drawer--open');
      }
    });
  });
})();
