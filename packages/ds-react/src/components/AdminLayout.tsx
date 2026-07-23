import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface AdminLayoutProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface AdminLayoutSidebarProps extends ComponentPropsWithoutRef<"aside"> { className?: string; }
export interface AdminLayoutMainProps extends ComponentPropsWithoutRef<"main"> { className?: string; }
export interface AdminLayoutHeaderProps extends ComponentPropsWithoutRef<"header"> { className?: string; }

const Sidebar = forwardRef<HTMLElement, AdminLayoutSidebarProps>(function S({ className, ...r }, ref) { return <aside ref={ref} className={cn("ds-admin-layout__sidebar", className)} {...r} />; });
const Main = forwardRef<HTMLElement, AdminLayoutMainProps>(function M({ className, ...r }, ref) { return <main ref={ref} className={cn("ds-admin-layout__main", className)} {...r} />; });
const Header = forwardRef<HTMLElement, AdminLayoutHeaderProps>(function H({ className, ...r }, ref) { return <header ref={ref} className={cn("ds-admin-layout__header", className)} {...r} />; });

const Root = forwardRef<HTMLDivElement, AdminLayoutProps>(
  function AdminLayout({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-admin-layout", className)} {...rest} />; },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Sidebar as AdminLayoutSidebar, Main as AdminLayoutMain, Header as AdminLayoutHeader };

export const AdminLayout = Object.assign(Root, { Sidebar, Main, Header });
