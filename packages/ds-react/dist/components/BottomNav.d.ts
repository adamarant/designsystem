import { type ComponentPropsWithoutRef } from "react";
export interface BottomNavProps extends ComponentPropsWithoutRef<"nav"> {
    className?: string;
}
export interface BottomNavItemProps extends ComponentPropsWithoutRef<"button"> {
    active?: boolean;
    className?: string;
}
declare const Item: import("react").ForwardRefExoticComponent<BottomNavItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Item as BottomNavItem };
export declare const BottomNav: import("react").ForwardRefExoticComponent<BottomNavProps & import("react").RefAttributes<HTMLElement>> & {
    Item: import("react").ForwardRefExoticComponent<BottomNavItemProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=BottomNav.d.ts.map