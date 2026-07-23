import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
export const PageHeaderLead = forwardRef(function PageHeaderLead({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-page-header__lead", className), ...rest }));
});
export const PageHeaderTitle = forwardRef(function PageHeaderTitle({ className, ...rest }, ref) {
    return (_jsx("h1", { ref: ref, className: cn("ds-page-header__title", "ds-admin-title", className), ...rest }));
});
export const PageHeaderDescription = forwardRef(function PageHeaderDescription({ className, ...rest }, ref) {
    return (_jsx("p", { ref: ref, className: cn("ds-page-header__description", className), ...rest }));
});
export const PageHeaderActions = forwardRef(function PageHeaderActions({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-page-header__actions", className), ...rest }));
});
export const PageHeaderBack = forwardRef(function PageHeaderBack({ className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, type: "button", "aria-label": "Back", className: cn("ds-page-header__back", className), ...rest }));
});
/* ================================================================== */
/*  PageHeader (root + dot notation)                                   */
/* ================================================================== */
const PageHeaderRoot = forwardRef(function PageHeader({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-page-header", className), ...rest }));
});
export const PageHeader = Object.assign(PageHeaderRoot, {
    Lead: PageHeaderLead,
    Title: PageHeaderTitle,
    Description: PageHeaderDescription,
    Actions: PageHeaderActions,
    Back: PageHeaderBack,
});
//# sourceMappingURL=PageHeader.js.map