// Command palette — open/close, keyboard navigation, input filtering
(function () {
  // Inline command palette (rendered directly, not as overlay)
  document.querySelectorAll('.demo-preview .ds-command__input').forEach(function (input) {
    var container = input.closest('.demo-preview').querySelector('.ds-command__list') ||
                    input.closest('[class*="ds-command"]');
    if (!container) return;
    var list = input.closest('.demo-preview').querySelector('.ds-command__list');
    if (!list) return;

    // Filter items on input
    input.addEventListener('input', function () {
      var q = input.value.toLowerCase().trim();
      list.querySelectorAll('.ds-command__item').forEach(function (item) {
        var label = item.querySelector('.ds-command__item-label');
        var text = label ? label.textContent.toLowerCase() : item.textContent.toLowerCase();
        item.style.display = (q && !text.includes(q)) ? 'none' : '';
      });

      // Show/hide empty state
      var empty = input.closest('.demo-preview').querySelector('.ds-command__empty');
      var visibleItems = [].slice.call(list.querySelectorAll('.ds-command__item')).filter(function (i) { return i.style.display !== 'none'; });
      if (empty) {
        empty.style.display = visibleItems.length > 0 ? 'none' : '';
      }

      // Show/hide group headings
      list.querySelectorAll('.ds-command__group').forEach(function (group) {
        var visible = [].slice.call(group.querySelectorAll('.ds-command__item')).filter(function (i) { return i.style.display !== 'none'; });
        var heading = group.querySelector('.ds-command__group-heading');
        if (heading) heading.style.display = visible.length === 0 ? 'none' : '';
      });
    });

    // Keyboard navigation
    input.addEventListener('keydown', function (e) {
      var items = [].slice.call(list.querySelectorAll('.ds-command__item')).filter(function (i) { return i.style.display !== 'none'; });
      var active = list.querySelector('.ds-command__item--active');
      var idx = active ? items.indexOf(active) : -1;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (active) active.classList.remove('ds-command__item--active');
        var next = items[Math.min(idx + 1, items.length - 1)];
        if (next) next.classList.add('ds-command__item--active');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (active) active.classList.remove('ds-command__item--active');
        var prev = items[Math.max(idx - 1, 0)];
        if (prev) prev.classList.add('ds-command__item--active');
      }
    });
  });

  // Overlay command palette (with --open toggling)
  document.querySelectorAll('.demo-preview [data-demo-command-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cmd = btn.closest('.demo-preview').querySelector('.ds-command');
      if (cmd) {
        cmd.classList.add('ds-command--open');
        var input = cmd.querySelector('.ds-command__input');
        if (input) input.focus();
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ds-command--open').forEach(function (cmd) {
        cmd.classList.remove('ds-command--open');
      });
    }
  });
})();
