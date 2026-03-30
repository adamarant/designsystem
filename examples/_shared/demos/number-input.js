// Number Input — increment/decrement
(function () {
  document.querySelectorAll('.demo-preview .ds-number-input').forEach(function (el) {
    var input = el.querySelector('.ds-number-input__input');
    var decBtn = el.querySelector('.ds-number-input__btn--dec, .ds-number-input__btn:first-of-type');
    var incBtn = el.querySelector('.ds-number-input__btn--inc, .ds-number-input__btn:last-of-type');
    if (!input) return;

    if (decBtn) decBtn.addEventListener('click', function () {
      var min = Number(input.min) || -Infinity;
      input.value = Math.max(min, Number(input.value) - 1);
    });
    if (incBtn) incBtn.addEventListener('click', function () {
      var max = Number(input.max) || Infinity;
      input.value = Math.min(max, Number(input.value) + 1);
    });
  });
})();
