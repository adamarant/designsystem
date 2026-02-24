/**
 * @ds/designsystem — Theme Manager
 *
 * Handles light/dark theme toggling with localStorage persistence.
 *
 * Usage:
 *   import { theme } from '@ds/designsystem/js';
 *   theme.toggle();
 *   theme.set('dark');
 *   theme.get(); // 'light' | 'dark' | 'system'
 */

const STORAGE_KEY = 'ds-theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(mode) {
  const resolved = mode === 'system' ? getSystemTheme() : mode;
  document.documentElement.setAttribute('data-theme', resolved);
}

export const theme = {
  /** Initialize theme from stored preference or system default */
  init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      applyTheme(stored);
    }
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const current = localStorage.getItem(STORAGE_KEY);
      if (!current || current === 'system') {
        applyTheme('system');
      }
    });
  },

  /** Set theme: 'light', 'dark', or 'system' */
  set(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  },

  /** Get current stored preference */
  get() {
    return localStorage.getItem(STORAGE_KEY) || 'system';
  },

  /** Toggle between light and dark */
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    this.set(next);
    return next;
  }
};

// Auto-init if script is loaded directly
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => theme.init());
  } else {
    theme.init();
  }
}
