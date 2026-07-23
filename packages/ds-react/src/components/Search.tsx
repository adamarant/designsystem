import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { type Size } from "../types";
import { cn } from "../utils/cn";
import { ignorePasswordManagers } from "../utils/passwordManager";

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

const sizeMap: Record<SearchSize, string> = { sm: "ds-search__input--sm", md: "", lg: "ds-search__input--lg" };
const rootSizeMap: Record<SearchSize, string> = { sm: "ds-search--sm", md: "", lg: "ds-search--lg" };

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput({ size = "md", allowPasswordManager, className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        type="search"
        {...(allowPasswordManager ? {} : ignorePasswordManagers)}
        className={cn("ds-search__input", sizeMap[size], className)}
        {...rest}
      />
    );
  },
);

const SearchRoot = forwardRef<HTMLDivElement, SearchProps>(
  function Search({ size = "md", className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-search", rootSizeMap[size], className)}
        {...rest}
      />
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { SearchInput };

export const Search = Object.assign(SearchRoot, { Input: SearchInput });
