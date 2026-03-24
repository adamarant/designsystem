# @digiko-npm/ds-hooks

React hooks companion for `@digiko-npm/designsystem`. Optional — the CSS design system works without this package.

## Install

```bash
npm install @digiko-npm/ds-hooks
```

## Hooks

| Hook | Purpose |
|------|---------|
| `useClickOutside` | Close dropdowns/modals on outside click |
| `useEscapeKey` | Close overlays on Escape key |
| `useKeyboardNav` | Arrow key navigation for lists |
| `useDebouncedValue` | Debounce search input values |
| `useFocusTrap` | Trap Tab focus inside modals/drawers |
| `useScrollLock` | Prevent body scroll when overlay is open |
| `useClipboard` | Copy to clipboard with feedback state |
| `useMediaQuery` | Reactive CSS media query matching |

## Usage

```tsx
import { useClickOutside, useEscapeKey } from "@digiko-npm/ds-hooks";

// Or cherry-pick individual hooks
import { useClickOutside } from "@digiko-npm/ds-hooks/useClickOutside";
```

### useClickOutside

```tsx
const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, () => setOpen(false));
// Supports multiple refs: useClickOutside([ref1, ref2], handler)
// Supports enabled flag: useClickOutside(ref, handler, isOpen)
```

### useEscapeKey

```tsx
useEscapeKey(() => setOpen(false), isOpen);
```

### useKeyboardNav

```tsx
const { activeIndex, handleKeyDown } = useKeyboardNav({
  itemCount: options.length,
  onSelect: (i) => selectOption(options[i]),
  onEscape: () => setOpen(false),
  loop: true,
});
```

### useDebouncedValue

```tsx
const [search, setSearch] = useState("");
const debouncedSearch = useDebouncedValue(search, 300);
```

### useFocusTrap

```tsx
const modalRef = useRef<HTMLDivElement>(null);
useFocusTrap(modalRef, isModalOpen);
```

### useScrollLock

```tsx
useScrollLock(isModalOpen);
```

### useClipboard

```tsx
const { copy, copied } = useClipboard(2000);
<button onClick={() => copy(walletAddress)}>
  {copied ? "Copied!" : "Copy"}
</button>
```

### useMediaQuery

```tsx
const isMobile = useMediaQuery("(max-width: 767px)");
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
```
