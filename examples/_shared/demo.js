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

// ==========================================================================
// Interactive component demos
// ==========================================================================

// Combobox — single-select demo
(function initComboboxDemos() {
  document.querySelectorAll('[data-demo-combobox]').forEach(el => {
    const input = el.querySelector('.ds-combobox__input');
    const listbox = el.querySelector('.ds-combobox__listbox');
    if (!input || !listbox) return;
    const allOptions = () => listbox.querySelectorAll('.ds-combobox__option');

    function open() {
      listbox.classList.add('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'true');
    }

    function close() {
      listbox.classList.remove('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'false');
      allOptions().forEach(o => o.classList.remove('ds-combobox__option--active'));
    }

    input.addEventListener('focus', open);
    input.addEventListener('input', () => {
      open();
      const q = input.value.toLowerCase();
      allOptions().forEach(opt => {
        opt.hidden = !opt.textContent.toLowerCase().includes(q);
      });
    });

    listbox.addEventListener('click', (e) => {
      const opt = e.target.closest('.ds-combobox__option');
      if (!opt) return;
      allOptions().forEach(o => o.classList.remove('ds-combobox__option--selected'));
      opt.classList.add('ds-combobox__option--selected');
      input.value = opt.textContent;
      close();
    });

    input.addEventListener('keydown', (e) => {
      const visible = [...allOptions()].filter(o => !o.hidden);
      const active = listbox.querySelector('.ds-combobox__option--active');
      const idx = active ? visible.indexOf(active) : -1;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        open();
        active?.classList.remove('ds-combobox__option--active');
        visible[Math.min(idx + 1, visible.length - 1)]?.classList.add('ds-combobox__option--active');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        active?.classList.remove('ds-combobox__option--active');
        visible[Math.max(idx - 1, 0)]?.classList.add('ds-combobox__option--active');
      } else if (e.key === 'Enter' && active) {
        e.preventDefault();
        active.click();
        active.classList.remove('ds-combobox__option--active');
      } else if (e.key === 'Escape') {
        close();
        input.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!el.contains(e.target)) close();
    });
  });

  // Combobox — multi-select demo
  document.querySelectorAll('[data-demo-combobox-multi]').forEach(el => {
    const inputArea = el.querySelector('.ds-combobox__input-area');
    const input = el.querySelector('.ds-combobox__input');
    const listbox = el.querySelector('.ds-combobox__listbox');
    if (!input || !listbox) return;
    const allOptions = () => listbox.querySelectorAll('.ds-combobox__option');

    function open() {
      listbox.classList.add('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'true');
    }

    function close() {
      listbox.classList.remove('ds-combobox__listbox--open');
      input.setAttribute('aria-expanded', 'false');
    }

    function addTag(label) {
      const tag = document.createElement('span');
      tag.className = 'ds-combobox__tag';
      tag.innerHTML = `${label} <button class="ds-combobox__tag-remove" aria-label="Remove ${label}">&times;</button>`;
      inputArea.insertBefore(tag, input);
    }

    function removeTag(label) {
      inputArea.querySelectorAll('.ds-combobox__tag').forEach(tag => {
        if (tag.textContent.trim().replace('×', '').trim() === label) tag.remove();
      });
    }

    function getSelectedLabels() {
      return [...inputArea.querySelectorAll('.ds-combobox__tag')]
        .map(t => t.textContent.trim().replace('×', '').trim());
    }

    input.addEventListener('focus', open);
    input.addEventListener('input', () => {
      open();
      const q = input.value.toLowerCase();
      allOptions().forEach(opt => {
        opt.hidden = !opt.textContent.toLowerCase().includes(q);
      });
    });

    listbox.addEventListener('click', (e) => {
      const opt = e.target.closest('.ds-combobox__option');
      if (!opt) return;
      const label = opt.textContent.trim();
      const isSelected = opt.classList.contains('ds-combobox__option--selected');

      if (isSelected) {
        opt.classList.remove('ds-combobox__option--selected');
        opt.setAttribute('aria-selected', 'false');
        removeTag(label);
      } else {
        opt.classList.add('ds-combobox__option--selected');
        opt.setAttribute('aria-selected', 'true');
        addTag(label);
      }
      input.value = '';
      input.focus();
    });

    // Tag remove buttons (delegated)
    el.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.ds-combobox__tag-remove');
      if (!removeBtn) return;
      const tag = removeBtn.closest('.ds-combobox__tag');
      const label = tag.textContent.trim().replace('×', '').trim();
      tag.remove();
      allOptions().forEach(opt => {
        if (opt.textContent.trim() === label) {
          opt.classList.remove('ds-combobox__option--selected');
          opt.setAttribute('aria-selected', 'false');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!el.contains(e.target)) close();
    });
  });
})();

// Accordion — toggle items
(function initAccordionDemos() {
  document.querySelectorAll('.demo-preview .ds-accordion').forEach(acc => {
    acc.querySelectorAll('.ds-accordion__trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.ds-accordion__item');
        item.classList.toggle('ds-accordion__item--open');
      });
    });
  });
})();

