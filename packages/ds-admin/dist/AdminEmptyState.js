'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const VARIANT_CLASS = {
    plain: '',
    card: 'ds-empty-state--card',
    compact: 'ds-empty-state--compact',
};
/**
 * "Nothing here yet" state over the DS .ds-empty-state component. Every admin
 * surface needs one — a list with no rows, a filtered result set, an empty
 * panel — so it lives here instead of being rebuilt per project out of
 * utility classes.
 *
 * Pass it to AdminTable's `empty` prop, or render it standalone for non-table
 * surfaces (card grids, panels).
 */
export function AdminEmptyState({ title, description, icon, actions, variant = 'plain', align = 'center', className, }) {
    const classes = [
        'ds-empty-state',
        VARIANT_CLASS[variant],
        align === 'left' ? 'ds-empty-state--left' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, children: [icon && _jsx("div", { className: "ds-empty-state__icon", children: icon }), _jsx("h3", { className: "ds-empty-state__title", children: title }), description && _jsx("p", { className: "ds-empty-state__description", children: description }), actions && _jsx("div", { className: "ds-empty-state__actions", children: actions })] }));
}
//# sourceMappingURL=AdminEmptyState.js.map