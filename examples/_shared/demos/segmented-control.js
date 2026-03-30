// Segmented control — switch active segment
(function () {
  document.querySelectorAll('.demo-preview .ds-segmented').forEach(function (seg) {
    seg.addEventListener('click', function (e) {
      var item = e.target.closest('.ds-segmented__item');
      if (!item || item.hasAttribute('aria-disabled')) return;
      seg.querySelectorAll('.ds-segmented__item').forEach(function (i) {
        i.classList.remove('ds-segmented__item--active');
        i.setAttribute('aria-checked', 'false');
      });
      item.classList.add('ds-segmented__item--active');
      item.setAttribute('aria-checked', 'true');
    });
  });
})();
