import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const NavList = forwardRef(function NavList({ className, ...rest }, ref) {
    return _jsx("ul", { ref: ref, className: cn("ds-nav", className), ...rest });
});
const NavItem = forwardRef(function NavItem({ active, className, ...rest }, ref) {
    return _jsx("li", { ref: ref, className: cn("ds-nav__link", active && "ds-nav__link--active", className), ...rest });
});
const NavRoot = forwardRef(function Nav({ className, ...rest }, ref) {
    return _jsx("nav", { ref: ref, className: className, ...rest });
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { NavList, NavItem };
export const Nav = Object.assign(NavRoot, { List: NavList, Item: NavItem });
//# sourceMappingURL=Nav.js.map