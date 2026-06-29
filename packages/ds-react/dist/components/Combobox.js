import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState, } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sizeMap = {
    xs: "ds-combobox--xs",
    sm: "ds-combobox--sm",
    md: "",
    lg: "ds-combobox--lg",
};
/* ================================================================== */
/*  Icons (currentColor, no dependency)                                */
/* ================================================================== */
function CheckGlyph({ className }) {
    return (_jsx("svg", { className: className, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("path", { d: "M13.5 4.5 6 12 2.5 8.5" }) }));
}
function CloseGlyph() {
    return (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", "aria-hidden": "true", children: _jsx("path", { d: "m4 4 8 8M12 4l-8 8" }) }));
}
function PlusGlyph() {
    return (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", "aria-hidden": "true", children: _jsx("path", { d: "M8 3v10M3 8h10" }) }));
}
/* ================================================================== */
/*  Combobox                                                           */
/* ================================================================== */
export const Combobox = forwardRef(function Combobox({ options, value, onChange, multiple = false, searchable = true, sort = "az", size = "md", clearable = true, error = false, disabled = false, loading = false, placeholder, emptyMessage = "No results", loadingMessage = "Loading…", icon, onCreate, className, ...rest }, ref) {
    const baseId = useId();
    const listboxId = `${baseId}-listbox`;
    const rootRef = useRef(null);
    const inputRef = useRef(null);
    const listboxRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    /* --- Selection helpers --- */
    const selectedValues = useMemo(() => {
        if (multiple)
            return Array.isArray(value) ? value : [];
        return value ? [value] : [];
    }, [multiple, value]);
    const selectedSet = useMemo(() => new Set(selectedValues), [selectedValues]);
    const selectedOptions = useMemo(() => selectedValues
        .map((v) => options.find((o) => o.value === v))
        .filter(Boolean), [selectedValues, options]);
    const singleLabel = !multiple ? selectedOptions[0]?.label ?? "" : "";
    /* --- Filtering + sorting --- */
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = useMemo(() => {
        let list = options;
        if (searchable && normalizedQuery) {
            list = list.filter((o) => o.label.toLowerCase().includes(normalizedQuery) ||
                o.description?.toLowerCase().includes(normalizedQuery));
        }
        if (sort !== "none") {
            list = [...list].sort((a, b) => a.label.localeCompare(b.label));
            if (sort === "za")
                list.reverse();
        }
        return list;
    }, [options, searchable, normalizedQuery, sort]);
    /* Flat value → index map for keyboard navigation. */
    const indexByValue = useMemo(() => {
        const map = new Map();
        filtered.forEach((o, i) => map.set(o.value, i));
        return map;
    }, [filtered]);
    /* Grouped view (preserves filtered order). */
    const grouped = useMemo(() => {
        if (!filtered.some((o) => o.group))
            return null;
        const order = [];
        const buckets = new Map();
        for (const o of filtered) {
            const key = o.group ?? "";
            if (!buckets.has(key)) {
                buckets.set(key, []);
                order.push(key);
            }
            buckets.get(key).push(o);
        }
        return order.map((key) => ({ label: key, items: buckets.get(key) }));
    }, [filtered]);
    const hasExactMatch = useMemo(() => options.some((o) => o.label.toLowerCase() === normalizedQuery), [options, normalizedQuery]);
    const showCreate = !!onCreate && normalizedQuery.length > 0 && !hasExactMatch;
    const createIndex = filtered.length;
    const itemCount = filtered.length + (showCreate ? 1 : 0);
    /* Keep activeIndex in range as the list changes. */
    useEffect(() => {
        setActiveIndex((i) => {
            if (itemCount === 0)
                return 0;
            return Math.min(i, itemCount - 1);
        });
    }, [itemCount]);
    /* Scroll the active option into view. */
    useEffect(() => {
        if (!open)
            return;
        const node = listboxRef.current?.querySelector('[data-active="true"]');
        node?.scrollIntoView({ block: "nearest" });
    }, [activeIndex, open]);
    /* Click outside closes and resets the query. */
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                setOpen(false);
                setQuery("");
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);
    /* --- Actions --- */
    const openMenu = useCallback(() => {
        if (disabled)
            return;
        setOpen(true);
        setActiveIndex(0);
    }, [disabled]);
    const commitCreate = useCallback(() => {
        if (!onCreate)
            return;
        onCreate(query.trim());
        setQuery("");
        if (!multiple)
            setOpen(false);
        inputRef.current?.focus();
    }, [onCreate, query, multiple]);
    const selectOption = useCallback((opt) => {
        if (opt.disabled)
            return;
        if (multiple) {
            const next = selectedSet.has(opt.value)
                ? selectedValues.filter((v) => v !== opt.value)
                : [...selectedValues, opt.value];
            onChange(next);
            setQuery("");
            inputRef.current?.focus();
        }
        else {
            onChange(opt.value);
            setQuery("");
            setOpen(false);
        }
    }, [multiple, onChange, selectedSet, selectedValues]);
    const removeValue = useCallback((v) => {
        if (multiple) {
            onChange(selectedValues.filter((x) => x !== v));
        }
        else {
            onChange(null);
        }
    }, [multiple, onChange, selectedValues]);
    const clearAll = useCallback(() => {
        onChange(multiple ? [] : null);
        setQuery("");
        inputRef.current?.focus();
    }, [multiple, onChange]);
    /* --- Keyboard --- */
    const onKeyDown = (e) => {
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
                if (!open)
                    return;
                e.preventDefault();
                if (showCreate && activeIndex === createIndex) {
                    commitCreate();
                }
                else if (filtered[activeIndex]) {
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
    const activeOptionId = open && filtered[activeIndex]
        ? `${baseId}-opt-${activeIndex}`
        : showCreate && activeIndex === createIndex
            ? `${baseId}-create`
            : undefined;
    /* --- Render an option button --- */
    const renderOption = (opt) => {
        const flatIndex = indexByValue.get(opt.value) ?? -1;
        const isActive = flatIndex === activeIndex;
        const isSelected = selectedSet.has(opt.value);
        return (_jsxs("button", { type: "button", role: "option", id: `${baseId}-opt-${flatIndex}`, "aria-selected": isSelected, "aria-disabled": opt.disabled || undefined, "data-active": isActive || undefined, tabIndex: -1, onMouseEnter: () => setActiveIndex(flatIndex), onClick: () => selectOption(opt), className: cn("ds-combobox__option", isActive && "ds-combobox__option--active", isSelected && "ds-combobox__option--selected"), children: [opt.icon, _jsx("span", { children: opt.label }), opt.description ? (_jsx("span", { className: "ds-combobox__option-desc", children: opt.description })) : null, isSelected ? (_jsx(CheckGlyph, { className: "ds-combobox__option-check" })) : null] }, opt.value));
    };
    return (_jsxs("div", { ref: (node) => {
            rootRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, className: cn("ds-combobox", sizeMap[size], multiple && "ds-combobox--multi", error && "ds-combobox--error", open && "ds-combobox--open", className), ...rest, children: [_jsxs("div", { className: "ds-combobox__input-area", onMouseDown: (e) => {
                    /* Keep focus on the input when clicking the chrome. */
                    if (e.target !== inputRef.current)
                        e.preventDefault();
                    if (!open)
                        openMenu();
                    inputRef.current?.focus();
                }, children: [icon ? _jsx("span", { className: "ds-combobox__icon", children: icon }) : null, multiple
                        ? selectedOptions.map((opt) => (_jsxs("span", { className: "ds-combobox__tag", children: [opt.label, _jsx("button", { type: "button", className: "ds-combobox__tag-remove", "aria-label": `Remove ${opt.label}`, onClick: (e) => {
                                        e.stopPropagation();
                                        removeValue(opt.value);
                                    }, children: _jsx(CloseGlyph, {}) })] }, opt.value)))
                        : null, _jsx("input", { ref: inputRef, className: "ds-combobox__input", role: "combobox", "aria-expanded": open, "aria-controls": listboxId, "aria-autocomplete": "list", "aria-activedescendant": activeOptionId, disabled: disabled, readOnly: !searchable, placeholder: hasSelection && !multiple ? singleLabel : placeholder, value: inputValue, onChange: (e) => {
                            setQuery(e.target.value);
                            if (!open)
                                openMenu();
                        }, onFocus: openMenu, onKeyDown: onKeyDown }), clearable && hasSelection && !disabled ? (_jsx("button", { type: "button", className: "ds-combobox__clear", "aria-label": "Clear", onClick: (e) => {
                            e.stopPropagation();
                            clearAll();
                        }, children: _jsx(CloseGlyph, {}) })) : null] }), _jsx("div", { ref: listboxRef, id: listboxId, role: "listbox", "aria-multiselectable": multiple || undefined, className: cn("ds-combobox__listbox", open && "ds-combobox__listbox--open"), children: loading ? (_jsx("div", { className: "ds-combobox__loading", children: loadingMessage })) : (_jsxs(_Fragment, { children: [grouped
                            ? grouped.map((g) => (_jsxs("div", { className: "ds-combobox__group", children: [g.label ? (_jsx("span", { className: "ds-combobox__group-label", children: g.label })) : null, g.items.map(renderOption)] }, g.label || "_")))
                            : filtered.map(renderOption), filtered.length === 0 && !showCreate ? (_jsx("div", { className: "ds-combobox__empty", children: emptyMessage })) : null, showCreate ? (_jsxs("button", { type: "button", id: `${baseId}-create`, "data-active": activeIndex === createIndex || undefined, tabIndex: -1, onMouseEnter: () => setActiveIndex(createIndex), onClick: commitCreate, className: "ds-combobox__create", children: [_jsx(PlusGlyph, {}), _jsxs("span", { children: ["Create \u201C", query.trim(), "\u201D"] })] })) : null] })) })] }));
});
//# sourceMappingURL=Combobox.js.map