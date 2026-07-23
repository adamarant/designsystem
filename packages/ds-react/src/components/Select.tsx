"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  isValidElement,
  type ReactNode,
  type ChangeEvent,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import type { Size } from "../types";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

export type SelectSize = Size;

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<ComponentPropsWithoutRef<"select">, "size"> {
  /** Size tier. Default: "md" (40px) */
  size?: SelectSize;
  /** Full width (the native select is auto-width by default). Default: false */
  full?: boolean;
  /** Additional className */
  className?: string;

  /* --- One component, two renderings. The props below decide. --- */

  /** Options as data. Native mode renders them as `<option>`s (children still
      work when this is omitted); the panel requires it. */
  options?: SelectOption[];
  /** Render the styled panel instead of the OS dropdown. Whether the panel
      shows a search box follows `searchable` (auto: more than 5 options). */
  panel?: boolean;
  /** Force the OS-native dropdown even when `options` are provided.
      (Owner call, 23 lug 2026: the styled panel is the default — the
      native menu is the opt-in, not the other way around.) */
  native?: boolean;
  /** Show a search box that filters the options. Implies `panel`. */
  searchable?: boolean;
  /** Change callback with the plain value, fired in both modes. In panel mode
      it is the only callback — there is no native event to forward. */
  onValueChange?: (value: string) => void;
  /** Trigger text when nothing is selected. Panel mode only: the native
      element has no placeholder concept beyond a disabled option. */
  placeholder?: string;
  /** Search input placeholder. Default: "Search…" */
  searchPlaceholder?: string;
  /** Text shown when the search matches nothing. Default: "No results" */
  emptyLabel?: string;
  /** Mobile sheet header label. Falls back to `placeholder`. */
  panelLabel?: string;
}

/* Children <option> already carry the data: the panel extracts them, so
   existing children-based usage gets the styled panel with zero changes
   (owner call, 23 lug 2026 — the native menu is opt-in via `native`). */
function extractOptions(children: ReactNode): SelectOption[] | null {
  const out: SelectOption[] = [];
  let found = false;
  const walk = (nodes: ReactNode) => {
    Children.forEach(nodes, (child) => {
      if (!isValidElement(child)) return;
      const props = child.props as {
        value?: string | number;
        children?: ReactNode;
      };
      if (child.type === "option") {
        found = true;
        const label =
          typeof props.children === "string" || typeof props.children === "number"
            ? String(props.children)
            : String(props.value ?? "");
        out.push({ value: String(props.value ?? label), label });
      } else if (props?.children) {
        walk(props.children);
      }
    });
  };
  walk(children);
  return found ? out : null;
}

const nativeSizeMap: Record<SelectSize, string> = {
  xs: "ds-select--xs",
  sm: "ds-select--sm",
  md: "",
  lg: "ds-select--lg",
};

const panelSizeMap: Record<SelectSize, string> = {
  xs: "ds-custom-select--xs",
  sm: "ds-custom-select--sm",
  md: "",
  lg: "ds-custom-select--lg",
};

/* ================================================================== */
/*  Icons (self-contained — the package ships no icon dependency)      */
/* ================================================================== */

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ================================================================== */
/*  Panel machinery — ported from the implementation that has run in   */
/*  production behind @adamarant/cms/ui (esys, cavallino property and  */
/*  blog forms). Fixed positioning so the panel is never clipped by a  */
/*  scrolling container or a modal; fullscreen sheet on mobile.        */
/*                                                                     */
/*  Known gap carried over as-is: no arrow-key navigation on the       */
/*  options. Adding it needs an active-option class in the DS, which   */
/*  goes through the class-grant flow — a follow-up, not a silent      */
/*  extra.                                                             */
/* ================================================================== */

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && typeof window.matchMedia === "function" ? window.matchMedia(MOBILE_QUERY).matches : false,
  );
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

interface PanelSelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder: string;
  showSearch: boolean;
  searchPlaceholder: string;
  emptyLabel: string;
  panelLabel?: string;
  disabled?: boolean;
  size: SelectSize;
  className?: string;
}

