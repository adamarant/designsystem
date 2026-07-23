import { type ComponentPropsWithoutRef } from "react";
export interface AdminLayoutProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface AdminLayoutSidebarProps extends ComponentPropsWithoutRef<"aside"> {
    className?: string;
}
export interface AdminLayoutMainProps extends ComponentPropsWithoutRef<"main"> {
    className?: string;
}
export interface AdminLayoutHeaderProps extends ComponentPropsWithoutRef<"header"> {
    className?: string;
}
declare const Sidebar: import("react").ForwardRefExoticComponent<AdminLayoutSidebarProps & import("react").RefAttributes<HTMLElement>>;
declare const Main: import("react").ForwardRefExoticComponent<AdminLayoutMainProps & import("react").RefAttributes<HTMLElement>>;
declare const Header: import("react").ForwardRefExoticComponent<AdminLayoutHeaderProps & import("react").RefAttributes<HTMLElement>>;
export { Sidebar as AdminLayoutSidebar, Main as AdminLayoutMain, Header as AdminLayoutHeader };
export declare const AdminLayout: import("react").ForwardRefExoticComponent<AdminLayoutProps & import("react").RefAttributes<HTMLDivElement>> & {
    Sidebar: import("react").ForwardRefExoticComponent<AdminLayoutSidebarProps & import("react").RefAttributes<HTMLElement>>;
    Main: import("react").ForwardRefExoticComponent<AdminLayoutMainProps & import("react").RefAttributes<HTMLElement>>;
    Header: import("react").ForwardRefExoticComponent<AdminLayoutHeaderProps & import("react").RefAttributes<HTMLElement>>;
};
//# sourceMappingURL=AdminLayout.d.ts.map