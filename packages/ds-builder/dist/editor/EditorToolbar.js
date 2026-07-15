'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Flex, IconBtn, Select } from '@adamarant/ds-react';
import { BlockPalette } from './BlockPalette.js';
import { createBlockInstance } from './blockInstance.js';
import { useEditor } from './EditorContext.js';
import { PlusIcon, RedoIcon, UndoIcon } from './icons.js';
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
/** Top bar: add section, undo/redo, locale switch, save status, publish. */
export function EditorToolbar({ onPublish, publishing }) {
    const { state, dispatch, labels } = useEditor();
    const { locales, blocks } = state.document;
    const [paletteOpen, setPaletteOpen] = useState(false);
    const canUndo = state.past.length > 0;
    const canRedo = state.future.length > 0;
    function handlePick(def) {
        // Insert after the selected block, or append when nothing is selected.
        const selectedIndex = blocks.findIndex((b) => b.id === state.selectedId);
        const index = selectedIndex === -1 ? blocks.length : selectedIndex + 1;
        dispatch({ type: 'addBlock', block: createBlockInstance(def), index });
        setPaletteOpen(false);
    }
    return (_jsxs(Flex, { className: "dsb-toolbar", align: "center", justify: "between", gap: "4", children: [_jsxs(Flex, { align: "center", gap: "2", children: [_jsxs("div", { className: "dsb-toolbar__add", children: [_jsxs(Button, { type: "button", variant: "secondary", size: "sm", "aria-haspopup": "menu", "aria-expanded": paletteOpen, onClick: () => setPaletteOpen((open) => !open), children: [_jsx(PlusIcon, {}), labels.addSection] }), paletteOpen ? (_jsx(BlockPalette, { onPick: handlePick, onClose: () => setPaletteOpen(false) })) : null] }), _jsxs(Flex, { align: "center", gap: "1", children: [_jsx(IconBtn, { type: "button", size: "sm", variant: "ghost", "aria-label": labels.undo, disabled: !canUndo, onClick: () => dispatch({ type: 'undo' }), children: _jsx(UndoIcon, {}) }), _jsx(IconBtn, { type: "button", size: "sm", variant: "ghost", "aria-label": labels.redo, disabled: !canRedo, onClick: () => dispatch({ type: 'redo' }), children: _jsx(RedoIcon, {}) })] }), locales.length > 1 ? (_jsxs("label", { className: "dsb-toolbar__locale", children: [_jsx("span", { className: "dsb-toolbar__locale-label", children: labels.language }), _jsx(Select, { value: state.locale, onChange: (e) => dispatch({ type: 'setLocale', locale: e.target.value }), children: locales.map((loc) => (_jsx("option", { value: loc, children: loc }, loc))) })] })) : null] }), _jsxs(Flex, { align: "center", gap: "3", children: [_jsx("span", { className: "dsb-toolbar__status", "data-status": state.status, children: statusText(state.status, labels) }), _jsx(Button, { type: "button", variant: "primary", loading: publishing, onClick: onPublish, children: publishing ? labels.publishing : labels.publish })] })] }));
}
//# sourceMappingURL=EditorToolbar.js.map