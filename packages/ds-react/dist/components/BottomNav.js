import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Item = forwardRef(function Item({ active, className, ...rest }, ref) {
    return _jsx("button", { ref: ref, className: cn("ds-bottom-nav__item", active && "ds-bottom-nav__item--active", className), ...rest });
});
const Root = forwardRef(function BottomNav({ className, ...rest }, ref) {
    return _jsx("nav", { ref: ref, className: cn("ds-bottom-nav", className), ...rest });
});
export const BottomNav = Object.assign(Root, { Item });
//# sourceMappingURL=BottomNav.js.map