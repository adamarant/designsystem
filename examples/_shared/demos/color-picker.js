// Color Picker — swatch selection
(function () {
  document.querySelectorAll('.demo-preview .ds-color-picker').forEach(function (picker) {
    picker.addEventListener('click', function (e) {
      var swatch = e.target.closest('.ds-color-picker__swatch');
      if (!swatch) return;
      picker.querySelectorAll('.ds-color-picker__swatch').forEach(function (s) {
        s.classList.remove('ds-color-picker__swatch--active');
        s.setAttribute('aria-checked', 'false');
      });
      swatch.classList.add('ds-color-picker__swatch--active');
      swatch.setAttribute('aria-checked', 'true');
    });
  });
})();
