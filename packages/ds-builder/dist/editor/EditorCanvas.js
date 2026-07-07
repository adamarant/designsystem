'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { BlockBoundary } from '../render/BlockBoundary.js';
import { RenderBlock } from '../render/RenderBlock.js';
import { useEditor } from './EditorContext.js';
import { SelectableBlock } from './SelectableBlock.js';
/** Live preview of the page. Blocks render via the shared renderer with
 *  `editing`; clicking one selects it for editing in the property panel. */
export function EditorCanvas() {
    const { state, registry, dispatch, labels } = useEditor();
    const { document, locale, selectedId } = state;
    return (_jsx("div", { className: "dsb-canvas", onClick: () => dispatch({ type: 'select', id: null }), children: document.blocks.length === 0 ? (_jsx("div", { className: "dsb-canvas__empty", children: labels.empty })) : (document.blocks.map((instance) => (_jsx(SelectableBlock, { selected: instance.id === selectedId, label: registry.get(instance.type)?.label ?? instance.type, onSelect: () => dispatch({ type: 'select', id: instance.id }), children: _jsx(BlockBoundary, { fallback: _jsx("div", { className: "dsb-block-error", children: labels.blockFailed }), children: _jsx(RenderBlock, { instance: instance, registry: registry, locale: locale, defaultLocale: document.defaultLocale, editing: true }) }) }, instance.id)))) }));
}
//# sourceMappingURL=EditorCanvas.js.map