// Star Rating — click to rate
(function () {
  document.querySelectorAll('.demo-preview .ds-star-rating--input').forEach(function (el) {
    el.querySelectorAll('.ds-star-rating__star').forEach(function (star, i, stars) {
      star.addEventListener('click', function () {
        stars.forEach(function (s, j) {
          s.classList.toggle('ds-star-rating__star--active', j <= i);
          s.setAttribute('aria-checked', j <= i ? 'true' : 'false');
        });
      });
    });
  });
})();
