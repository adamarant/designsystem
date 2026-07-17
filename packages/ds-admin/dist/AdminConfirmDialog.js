'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Confirmation modal over the DS .ds-modal — the delete-confirm dialog every
 * table rebuilds by hand. Renders nothing when closed.
 */
export function AdminConfirmDialog({ open, title, children, onConfirm, onCancel, confirmLabel = 'Confirm', cancelLabel = 'Cancel', danger = true, busy = false, }) {
    if (!open)
        return null;
    return (_jsx("div", { className: "ds-modal ds-modal--open", role: "dialog", "aria-modal": "true", children: _jsxs("div", { className: "ds-modal__content", children: [_jsx("div", { className: "ds-modal__header", children: _jsx("h3", { children: title }) }), _jsx("div", { className: "ds-modal__body", children: children }), _jsxs("div", { className: "ds-modal__footer", children: [_jsx("button", { type: "button", onClick: onCancel, className: "ds-btn ds-btn--secondary", disabled: busy, children: cancelLabel }), _jsx("button", { type: "button", onClick: onConfirm, disabled: busy, className: danger ? 'ds-btn ds-btn--danger' : 'ds-btn', children: confirmLabel })] })] }) }));
}
//# sourceMappingURL=AdminConfirmDialog.js.map