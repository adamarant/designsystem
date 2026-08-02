import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
const variantMap = { success: "ds-result--success", error: "ds-result--error", warning: "ds-result--warning", info: "ds-result--info" };
const Icon = forwardRef(function I({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-result__icon", className), ...r }); });
const Title = forwardRef(function T({ className, ...r }, ref) { return _jsx("h3", { ref: ref, className: cn("ds-result__title", className), ...r }); });
const Description = forwardRef(function D({ className, ...r }, ref) { return _jsx("p", { ref: ref, className: cn("ds-result__description", className), ...r }); });
const Actions = forwardRef(function A({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-result__actions", className), ...r }); });
const Root = forwardRef(function Result({ variant, icon, title, description, actions, children, className, role, ...rest }, ref) {
    /* A result is announced: the user has just acted, and the outcome has to
       reach a screen reader. An error interrupts, everything else is polite.
       Overridable, because a result that IS the page, under its own <h1>, is
       already announced by the navigation. (.ds-empty-state does the
       opposite: it must never be a live region.)
  
       `variant` has no default on purpose. It used to default to "success",
       which made the neutral result unreachable through this wrapper even
       though the CSS has always supported it — a 404 came out green. */
    const announced = role ?? (variant === "error" ? "alert" : "status");
    return (_jsxs("div", { ref: ref, role: announced, className: cn("ds-result", variant && variantMap[variant], className), ...rest, children: [icon ? _jsx(Icon, { children: icon }) : null, title ? _jsx(Title, { children: title }) : null, description ? _jsx(Description, { children: description }) : null, children, actions ? _jsx(Actions, { children: actions }) : null] }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Icon as ResultIcon, Title as ResultTitle, Description as ResultDescription, Actions as ResultActions };
export const Result = Object.assign(Root, { Icon, Title, Description, Actions });
//# sourceMappingURL=Result.js.map