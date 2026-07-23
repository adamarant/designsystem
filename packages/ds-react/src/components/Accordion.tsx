"use client";

import {
  type ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useId,
  useState,
} from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Context                                                            */
/* ================================================================== */

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (value: string) => void;
  baseId: string;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion sub-components must be used inside <Accordion>");
  return ctx;
}

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type AccordionVariant = "default" | "flush" | "separated";

export interface AccordionProps {
  /** Visual variant. Default: "default" */
  variant?: AccordionVariant;
  /** Allow multiple items open. Default: false (single) */
  multiple?: boolean;
  /** Default open items. */
  defaultOpen?: string[];
  /** Additional className */
  className?: string;
  children: React.ReactNode;
}

export interface AccordionItemProps extends ComponentPropsWithoutRef<"div"> {
  /** Unique value identifying this item. */
  value: string;
  /** Additional className */
  className?: string;
}

export interface AccordionTriggerProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export interface AccordionContentProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface AccordionBodyProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const variantMap: Record<AccordionVariant, string> = {
  default: "",
  flush: "ds-accordion--flush",
  separated: "ds-accordion--separated",
};

/* ================================================================== */
/*  Item context                                                       */
/* ================================================================== */

const ItemContext = createContext<{ value: string; isOpen: boolean } | null>(null);

function useItemContext() {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error("Must be used inside <Accordion.Item>");
  return ctx;
}

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem({ value, className, children, ...rest }, ref) {
    const ctx = useAccordionContext();
    const isOpen = ctx.openItems.has(value);

    return (
      <ItemContext.Provider value={{ value, isOpen }}>
        <div
          ref={ref}
          className={cn(
            "ds-accordion__item",
            isOpen && "ds-accordion__item--open",
            className,
          )}
          {...rest}
        >
          {children}
        </div>
      </ItemContext.Provider>
    );
  },
);

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  function AccordionTrigger({ className, onClick, ...rest }, ref) {
    const ctx = useAccordionContext();
    const item = useItemContext();
    const triggerId = `${ctx.baseId}-trigger-${item.value}`;
    const contentId = `${ctx.baseId}-content-${item.value}`;

    return (
      <button
        ref={ref}
        id={triggerId}
        aria-expanded={item.isOpen}
        aria-controls={contentId}
        onClick={(e) => {
          ctx.toggle(item.value);
          onClick?.(e);
        }}
        className={cn("ds-accordion__trigger", className)}
        {...rest}
      />
    );
  },
);

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent({ className, ...rest }, ref) {
    const ctx = useAccordionContext();
    const item = useItemContext();
    const triggerId = `${ctx.baseId}-trigger-${item.value}`;
    const contentId = `${ctx.baseId}-content-${item.value}`;

    return (
      <div
        ref={ref}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn("ds-accordion__content", className)}
        {...rest}
      />
    );
  },
);

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  function AccordionBody({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-accordion__body", className)} {...rest} />
    );
  },
);

/* ================================================================== */
/*  Accordion (root + dot notation)                                    */
/* ================================================================== */

function AccordionRoot({
  variant = "default",
  multiple = false,
  defaultOpen = [],
  className,
  children,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));
  const baseId = useId();

  const toggle = useCallback((value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        if (!multiple) next.clear();
        next.add(value);
      }
      return next;
    });
  }, [multiple]);

  return (
    <AccordionContext.Provider value={{ openItems, toggle, baseId }}>
      <div className={cn("ds-accordion", variantMap[variant], className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { AccordionItem, AccordionTrigger, AccordionContent, AccordionBody };

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Body: AccordionBody,
});
