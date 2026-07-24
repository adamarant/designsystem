import { type ComponentPropsWithoutRef } from "react";
import { type Size } from "../types";
type SearchSize = Exclude<Size, "xs">;
export interface SearchProps extends ComponentPropsWithoutRef<"div"> {
    /** Size tier. The bar's height lives on the container, so set it here and
        give SearchInput the matching size to scale the type with it. */
    size?: SearchSize;
    className?: string;
}
export interface SearchInputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: SearchSize;
    /** Allow password managers (1Password, etc.) to offer autofill. Default false: suppressed. */
    allowPasswordManager?: boolean;
    className?: string;
}
declare const SearchInput: import("react").ForwardRefExoticComponent<SearchInputProps & import("react").RefAttributes<HTMLInputElement>>;
export { SearchInput };
export declare const Search: import("react").ForwardRefExoticComponent<SearchProps & import("react").RefAttributes<HTMLDivElement>> & {
    Input: import("react").ForwardRefExoticComponent<SearchInputProps & import("react").RefAttributes<HTMLInputElement>>;
};
//# sourceMappingURL=Search.d.ts.map