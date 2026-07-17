'use client';
import { jsx as _jsx } from "react/jsx-runtime";
function actionClass(action) {
    return `ds-btn ds-btn--icon ds-btn--ghost ds-btn--sm${action.danger ? ' ds-text-error' : ''}`;
}
/**
 * The trailing icon-button cluster of a table row (view / edit / delete).
 * Icons are passed by the consumer, so ds-admin stays icon-free; the component
 * gives every row the same button styling and spacing.
 */
export function AdminRowActions({ actions, className }) {
    return (_jsx("div", { className: className ? `ds-flex ds-gap-1 ${className}` : 'ds-flex ds-gap-1', children: actions.map((action, i) => action.href ? (_jsx("a", { href: action.href, className: actionClass(action), title: action.label, "aria-label": action.label, ...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}), children: action.icon }, i)) : (_jsx("button", { type: "button", onClick: action.onClick, disabled: action.disabled, className: actionClass(action), title: action.label, "aria-label": action.label, children: action.icon }, i))) }));
}
//# sourceMappingURL=AdminRowActions.js.map