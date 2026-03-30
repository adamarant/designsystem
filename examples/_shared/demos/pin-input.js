// Pin Input — auto-advance between digits
(function () {
  document.querySelectorAll('.demo-preview .ds-pin-input').forEach(function (el) {
    var inputs = el.querySelectorAll('.ds-pin-input__field');
    inputs.forEach(function (input, i) {
      input.addEventListener('input', function () {
        if (input.value && i < inputs.length - 1) inputs[i + 1].focus();
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && !input.value && i > 0) inputs[i - 1].focus();
      });
    });
  });
})();
