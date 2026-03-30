// Admin Layout — sidebar toggle expanded/collapsed
(function () {
  document.querySelectorAll('.demo-preview .ds-admin').forEach(function (admin) {
    // Look for a toggle button (sidebar header or specific trigger)
    var toggle = admin.querySelector('[data-demo-admin-toggle]') ||
                 admin.querySelector('.ds-admin__sidebar-toggle');
    if (!toggle) {
      // If no explicit toggle, make the sidebar header clickable
      var header = admin.querySelector('.ds-admin__sidebar-header');
      if (header) {
        header.style.cursor = 'pointer';
        toggle = header;
      }
    }
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var isExpanded = admin.classList.contains('ds-admin--expanded');
      admin.classList.toggle('ds-admin--expanded', !isExpanded);
      admin.classList.toggle('ds-admin--collapsed', isExpanded);
    });
  });
})();
