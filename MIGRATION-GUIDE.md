# Migration Guide

**Every release gets a section here. No exceptions, and it is not optional:
`npm version` refuses to bump until the section for the new version exists**
(`scripts/check-migration-guide.js`, wired into the `version` script).

Write it before you bump, newest first, in this shape:

```markdown
## v<previous> → v<new>

### 1. Looks different with no change on your side
### 2. New, and entirely opt-in
### 3. Deprecated — frozen, removal at the next major
### Migration checklist
```

Tier 1 comes first on purpose: it is the one that reaches a consumer whether
they read this file or not. A release with nothing in it says so in a line —
that is still a section, and writing "nothing visible changed" is the point,
because the alternative is a consumer wondering.

Workspace packages (`ds-react`, `ds-admin`, `ds-shaders`) are documented in
the same section as the DS release they ship with. A workspace-only bump is
**not** covered by the gate — the check runs on the root version — so that
one is on you.

> This file stopped at 0.8.0 on 1 Jun 2026 and nothing was written for the 29
> releases after it; 0.38.0 is where it restarts, and the gate above exists so
> it cannot lapse again. The pre-0.8.0 sections were deleted on 5 Aug 2026 —
> nobody is upgrading from 0.3.x, and git has them.

## v0.37.2 → v0.38.0

The largest deprecation round in the DS's history: **12 classes deprecated,
29 added, 47 tokens added, nothing removed or renamed.** Every deprecated
class is frozen and still works — the ones due for removal go at the next
major, not in a 0.x.

Counted by grep across the 21 registered consumers on 2 Aug 2026 (occurrences
in `src/`, `app/`, `components/`, including CSS), so treat them as scale, not
as a work list.

Ships with **ds-react 1.12.0** — composed APIs for Field, Result and
EmptyState, the Stat block, badge's absorbed props and the alert action
slots; `StatCard` and `CustomSelect` are marked `@deprecated` — and
**ds-admin 0.18.0**, whose icons are now re-exports from ds-react (new peer
dependency `@adamarant/ds-react >=1.11.0`) and whose header burger draws two
bars instead of three, matching SiteHeader.

### 1. Looks different with no change on your side

These hit markup you already ship. Nothing to edit; there is something to
look at.

| what | who is affected | what changes |
|---|---|---|
| **`.ds-alert`** | 121 uses, 11 consumers | The 3px accent stripe on the leading edge is **gone** — the semantic signal is now the icon plus the tinted fill, as the reference has it. Items also align to the **top** instead of centre: a single-line alert is unaffected, one with a title and a description no longer has its icon floating in the middle. |
| **`.ds-segmented`** | 28 uses, 4 consumers | The border reads `--ds-color-border` instead of `--ds-color-border-subtle`. In dark, `border-subtle` is `#18181b` — the exact value of the control's own fill, so **the border never rendered at all**; in light it was lighter than what it surrounded. The token is unchanged and its five other users are untouched. |
| **`.ds-nav`** | 120 uses, 9 consumers | The bar is a **column** with `min-height: 4rem` instead of a row with `height: 4rem`. The mobile panel was a second child squeezed to zero width beside `__inner` and clipped out of the fixed box — measured 0 × 574px, never visible in any consumer using `SiteHeader`. Above `md` the panel is `display: none`, so the column has one child and **desktop renders identically**, border included: the bar is `calc(4rem - 1px)` precisely so no fixed-header offset moves by a pixel. |
| **`.ds-input`** and the select chevron | ecosystem-wide | The hand-drawn 12px triangle is now the icon set's chevron, at `--ds-color-text-tertiary` (`#71717a`) instead of a hardcoded `#a1a1aa` that matched no token in either theme. |
| **`.ds-checkbox`**, **`.ds-star-rating`** | ecosystem-wide | Both were drawing their own glyph — a hand-written check path, and the text character `★` layered over an SVG that never lined up with it. Both now use the icon set's mark. |
| **`.ds-stat-number`** | 48 uses, 16 consumers | Same rendering on web. It now reads tokens instead of hardcoding, so under `data-surface="product"` it switches to the sans face at a heavier weight — the display face on a dashboard metric is what the typography law forbids. |

