"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState, Children, isValidElement, } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
/* Children <option> already carry the data: the panel extracts them, so
   existing children-based usage gets the styled panel with zero changes
   (owner call, 23 lug 2026 — the native menu is opt-in via `native`). */
function extractOptions(children) {
    const out = [];
    let found = false;
    const walk = (nodes) => {
        Children.forEach(nodes, (child) => {
            if (!isValidElement(child))
                return;
            const props = child.props;
            if (child.type === "option") {
                found = true;
                const label = typeof props.children === "string" || typeof props.children === "number"
                    ? String(props.children)
                    : String(props.value ?? "");
                out.push({ value: String(props.value ?? label), label });
            }
            else if (props?.children) {
                walk(props.children);
            }
        });
    };
    walk(children);
    return found ? out : null;
}
const nativeSizeMap = {
    xs: "ds-select--xs",
    sm: "ds-select--sm",
    md: "",
    lg: "ds-select--lg",
};
const panelSizeMap = {
    xs: "ds-custom-select--xs",
    sm: "ds-custom-select--sm",
    md: "",
    lg: "ds-custom-select--lg",
};
/* ================================================================== */
/*  Icons (self-contained — the package ships no icon dependency)      */
/* ================================================================== */
function ChevronIcon() {
    return (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
}
function SearchIcon() {
    return (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
}
function CloseIcon() {
    return (_jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
}
function CheckIcon() {
    return (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
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
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && typeof window.matchMedia === "function" ? window.matchMedia(MOBILE_QUERY).matches : false);
    useEffect(() => {
        if (typeof window.matchMedia !== "function")
            return;
        const mql = window.matchMedia(MOBILE_QUERY);
        const handler = (e) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);
    return isMobile;
}
function PanelSelect({ options, value, onValueChange, placeholder, showSearch, searchPlaceholder, emptyLabel, panelLabel, disabled, size, className, }) {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [panelStyle, setPanelStyle] = useState({});
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const panelRef = useRef(null);
    const searchRef = useRef(null);
    const selectedOption = useMemo(() => options.find((o) => o.value === value), [options, value]);
    const filtered = useMemo(() => {
        if (!search)
            return options;
        const q = search.toLowerCase();
        return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, search]);
    // The panel is position:fixed, so its place is computed from the trigger
    // rect rather than inherited — that is what keeps it whole inside modals
    // and scrolling containers.
    const updatePanelPosition = useCallback(() => {
        if (!triggerRef.current || isMobile)
            return;
        const rect = triggerRef.current.getBoundingClientRect();
        setPanelStyle({
            position: "fixed",
            top: rect.bottom + 4,
            left: rect.left,
            width: rect.width,
        });
    }, [isMobile]);
    const open = useCallback(() => {
        if (disabled)
            return;
        setIsOpen(true);
        setSearch("");
        requestAnimationFrame(updatePanelPosition);
    }, [disabled, updatePanelPosition]);
    const close = useCallback(() => {
        setIsOpen(false);
        setSearch("");
    }, []);
    const toggle = useCallback(() => {
        if (isOpen)
            close();
        else
            open();
    }, [isOpen, open, close]);
    const select = useCallback((val) => {
        onValueChange?.(val);
        close();
    }, [onValueChange, close]);
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
        if (!isOpen || !isMobile)
            return undefined;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isOpen, isMobile]);
    // Follow the trigger on scroll/resize (desktop).
    useEffect(() => {
        if (!isOpen || isMobile)
            return undefined;
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
        if (!isOpen)
            return undefined;
        function handleClick(e) {
            const target = e.target;
            if (!wrapperRef.current?.contains(target) && !panelRef.current?.contains(target)) {
                close();
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen, close]);
    // Escape closes.
    useEffect(() => {
        if (!isOpen)
            return undefined;
        function handleKey(e) {
            if (e.key === "Escape") {
                e.stopPropagation();
                close();
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, close]);
    return (_jsxs("div", { ref: wrapperRef, className: cn("ds-custom-select", panelSizeMap[size], className), children: [_jsxs("button", { ref: triggerRef, type: "button", className: cn("ds-custom-select__trigger", isOpen && "ds-custom-select__trigger--open", disabled && "ds-custom-select__trigger--disabled"), onClick: toggle, disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": isOpen, children: [_jsx("span", { className: "ds-custom-select__trigger-label", children: selectedOption ? (selectedOption.label) : (_jsx("span", { className: "ds-custom-select__placeholder", children: placeholder })) }), _jsx("span", { className: "ds-custom-select__chevron", children: _jsx(ChevronIcon, {}) })] }), isOpen &&
                createPortal(_jsxs(_Fragment, { children: [_jsx("div", { className: "ds-custom-select__backdrop", onClick: close, "aria-hidden": true }), _jsxs("div", { ref: panelRef, className: "ds-custom-select__panel", style: panelStyle, role: "listbox", children: [_jsxs("div", { className: "ds-custom-select__header", children: [_jsx("span", { className: "ds-custom-select__header-title", children: panelLabel || placeholder }), _jsx("button", { type: "button", className: "ds-custom-select__header-close", onClick: close, "aria-label": "Close", children: _jsx(CloseIcon, {}) })] }), showSearch && (_jsxs("div", { className: "ds-custom-select__search", children: [_jsx("span", { className: "ds-custom-select__search-icon", children: _jsx(SearchIcon, {}) }), _jsx("input", { ref: searchRef, type: "text", value: search, onChange: (e) => setSearch(e.target.value), placeholder: searchPlaceholder, autoComplete: "off" })] })), _jsx("div", { className: "ds-custom-select__list", children: filtered.length === 0 ? (_jsx("div", { className: "ds-custom-select__empty", children: emptyLabel })) : (filtered.map((opt) => {
                                        const isSelected = opt.value === value;
                                        return (_jsxs("div", { role: "option", "aria-selected": isSelected, className: cn("ds-custom-select__option", isSelected && "ds-custom-select__option--selected"), onClick: () => select(opt.value), children: [_jsx("span", { children: opt.label }), isSelected && (_jsx("span", { className: "ds-custom-select__option-check", children: _jsx(CheckIcon, {}) }))] }, opt.value));
                                    })) })] })] }), document.body)] }));
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
export const Select = forwardRef(function Select({ size = "md", full, className, options, panel, native, searchable, onValueChange, placeholder = "Select…", searchPlaceholder = "Search…", emptyLabel = "No results", panelLabel, onChange, children, ...rest }, ref) {
    const childOptions = options ?? extractOptions(children);
    const isPanel = native !== true &&
        (panel === true || searchable === true || childOptions != null);
    if (isPanel) {
        const opts = childOptions ?? [];
        /* Children-based callers pass onChange(e) and read e.target.value:
           the shim keeps them working against the panel. */
        const handleValueChange = onValueChange ??
            (onChange
                ? (v) => onChange({ target: { value: v } })
                : undefined);
        return (_jsx(PanelSelect, { options: opts, value: rest.value != null ? String(rest.value) : undefined, onValueChange: handleValueChange, placeholder: placeholder, 
            // Auto: a list short enough to scan doesn't need a search box.
            showSearch: searchable ?? opts.length > 5, searchPlaceholder: searchPlaceholder, emptyLabel: emptyLabel, panelLabel: panelLabel, disabled: rest.disabled, size: size, className: className }));
    }
    return (_jsx("select", { ref: ref, className: cn("ds-select", nativeSizeMap[size], full && "ds-select--full", className), onChange: (e) => {
            onChange?.(e);
            onValueChange?.(e.target.value);
        }, ...rest, children: options
            ? options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))
            : children }));
});
//# sourceMappingURL=Select.js.map