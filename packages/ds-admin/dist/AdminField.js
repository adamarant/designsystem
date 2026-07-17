'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A labelled form field over .ds-field. The label row carries an optional
 * right-aligned actions slot — locale pills, AI buttons, anything consumer-
 * specific — so a consumer never forks the field to add its own control. The
 * control itself is passed as children; hint/error render below.
 */
export function AdminField({ label, children, htmlFor, actions, hint, error, required = false, className, }) {
    const classes = ['ds-field', required ? 'ds-field--required' : '', className]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, children: [_jsxs("div", { className: "ds-flex ds-justify-between ds-items-center", children: [_jsx("label", { className: "ds-field__label", htmlFor: htmlFor, children: label }), actions] }), children, error ? (_jsx("p", { className: "ds-field__error", children: error })) : hint ? (_jsx("p", { className: "ds-field__hint", children: hint })) : null] }));
}
//# sourceMappingURL=AdminField.js.map