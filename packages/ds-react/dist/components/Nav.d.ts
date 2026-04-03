import { type ComponentPropsWithoutRef } from "react";
export interface NavProps extends ComponentPropsWithoutRef<"nav"> {
    className?: string;
}
export interface NavListProps extends ComponentPropsWithoutRef<"ul"> {
    className?: string;
}
export interface NavItemProps extends ComponentPropsWithoutRef<"li"> {
    active?: boolean;
    className?: string;
}
export declare const Nav: import("react").ForwardRefExoticComponent<NavProps & import("react").RefAttributes<HTMLElement>> & {
    List: import("react").ForwardRefExoticComponent<NavListProps & import("react").RefAttributes<HTMLUListElement>>;
    Item: import("react").ForwardRefExoticComponent<NavItemProps & import("react").RefAttributes<HTMLLIElement>>;
};
//# sourceMappingURL=Nav.d.ts.map