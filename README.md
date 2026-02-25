# @digiko-npm/designsystem

CSS-only design system. Zero dependencies. Install anywhere, override tokens, nothing breaks.

## Install

```bash
npm install @digiko-npm/designsystem
```

## Usage

```css
/* Everything */
@import '@digiko-npm/designsystem';

/* Or individual layers */
@import '@digiko-npm/designsystem/tokens';
@import '@digiko-npm/designsystem/base';
@import '@digiko-npm/designsystem/components';
@import '@digiko-npm/designsystem/utilities';
```

```html
<button class="ds-btn">Default</button>
<button class="ds-btn ds-btn--secondary">Secondary</button>
<button class="ds-btn ds-btn--sm">Small</button>

<div class="ds-card">
  <div class="ds-card__body">Card content</div>
</div>

<input class="ds-input" placeholder="Type here..." />
<span class="ds-badge ds-badge--success">Active</span>
```

## Components (28)

| Core | Essential | Common | Advanced |
|------|-----------|--------|----------|
| Button | Tabs | Toggle | Popover |
| Card | Alert | Breadcrumb | Slider |
| Input | Divider | Pagination | Timeline |
| Badge | Dropdown | Tag | Kbd |
| Nav | Tooltip | Accordion | Command |
| Modal | Avatar | Drawer | |
| Toast | Skeleton | Progress | |
| Table | Empty State | | |

All components use `ds-` prefix with BEM naming: `.ds-btn`, `.ds-btn--secondary`, `.ds-card__body`.

## Theming

Override any `--ds-*` CSS variable. Your values always win.

```css
:root {
  --ds-font-display: "Inter", sans-serif;
  --ds-color-inverted: #2563eb;
  --ds-radius-xl: 24px;
}
```

### Dark mode

Built-in light/dark themes via `data-theme` attribute:

```html
<html data-theme="dark">
```

```js
import { theme } from '@digiko-npm/designsystem/js';
theme.toggle(); // Toggles light/dark with localStorage persistence
```

## Token categories

- **Colors** `--ds-color-*` — bg, surface, text, border, status, accent
- **Spacing** `--ds-space-*` — 0 to 32 scale
- **Typography** `--ds-text-*`, `--ds-weight-*`, `--ds-font-*` — xs to 7xl, Clash Display + Switzer + Geist Mono
- **Radius** `--ds-radius-*` — none to full
- **Shadows** `--ds-shadow-*` — sm, md, lg (auto-adjusts per theme)
- **Z-index** `--ds-z-*` — base, dropdown, sticky, overlay, modal, toast, tooltip
- **Transitions** `--ds-duration-*`, `--ds-ease-*` — fast/normal/slow + easing curves

## License

MIT
