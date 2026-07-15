'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { BlockBoundary } from '../render/BlockBoundary.js';
import { RenderBlock } from '../render/RenderBlock.js';
import { useEditor } from './EditorContext.js';
import { SelectableBlock } from './SelectableBlock.js';
/** Live preview of the page. Blocks render via the shared renderer with
 *  `editing`; clicking one selects it, and its control cluster reorders or
 *  deletes it. */
export function EditorCanvas() {
    const { state, registry, dispatch, labels } = useEditor();
    const { document, locale, selectedId } = state;
    const blocks = document.blocks;
    return (_jsx("div", { className: "dsb-canvas", onClick: () => dispatch({ type: 'select', id: null }), children: blocks.length === 0 ? (_jsx("div", { className: "dsb-canvas__empty", children: labels.empty })) : (blocks.map((instance, index) => (_jsx(SelectableBlock, { selected: instance.id === selectedId, label: registry.get(instance.type)?.label ?? instance.type, isFirst: index === 0, isLast: index === blocks.length - 1, onSelect: () => dispatch({ type: 'select', id: instance.id }), onMoveUp: () => dispatch({ type: 'moveBlock', id: instance.id, toIndex: index - 1 }), onMoveDown: () => dispatch({ type: 'moveBlock', id: instance.id, toIndex: index + 1 }), onRemove: () => dispatch({ type: 'removeBlock', id: instance.id }), children: _jsx(BlockBoundary, { fallback: _jsx("div", { className: "dsb-block-error", children: labels.blockFailed }), children: _jsx(RenderBlock, { instance: instance, registry: registry, locale: locale, defaultLocale: document.defaultLocale, editing: true }) }) }, instance.id)))) }));
}
//# sourceMappingURL=EditorCanvas.js.map