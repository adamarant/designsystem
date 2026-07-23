"use client";

import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

export interface ComboboxOption {
  /** Stable value submitted on change. */
  value: string;
  /** Visible label, also the search target. */
  label: string;
  /** Secondary text shown after the label. Also searched. */
  description?: string;
  /** Group heading this option belongs to. */
  group?: string;
  /** Leading visual (e.g. a color dot). */
  icon?: ReactNode;
  /** When true, the option cannot be selected. */
  disabled?: boolean;
}

type ComboboxSize = Size;
type ComboboxSort = "az" | "za" | "none";

export interface ComboboxProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  /** Selectable options. */
  options: ComboboxOption[];
  /** Selected value(s). Array when `multiple`, otherwise a single value or null. */
  value: string | string[] | null;
  /** Fires with the next selection. */
  onChange: (value: string | string[] | null) => void;
  /** Multi-select with tags. Default: false */
  multiple?: boolean;
  /** Filter options by typed text. Default: true */
  searchable?: boolean;
  /** Sort options by label. Default: "az" */
  sort?: ComboboxSort;
  /** Height tier. Default: "md" */
  size?: ComboboxSize;
  /** Allow clearing the selection. Default: true */
  clearable?: boolean;
  /** Error styling. Default: false */
  error?: boolean;
  /** Disable the control. Default: false */
  disabled?: boolean;
  /** Show the loading state in the listbox. Default: false */
  loading?: boolean;
  /** Input placeholder. */
  placeholder?: string;
  /** Message when no option matches. Default: "No results" */
  emptyMessage?: string;
  /** Message shown while loading. Default: "Loading…" */
  loadingMessage?: string;
  /** Leading icon inside the input area. */
  icon?: ReactNode;
  /** When provided, offers to create the typed value as a new option. */
  onCreate?: (input: string) => void;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sizeMap: Record<ComboboxSize, string> = {
  xs: "ds-combobox--xs",
  sm: "ds-combobox--sm",
  md: "",
  lg: "ds-combobox--lg",
};

/* ================================================================== */
/*  Icons (currentColor, no dependency)                                */
/* ================================================================== */

function CheckGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.5 4.5 6 12 2.5 8.5" />
    </svg>
  );
}

function CloseGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="m4 4 8 8M12 4l-8 8" />
    </svg>
  );
}

function PlusGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

