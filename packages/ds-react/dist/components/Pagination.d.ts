import { type ComponentPropsWithoutRef } from "react";
export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> {
    className?: string;
}
export interface PaginationListProps extends ComponentPropsWithoutRef<"ul"> {
    className?: string;
}
export interface PaginationItemProps extends ComponentPropsWithoutRef<"button"> {
    active?: boolean;
    className?: string;
}
export declare const Pagination: import("react").ForwardRefExoticComponent<PaginationProps & import("react").RefAttributes<HTMLElement>> & {
    List: import("react").ForwardRefExoticComponent<PaginationListProps & import("react").RefAttributes<HTMLUListElement>>;
    Item: import("react").ForwardRefExoticComponent<PaginationItemProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=Pagination.d.ts.map