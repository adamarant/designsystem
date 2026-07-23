import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { ignorePasswordManagers } from "../utils/passwordManager";
const sizeMap = { sm: "ds-search__input--sm", md: "", lg: "ds-search__input--lg" };
const SearchInput = forwardRef(function SearchInput({ size = "md", allowPasswordManager, className, ...rest }, ref) {
    return (_jsx("input", { ref: ref, type: "search", ...(allowPasswordManager ? {} : ignorePasswordManagers), className: cn("ds-search__input", sizeMap[size], className), ...rest }));
});
const SearchRoot = forwardRef(function Search({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-search", className), ...rest });
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { SearchInput };
export const Search = Object.assign(SearchRoot, { Input: SearchInput });
//# sourceMappingURL=Search.js.map