// Search — clear button, dropdown show/hide, keyboard navigation
(function () {
  document.querySelectorAll('.demo-preview .ds-search').forEach(function (search) {
    var input = search.querySelector('.ds-search__input');
    var clearBtn = search.querySelector('.ds-search__clear');
    var wrapper = search.closest('.demo-preview').querySelector('.ds-search__dropdown');
    if (!input) return;

    // Clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        input.value = '';
        input.focus();
        if (wrapper) wrapper.hidden = true;
      });
    }

    // Show dropdown on focus (if it exists and input has value)
    if (wrapper) {
      input.addEventListener('focus', function () {
        if (input.value.trim()) wrapper.hidden = false;
      });
      input.addEventListener('input', function () {
        wrapper.hidden = !input.value.trim();
      });

      // Keyboard navigation through results
      input.addEventListener('keydown', function (e) {
        var results = wrapper.querySelectorAll('.ds-search__result');
        var active = wrapper.querySelector('.ds-search__result--active');
        var items = [].slice.call(results);
        var idx = active ? items.indexOf(active) : -1;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (active) active.classList.remove('ds-search__result--active');
          var next = items[Math.min(idx + 1, items.length - 1)];
          if (next) next.classList.add('ds-search__result--active');
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (active) active.classList.remove('ds-search__result--active');
          var prev = items[Math.max(idx - 1, 0)];
          if (prev) prev.classList.add('ds-search__result--active');
        } else if (e.key === 'Escape') {
          wrapper.hidden = true;
          input.blur();
        }
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!search.contains(e.target) && !wrapper.contains(e.target)) {
          wrapper.hidden = true;
        }
      });
    }
  });
})();
