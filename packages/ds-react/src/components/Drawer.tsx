"use client";
import { type ComponentPropsWithoutRef, type MouseEvent, forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

type DrawerSide = "left" | "right";

export interface DrawerProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  className?: string;
}
export interface DrawerContentProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface DrawerHeaderProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface DrawerBodyProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface DrawerFooterProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface DrawerCloseProps extends ComponentPropsWithoutRef<"button"> { className?: string; }

const sideMap: Record<DrawerSide, string> = { left: "", right: "ds-drawer--right" };

const Content = forwardRef<HTMLDivElement, DrawerContentProps>(
  function Content({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-drawer__content", className)} {...rest} />; },
);
const Header = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  function Header({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-drawer__header", className)} {...rest} />; },
);
const Body = forwardRef<HTMLDivElement, DrawerBodyProps>(
  function Body({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-drawer__body", className)} {...rest} />; },
);
const Footer = forwardRef<HTMLDivElement, DrawerFooterProps>(
  function Footer({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-drawer__footer", className)} {...rest} />; },
);
const Close = forwardRef<HTMLButtonElement, DrawerCloseProps>(
  function Close({ className, ...rest }, ref) { return <button ref={ref} aria-label="Close" className={cn("ds-drawer__close", className)} {...rest} />; },
);

const DrawerRoot = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer({ open, onClose, side = "left", className, children, ...rest }, ref) {
    useEffect(() => {
      if (!open) return;
      const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      document.addEventListener("keydown", h);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.removeEventListener("keydown", h); document.body.style.overflow = prev; };
    }, [open, onClose]);

    const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); };

    const drawer = (
      <div ref={ref} onClick={handleBackdrop} className={cn("ds-drawer", open && "ds-drawer--open", sideMap[side], className)} {...rest}>
        {children}
      </div>
    );
    if (typeof document === "undefined") return null;
    return createPortal(drawer, document.body);
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Content as DrawerContent, Header as DrawerHeader, Body as DrawerBody, Footer as DrawerFooter, Close as DrawerClose };

export const Drawer = Object.assign(DrawerRoot, { Content, Header, Body, Footer, Close });
