// Datepicker — trigger toggle, day selection, today button
(function () {
  document.querySelectorAll('.demo-preview .ds-datepicker').forEach(function (dp) {
    var trigger = dp.querySelector('.ds-datepicker__trigger');
    var grid = dp.querySelector('.ds-datepicker__grid');
    var todayBtn = dp.querySelector('.ds-datepicker__today');

    // Toggle open/close on trigger click
    if (trigger) {
      trigger.addEventListener('click', function () {
        dp.classList.toggle('ds-datepicker--open');
      });
    }

    // Day selection
    if (grid) {
      grid.addEventListener('click', function (e) {
        var day = e.target.closest('.ds-datepicker__day');
        if (!day || day.classList.contains('ds-datepicker__day--other-month')) return;
        grid.querySelectorAll('.ds-datepicker__day').forEach(function (d) {
          d.classList.remove('ds-datepicker__day--selected');
        });
        day.classList.add('ds-datepicker__day--selected');

        // Update trigger text
        if (trigger) {
          trigger.textContent = 'Mar ' + day.textContent + ', 2026';
        }
      });
    }

    // Today button
    if (todayBtn) {
      todayBtn.addEventListener('click', function () {
        var today = grid ? grid.querySelector('.ds-datepicker__day--today') : null;
        if (today) {
          grid.querySelectorAll('.ds-datepicker__day').forEach(function (d) {
            d.classList.remove('ds-datepicker__day--selected');
          });
          today.classList.add('ds-datepicker__day--selected');
          if (trigger) trigger.textContent = 'Mar ' + today.textContent + ', 2026';
        }
      });
    }

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!dp.contains(e.target) && dp.classList.contains('ds-datepicker--open')) {
        dp.classList.remove('ds-datepicker--open');
      }
    });
  });
})();
