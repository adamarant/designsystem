"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { cn } from "../utils/cn";
import { createContext, useContext } from "react";
const Ctx = createContext(null);
const Trigger = forwardRef(function Trigger({ className, onClick, ...rest }, ref) {
    const ctx = useContext(Ctx);
    return _jsx("button", { ref: ref, "aria-expanded": ctx.open, onClick: (e) => { ctx.toggle(); onClick?.(e); }, className: cn("ds-collapsible__trigger", className), ...rest });
});
const Content = forwardRef(function Content({ className, ...rest }, ref) {
    const ctx = useContext(Ctx);
    return _jsx("div", { ref: ref, className: cn("ds-collapsible__content", className), ...rest });
});
function CollapsibleRoot({ defaultOpen = false, className, children, ...rest }) {
    const [open, setOpen] = useState(defaultOpen);
    return (_jsx(Ctx.Provider, { value: { open, toggle: () => setOpen(p => !p) }, children: _jsx("div", { className: cn("ds-collapsible", open && "ds-collapsible--open", className), ...rest, children: children }) }));
}
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Trigger as CollapsibleTrigger, Content as CollapsibleContent };
export const Collapsible = Object.assign(CollapsibleRoot, { Trigger, Content });
//# sourceMappingURL=Collapsible.js.map