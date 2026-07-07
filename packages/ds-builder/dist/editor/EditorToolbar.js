'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Select } from '@adamarant/ds-react';
import { useEditor } from './EditorContext.js';
function statusText(status, labels) {
    switch (status) {
        case 'saving':
            return labels.saving;
        case 'saved':
            return labels.saved;
        case 'error':
            return labels.saveError;
        default:
            return '';
    }
}
/** Top bar: locale switch, save status, publish. */
export function EditorToolbar({ onPublish, publishing }) {
    const { state, dispatch, labels } = useEditor();
    const { locales } = state.document;
    return (_jsxs(Flex, { className: "dsb-toolbar", align: "center", justify: "between", gap: "4", children: [_jsx(Flex, { align: "center", gap: "2", children: locales.length > 1 ? (_jsxs("label", { className: "dsb-toolbar__locale", children: [_jsx("span", { className: "dsb-toolbar__locale-label", children: labels.language }), _jsx(Select, { value: state.locale, onChange: (e) => dispatch({ type: 'setLocale', locale: e.target.value }), children: locales.map((loc) => (_jsx("option", { value: loc, children: loc }, loc))) })] })) : null }), _jsxs(Flex, { align: "center", gap: "3", children: [_jsx("span", { className: "dsb-toolbar__status", "data-status": state.status, children: statusText(state.status, labels) }), _jsx(Button, { type: "button", variant: "primary", loading: publishing, onClick: onPublish, children: publishing ? labels.publishing : labels.publish })] })] }));
}
//# sourceMappingURL=EditorToolbar.js.map