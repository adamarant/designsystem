// Toast — show/dismiss
(function () {
  document.querySelectorAll('.demo-preview [data-demo-toast-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var toast = btn.closest('.demo-preview').querySelector('.ds-toast');
      if (!toast) return;
      toast.hidden = false;
      toast.classList.add('ds-toast--enter');
      setTimeout(function () { toast.classList.remove('ds-toast--enter'); }, 300);
    });
  });

  document.querySelectorAll('.demo-preview .ds-toast__close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var toast = btn.closest('.ds-toast');
      if (toast) toast.hidden = true;
    });
  });
})();
