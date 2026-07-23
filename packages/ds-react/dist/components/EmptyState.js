import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
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
const EmptyStateRoot = forwardRef(function EmptyState({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-empty-state", className), ...rest });
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Icon as EmptyStateIcon, Title as EmptyStateTitle, Description as EmptyStateDescription, Actions as EmptyStateActions };
export const EmptyState = Object.assign(EmptyStateRoot, {
    Icon, Title, Description, Actions,
});
//# sourceMappingURL=EmptyState.js.map