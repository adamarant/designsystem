// Copy Button — copy + feedback
(function () {
  document.querySelectorAll('.demo-preview .ds-copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.add('ds-copy-btn--copied');
      setTimeout(function () { btn.classList.remove('ds-copy-btn--copied'); }, 2000);
    });
  });
})();
