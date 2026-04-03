import { type ComponentPropsWithoutRef } from "react";
export interface BreadcrumbProps extends ComponentPropsWithoutRef<"nav"> {
    className?: string;
}
export interface BreadcrumbListProps extends ComponentPropsWithoutRef<"ol"> {
    className?: string;
}
export interface BreadcrumbItemProps extends ComponentPropsWithoutRef<"li"> {
    className?: string;
}
export interface BreadcrumbSeparatorProps extends ComponentPropsWithoutRef<"li"> {
    className?: string;
}
export declare const Breadcrumb: import("react").ForwardRefExoticComponent<BreadcrumbProps & import("react").RefAttributes<HTMLElement>> & {
    List: import("react").ForwardRefExoticComponent<BreadcrumbListProps & import("react").RefAttributes<HTMLOListElement>>;
    Item: import("react").ForwardRefExoticComponent<BreadcrumbItemProps & import("react").RefAttributes<HTMLLIElement>>;
    Separator: import("react").ForwardRefExoticComponent<BreadcrumbSeparatorProps & import("react").RefAttributes<HTMLLIElement>>;
};
//# sourceMappingURL=Breadcrumb.d.ts.map