// Toggle — switch on/off
(function () {
  document.querySelectorAll('.demo-preview .ds-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var checked = toggle.getAttribute('aria-checked') === 'true';
      toggle.setAttribute('aria-checked', String(!checked));
    });
  });
})();
