import { type ComponentPropsWithoutRef } from "react";
export interface SearchProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface SearchInputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: "sm" | "md" | "lg";
    className?: string;
}
export declare const Search: import("react").ForwardRefExoticComponent<SearchProps & import("react").RefAttributes<HTMLDivElement>> & {
    Input: import("react").ForwardRefExoticComponent<SearchInputProps & import("react").RefAttributes<HTMLInputElement>>;
};
//# sourceMappingURL=Search.d.ts.map