function PanelSelect({
  options,
  value,
  onValueChange,
  placeholder,
  showSearch,
  searchPlaceholder,
  emptyLabel,
  panelLabel,
  disabled,
  size,
  className,
}: PanelSelectProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [panelStyle, setPanelStyle] = useState<CSSProperties>({});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === value),
    [options, value],
  );

  const filtered = useMemo(() => {
    if (!search) return options;
    const q = search.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, search]);

  // The panel is position:fixed, so its place is computed from the trigger
  // rect rather than inherited — that is what keeps it whole inside modals
  // and scrolling containers.
  const updatePanelPosition = useCallback(() => {
    if (!triggerRef.current || isMobile) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPanelStyle({
      position: "fixed",
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, [isMobile]);

  const open = useCallback(() => {
    if (disabled) return;
    setIsOpen(true);
    setSearch("");
    requestAnimationFrame(updatePanelPosition);
  }, [disabled, updatePanelPosition]);

  const close = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else open();
  }, [isOpen, open, close]);

  const select = useCallback(
    (val: string) => {
      onValueChange?.(val);
      close();
    },
    [onValueChange, close],
  );

  // Auto-focus the search on open.
  useEffect(() => {
    if (isOpen && showSearch) {
      const timer = setTimeout(() => searchRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, showSearch]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!isOpen || !isMobile) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen, isMobile]);

  // Follow the trigger on scroll/resize (desktop).
  useEffect(() => {
    if (!isOpen || isMobile) return undefined;
    const handler = () => updatePanelPosition();
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
  }, [isOpen, isMobile, updatePanelPosition]);

  // Click outside closes — the panel is fixed-positioned, so it is NOT a DOM
  // child of the wrapper on screen terms; both refs must be checked.
  useEffect(() => {
    if (!isOpen) return undefined;
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!wrapperRef.current?.contains(target) && !panelRef.current?.contains(target)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, close]);

  // Escape closes.
  useEffect(() => {
    if (!isOpen) return undefined;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <div
      ref={wrapperRef}
      className={cn("ds-custom-select", panelSizeMap[size], className)}
    >
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "ds-custom-select__trigger",
          isOpen && "ds-custom-select__trigger--open",
          disabled && "ds-custom-select__trigger--disabled",
        )}
        onClick={toggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="ds-custom-select__trigger-label">
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span className="ds-custom-select__placeholder">{placeholder}</span>
          )}
        </span>
        <span className="ds-custom-select__chevron">
          <ChevronIcon />
        </span>
      </button>

      {/* Portal on body: a transformed/filtered ancestor (ds-modal content
          has transform+overflow:hidden) becomes the containing block for
          position:fixed and displaces/clips the panel — studio admin/users,
          23 lug 2026. Outside the dialog DOM, viewport coords are true. */}
      {isOpen &&
        createPortal(
          <>
          {/* Mobile backdrop */}
          <div className="ds-custom-select__backdrop" onClick={close} aria-hidden />

          <div
            ref={panelRef}
            className="ds-custom-select__panel"
            style={panelStyle}
            role="listbox"
          >
            {/* Mobile sheet header */}
            <div className="ds-custom-select__header">
              <span className="ds-custom-select__header-title">
                {panelLabel || placeholder}
              </span>
              <button
                type="button"
                className="ds-custom-select__header-close"
                onClick={close}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {showSearch && (
              <div className="ds-custom-select__search">
                <span className="ds-custom-select__search-icon">
                  <SearchIcon />
                </span>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={searchPlaceholder}
                  autoComplete="off"
                />
              </div>
            )}

            <div className="ds-custom-select__list">
              {filtered.length === 0 ? (
                <div className="ds-custom-select__empty">{emptyLabel}</div>
              ) : (
                filtered.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <div
                      key={opt.value}
                      role="option"
                      aria-selected={isSelected}
                      className={cn(
                        "ds-custom-select__option",
                        isSelected && "ds-custom-select__option--selected",
                      )}
                      onClick={() => select(opt.value)}
                    >
                      <span>{opt.label}</span>
                      {isSelected && (
                        <span className="ds-custom-select__option-check">
                          <CheckIcon />
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
          </>,
          document.body,
        )}
    </div>
  );
}

/* ================================================================== */
/*  Select                                                             */
/* ================================================================== */

/**
 * One select, two renderings, chosen by props.
 *
 * Plain `<Select>` is the native element — right for short lists: OS picker
 * on mobile, free accessibility. `searchable` (or `panel`) switches to the
 * styled panel with filtering, the thing that used to require knowing that a
 * separate component existed in a different package.
 *
 * Before this, the same need was met three ways: this native wrapper, a
 * broken phantom `CustomSelect` here (it rendered one unstyled div), and the
 * real panel implementation living in `@adamarant/cms/ui` — found only by the
 * two projects that knew about it.
 *
 * In panel mode `ref` is not attached: there is no `<select>` to point at.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      size = "md",
      full,
      className,
      options,
      panel,
      native,
      searchable,
      onValueChange,
      placeholder = "Select…",
      searchPlaceholder = "Search…",
      emptyLabel = "No results",
      panelLabel,
      onChange,
      children,
      ...rest
    },
    ref,
  ) {
    const childOptions = options ?? extractOptions(children);
    const isPanel =
      native !== true &&
      (panel === true || searchable === true || childOptions != null);

    if (isPanel) {
      const opts = childOptions ?? [];
      /* Children-based callers pass onChange(e) and read e.target.value:
         the shim keeps them working against the panel. */
      const handleValueChange =
        onValueChange ??
        (onChange
          ? (v: string) =>
              onChange({ target: { value: v } } as unknown as ChangeEvent<HTMLSelectElement>)
          : undefined);
      return (
        <PanelSelect
          options={opts}
          value={rest.value != null ? String(rest.value) : undefined}
          onValueChange={handleValueChange}
          placeholder={placeholder}
          // Auto: a list short enough to scan doesn't need a search box.
          showSearch={searchable ?? opts.length > 5}
          searchPlaceholder={searchPlaceholder}
          emptyLabel={emptyLabel}
          panelLabel={panelLabel}
          disabled={rest.disabled}
          size={size}
          className={className}
        />
      );
    }

    return (
      <select
        ref={ref}
        className={cn(
          "ds-select",
          nativeSizeMap[size],
          full && "ds-select--full",
          className,
        )}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(e.target.value);
        }}
        {...rest}
      >
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
    );
  },
);
