// Toolbar — button toggle + segmented buttons
(function () {
  // Regular toolbar buttons — toggle active
  document.querySelectorAll('.demo-preview .ds-toolbar__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('ds-toolbar__btn--active');
    });
  });

  // Segmented toolbar buttons — exclusive selection
  document.querySelectorAll('.demo-preview .ds-toolbar__segmented').forEach(function (seg) {
    seg.addEventListener('click', function (e) {
      var btn = e.target.closest('.ds-toolbar__segmented-btn');
      if (!btn) return;
      seg.querySelectorAll('.ds-toolbar__segmented-btn').forEach(function (b) {
        b.classList.remove('ds-toolbar__segmented-btn--active');
      });
      btn.classList.add('ds-toolbar__segmented-btn--active');
    });
  });
})();
