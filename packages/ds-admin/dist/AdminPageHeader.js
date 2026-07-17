'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeftIcon } from './icons.js';
/**
 * Top bar of an admin page: optional back arrow, title, right-aligned actions.
 * Replaces the flex-justify-between + heading every admin page rebuilds by hand.
 */
export function AdminPageHeader({ title, onBack, backLabel = 'Back', actions, titleClassName = 'ds-admin-title', className, }) {
    return (_jsxs("div", { className: className ? `ds-page-header ${className}` : 'ds-page-header', children: [_jsxs("div", { className: "ds-page-header__lead", children: [onBack && (_jsx("button", { type: "button", onClick: onBack, className: "ds-page-header__back", "aria-label": backLabel, children: _jsx(ArrowLeftIcon, {}) })), _jsx("h1", { className: `ds-page-header__title ${titleClassName}`, children: title })] }), actions && _jsx("div", { className: "ds-page-header__actions", children: actions })] }));
}
//# sourceMappingURL=AdminPageHeader.js.map