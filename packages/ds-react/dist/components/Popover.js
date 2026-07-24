"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import { cn } from "../utils/cn";
const Ctx = createContext(null);
function useCtx() { const c = useContext(Ctx); if (!c)
    throw new Error("Popover sub-components must be inside <Popover>"); return c; }
const Trigger = forwardRef(function Trigger({ className, onClick, ...rest }, ref) {
    const ctx = useCtx();
    return _jsx("button", { ref: ref, "aria-expanded": ctx.open, onClick: (e) => { ctx.onToggle(); onClick?.(e); }, className: className, ...rest });
});
const Content = forwardRef(function Content({ className, ...rest }, ref) {
    const ctx = useCtx();
    return _jsx("div", { ref: ref, className: cn("ds-popover__content", className), ...rest });
});
const PopoverRoot = forwardRef(function Popover({ open, onOpenChange, className, ...rest }, ref) {
    const rootRef = useRef(null);
    const onToggle = useCallback(() => onOpenChange(!open), [open, onOpenChange]);
    const onClose = useCallback(() => onOpenChange(false), [onOpenChange]);
    useEffect(() => {
        if (!open)
            return;
        const h = (e) => { if (rootRef.current && !rootRef.current.contains(e.target))
            onClose(); };
        const k = (e) => { if (e.key === "Escape")
            onClose(); };
        document.addEventListener("mousedown", h);
        document.addEventListener("keydown", k);
        return () => { document.removeEventListener("mousedown", h); document.removeEventListener("keydown", k); };
    }, [open, onClose]);
    return (_jsx(Ctx.Provider, { value: { open, onToggle, onClose }, children: _jsx("div", { ref: (n) => { rootRef.current = n; if (typeof ref === "function")
                ref(n);
            else if (ref)
                ref.current = n; }, className: cn("ds-popover", open && "ds-popover--open", className), ...rest }) }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Trigger as PopoverTrigger, Content as PopoverContent };
export const Popover = Object.assign(PopoverRoot, { Trigger, Content });
//# sourceMappingURL=Popover.js.map