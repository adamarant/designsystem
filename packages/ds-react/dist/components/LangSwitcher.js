"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, } from "react";
import { cn } from "../utils/cn";
import { Dropdown } from "./Dropdown";
/* Same tier map as Button: the trigger sits on --ds-size-1..4, so it
   lines up with every other control in the row. */
const triggerSizeMap = {
    xs: "ds-btn--xs",
    sm: "ds-btn--sm",
    md: "",
    lg: "ds-btn--lg",
};
function hreflangHref(code) {
    if (typeof document === "undefined")
        return null;
    const link = document.querySelector(`link[rel="alternate"][hreflang="${code}"]`);
    if (!link?.href)
        return null;
    try {
        return new URL(link.href).pathname;
    }
    catch {
        return null;
    }
}
function Caret() {
    return (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("path", { d: "M3.5 5.5 7 9l3.5-3.5" }) }));
}
export const LangSwitcher = forwardRef(function LangSwitcher({ items, current, size = "md", variant = "dropdown", preferHreflang = false, LinkComponent = "a", ariaLabel = "Language", className, ...rest }, ref) {
    const [open, setOpen] = useState(false);
    const active = items.find((i) => i.code === current);
    const others = items.filter((i) => i.code !== current);
    const hrefOf = (item) => (preferHreflang && hreflangHref(item.code)) || item.href;
    if (variant === "inline") {
        return (_jsx("nav", { ref: ref, "aria-label": ariaLabel, className: cn("ds-flex ds-items-center ds-gap-2", className), ...rest, children: items.map((item) => {
                const isActive = item.code === current;
                return (_jsx(LinkComponent, { href: hrefOf(item), hrefLang: item.code, "aria-current": isActive ? "true" : undefined, className: cn("ds-text-sm ds-uppercase", isActive ? "ds-text-primary" : "ds-text-secondary"), children: item.code }, item.code));
            }) }));
    }
    return (_jsxs(Dropdown, { ref: ref, open: open, onOpenChange: setOpen, className: cn("ds-inline-block", className), ...rest, children: [_jsxs(Dropdown.Trigger, { "aria-label": typeof active?.label === "string"
                    ? `${ariaLabel}: ${active.label}`
                    : `${ariaLabel}: ${current}`, className: cn("ds-btn", "ds-btn--ghost", triggerSizeMap[size]), children: [active?.icon, _jsx("span", { className: "ds-text-xs ds-font-semibold ds-uppercase", children: current }), _jsx(Caret, {})] }), _jsx(Dropdown.Menu, { align: "right", width: "auto", children: others.map((item) => (_jsxs(LinkComponent, { href: hrefOf(item), hrefLang: item.code, role: "menuitem", className: "ds-dropdown__item", onClick: () => setOpen(false), children: [item.icon, _jsx("span", { children: item.label ?? item.code.toUpperCase() })] }, item.code))) })] }));
});
//# sourceMappingURL=LangSwitcher.js.map