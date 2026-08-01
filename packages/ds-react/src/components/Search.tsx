import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { type Size } from "../types";
import { cn } from "../utils/cn";
import { ignorePasswordManagers } from "../utils/passwordManager";
import { IconClose, IconSearch } from "../icons";

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
export interface SearchIconProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}
export interface SearchClearProps extends ComponentPropsWithoutRef<"button"> {
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

/* The magnifier and the clear are the component's to decide, not the page's:
   a search bar's leading mark is always a magnifier and its trailing button
   always dismisses. So both parts ship a default and take children to override
   it, which is the same shape as Alert.Icon and EmptyState.Icon — those simply
   have nothing sensible to default to.

   SearchIcon is the slot, IconSearch is the magnifier that fills it. That
   split is why the set is named Icon* rather than *Icon: the suffix would have
   put the two in the same namespace. */
const SearchIcon = forwardRef<HTMLSpanElement, SearchIconProps>(
  function SearchIcon({ className, children, ...rest }, ref) {
    return (
      <span ref={ref} className={cn("ds-search__icon", className)} {...rest}>
        {children ?? <IconSearch size={16} />}
      </span>
    );
  },
);

const SearchClear = forwardRef<HTMLButtonElement, SearchClearProps>(
  function SearchClear({ className, children, type = "button", ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        aria-label="Clear search"
        className={cn("ds-search__clear", className)}
        {...rest}
      >
        {children ?? <IconClose size={16} />}
      </button>
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { SearchInput, SearchIcon, SearchClear };

export const Search = Object.assign(SearchRoot, {
  Input: SearchInput,
  Icon: SearchIcon,
  Clear: SearchClear,
});
