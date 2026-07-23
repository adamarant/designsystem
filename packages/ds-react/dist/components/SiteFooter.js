import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ---------- parts ---------- */
export const SiteFooterBrand = forwardRef(function SiteFooterBrand({ tagline, className, children, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: cn("ds-flex ds-flex-col ds-gap-3", className), ...rest, children: [children, tagline != null && (_jsx("p", { className: "ds-text-sm ds-text-secondary", children: tagline }))] }));
});
export const SiteFooterColumns = forwardRef(function SiteFooterColumns({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-flex ds-flex-wrap ds-gap-8", className), ...rest }));
});
export const SiteFooterColumn = forwardRef(function SiteFooterColumn({ title, className, children, ...rest }, ref) {
    return (_jsxs("nav", { ref: ref, className: cn("ds-flex ds-flex-col ds-gap-2", className), ...rest, children: [title != null && _jsx("span", { className: "ds-overline", children: title }), children] }));
});
export const SiteFooterSocial = forwardRef(function SiteFooterSocial({ title, className, children, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: className, ...rest, children: [title != null && _jsx("span", { className: "ds-overline", children: title }), _jsx("div", { className: cn("ds-flex ds-gap-3", title != null && "ds-mt-3"), children: children })] }));
});
export const SiteFooterRow = forwardRef(function SiteFooterRow({ title, className, children, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: className, ...rest, children: [title != null && _jsx("span", { className: "ds-overline", children: title }), _jsx("div", { className: cn("ds-flex ds-flex-wrap ds-gap-3", title != null && "ds-mt-3"), children: children })] }));
});
export const SiteFooterBottom = forwardRef(function SiteFooterBottom({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-flex ds-flex-wrap ds-items-center ds-justify-between ds-gap-3 ds-text-sm ds-text-tertiary", className), ...rest }));
});
export const SiteFooterWordmark = forwardRef(function SiteFooterWordmark({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-w-full", className), ...rest });
});
/* ---------- root ---------- */
const SiteFooterRoot = forwardRef(function SiteFooter({ brand, nav, legal, meta, className, children, ...rest }, ref) {
    return (_jsx("footer", { ref: ref, className: cn("ds-section", "ds-section--bordered", className), ...rest, children: _jsx("div", { className: "ds-container ds-flex ds-flex-col ds-gap-8", children: children ?? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ds-flex ds-flex-wrap ds-justify-between ds-gap-6", children: [_jsx("div", { className: "ds-heading-ui", children: brand }), nav] }), (legal || meta) && (_jsxs(_Fragment, { children: [_jsx("div", { className: "ds-divider" }), _jsxs(SiteFooterBottom, { children: [_jsx("div", { children: legal }), _jsx("div", { children: meta })] })] }))] })) }) }));
});
export const SiteFooter = Object.assign(SiteFooterRoot, {
    Brand: SiteFooterBrand,
    Columns: SiteFooterColumns,
    Column: SiteFooterColumn,
    Social: SiteFooterSocial,
    Row: SiteFooterRow,
    Bottom: SiteFooterBottom,
    Wordmark: SiteFooterWordmark,
});
//# sourceMappingURL=SiteFooter.js.map