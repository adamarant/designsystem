// Modal — open/close
(function () {
  document.querySelectorAll('.demo-preview [data-demo-modal-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modal = btn.closest('.demo-preview').querySelector('.ds-modal');
      if (modal) modal.classList.add('ds-modal--open');
    });
  });

  document.querySelectorAll('.demo-preview .ds-modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-demo-modal-close]') || e.target === modal.querySelector('.ds-modal__backdrop')) {
        modal.classList.remove('ds-modal--open');
      }
    });
    // Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('ds-modal--open')) {
        modal.classList.remove('ds-modal--open');
      }
    });
  });
})();