**Zero change, said explicitly** so nobody goes hunting: the seven floating
panels (`dropdown`, `custom-select`, `popover`, `combobox`, `context-menu`,
`datepicker`, `command`) and the six scrims (`modal`, `drawer`, `command`, …)
now read one shared rule instead of each declaring its own. The removed
declarations were byte-identical to what the shared rule declares. No markup
changes, no class renames.

### 2. New, and entirely opt-in

- **`.ds-heading-1` … `.ds-heading-6`, `.ds-copy`, `.ds-caption`** — the type
  role ladder. The class names what the text *is*; the surface and the
  viewport decide the number.
- **`data-surface="product"`** on a shell — the same classes render at
  product sizes on the sans face. Web is the default; without the attribute
  nothing changes.
- **`data-radius="sharp" | "soft" | "pill"`** — the radius ramp, set once per
  brand. Default (no attribute) is today's values.
- **`.ds-overlay`, `.ds-panel`** — the scrim and the floating surface, now
  nameable on their own.
- **`.ds-stat`** (`__value`, `__label`, `__icon`, `__detail`) — the metric as
  a block, to put inside a `.ds-card`.
- **`.ds-badge--interactive | --active | --inverted | --removable`,
  `.ds-badge__remove`** — badge absorbing what tag and chip did.
- **`.ds-alert__actions`, `.ds-alert--actions-inline`** — real `.ds-btn` go
  inside; the alert arranges them, it does not restyle them.
- **`.ds-drawer__handle`, `.ds-kbd--flat`**.
- **47 tokens**: `--ds-weight-delicate | standard | robust | intense`, the
  `--ds-type-*` roles, `--ds-icon-1…4` (the glyph that belongs inside a
  `--ds-size-N` control), `--ds-rhythm-section | block | element`,
  `--ds-stat-value-*`.

### 3. Deprecated — frozen, removal at the next major

**Typography.** The whole named-class family gives way to the role ladder.
This is the big one by volume and the least urgent by risk: every class below
is byte-identical to 0.37.2 and will keep rendering until a major.

| deprecated | successor | uses / consumers | note |
|---|---|---|---|
| `.ds-hero-title` | `.ds-heading-1` | 73 / 16 | 56→80px vs this 40→72 |
| `.ds-section-title` | `.ds-heading-2` | 194 / 17 | 40→56px vs this 30→36 — the hierarchy fix, review per page |
| `.ds-editorial-title` | `.ds-heading-1` | 57 / 9 | |
| `.ds-editorial-lede` | `.ds-copy` | 144 / 14 | the Figma scale has no separate lede step |
| `.ds-editorial-body` | `.ds-copy` | 63 / 8 | |
| `.ds-heading-ui` | `.ds-heading-3/4/5` under `data-surface="product"` | 133 / 19 | the successors finally give it a size |
| `.ds-admin-title` | `.ds-heading-1` under `data-surface="product"` | 1 / 1 | 28px vs this 20→24 |

`.ds-overline`, `.ds-body` and `.ds-meta` are **not** deprecated — they read
role tokens now, at the same values. `.ds-label` is not deprecated either.

**Components.**

| deprecated | successor | uses / consumers | why |
|---|---|---|---|
| `.ds-tag` | `.ds-badge` | 15 / 3 | |
| `.ds-chip` | `.ds-badge--interactive` | 14 / 4 | badge has 169 uses; these two were the same component three times |
| `.ds-stat-card` | `.ds-card` + `.ds-stat` | 40 / 3 | it re-declared the card's box declaration for declaration, so it could never inherit a card modifier |
| `.ds-form-group` | `.ds-field` | 37 / 4 | **not a rename** — `.ds-form-group` pushes 16px down from each group, `.ds-field` puts 6px between its own parts and lets the form own the distance between fields. Per-page review, not a codemod |
| `.ds-help` | `.ds-field__hint` | 0 | |
| `.ds-bottom-sheet` | `.ds-drawer--bottom` | 0 | |
| `.ds-toolbar__segmented` | a real `.ds-segmented` inside the toolbar | 29 / 1 (cortex) | it was a second segmented control that had drifted on every visible axis |

