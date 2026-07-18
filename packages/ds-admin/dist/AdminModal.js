'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XIcon } from './icons.js';
const SIZE_CLASS = {
    md: 'ds-modal--md',
    lg: 'ds-modal--lg',
};
/**
 * Generic dialog over the DS .ds-modal — the shell every admin modal needs
 * (media picker, history, detail panel) and that projects kept rebuilding by
 * hand. AdminConfirmDialog stays the shortcut for a yes/no; reach for this one
 * whenever the body is real content.
 *
 * The .ds-modal element is itself the backdrop, so there is no separate
 * overlay node — hand-rolled copies that added one were styling nothing,
 * since the DS ships no such element.
 *
 * Renders nothing when closed.
 */
export function AdminModal({ open, title, children, onClose, footer, size = 'md', closeLabel = 'Close', closeOnBackdrop = true, className, }) {
    if (!open)
        return null;
    const classes = ['ds-modal', 'ds-modal--open', SIZE_CLASS[size], className]
        .filter(Boolean)
        .join(' ');
    return (_jsx("div", { className: classes, role: "dialog", "aria-modal": "true", onClick: closeOnBackdrop ? onClose : undefined, children: _jsxs("div", { className: "ds-modal__content", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "ds-modal__header", children: [_jsx("h3", { children: title }), _jsx("button", { type: "button", onClick: onClose, className: "ds-modal__close", "aria-label": closeLabel, children: _jsx(XIcon, { width: 18, height: 18 }) })] }), _jsx("div", { className: "ds-modal__body", children: children }), footer && _jsx("div", { className: "ds-modal__footer", children: footer })] }) }));
}
//# sourceMappingURL=AdminModal.js.map