'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
function actionClass(action) {
    return `ds-btn ds-btn--icon ds-btn--ghost ds-btn--sm${action.danger ? ' ds-text-error' : ''}`;
}
/**
 * The trailing icon-button cluster of a table row (view / edit / delete).
 * Icons are passed by the consumer, so ds-admin stays icon-free; the component
 * gives every row the same button styling and spacing.
 *
 * Internal hrefs route through next/link, same as AdminSidebar. Until 0.11.1
 * this rendered a bare <a>, which turned every "edit this row" into a full
 * document navigation — the table, the shell and the whole client tree were
 * torn down and rebuilt on a click that should have been a soft nav.
 * `external` still gets a plain anchor: it is leaving the app anyway.
 */
export function AdminRowActions({ actions, className }) {
    return (_jsx("div", { className: className ? `ds-flex ds-gap-1 ${className}` : 'ds-flex ds-gap-1', children: actions.map((action, i) => action.href ? (action.external ? (_jsx("a", { href: action.href, className: actionClass(action), title: action.label, "aria-label": action.label, target: "_blank", rel: "noopener noreferrer", children: action.icon }, i)) : (_jsx(Link, { href: action.href, className: actionClass(action), title: action.label, "aria-label": action.label, children: action.icon }, i))) : (_jsx("button", { type: "button", onClick: action.onClick, disabled: action.disabled, className: actionClass(action), title: action.label, "aria-label": action.label, children: action.icon }, i))) }));
}
//# sourceMappingURL=AdminRowActions.js.map