'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A titled admin card over .ds-card. The header holds the title and an optional
 * right-aligned actions slot (e.g. a locale switcher); the body holds anything.
 * Omit the title for a plain body-only card.
 */
export function AdminCard({ title, description, actions, children, className, }) {
    return (_jsxs("div", { className: className ? `ds-card ${className}` : 'ds-card', children: [title && (_jsxs("div", { className: "ds-card__header ds-flex ds-justify-between ds-items-center", children: [_jsxs("div", { className: "ds-min-w-0", children: [_jsx("h2", { className: "ds-card__title", children: title }), description && _jsx("p", { className: "ds-card__description", children: description })] }), actions] })), _jsx("div", { className: "ds-card__body", children: children })] }));
}
//# sourceMappingURL=AdminCard.js.map