// Tabs — switch active tab
(function initTabsDemos() {
  document.querySelectorAll('.demo-preview .ds-tabs').forEach(tabs => {
    tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.ds-tab');
      if (!tab || tab.disabled) return;
      tabs.querySelectorAll('.ds-tab').forEach(t => t.classList.remove('ds-tab--active'));
      tab.classList.add('ds-tab--active');
    });
  });
})();

// Toggle — switch on/off
(function initToggleDemos() {
  document.querySelectorAll('.demo-preview .ds-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const checked = toggle.getAttribute('aria-checked') === 'true';
      toggle.setAttribute('aria-checked', String(!checked));
    });
  });
})();

// Collapsible — expand/collapse
(function initCollapsibleDemos() {
  document.querySelectorAll('.demo-preview .ds-collapsible').forEach(el => {
    const trigger = el.querySelector('.ds-collapsible__trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      el.classList.toggle('ds-collapsible--open');
    });
  });
})();

// Segmented control — switch active segment
(function initSegmentedDemos() {
  document.querySelectorAll('.demo-preview .ds-segmented').forEach(seg => {
    seg.addEventListener('click', (e) => {
      const item = e.target.closest('.ds-segmented__item');
      if (!item || item.disabled) return;
      seg.querySelectorAll('.ds-segmented__item').forEach(i => i.classList.remove('ds-segmented__item--active'));
      item.classList.add('ds-segmented__item--active');
    });
  });
})();

// Modal — open/close
(function initModalDemos() {
  document.querySelectorAll('.demo-preview [data-demo-modal-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.demo-preview').querySelector('.ds-modal');
      if (modal) modal.classList.add('ds-modal--open');
    });
  });
  document.querySelectorAll('.demo-preview .ds-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-demo-modal-close]') || e.target === modal.querySelector('.ds-modal__backdrop')) {
        modal.classList.remove('ds-modal--open');
      }
    });
  });
})();

// Drawer — open/close
(function initDrawerDemos() {
  document.querySelectorAll('.demo-preview [data-demo-drawer-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const drawer = btn.closest('.demo-preview').querySelector('.ds-drawer');
      if (drawer) drawer.classList.add('ds-drawer--open');
    });
  });
  document.querySelectorAll('.demo-preview .ds-drawer').forEach(drawer => {
    drawer.addEventListener('click', (e) => {
      if (e.target.closest('[data-demo-drawer-close]') || e.target.classList.contains('ds-drawer__backdrop')) {
        drawer.classList.remove('ds-drawer--open');
      }
    });
  });
})();

// Dropdown — open/close menu
(function initDropdownDemos() {
  document.querySelectorAll('.demo-preview .ds-dropdown').forEach(dd => {
    const trigger = dd.querySelector('.ds-dropdown__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = dd.classList.contains('ds-dropdown--open');
      document.querySelectorAll('.ds-dropdown--open').forEach(d => d.classList.remove('ds-dropdown--open'));
      if (!isOpen) dd.classList.add('ds-dropdown--open');
    });

    dd.addEventListener('click', (e) => {
      if (e.target.closest('.ds-dropdown__item')) {
        dd.classList.remove('ds-dropdown--open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) dd.classList.remove('ds-dropdown--open');
    });
  });
})();

// Toast — show/dismiss
(function initToastDemos() {
  document.querySelectorAll('.demo-preview [data-demo-toast-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const toast = btn.closest('.demo-preview').querySelector('.ds-toast');
      if (!toast) return;
      toast.hidden = false;
      toast.classList.add('ds-toast--enter');
      setTimeout(() => toast.classList.remove('ds-toast--enter'), 300);
    });
  });
  document.querySelectorAll('.demo-preview .ds-toast__close').forEach(btn => {
    btn.addEventListener('click', () => {
      const toast = btn.closest('.ds-toast');
      if (toast) toast.hidden = true;
    });
  });
})();

// Bottom Sheet — open/close
(function initBottomSheetDemos() {
  document.querySelectorAll('.demo-preview [data-demo-sheet-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sheet = btn.closest('.demo-preview').querySelector('.ds-bottom-sheet');
      if (sheet) sheet.classList.add('ds-bottom-sheet--open');
    });
  });
  document.querySelectorAll('.demo-preview .ds-bottom-sheet').forEach(sheet => {
    sheet.addEventListener('click', (e) => {
      if (e.target.closest('[data-demo-sheet-close]') || e.target.classList.contains('ds-bottom-sheet__backdrop')) {
        sheet.classList.remove('ds-bottom-sheet--open');
      }
    });
  });
})();

