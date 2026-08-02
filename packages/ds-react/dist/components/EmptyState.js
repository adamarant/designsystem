import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
const Icon = forwardRef(function Icon({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-empty-state__icon", className), ...rest });
});
const Title = forwardRef(function Title({ className, ...rest }, ref) {
    return _jsx("h3", { ref: ref, className: cn("ds-empty-state__title", className), ...rest });
});
const Description = forwardRef(function Description({ className, ...rest }, ref) {
    return _jsx("p", { ref: ref, className: cn("ds-empty-state__description", className), ...rest });
});
const Actions = forwardRef(function Actions({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-empty-state__actions", className), ...rest });
});
const EmptyStateRoot = forwardRef(function EmptyState({ icon, title, description, actions, card, compact, left, children, className, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: cn("ds-empty-state", card && "ds-empty-state--card", compact && "ds-empty-state--compact", left && "ds-empty-state--left", className), ...rest, children: [icon ? _jsx(Icon, { children: icon }) : null, title ? _jsx(Title, { children: title }) : null, description ? _jsx(Description, { children: description }) : null, children, actions ? _jsx(Actions, { children: actions }) : null] }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Icon as EmptyStateIcon, Title as EmptyStateTitle, Description as EmptyStateDescription, Actions as EmptyStateActions };
export const EmptyState = Object.assign(EmptyStateRoot, {
    Icon, Title, Description, Actions,
});
//# sourceMappingURL=EmptyState.js.map