// Drop Zone — drag-over state
(function () {
  document.querySelectorAll('.demo-preview .ds-drop-zone').forEach(function (zone) {
    zone.addEventListener('dragover', function (e) {
      e.preventDefault();
      zone.classList.add('ds-drop-zone--active');
    });
    zone.addEventListener('dragleave', function () {
      zone.classList.remove('ds-drop-zone--active');
    });
    zone.addEventListener('drop', function (e) {
      e.preventDefault();
      zone.classList.remove('ds-drop-zone--active');
    });
  });
})();
