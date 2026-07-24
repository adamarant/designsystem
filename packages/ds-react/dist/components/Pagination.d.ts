import { type ComponentPropsWithoutRef } from "react";
import { type Size } from "../types";
export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> {
    className?: string;
}
export interface PaginationListProps extends ComponentPropsWithoutRef<"ul"> {
    /** Size tier for every item in the row. Lives here because `.ds-pagination`
        is the list, not the nav. Default: "md". */
    size?: Exclude<Size, "xs">;
    className?: string;
}
export interface PaginationItemProps extends ComponentPropsWithoutRef<"button"> {
    active?: boolean;
    className?: string;
}
declare const List: import("react").ForwardRefExoticComponent<PaginationListProps & import("react").RefAttributes<HTMLUListElement>>;
declare const Item: import("react").ForwardRefExoticComponent<PaginationItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export { List as PaginationList, Item as PaginationItem };
export declare const Pagination: import("react").ForwardRefExoticComponent<PaginationProps & import("react").RefAttributes<HTMLElement>> & {
    List: import("react").ForwardRefExoticComponent<PaginationListProps & import("react").RefAttributes<HTMLUListElement>>;
    Item: import("react").ForwardRefExoticComponent<PaginationItemProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=Pagination.d.ts.map