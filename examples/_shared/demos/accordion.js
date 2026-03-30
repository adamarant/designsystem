// Accordion — toggle items open/closed
(function () {
  document.querySelectorAll('.demo-preview .ds-accordion').forEach(function (acc) {
    acc.querySelectorAll('.ds-accordion__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = trigger.closest('.ds-accordion__item');
        var isOpen = item.classList.contains('ds-accordion__item--open');
        item.classList.toggle('ds-accordion__item--open');
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  });
})();
