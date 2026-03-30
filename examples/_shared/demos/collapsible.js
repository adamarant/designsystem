// Collapsible — expand/collapse
(function () {
  document.querySelectorAll('.demo-preview .ds-collapsible').forEach(function (el) {
    var trigger = el.querySelector('.ds-collapsible__trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function () {
      var isOpen = el.classList.contains('ds-collapsible--open');
      el.classList.toggle('ds-collapsible--open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();
