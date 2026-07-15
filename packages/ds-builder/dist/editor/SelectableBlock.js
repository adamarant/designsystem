'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconBtn } from '@adamarant/ds-react';
import { useEditor } from './EditorContext.js';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from './icons.js';
/**
 * Wraps a rendered block on the canvas with a selection outline, a type tag, and
 * a control cluster (reorder + delete). Controls stop propagation so acting on
 * them never leaks into canvas/block selection.
 */
export function SelectableBlock({ selected, label, isFirst, isLast, onSelect, onMoveUp, onMoveDown, onRemove, children, }) {
    const { labels } = useEditor();
    function act(fn) {
        return (e) => {
            e.stopPropagation();
            fn();
        };
    }
    return (_jsxs("div", { className: selected ? 'dsb-selectable dsb-selectable--selected' : 'dsb-selectable', onClick: (e) => {
            e.stopPropagation();
            onSelect();
        }, children: [_jsx("span", { className: "dsb-selectable__tag", children: label }), _jsxs("div", { className: "dsb-selectable__controls", children: [_jsx(IconBtn, { type: "button", size: "xs", variant: "ghost", "aria-label": labels.moveUp, disabled: isFirst, onClick: act(onMoveUp), children: _jsx(ChevronUpIcon, {}) }), _jsx(IconBtn, { type: "button", size: "xs", variant: "ghost", "aria-label": labels.moveDown, disabled: isLast, onClick: act(onMoveDown), children: _jsx(ChevronDownIcon, {}) }), _jsx(IconBtn, { type: "button", size: "xs", variant: "ghost", "aria-label": labels.deleteBlock, onClick: act(onRemove), children: _jsx(CloseIcon, {}) })] }), _jsx("div", { className: "dsb-selectable__inner", children: children })] }));
}
//# sourceMappingURL=SelectableBlock.js.map