"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useState, } from "react";
import { cn } from "../utils/cn";
function BurgerIcon({ open }) {
    return (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", "aria-hidden": "true", children: open ? (_jsxs(_Fragment, { children: [_jsx("line", { x1: "4", y1: "4", x2: "14", y2: "14" }), _jsx("line", { x1: "14", y1: "4", x2: "4", y2: "14" })] })) : (_jsxs(_Fragment, { children: [_jsx("line", { x1: "3", y1: "6", x2: "15", y2: "6" }), _jsx("line", { x1: "3", y1: "12", x2: "15", y2: "12" })] })) }));
}
export const SiteHeader = forwardRef(function SiteHeader({ brand, brandHref = "/", items, actions, mobileExtra, fixed = true, activeHref, LinkComponent = "a", openLabel = "Open menu", closeLabel = "Close menu", className, ...rest }, ref) {
    const [open, setOpen] = useState(false);
    /* Scroll lock + Escape while the mobile panel is open. */
    useEffect(() => {
        if (!open)
            return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKeyDown = (e) => {
            if (e.key === "Escape")
                setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);
    const close = () => setOpen(false);
    return (_jsxs("nav", { ref: ref, "aria-label": "Main navigation", className: cn("ds-nav", !fixed && "ds-nav--static", className), ...rest, children: [_jsxs("div", { className: "ds-nav__inner", children: [_jsx(LinkComponent, { href: brandHref, className: "ds-nav__brand", children: brand }), _jsx("div", { className: "ds-nav__menu", children: items.map((item) => (_jsx(LinkComponent, { href: item.href, className: "ds-nav__link", "aria-current": activeHref === item.href ? "page" : undefined, children: item.label }, item.href))) }), _jsxs("div", { className: "ds-nav__actions", children: [actions, _jsx("button", { type: "button", className: "ds-nav__icon-btn ds-md:hidden", "aria-label": open ? closeLabel : openLabel, "aria-expanded": open, onClick: () => setOpen((v) => !v), children: _jsx(BurgerIcon, { open: open }) })] })] }), _jsx("div", { className: cn("ds-nav__mobile ds-md:hidden", open && "ds-nav__mobile--open ds-flex-1"), inert: !open, children: _jsxs("div", { className: "ds-nav__mobile-links", children: [items.map((item) => (_jsx(LinkComponent, { href: item.href, className: "ds-nav__link", "aria-current": activeHref === item.href ? "page" : undefined, onClick: close, children: item.label }, item.href))), mobileExtra] }) })] }));
});
//# sourceMappingURL=SiteHeader.js.map