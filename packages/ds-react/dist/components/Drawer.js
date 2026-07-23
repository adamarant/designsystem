"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
const sideMap = { left: "", right: "ds-drawer--right" };
const Content = forwardRef(function Content({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-drawer__content", className), ...rest }); });
const Header = forwardRef(function Header({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-drawer__header", className), ...rest }); });
const Body = forwardRef(function Body({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-drawer__body", className), ...rest }); });
const Footer = forwardRef(function Footer({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-drawer__footer", className), ...rest }); });
const Close = forwardRef(function Close({ className, ...rest }, ref) { return _jsx("button", { ref: ref, "aria-label": "Close", className: cn("ds-drawer__close", className), ...rest }); });
const DrawerRoot = forwardRef(function Drawer({ open, onClose, side = "left", className, children, ...rest }, ref) {
    useEffect(() => {
        if (!open)
            return;
        const h = (e) => { if (e.key === "Escape")
            onClose(); };
        document.addEventListener("keydown", h);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", h); document.body.style.overflow = prev; };
    }, [open, onClose]);
    const handleBackdrop = (e) => { if (e.target === e.currentTarget)
        onClose(); };
    const drawer = (_jsx("div", { ref: ref, onClick: handleBackdrop, className: cn("ds-drawer", open && "ds-drawer--open", sideMap[side], className), ...rest, children: children }));
    if (typeof document === "undefined")
        return null;
    return createPortal(drawer, document.body);
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Content as DrawerContent, Header as DrawerHeader, Body as DrawerBody, Footer as DrawerFooter, Close as DrawerClose };
export const Drawer = Object.assign(DrawerRoot, { Content, Header, Body, Footer, Close });
//# sourceMappingURL=Drawer.js.map