/* ================================================================== */
/*  Combobox                                                           */
/* ================================================================== */

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  function Combobox(
    {
      options,
      value,
      onChange,
      multiple = false,
      searchable = true,
      sort = "az",
      size = "md",
      clearable = true,
      error = false,
      disabled = false,
      loading = false,
      placeholder,
      emptyMessage = "No results",
      loadingMessage = "Loading…",
      icon,
      onCreate,
      className,
      ...rest
    },
    ref,
  ) {
    const baseId = useId();
    const listboxId = `${baseId}-listbox`;
    const rootRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const listboxRef = useRef<HTMLDivElement | null>(null);

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    /* --- Selection helpers --- */
    const selectedValues = useMemo(() => {
      if (multiple) return Array.isArray(value) ? value : [];
      return value ? [value as string] : [];
    }, [multiple, value]);

    const selectedSet = useMemo(
      () => new Set(selectedValues),
      [selectedValues],
    );

    const selectedOptions = useMemo(
      () =>
        selectedValues
          .map((v) => options.find((o) => o.value === v))
          .filter(Boolean) as ComboboxOption[],
      [selectedValues, options],
    );

    const singleLabel = !multiple ? selectedOptions[0]?.label ?? "" : "";

    /* --- Filtering + sorting --- */
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = useMemo(() => {
      let list = options;
      if (searchable && normalizedQuery) {
        list = list.filter(
          (o) =>
            o.label.toLowerCase().includes(normalizedQuery) ||
            o.description?.toLowerCase().includes(normalizedQuery),
        );
      }
      if (sort !== "none") {
        list = [...list].sort((a, b) => a.label.localeCompare(b.label));
        if (sort === "za") list.reverse();
      }
      return list;
    }, [options, searchable, normalizedQuery, sort]);

    /* Flat value → index map for keyboard navigation. */
    const indexByValue = useMemo(() => {
      const map = new Map<string, number>();
      filtered.forEach((o, i) => map.set(o.value, i));
      return map;
    }, [filtered]);

    /* Grouped view (preserves filtered order). */
    const grouped = useMemo(() => {
      if (!filtered.some((o) => o.group)) return null;
      const order: string[] = [];
      const buckets = new Map<string, ComboboxOption[]>();
      for (const o of filtered) {
        const key = o.group ?? "";
        if (!buckets.has(key)) {
          buckets.set(key, []);
          order.push(key);
        }
        buckets.get(key)!.push(o);
      }
      return order.map((key) => ({ label: key, items: buckets.get(key)! }));
    }, [filtered]);

    const hasExactMatch = useMemo(
      () => options.some((o) => o.label.toLowerCase() === normalizedQuery),
      [options, normalizedQuery],
    );
    const showCreate =
      !!onCreate && normalizedQuery.length > 0 && !hasExactMatch;
    const createIndex = filtered.length;
    const itemCount = filtered.length + (showCreate ? 1 : 0);

    /* Keep activeIndex in range as the list changes. */
    useEffect(() => {
      setActiveIndex((i) => {
        if (itemCount === 0) return 0;
        return Math.min(i, itemCount - 1);
      });
    }, [itemCount]);

    /* Scroll the active option into view. */
    useEffect(() => {
      if (!open) return;
      const node = listboxRef.current?.querySelector<HTMLElement>(
        '[data-active="true"]',
      );
      node?.scrollIntoView({ block: "nearest" });
    }, [activeIndex, open]);

    /* Click outside closes and resets the query. */
    useEffect(() => {
      if (!open) return;
      const handler = (e: globalThis.MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          setOpen(false);
          setQuery("");
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    /* --- Actions --- */
    const openMenu = useCallback(() => {
      if (disabled) return;
      setOpen(true);
      setActiveIndex(0);
    }, [disabled]);

    const commitCreate = useCallback(() => {
      if (!onCreate) return;
      onCreate(query.trim());
      setQuery("");
      if (!multiple) setOpen(false);
      inputRef.current?.focus();
    }, [onCreate, query, multiple]);

    const selectOption = useCallback(
      (opt: ComboboxOption) => {
        if (opt.disabled) return;
        if (multiple) {
          const next = selectedSet.has(opt.value)
            ? selectedValues.filter((v) => v !== opt.value)
            : [...selectedValues, opt.value];
          onChange(next);
          setQuery("");
          inputRef.current?.focus();
        } else {
          onChange(opt.value);
          setQuery("");
          setOpen(false);
        }
      },
      [multiple, onChange, selectedSet, selectedValues],
    );

    const removeValue = useCallback(
      (v: string) => {
        if (multiple) {
          onChange(selectedValues.filter((x) => x !== v));
        } else {
          onChange(null);
        }
      },
      [multiple, onChange, selectedValues],
    );

    const clearAll = useCallback(() => {
      onChange(multiple ? [] : null);
      setQuery("");
      inputRef.current?.focus();
    }, [multiple, onChange]);

    /* --- Keyboard --- */
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (!open) {
            openMenu();
            return;
          }
          if (itemCount > 0)
            setActiveIndex((i) => (i + 1 >= itemCount ? 0 : i + 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          if (!open) {
            openMenu();
            return;
          }
          if (itemCount > 0)
            setActiveIndex((i) => (i - 1 < 0 ? itemCount - 1 : i - 1));
          break;
        case "Enter":
          if (!open) return;
          e.preventDefault();
          if (showCreate && activeIndex === createIndex) {
            commitCreate();
          } else if (filtered[activeIndex]) {
            selectOption(filtered[activeIndex]);
          }
          break;
        case "Escape":
          if (open) {
            e.preventDefault();
            setOpen(false);
            setQuery("");
          }
          break;
        case "Backspace":
          if (multiple && query === "" && selectedValues.length > 0) {
            removeValue(selectedValues[selectedValues.length - 1]);
          }
          break;
        default:
          break;
      }
    };

    const hasSelection = selectedValues.length > 0;
    const inputValue = open ? query : multiple ? query : singleLabel;
    const activeOptionId =
      open && filtered[activeIndex]
        ? `${baseId}-opt-${activeIndex}`
        : showCreate && activeIndex === createIndex
          ? `${baseId}-create`
          : undefined;

    /* --- Render an option button --- */
    const renderOption = (opt: ComboboxOption) => {
      const flatIndex = indexByValue.get(opt.value) ?? -1;
      const isActive = flatIndex === activeIndex;
      const isSelected = selectedSet.has(opt.value);
      return (
        <button
          key={opt.value}
          type="button"
          role="option"
          id={`${baseId}-opt-${flatIndex}`}
          aria-selected={isSelected}
          aria-disabled={opt.disabled || undefined}
          data-active={isActive || undefined}
          tabIndex={-1}
          onMouseEnter={() => setActiveIndex(flatIndex)}
          onClick={() => selectOption(opt)}
          className={cn(
            "ds-combobox__option",
            isActive && "ds-combobox__option--active",
            isSelected && "ds-combobox__option--selected",
          )}
        >
          {opt.icon}
          <span>{opt.label}</span>
          {opt.description ? (
            <span className="ds-combobox__option-desc">{opt.description}</span>
          ) : null}
          {isSelected ? (
            <CheckGlyph className="ds-combobox__option-check" />
          ) : null}
        </button>
      );
    };

    return (
      <div
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "ds-combobox",
          sizeMap[size],
          multiple && "ds-combobox--multi",
          error && "ds-combobox--error",
          open && "ds-combobox--open",
          className,
        )}
        {...rest}
      >
        <div
          className="ds-combobox__input-area"
          onMouseDown={(e) => {
            /* Keep focus on the input when clicking the chrome. */
            if (e.target !== inputRef.current) e.preventDefault();
            if (!open) openMenu();
            inputRef.current?.focus();
          }}
        >
          {icon ? <span className="ds-combobox__icon">{icon}</span> : null}

          {multiple
            ? selectedOptions.map((opt) => (
                <span key={opt.value} className="ds-combobox__tag">
                  {opt.label}
                  <button
                    type="button"
                    className="ds-combobox__tag-remove"
                    aria-label={`Remove ${opt.label}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeValue(opt.value);
                    }}
                  >
                    <CloseGlyph />
                  </button>
                </span>
              ))
            : null}

          <input
            ref={inputRef}
            className="ds-combobox__input"
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={activeOptionId}
            disabled={disabled}
            readOnly={!searchable}
            placeholder={hasSelection && !multiple ? singleLabel : placeholder}
            value={inputValue}
            onChange={(e) => {
              setQuery(e.target.value);
              if (!open) openMenu();
            }}
            onFocus={openMenu}
            onKeyDown={onKeyDown}
          />

          {clearable && hasSelection && !disabled ? (
            <button
              type="button"
              className="ds-combobox__clear"
              aria-label="Clear"
              onClick={(e) => {
                e.stopPropagation();
                clearAll();
              }}
            >
              <CloseGlyph />
            </button>
          ) : null}
        </div>

        <div
          ref={listboxRef}
          id={listboxId}
          role="listbox"
          aria-multiselectable={multiple || undefined}
          className={cn(
            "ds-combobox__listbox",
            open && "ds-combobox__listbox--open",
          )}
        >
          {loading ? (
            <div className="ds-combobox__loading">{loadingMessage}</div>
          ) : (
            <>
              {grouped
                ? grouped.map((g) => (
                    <div key={g.label || "_"} className="ds-combobox__group">
                      {g.label ? (
                        <span className="ds-combobox__group-label">
                          {g.label}
                        </span>
                      ) : null}
                      {g.items.map(renderOption)}
                    </div>
                  ))
                : filtered.map(renderOption)}

              {filtered.length === 0 && !showCreate ? (
                <div className="ds-combobox__empty">{emptyMessage}</div>
              ) : null}

              {showCreate ? (
                <button
                  type="button"
                  id={`${baseId}-create`}
                  data-active={activeIndex === createIndex || undefined}
                  tabIndex={-1}
                  onMouseEnter={() => setActiveIndex(createIndex)}
                  onClick={commitCreate}
                  className="ds-combobox__create"
                >
                  <PlusGlyph />
                  <span>Create &ldquo;{query.trim()}&rdquo;</span>
                </button>
              ) : null}
            </>
          )}
        </div>
      </div>
    );
  },
);
