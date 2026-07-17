'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Two-column admin edit shell over .ds-admin-form: a growing main column and an
 * optional fixed-width sidebar. Replaces the hand-rolled *-form__layout grid.
 */
export function AdminFormLayout({ children, sidebar, className }) {
    return (_jsxs("div", { className: className ? `ds-admin-form ${className}` : 'ds-admin-form', children: [_jsx("div", { className: "ds-admin-form__main", children: children }), sidebar && _jsx("aside", { className: "ds-admin-form__sidebar", children: sidebar })] }));
}
//# sourceMappingURL=AdminFormLayout.js.map