"use client";
import { type ComponentPropsWithoutRef, createContext, forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import { cn } from "../utils/cn";

interface PopoverCtx { open: boolean; onToggle: () => void; onClose: () => void; }
const Ctx = createContext<PopoverCtx | null>(null);
function useCtx() { const c = useContext(Ctx); if (!c) throw new Error("Popover sub-components must be inside <Popover>"); return c; }

export interface PopoverProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  className?: string;
}
export interface PopoverTriggerProps extends ComponentPropsWithoutRef<"button"> { className?: string; }
export interface PopoverContentProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Trigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function Trigger({ className, onClick, ...rest }, ref) {
    const ctx = useCtx();
    return <button ref={ref} aria-expanded={ctx.open} onClick={(e) => { ctx.onToggle(); onClick?.(e); }} className={className} {...rest} />;
  },
);
const Content = forwardRef<HTMLDivElement, PopoverContentProps>(
  function Content({ className, ...rest }, ref) {
    const ctx = useCtx();
    return <div ref={ref} className={cn("ds-popover__content", className)} {...rest} />;
  },
);

const PopoverRoot = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover({ open, onOpenChange, className, ...rest }, ref) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const onToggle = useCallback(() => onOpenChange(!open), [open, onOpenChange]);
    const onClose = useCallback(() => onOpenChange(false), [onOpenChange]);

    useEffect(() => {
      if (!open) return;
      const h = (e: globalThis.MouseEvent) => { if (rootRef.current && !rootRef.current.contains(e.target as Node)) onClose(); };
      const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      document.addEventListener("mousedown", h);
      document.addEventListener("keydown", k);
      return () => { document.removeEventListener("mousedown", h); document.removeEventListener("keydown", k); };
    }, [open, onClose]);

    return (
      <Ctx.Provider value={{ open, onToggle, onClose }}>
        <div ref={(n) => { rootRef.current = n; if (typeof ref === "function") ref(n); else if (ref) ref.current = n; }} className={cn("ds-popover", open && "ds-popover--open", className)} {...rest} />
      </Ctx.Provider>
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Trigger as PopoverTrigger, Content as PopoverContent };

export const Popover = Object.assign(PopoverRoot, { Trigger, Content });