`StatCard` and `CustomSelect` carry the matching `@deprecated` in ds-react.

### Migration checklist

- [ ] `npm update @adamarant/designsystem @adamarant/ds-react`
- [ ] **Look at your alerts** — multi-line ones lost the stripe and now top-align
- [ ] **Look at your header on mobile** — the panel that never opened now does
- [ ] Optional and safe: `.ds-tag` → `.ds-badge`, `.ds-chip` →
      `.ds-badge--interactive`, `.ds-stat-card` → `.ds-card` + `.ds-stat`
- [ ] Needs judgement, not a codemod: `.ds-form-group` → `.ds-field`, and the
      typography family → the role ladder
- [ ] Only if you want the new behaviour: `data-surface`, `data-radius`

---

## v0.7.x → v0.8.0

### New Components (11)

| Component | Description |
|---|---|
| `ds-combobox` | Text input with filterable dropdown, single/multi-select, inline creation |
| `ds-number-input` | Numeric stepper with +/- buttons |
| `ds-pin-input` | OTP/PIN verification input (one-char-per-field) |
| `ds-segmented-control` | Toggle between 2-5 options (compact tab alternative) |
| `ds-gallery` + `ds-lightbox` | Image gallery with thumbnails + fullscreen overlay |
| `ds-copy-button` | Clipboard copy with feedback state |
| `ds-scroll-area` | Custom-styled scrollbar |
| `ds-color-picker` | Color swatch grid |
| `ds-truncated-text` + `ds-hash` | Text truncation + hash/address display |
| `ds-bottom-sheet` | Mobile slide-up overlay |
| `ds-star-rating` | Star ratings (display + input) |

### New Package: `@adamarant/ds-hooks`

Optional React hooks companion. Install separately:
```bash
npm install @adamarant/ds-hooks
```

8 hooks: `useClickOutside`, `useEscapeKey`, `useKeyboardNav`, `useDebouncedValue`, `useFocusTrap`, `useScrollLock`, `useClipboard`, `useMediaQuery`.

### Enhanced Components

- **Table**: sorting, selection, sticky headers, striped/bordered/dense, loading skeleton, responsive `--stack`
- **Field**: `ds-field__error[data-animate]`, `ds-field__success`, `ds-field__counter`
- **Pagination**: container query (hides pages when narrow)
- **Stat Card**: container query (compact when narrow)

### CSS Nesting

All components now use **native CSS nesting**. This requires:
- Chrome 112+, Firefox 117+, Safari 17.2+ (all 2024+)
- If your build tool strips nesting, ensure it has a nesting plugin (PostCSS Nesting or Lightning CSS)
- No changes needed if you use the pre-built `dist/designsystem.css` bundle

### Tier Reorganization

- `icon-btn` promoted from Tier 3 → **Core**
- `search` promoted from Tier 3 → **Tier 1 Essential**
- `spinner` promoted from Tier 3 → **Tier 1 Essential**

### Breaking Changes
None. All existing class names and tokens unchanged.

### Migration Checklist
- [ ] Update `@adamarant/designsystem` to `^0.8.0`
- [ ] Optionally install `@adamarant/ds-hooks` and replace custom click-outside/escape/keyboard-nav implementations
- [ ] Replace custom table pagination/sorting with DS table modifiers
- [ ] Replace custom combobox/autocomplete with `ds-combobox`
- [ ] Verify browser compatibility with CSS nesting (Chrome 112+, Firefox 117+, Safari 17.2+)
