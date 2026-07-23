import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const SiteFooter = forwardRef(function SiteFooter({ brand, nav, legal, meta, children, className, ...rest }, ref) {
    return (_jsx("footer", { ref: ref, className: cn("ds-section", "ds-section--bordered", className), ...rest, children: _jsxs("div", { className: "ds-container ds-flex ds-flex-col ds-gap-8", children: [_jsxs("div", { className: "ds-flex ds-flex-wrap ds-justify-between ds-gap-6", children: [_jsx("div", { className: "ds-heading-ui", children: brand }), nav] }), children, (legal || meta) && (_jsxs(_Fragment, { children: [_jsx("div", { className: "ds-divider" }), _jsxs("div", { className: "ds-flex ds-flex-wrap ds-justify-between ds-gap-3", children: [_jsx("div", { className: "ds-text-tertiary", children: legal }), _jsx("div", { className: "ds-text-tertiary", children: meta })] })] }))] }) }));
});
//# sourceMappingURL=SiteFooter.js.map