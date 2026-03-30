// Popover — toggle
(function () {
  document.querySelectorAll('.demo-preview [data-demo-popover-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var popover = btn.closest('.demo-preview').querySelector('.ds-popover');
      if (popover) popover.classList.toggle('ds-popover--open');
    });
  });
})();
