"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
const Content = forwardRef(function C({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-bottom-sheet__content", className), ...r }); });
const Header = forwardRef(function H({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-bottom-sheet__header", className), ...r }); });
const Body = forwardRef(function B({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-bottom-sheet__body", className), ...r }); });
const Root = forwardRef(function BottomSheet({ open, onClose, className, children, ...rest }, ref) {
    useEffect(() => {
        if (!open)
            return;
        const h = (e) => { if (e.key === "Escape")
            onClose(); };
        document.addEventListener("keydown", h);
        return () => document.removeEventListener("keydown", h);
    }, [open, onClose]);
    const handleBackdrop = (e) => { if (e.target === e.currentTarget)
        onClose(); };
    const el = _jsx("div", { ref: ref, onClick: handleBackdrop, className: cn("ds-bottom-sheet", open && "ds-bottom-sheet--open", className), ...rest, children: children });
    if (typeof document === "undefined")
        return null;
    return createPortal(el, document.body);
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Content as BottomSheetContent, Header as BottomSheetHeader, Body as BottomSheetBody };
export const BottomSheet = Object.assign(Root, { Content, Header, Body });
//# sourceMappingURL=BottomSheet.js.map