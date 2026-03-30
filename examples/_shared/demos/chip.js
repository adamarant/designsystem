// Chip — toggle active / remove
(function () {
  document.querySelectorAll('.demo-preview .ds-chip').forEach(function (chip) {
    chip.addEventListener('click', function (e) {
      if (e.target.closest('.ds-chip__remove')) {
        chip.remove();
      } else {
        chip.classList.toggle('ds-chip--active');
      }
    });
  });
})();
