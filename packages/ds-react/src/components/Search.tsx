import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";
import { ignorePasswordManagers } from "../utils/passwordManager";

export interface SearchProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface SearchInputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  /** Allow password managers (1Password, etc.) to offer autofill. Default false: suppressed. */
  allowPasswordManager?: boolean;
  className?: string;
}

const sizeMap: Record<string, string> = { sm: "ds-search__input--sm", md: "", lg: "ds-search__input--lg" };

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
  function Search({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-search", className)} {...rest} />;
  },
);

export const Search = Object.assign(SearchRoot, { Input: SearchInput });
