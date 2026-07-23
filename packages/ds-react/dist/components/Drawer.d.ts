import { type ComponentPropsWithoutRef } from "react";
type DrawerSide = "left" | "right";
export interface DrawerProps extends ComponentPropsWithoutRef<"div"> {
    open: boolean;
    onClose: () => void;
    side?: DrawerSide;
    className?: string;
}
export interface DrawerContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface DrawerHeaderProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface DrawerBodyProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface DrawerFooterProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface DrawerCloseProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
declare const Content: import("react").ForwardRefExoticComponent<DrawerContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Header: import("react").ForwardRefExoticComponent<DrawerHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Body: import("react").ForwardRefExoticComponent<DrawerBodyProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Footer: import("react").ForwardRefExoticComponent<DrawerFooterProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Close: import("react").ForwardRefExoticComponent<DrawerCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Content as DrawerContent, Header as DrawerHeader, Body as DrawerBody, Footer as DrawerFooter, Close as DrawerClose };
export declare const Drawer: import("react").ForwardRefExoticComponent<DrawerProps & import("react").RefAttributes<HTMLDivElement>> & {
    Content: import("react").ForwardRefExoticComponent<DrawerContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<DrawerHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<DrawerBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<DrawerFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    Close: import("react").ForwardRefExoticComponent<DrawerCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=Drawer.d.ts.map