import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const sizeMap = { sm: "ds-search__input--sm", md: "", lg: "ds-search__input--lg" };
const SearchInput = forwardRef(function SearchInput({ size = "md", className, ...rest }, ref) {
    return _jsx("input", { ref: ref, type: "search", className: cn("ds-search__input", sizeMap[size], className), ...rest });
});
const SearchRoot = forwardRef(function Search({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-search", className), ...rest });
});
export const Search = Object.assign(SearchRoot, { Input: SearchInput });
//# sourceMappingURL=Search.js.map