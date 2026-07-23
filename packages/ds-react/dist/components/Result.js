import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const variantMap = { success: "ds-result--success", error: "ds-result--error", warning: "ds-result--warning", info: "ds-result--info" };
const Icon = forwardRef(function I({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-result__icon", className), ...r }); });
const Title = forwardRef(function T({ className, ...r }, ref) { return _jsx("h3", { ref: ref, className: cn("ds-result__title", className), ...r }); });
const Description = forwardRef(function D({ className, ...r }, ref) { return _jsx("p", { ref: ref, className: cn("ds-result__description", className), ...r }); });
const Actions = forwardRef(function A({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-result__actions", className), ...r }); });
const Root = forwardRef(function Result({ variant = "success", className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-result", variantMap[variant], className), ...rest });
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Icon as ResultIcon, Title as ResultTitle, Description as ResultDescription, Actions as ResultActions };
export const Result = Object.assign(Root, { Icon, Title, Description, Actions });
//# sourceMappingURL=Result.js.map