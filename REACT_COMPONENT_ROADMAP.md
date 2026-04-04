# React Component Roadmap — ds-react

> Piano componente-per-componente per wrappare i 58 CSS components come React.
> Per la strategia generale (fasi, audit soup, touch-and-improve) → [`~/Projects/DS_REACT_PLAN.md`](~/Projects/DS_REACT_PLAN.md)

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
| 3 | Input | Component | C | 2026-04-03 | Input, Textarea, Select, InputGroup, InputGroupIcon, Help, Checkbox, Radio. Omit<size> per conflitto HTML |
| 4 | Card | Component | B | 2026-04-03 | Primo compound. Card.Header/Title/Description/Body/Footer/Media |
| 5 | Alert | Component | B | 2026-04-03 | Alert.Icon/Content/Title/Description/Close. Auto role="alert" |
| 6 | Tag | Component | A/C | 2026-04-03 | Tag.Remove con auto aria-label. 7 varianti, 3 size, removable |
| 7 | Avatar | Component | A | 2026-04-03 | Avatar.Status (online/offline/busy), AvatarGroup. 5 size |
| 8 | Spinner | Component | A | 2026-04-03 | 4 size, 3 varianti. Auto role="status" + aria-label="Loading" |
| 9 | Modal | Component | C | 2026-04-03 | Portal, escape, scroll lock, backdrop click. Auto role="dialog" + aria-modal |
| 10 | Tabs | Component | C | 2026-04-03 | Context, keyboard nav, auto aria-selected/controls/labelledby. 4 variants |
| 11 | Dropdown | Component | C | 2026-04-03 | Context, click outside, escape, arrow nav. Auto aria-haspopup/expanded |
| 12 | Tooltip | Component | C | 2026-04-03 | CSS hover + JS focus-within. 4 placements, delay |
| 13 | Toggle | Component | C | 2026-04-03 | Controlled switch, auto role="switch" + aria-checked. 3 size, label |
| 14 | Table | Component | B | 2026-04-03 | Table.Wrapper/Sort/Footer. Auto aria-sort. 7 modifier flags |
| 15 | Accordion | Component | C | 2026-04-03 | Context, single/multiple mode. Auto aria-expanded/controls/labelledby |
| 16 | StatCard | Component | B | 2026-04-03 | StatCard.Label/Value/Detail/Icon |
| 17 | Chip | Component | A | 2026-04-03 | Simple wrapper |
| 18 | Divider | Component | A | 2026-04-03 | Horizontal/vertical, 3 variants |
| 19 | Progress | Component | B | 2026-04-03 | Auto role="progressbar" + aria-value. Progress.Bar |
| 20 | Skeleton | Component | A | 2026-04-03 | Circle variant |
| 21 | EmptyState | Component | B | 2026-04-03 | EmptyState.Icon/Title/Description/Actions |
| 22 | Breadcrumb | Component | B | 2026-04-03 | Breadcrumb.List/Item/Separator. Auto aria-label |
| 23 | Pagination | Component | B | 2026-04-03 | Pagination.List/Item. Auto aria-current |
| 24 | Kbd | Component | A | 2026-04-03 | Keyboard shortcut display |
| 25 | Search | Component | B | 2026-04-03 | Search.Input with sizes |
| 26 | IconBtn | Component | A | 2026-04-03 | 3 variants, 4 sizes |

---

## Coda — componenti CSS restanti

| Componente | Note |
|-----------|------|
| nav | Navigation bar |
| toast | Notification toast |
| drawer | Side panel |
| popover | Floating panel |
| bottom-sheet | Mobile sheet |
| command | Command palette |
| collapsible | Simple collapse |
| copy-button | Copy to clipboard |
| custom-select | Styled select |
| combobox | Autocomplete |
| datepicker | Date picker |
| drop-zone | File drop area |
| slider | Range slider |
| field | Form field wrapper |
| number-input | Numeric input |
| pin-input | PIN/OTP input |
| color-picker | Color selector |
| star-rating | Rating stars |
| segmented-control | Segmented toggle |
| timeline | Event timeline |
| description-list | Key-value list |
| result | Result/success page |
| truncated-text | Text with ellipsis |
| sortable | Drag and drop |
| toolbar | Toolbar bar |
| bottom-nav | Mobile bottom nav |
| gallery | Image gallery |
| scroll-area | Scrollable container |
| hero | Hero section |
| prose | Long-form text |
| admin-layout | Admin dashboard shell |

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
| 2026-04-03 | Button, Badge, Input, Card, Alert, Tag, Avatar, Spinner | 8 CSS components wrappati. Compound pattern stabilito. |
| 2026-04-03 | Modal, Tabs, Dropdown, Tooltip, Toggle | 5 Cat C interattivi con stato, keyboard nav, portal. |
| 2026-04-03 | Table, Accordion, StatCard, Chip, Divider, Progress, Skeleton, EmptyState, Breadcrumb, Pagination, Kbd, Search, IconBtn | 13 componenti in batch. Totale: 26 React components. |
| 2026-04-03 | Docs app Next.js | 57 pagine componenti + 4 foundations. Generatore da components.json. Search sidebar. Font DS. designsystem.test via Caddy. |
