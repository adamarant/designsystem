/**
 * Demo site JavaScript
 * Handles: theme toggle, search, code copying, catalog rendering
 */

// Theme toggle (same as inline in old demo)
(function initTheme() {
  const stored = localStorage.getItem('ds-theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-toggle-theme]');
    if (!btn) return;
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ds-theme', next);
  });
})();

// Search filtering
(function initSearch() {
  const input = document.getElementById('componentSearch');
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    const links = document.querySelectorAll('.demo-sidebar__link');

    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      const match = !query || text.includes(query);
      link.hidden = !match;
    });

    // Show/hide category labels based on visible children
    document.querySelectorAll('.demo-sidebar__group').forEach(group => {
      const visibleLinks = group.querySelectorAll('.demo-sidebar__link:not([hidden])');
      const label = group.querySelector('.demo-sidebar__label');
      if (label) label.hidden = visibleLinks.length === 0;
    });
  });
})();

// Code copy on click
(function initCodeCopy() {
  document.addEventListener('click', (e) => {
    const code = e.target.closest('.demo-meta code');
    if (!code) return;

    navigator.clipboard.writeText(code.textContent).then(() => {
      const original = code.textContent;
      code.textContent = 'Copied!';
      setTimeout(() => { code.textContent = original; }, 1500);
    });
  });
})();

// Catalog renderer (homepage only)
async function renderCatalog() {
  const container = document.getElementById('catalog');
  if (!container) return;

  try {
    const res = await fetch('/components.json');
    const manifest = await res.json();

    // Also populate sidebar
    const sidebarNav = document.getElementById('componentNav');

    manifest.categories.forEach(cat => {
      const components = manifest.components.filter(c => c.category === cat.id);

      // Catalog section
      const section = document.createElement('section');
      section.className = 'demo-category';
      section.innerHTML = `
        <h2>${cat.label}</h2>
        <p>${cat.description}</p>
        <div class="demo-catalog">
          ${components.map(c => `
            <a href="components/${c.name}.html" class="demo-catalog__card">
              <h3>${c.title}</h3>
              <p>${c.description}</p>
            </a>
          `).join('')}
        </div>
      `;
      container.appendChild(section);

      // Sidebar group
      if (sidebarNav) {
        const group = document.createElement('div');
        group.className = 'demo-sidebar__group';
        group.innerHTML = `
          <div class="demo-sidebar__label">${cat.label}</div>
          ${components.map(c => `
            <a href="components/${c.name}.html" class="demo-sidebar__link">${c.title}</a>
          `).join('')}
        `;
        sidebarNav.appendChild(group);
      }
    });
  } catch (err) {
    container.innerHTML = '<p>Failed to load components manifest.</p>';
  }
}

// Active link highlighting (component pages)
(function highlightActiveLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.demo-sidebar__link').forEach(link => {
    if (currentPath.endsWith(link.getAttribute('href')?.replace(/^\.\.\//, '').replace(/^\.\//, ''))) {
      link.classList.add('demo-sidebar__link--active');
    }
  });
})();

// Run catalog on homepage
if (document.getElementById('catalog')) {
  renderCatalog();
}
