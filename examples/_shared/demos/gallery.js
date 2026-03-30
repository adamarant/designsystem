// Gallery — lightbox open/close
(function () {
  document.querySelectorAll('.demo-preview .ds-gallery').forEach(function (gallery) {
    gallery.querySelectorAll('.ds-gallery__item').forEach(function (item) {
      item.addEventListener('click', function () {
        var lightbox = gallery.closest('.demo-preview').querySelector('.ds-lightbox');
        if (lightbox) lightbox.classList.add('ds-lightbox--open');
      });
    });
  });

  document.querySelectorAll('.demo-preview .ds-lightbox').forEach(function (lb) {
    lb.addEventListener('click', function (e) {
      if (e.target.closest('.ds-lightbox__close') || e.target.classList.contains('ds-lightbox__backdrop')) {
        lb.classList.remove('ds-lightbox--open');
      }
    });
  });
})();
