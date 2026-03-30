// Custom Select — open/close, select option
(function () {
  document.querySelectorAll('.demo-preview .ds-custom-select').forEach(function (el) {
    var trigger = el.querySelector('.ds-custom-select__trigger');
    var panel = el.querySelector('.ds-custom-select__panel');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      var isOpen = trigger.classList.contains('ds-custom-select__trigger--open');
      trigger.classList.toggle('ds-custom-select__trigger--open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (panel) panel.hidden = !panel.hidden;
    });

    if (panel) {
      panel.querySelectorAll('.ds-custom-select__option').forEach(function (opt) {
        opt.addEventListener('click', function () {
          var label = trigger.querySelector('.ds-custom-select__trigger-label');
          if (label && !el.classList.contains('ds-custom-select--multi')) {
            label.textContent = opt.textContent.trim();
            panel.querySelectorAll('.ds-custom-select__option').forEach(function (o) {
              o.classList.remove('ds-custom-select__option--selected');
              o.setAttribute('aria-selected', 'false');
            });
            opt.classList.add('ds-custom-select__option--selected');
            opt.setAttribute('aria-selected', 'true');
            trigger.classList.remove('ds-custom-select__trigger--open');
            trigger.setAttribute('aria-expanded', 'false');
            panel.hidden = true;
          }
        });
      });

      document.addEventListener('click', function (e) {
        if (!el.contains(e.target)) {
          trigger.classList.remove('ds-custom-select__trigger--open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.hidden = true;
        }
      });
    }
  });
})();
