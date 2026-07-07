'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@adamarant/ds-react';
import { useEditor } from './EditorContext.js';
import { FieldControl } from './controls/FieldControl.js';
/** Right-hand panel: auto-generates a form from the selected block's schema. */
export function PropertyPanel() {
    const { state, registry, labels } = useEditor();
    const block = state.document.blocks.find((b) => b.id === state.selectedId);
    if (!block) {
        return _jsx("div", { className: "dsb-panel dsb-panel--empty", children: labels.noSelection });
    }
    const def = registry.get(block.type);
    if (!def) {
        return (_jsxs("div", { className: "dsb-panel dsb-panel--empty", children: [labels.unknownBlock, ": ", block.type] }));
    }
    return (_jsxs("div", { className: "dsb-panel", children: [_jsx("div", { className: "dsb-panel__header", children: def.label }), _jsx(Stack, { gap: "md", className: "dsb-panel__fields", children: Object.entries(def.fields).map(([key, field]) => (_jsx(FieldControl, { blockId: block.id, fieldKey: key, field: field }, key))) })] }));
}
//# sourceMappingURL=PropertyPanel.js.map