// Custom Select — open/close, select option
(function initCustomSelectDemos() {
  document.querySelectorAll('.demo-preview .ds-custom-select').forEach(el => {
    const trigger = el.querySelector('.ds-custom-select__trigger');
    const panel = el.querySelector('.ds-custom-select__panel');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      trigger.classList.toggle('ds-custom-select__trigger--open');
      if (panel) panel.hidden = !panel.hidden;
    });

    if (panel) {
      panel.querySelectorAll('.ds-custom-select__option').forEach(opt => {
        opt.addEventListener('click', () => {
          const label = trigger.querySelector('.ds-custom-select__trigger-label');
          if (label && !el.classList.contains('ds-custom-select--multi')) {
            label.textContent = opt.textContent.trim();
            panel.querySelectorAll('.ds-custom-select__option').forEach(o => o.classList.remove('ds-custom-select__option--selected'));
            opt.classList.add('ds-custom-select__option--selected');
            trigger.classList.remove('ds-custom-select__trigger--open');
            panel.hidden = true;
          }
        });
      });

      document.addEventListener('click', (e) => {
        if (!el.contains(e.target)) {
          trigger.classList.remove('ds-custom-select__trigger--open');
          panel.hidden = true;
        }
      });
    }
  });
})();

// Popover — toggle
(function initPopoverDemos() {
  document.querySelectorAll('.demo-preview [data-demo-popover-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const popover = btn.closest('.demo-preview').querySelector('.ds-popover');
      if (popover) popover.classList.toggle('ds-popover--open');
    });
  });
})();

// Number Input — increment/decrement
(function initNumberInputDemos() {
  document.querySelectorAll('.demo-preview .ds-number-input').forEach(el => {
    const input = el.querySelector('.ds-number-input__input');
    const decBtn = el.querySelector('.ds-number-input__btn--dec, .ds-number-input__btn:first-of-type');
    const incBtn = el.querySelector('.ds-number-input__btn--inc, .ds-number-input__btn:last-of-type');
    if (!input) return;

    if (decBtn) decBtn.addEventListener('click', () => {
      const min = Number(input.min) || -Infinity;
      input.value = Math.max(min, Number(input.value) - 1);
    });
    if (incBtn) incBtn.addEventListener('click', () => {
      const max = Number(input.max) || Infinity;
      input.value = Math.min(max, Number(input.value) + 1);
    });
  });
})();

// Pin Input — auto-advance between digits
(function initPinInputDemos() {
  document.querySelectorAll('.demo-preview .ds-pin-input').forEach(el => {
    const inputs = el.querySelectorAll('.ds-pin-input__field');
    inputs.forEach((input, i) => {
      input.addEventListener('input', () => {
        if (input.value && i < inputs.length - 1) inputs[i + 1].focus();
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && i > 0) inputs[i - 1].focus();
      });
    });
  });
})();

// Copy Button — copy + feedback
(function initCopyBtnDemos() {
  document.querySelectorAll('.demo-preview .ds-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('ds-copy-btn--copied');
      setTimeout(() => btn.classList.remove('ds-copy-btn--copied'), 2000);
    });
  });
})();

// Star Rating — click to rate
(function initStarRatingDemos() {
  document.querySelectorAll('.demo-preview .ds-star-rating--input').forEach(el => {
    el.querySelectorAll('.ds-star-rating__star').forEach((star, i, stars) => {
      star.addEventListener('click', () => {
        stars.forEach((s, j) => {
          s.classList.toggle('ds-star-rating__star--active', j <= i);
          s.setAttribute('aria-checked', j <= i ? 'true' : 'false');
        });
      });
    });
  });
})();

// Chip — toggle active / remove
(function initChipDemos() {
  document.querySelectorAll('.demo-preview .ds-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      if (e.target.closest('.ds-chip__remove')) {
        chip.remove();
      } else {
        chip.classList.toggle('ds-chip--active');
      }
    });
  });
})();

// Gallery — lightbox
(function initGalleryDemos() {
  document.querySelectorAll('.demo-preview .ds-gallery').forEach(gallery => {
    gallery.querySelectorAll('.ds-gallery__item').forEach(item => {
      item.addEventListener('click', () => {
        const lightbox = gallery.closest('.demo-preview').querySelector('.ds-lightbox');
        if (lightbox) lightbox.classList.add('ds-lightbox--open');
      });
    });
  });
  document.querySelectorAll('.demo-preview .ds-lightbox').forEach(lb => {
    lb.addEventListener('click', (e) => {
      if (e.target.closest('.ds-lightbox__close') || e.target.classList.contains('ds-lightbox__backdrop')) {
        lb.classList.remove('ds-lightbox--open');
      }
    });
  });
})();
