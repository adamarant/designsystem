import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { ignorePasswordManagers } from "../utils/passwordManager";
import { IconClose, IconSearch } from "../icons";
const sizeMap = { sm: "ds-search__input--sm", md: "", lg: "ds-search__input--lg" };
const rootSizeMap = { sm: "ds-search--sm", md: "", lg: "ds-search--lg" };
const SearchInput = forwardRef(function SearchInput({ size = "md", allowPasswordManager, className, ...rest }, ref) {
    return (_jsx("input", { ref: ref, type: "search", ...(allowPasswordManager ? {} : ignorePasswordManagers), className: cn("ds-search__input", sizeMap[size], className), ...rest }));
});
const SearchRoot = forwardRef(function Search({ size = "md", className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-search", rootSizeMap[size], className), ...rest }));
});
/* The magnifier and the clear are the component's to decide, not the page's:
   a search bar's leading mark is always a magnifier and its trailing button
   always dismisses. So both parts ship a default and take children to override
   it, which is the same shape as Alert.Icon and EmptyState.Icon — those simply
   have nothing sensible to default to.

   SearchIcon is the slot, IconSearch is the magnifier that fills it. That
   split is why the set is named Icon* rather than *Icon: the suffix would have
   put the two in the same namespace. */
const SearchIcon = forwardRef(function SearchIcon({ className, children, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-search__icon", className), ...rest, children: children ?? _jsx(IconSearch, { size: 16 }) }));
});
const SearchClear = forwardRef(function SearchClear({ className, children, type = "button", ...rest }, ref) {
    return (_jsx("button", { ref: ref, type: type, "aria-label": "Clear search", className: cn("ds-search__clear", className), ...rest, children: children ?? _jsx(IconClose, { size: 16 }) }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { SearchInput, SearchIcon, SearchClear };
export const Search = Object.assign(SearchRoot, {
    Input: SearchInput,
    Icon: SearchIcon,
    Clear: SearchClear,
});
//# sourceMappingURL=Search.js.map