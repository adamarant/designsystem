import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../utils/cn";
import { SiteFooterNewsletter, } from "./SiteFooterNewsletter";
/* ---------- compound parts ---------- */
const SiteFooterBody = forwardRef(function SiteFooterBody({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-footer__body", className), ...rest });
});
const SiteFooterBrand = forwardRef(function SiteFooterBrand({ tagline, className, children, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: cn("ds-footer__brand", className), ...rest, children: [children, tagline != null && _jsx("p", { className: "ds-footer__tagline", children: tagline })] }));
});
const SiteFooterColumns = forwardRef(function SiteFooterColumns({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-footer__columns", className), ...rest }));
});
const SiteFooterColumn = forwardRef(function SiteFooterColumn({ title, className, children, ...rest }, ref) {
    return (_jsxs("nav", { ref: ref, className: cn("ds-footer__column", className), ...rest, children: [title != null && (_jsx("span", { className: "ds-footer__column-title", children: title })), children] }));
});
const SiteFooterSocial = forwardRef(function SiteFooterSocial({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-footer__social", className), ...rest }));
});
const SiteFooterCredits = forwardRef(function SiteFooterCredits({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-footer__credits", className), ...rest }));
});
/* ---------- root ---------- */
const SiteFooterRoot = forwardRef(function SiteFooter({ brand, tagline, social, columns, newsletter, copyright, legal, LinkComponent = "a", className, ...rest }, ref) {
    const renderLink = (link, cls) => {
        const Cmp = link.external ? "a" : LinkComponent;
        return (_jsx(Cmp, { href: link.href, className: cls, children: link.label }, link.href));
    };
    return (_jsx("footer", { ref: ref, className: cn("ds-footer", className), ...rest, children: _jsx("div", { className: "ds-container ds-footer__inner", children: _jsxs(_Fragment, { children: [newsletter && _jsx(SiteFooterNewsletter, { ...newsletter }), (brand || columns?.length) && (_jsxs("div", { className: "ds-footer__body", children: [(brand || tagline || social) && (_jsxs(SiteFooterBrand, { tagline: tagline, children: [brand, social && (_jsx("div", { className: "ds-footer__social", children: social }))] })), columns?.length ? (_jsx("div", { className: "ds-footer__columns", children: columns.map((col, i) => (_jsx(SiteFooterColumn, { title: col.title, children: col.links.map((l) => renderLink(l, "ds-footer__link")) }, i))) })) : null] })), (copyright || legal?.length) && (_jsxs("div", { className: "ds-footer__credits", children: [_jsx("span", { children: copyright }), legal?.length ? (_jsx("div", { className: "ds-footer__credits-links", children: legal.map((l) => renderLink(l, "")) })) : null] }))] }) }) }));
});
export const SiteFooter = SiteFooterRoot;
//# sourceMappingURL=SiteFooter.js.map