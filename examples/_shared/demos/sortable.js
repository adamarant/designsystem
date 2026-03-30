// Sortable — drag-and-drop reorder via native HTML drag API
(function () {
  document.querySelectorAll('.demo-preview .ds-sortable__handle').forEach(function (handle) {
    var row = handle.closest('tr') || handle.closest('.ds-sortable__item') || handle.closest('li');
    if (!row) return;
    row.setAttribute('draggable', 'true');

    row.addEventListener('dragstart', function (e) {
      handle.classList.add('ds-sortable__handle--dragging');
      row.style.opacity = '0.5';
      e.dataTransfer.effectAllowed = 'move';
      // Store reference via a class marker
      row.classList.add('ds-sortable--dragging');
    });

    row.addEventListener('dragend', function () {
      handle.classList.remove('ds-sortable__handle--dragging');
      row.style.opacity = '';
      row.classList.remove('ds-sortable--dragging');
      // Clean up all over states
      document.querySelectorAll('.ds-sortable--over').forEach(function (el) {
        el.classList.remove('ds-sortable--over');
      });
    });

    row.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      row.classList.add('ds-sortable--over');
    });

    row.addEventListener('dragleave', function () {
      row.classList.remove('ds-sortable--over');
    });

    row.addEventListener('drop', function (e) {
      e.preventDefault();
      row.classList.remove('ds-sortable--over');
      var dragging = row.parentElement.querySelector('.ds-sortable--dragging');
      if (dragging && dragging !== row) {
        row.parentElement.insertBefore(dragging, row);
      }
    });
  });
})();
