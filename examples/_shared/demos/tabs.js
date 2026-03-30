// Tabs — switch active tab + show/hide panels
(function () {
  document.querySelectorAll('.demo-preview .ds-tabs').forEach(function (tabs) {
    var tabList = tabs.querySelector('[role="tablist"]') || tabs;
    var allTabs = tabList.querySelectorAll('.ds-tab');
    var container = tabs.closest('.demo-preview');

    tabs.addEventListener('click', function (e) {
      var tab = e.target.closest('.ds-tab');
      if (!tab || tab.hasAttribute('aria-disabled')) return;

      // Update tab states
      allTabs.forEach(function (t) {
        t.classList.remove('ds-tab--active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      tab.classList.add('ds-tab--active');
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');

      // Show/hide panels if aria-controls is set
      var panelId = tab.getAttribute('aria-controls');
      if (panelId && container) {
        container.querySelectorAll('[role="tabpanel"]').forEach(function (panel) {
          panel.hidden = panel.id !== panelId;
        });
      }
    });
  });
})();
