// Slider — sync value display on input change
(function () {
  document.querySelectorAll('.demo-preview .ds-slider').forEach(function (slider) {
    var input = slider.querySelector('input[type="range"]');
    if (!input) return;

    // Find associated value display (sibling or inside slider)
    var valueEl = slider.querySelector('.ds-slider__value') ||
                  slider.parentElement.querySelector('.ds-slider__value');

    if (valueEl) {
      input.addEventListener('input', function () {
        valueEl.textContent = input.value + '%';
      });
    }
  });
})();
