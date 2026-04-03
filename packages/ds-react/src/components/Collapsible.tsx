"use client";
import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { cn } from "../utils/cn";

export interface CollapsibleProps extends ComponentPropsWithoutRef<"div"> {
  defaultOpen?: boolean;
  className?: string;
}
export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<"button"> { className?: string; }
export interface CollapsibleContentProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

import { createContext, useContext } from "react";
const Ctx = createContext<{ open: boolean; toggle: () => void } | null>(null);

const Trigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  function Trigger({ className, onClick, ...rest }, ref) {
    const ctx = useContext(Ctx)!;
    return <button ref={ref} aria-expanded={ctx.open} onClick={(e) => { ctx.toggle(); onClick?.(e); }} className={cn("ds-collapsible__trigger", className)} {...rest} />;
  },
);
const Content = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  function Content({ className, ...rest }, ref) {
    const ctx = useContext(Ctx)!;
    return <div ref={ref} className={cn("ds-collapsible__content", ctx.open && "ds-collapsible__content--open", className)} {...rest} />;
  },
);

function CollapsibleRoot({ defaultOpen = false, className, children, ...rest }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Ctx.Provider value={{ open, toggle: () => setOpen(p => !p) }}>
      <div className={cn("ds-collapsible", open && "ds-collapsible--open", className)} {...rest}>{children}</div>
    </Ctx.Provider>
  );
}

export const Collapsible = Object.assign(CollapsibleRoot, { Trigger, Content });
