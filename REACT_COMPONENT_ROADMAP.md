# React Component Roadmap — ds-react

> Piano componente-per-componente per wrappare i 58 CSS components come React.
> Per la strategia generale (fasi, audit soup, touch-and-improve) → [`~/Projects/DS_REACT_PLAN.md`](~/Projects/DS_REACT_PLAN.md)
> Per le regole d'uso nei consumer → [`~/Projects/DS_REACT_RULES.md`](~/Projects/DS_REACT_RULES.md)

---

## Stato attuale

**Package:** `@digiko-npm/ds-react` — `packages/ds-react/`

### Componenti completati

| # | Componente | Tipo | Cat | Sessione | Note |
|---|-----------|------|-----|----------|------|
| — | Flex | Primitive | A | 2026-04-01 | Layout flex |
| — | Stack | Primitive | A | 2026-04-01 | Vertical spacing |
| — | Grid | Primitive | A | 2026-04-01 | Responsive grid |
| — | Text | Primitive | A | 2026-04-01 | Typography |
| — | Center | Primitive | A | 2026-04-01 | Flex center |
| — | Label | Composite | A | 2026-04-01 | Form label |
| 1 | Button | Component | C | 2026-04-03 | 7 varianti, 6 size, loading/disabled, ButtonGroup |
| 2 | Badge | Component | A | 2026-04-03 | 7 varianti, dot, upper |

---

## Coda — ordine per diffusione nei consumer

| # | Componente | Cat | Effort | Classi CSS | Note |
|---|-----------|-----|--------|-----------|------|
| 3 | Input | C | Large | ds-input, ds-textarea, ds-select, ds-label, ds-help, ds-form-group, ds-checkbox, ds-radio, ds-input-group | Umbrella form. Validation states (error/success). Potrebbe diventare Input + Textarea + Select + Checkbox + Radio come export separati |
| 4 | Card | B | Medium | ds-card, __header, __title, __description, __body, __footer, __media | Primo compound. Pattern `Object.assign` per dot notation (`Card.Header`, `Card.Body`, etc.) |
| 5 | Alert | B | Medium | ds-alert, __icon, __content, __title, __description, __close | Compound con varianti semantiche (info/success/warning/error), compact, banner |
| 6 | Tag | A/C | Small | ds-tag, __remove | Simile a Badge. La variant `removable` aggiunge `onRemove` callback |
| 7 | Avatar | A | Small | ds-avatar, __status, ds-avatar-group | 5 size, square/bordered, status indicator (online/offline/busy) |
| 8 | Spinner | A | Small | ds-spinner | Puro presentational, size |
| 9 | Modal | C | Large | ds-modal, __content, __header, __close, __body, __footer | Primo consumer di ds-hooks (useEscapeKey, useFocusTrap, useScrollLock). Portal. |
| 10 | Tabs | C | Large | ds-tabs, ds-tab, __icon, __count, ds-tab-panel | Keyboard nav (useKeyboardNav). Active state management. Pills/vertical/full variants |
| 11 | Dropdown | C | Large | ds-dropdown, __trigger, __menu, __item, __divider, __header | Il piu complesso. useClickOutside + useEscapeKey + useKeyboardNav + positioning |
| 12 | Tooltip | C | Medium | ds-tooltip, __content | Show/hide su hover/focus. Placement (top/bottom/left/right) |
| 13 | Table | B | Large | ds-table, ds-table-wrapper, __sort, __cell-*, __row-*, ds-table-footer | Molti modifier (compact/dense/striped/bordered/sticky-header). Sort indicators |
| 14 | Toggle | C | Small | ds-toggle | Checked state, aria-checked |
| 15 | Accordion | B | Medium | ds-accordion, __item, __trigger, __content | Open/close state per item |
| 16 | Stat Card | B | Small | ds-stat-card, __label, __value, __trend, __icon | Compound presentational |
| 17 | Chip | A | Small | ds-chip | Simile a Badge/Tag |
| 18+ | Remaining | — | — | — | breadcrumb, pagination, nav, divider, progress, skeleton, empty-state, toast, popover, drawer, bottom-sheet, command, etc. — da prioritizzare man mano |

---

## Categorie

| Cat | Tipo | Pattern | Quando |
|-----|------|---------|--------|
| **A** | Presentational | Props → className, zero logica. Identico a Label/Badge | Componenti senza stato (Badge, Avatar, Spinner, Chip) |
| **B** | Compound | Parent + sub-components via `Object.assign` (dot notation). Zero Context se non serve stato condiviso | Card, Alert, Table, Accordion, Stat Card |
| **C** | Interactive | State management + hooks da `@digiko-npm/ds-hooks` | Button (loading), Modal, Tabs, Dropdown, Toggle |

---

## Convenzioni (da seguire per ogni componente)

### File e struttura

- File in `src/components/ComponentName.tsx` (non `src/primitives/`)
- Named export + type export nel barrel `src/index.ts`
- Subpath export in `package.json` → `"./ComponentName"`

### Pattern implementativo

```tsx
// 1. Types — union types per ogni prop
type Variant = "a" | "b" | "c";

// 2. Props — estende ComponentPropsWithoutRef<"element">
export interface ComponentProps extends ComponentPropsWithoutRef<"div"> {
  variant?: Variant;
  className?: string;
}

// 3. Maps — Record<Type, string> per ogni prop → classe CSS
const variantMap: Record<Variant, string> = {
  a: "",          // default = nessun modifier
  b: "ds-component--b",
  c: "ds-component--c",
};

// 4. Component — forwardRef, cn(), className always last
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  function Component({ variant = "a", className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-component", variantMap[variant], className)}
        {...rest}
      />
    );
  },
);
```

### Compound pattern (Cat B)

```tsx
const CardRoot = forwardRef<HTMLDivElement, CardProps>(...);
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(...);

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
```

### Regole fisse

- **Niente `as` prop** sui componenti CSS — hanno semantica fissa
- **`ds-hooks` come peerDependency opzionale** — solo Cat C ne ha bisogno
- **className passthrough** sempre ultimo in `cn()`
- **Default = stringa vuota** nella map (il base CSS e gia lo stile default)
- **ARIA automatici** dove sensato (loading → aria-busy, etc.)
- **Zero CSS** — il wrapper non aggiunge mai CSS, solo className

---

## Note implementative

### Spinner loading (Button)

Il CSS `--loading` usa `color: var(--ds-color-on-inverted)` per lo spinner `::after`. Su varianti con sfondo chiaro (secondary, outline) in light mode potrebbe essere poco visibile. Da verificare in un consumer.

### `as` prop (limitazione nota)

I primitives (Flex, Text, etc.) hanno `as` perche sono layout generici. I componenti CSS NON lo hanno — `<Button>` e sempre un `<button>`, `<Badge>` e sempre uno `<span>`. Se serve un link con stile bottone, il consumer usa `className="ds-btn"` su un `<a>` direttamente.

### ds-hooks dependency

Solo i componenti Cat C importano da `@digiko-npm/ds-hooks`. Il package.json lo dichiara come `peerDependency` opzionale con `peerDependenciesMeta.optional: true`. I consumer che usano solo Cat A/B non devono installarlo.

---

## Changelog

| Data | Componenti | Note |
|------|-----------|------|
| 2026-04-03 | Button, Badge | Primi 2 CSS components wrappati. Pattern stabilito. |
