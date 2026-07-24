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
declare const List: import("react").ForwardRefExoticComponent<BreadcrumbListProps & import("react").RefAttributes<HTMLOListElement>>;
declare const Item: import("react").ForwardRefExoticComponent<BreadcrumbItemProps & import("react").RefAttributes<HTMLLIElement>>;
/**
 * @deprecated Renders nothing. `breadcrumb.css` draws the separator itself, as
 * a `::after` on every `__item` but the last — so a separator in the DOM was
 * always a second one beside it. It also carried a separator class the DS
 * never defined. Kept as a no-op export so existing trees keep compiling;
 * delete the element when you touch the file.
 */
declare const Separator: import("react").ForwardRefExoticComponent<BreadcrumbSeparatorProps & import("react").RefAttributes<HTMLLIElement>>;
export { List as BreadcrumbList, Item as BreadcrumbItem, Separator as BreadcrumbSeparator };
export declare const Breadcrumb: import("react").ForwardRefExoticComponent<BreadcrumbProps & import("react").RefAttributes<HTMLElement>> & {
    List: import("react").ForwardRefExoticComponent<BreadcrumbListProps & import("react").RefAttributes<HTMLOListElement>>;
    Item: import("react").ForwardRefExoticComponent<BreadcrumbItemProps & import("react").RefAttributes<HTMLLIElement>>;
    Separator: import("react").ForwardRefExoticComponent<BreadcrumbSeparatorProps & import("react").RefAttributes<HTMLLIElement>>;
};
//# sourceMappingURL=Breadcrumb.d.ts.map