"use client";
import { type ComponentPropsWithoutRef, type MouseEvent, forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

export interface BottomSheetProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
  className?: string;
}
export interface BottomSheetContentProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface BottomSheetHeaderProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface BottomSheetBodyProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Content = forwardRef<HTMLDivElement, BottomSheetContentProps>(function C({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-bottom-sheet__panel", className)} {...r} />; });
const Header = forwardRef<HTMLDivElement, BottomSheetHeaderProps>(function H({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-bottom-sheet__header", className)} {...r} />; });
const Body = forwardRef<HTMLDivElement, BottomSheetBodyProps>(function B({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-bottom-sheet__body", className)} {...r} />; });

const Root = forwardRef<HTMLDivElement, BottomSheetProps>(
  function BottomSheet({ open, onClose, className, children, ...rest }, ref) {
    useEffect(() => {
      if (!open) return;
      const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      document.addEventListener("keydown", h);
      return () => document.removeEventListener("keydown", h);
    }, [open, onClose]);
    const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); };
    const el = <div ref={ref} onClick={handleBackdrop} className={cn("ds-bottom-sheet", open && "ds-bottom-sheet--open", className)} {...rest}>{children}</div>;
    if (typeof document === "undefined") return null;
    return createPortal(el, document.body);
  },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Content as BottomSheetContent, Header as BottomSheetHeader, Body as BottomSheetBody };

export const BottomSheet = Object.assign(Root, { Content, Header, Body });
