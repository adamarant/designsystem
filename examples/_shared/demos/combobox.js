// Combobox — single-select + multi-select
(function () {
  // Single-select
  document.querySelectorAll('[data-demo-combobox]').forEach(function (el) {
    var input = el.querySelector('.ds-combobox__input');
    var listbox = el.querySelector('.ds-combobox__listbox');
    if (!input || !listbox) return;
    var allOptions = function () { return listbox.querySelectorAll('.ds-combobox__option'); };

    function open() {
      listbox.classList.add('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'true');
    }

    function close() {
      listbox.classList.remove('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'false');
      allOptions().forEach(function (o) { o.classList.remove('ds-combobox__option--active'); });
    }

    input.addEventListener('focus', open);
    input.addEventListener('input', function () {
      open();
      var q = input.value.toLowerCase();
      allOptions().forEach(function (opt) {
        opt.style.display = opt.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });

    listbox.addEventListener('click', function (e) {
      var opt = e.target.closest('.ds-combobox__option');
      if (!opt) return;
      allOptions().forEach(function (o) { o.classList.remove('ds-combobox__option--selected'); });
      opt.classList.add('ds-combobox__option--selected');
      input.value = opt.textContent;
      close();
    });

    input.addEventListener('keydown', function (e) {
      var visible = [].slice.call(allOptions()).filter(function (o) { return o.style.display !== 'none'; });
      var active = listbox.querySelector('.ds-combobox__option--active');
      var idx = active ? visible.indexOf(active) : -1;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        open();
        if (active) active.classList.remove('ds-combobox__option--active');
        var next = visible[Math.min(idx + 1, visible.length - 1)];
        if (next) next.classList.add('ds-combobox__option--active');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (active) active.classList.remove('ds-combobox__option--active');
        var prev = visible[Math.max(idx - 1, 0)];
        if (prev) prev.classList.add('ds-combobox__option--active');
      } else if (e.key === 'Enter' && active) {
        e.preventDefault();
        active.click();
        active.classList.remove('ds-combobox__option--active');
      } else if (e.key === 'Escape') {
        close();
        input.blur();
      }
    });

    document.addEventListener('click', function (e) {
      if (!el.contains(e.target)) close();
    });
  });

  // Multi-select
  document.querySelectorAll('[data-demo-combobox-multi]').forEach(function (el) {
    var inputArea = el.querySelector('.ds-combobox__input-area');
    var input = el.querySelector('.ds-combobox__input');
    var listbox = el.querySelector('.ds-combobox__listbox');
    if (!input || !listbox) return;
    var allOptions = function () { return listbox.querySelectorAll('.ds-combobox__option'); };

    function open() {
      listbox.classList.add('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'true');
    }

    function close() {
      listbox.classList.remove('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'false');
    }

    function addTag(label) {
      var tag = document.createElement('span');
      tag.className = 'ds-combobox__tag';
      tag.innerHTML = label + ' <button class="ds-combobox__tag-remove" aria-label="Remove ' + label + '">&times;</button>';
      inputArea.insertBefore(tag, input);
    }

    function removeTag(label) {
      inputArea.querySelectorAll('.ds-combobox__tag').forEach(function (tag) {
        if (tag.textContent.trim().replace('\u00d7', '').trim() === label) tag.remove();
      });
    }

    input.addEventListener('focus', open);
    input.addEventListener('input', function () {
      open();
      var q = input.value.toLowerCase();
      allOptions().forEach(function (opt) {
        opt.style.display = opt.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });

    listbox.addEventListener('click', function (e) {
      var opt = e.target.closest('.ds-combobox__option');
      if (!opt) return;
      var label = opt.textContent.trim();
      var isSelected = opt.classList.contains('ds-combobox__option--selected');

      if (isSelected) {
        opt.classList.remove('ds-combobox__option--selected');
        opt.setAttribute('aria-selected', 'false');
        removeTag(label);
      } else {
        opt.classList.add('ds-combobox__option--selected');
        opt.setAttribute('aria-selected', 'true');
        addTag(label);
      }
      input.value = '';
      input.focus();
    });

    el.addEventListener('click', function (e) {
      var removeBtn = e.target.closest('.ds-combobox__tag-remove');
      if (!removeBtn) return;
      var tag = removeBtn.closest('.ds-combobox__tag');
      var label = tag.textContent.trim().replace('\u00d7', '').trim();
      tag.remove();
      allOptions().forEach(function (opt) {
        if (opt.textContent.trim() === label) {
          opt.classList.remove('ds-combobox__option--selected');
          opt.setAttribute('aria-selected', 'false');
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!el.contains(e.target)) close();
    });
  });
})();
