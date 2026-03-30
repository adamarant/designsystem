// Bottom Sheet — open/close
(function () {
  document.querySelectorAll('.demo-preview [data-demo-sheet-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sheet = btn.closest('.demo-preview').querySelector('.ds-bottom-sheet');
      if (sheet) sheet.classList.add('ds-bottom-sheet--open');
    });
  });

  document.querySelectorAll('.demo-preview .ds-bottom-sheet').forEach(function (sheet) {
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('[data-demo-sheet-close]') || e.target.classList.contains('ds-bottom-sheet__backdrop')) {
        sheet.classList.remove('ds-bottom-sheet--open');
      }
    });
  });
})();
