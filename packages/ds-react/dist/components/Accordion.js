"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useCallback, useContext, useId, useState, } from "react";
import { cn } from "../utils/cn";
const AccordionContext = createContext(null);
function useAccordionContext() {
    const ctx = useContext(AccordionContext);
    if (!ctx)
        throw new Error("Accordion sub-components must be used inside <Accordion>");
    return ctx;
}
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const variantMap = {
    default: "",
    flush: "ds-accordion--flush",
    separated: "ds-accordion--separated",
};
/* ================================================================== */
/*  Item context                                                       */
/* ================================================================== */
const ItemContext = createContext(null);
function useItemContext() {
    const ctx = useContext(ItemContext);
    if (!ctx)
        throw new Error("Must be used inside <Accordion.Item>");
    return ctx;
}
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const AccordionItem = forwardRef(function AccordionItem({ value, className, children, ...rest }, ref) {
    const ctx = useAccordionContext();
    const isOpen = ctx.openItems.has(value);
    return (_jsx(ItemContext.Provider, { value: { value, isOpen }, children: _jsx("div", { ref: ref, className: cn("ds-accordion__item", isOpen && "ds-accordion__item--open", className), ...rest, children: children }) }));
});
const AccordionTrigger = forwardRef(function AccordionTrigger({ className, onClick, ...rest }, ref) {
    const ctx = useAccordionContext();
    const item = useItemContext();
    const triggerId = `${ctx.baseId}-trigger-${item.value}`;
    const contentId = `${ctx.baseId}-content-${item.value}`;
    return (_jsx("button", { ref: ref, id: triggerId, "aria-expanded": item.isOpen, "aria-controls": contentId, onClick: (e) => {
            ctx.toggle(item.value);
            onClick?.(e);
        }, className: cn("ds-accordion__trigger", className), ...rest }));
});
const AccordionContent = forwardRef(function AccordionContent({ className, ...rest }, ref) {
    const ctx = useAccordionContext();
    const item = useItemContext();
    const triggerId = `${ctx.baseId}-trigger-${item.value}`;
    const contentId = `${ctx.baseId}-content-${item.value}`;
    return (_jsx("div", { ref: ref, id: contentId, role: "region", "aria-labelledby": triggerId, className: cn("ds-accordion__content", className), ...rest }));
});
const AccordionBody = forwardRef(function AccordionBody({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-accordion__body", className), ...rest }));
});
/* ================================================================== */
/*  Accordion (root + dot notation)                                    */
/* ================================================================== */
function AccordionRoot({ variant = "default", multiple = false, defaultOpen = [], className, children, }) {
    const [openItems, setOpenItems] = useState(new Set(defaultOpen));
    const baseId = useId();
    const toggle = useCallback((value) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            if (next.has(value)) {
                next.delete(value);
            }
            else {
                if (!multiple)
                    next.clear();
                next.add(value);
            }
            return next;
        });
    }, [multiple]);
    return (_jsx(AccordionContext.Provider, { value: { openItems, toggle, baseId }, children: _jsx("div", { className: cn("ds-accordion", variantMap[variant], className), children: children }) }));
}
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { AccordionItem, AccordionTrigger, AccordionContent, AccordionBody };
export const Accordion = Object.assign(AccordionRoot, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
    Body: AccordionBody,
});
//# sourceMappingURL=Accordion.js.map