'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Wraps a rendered block on the canvas with a selection outline + type tag. */
export function SelectableBlock({ selected, label, onSelect, children }) {
    return (_jsxs("div", { className: selected ? 'dsb-selectable dsb-selectable--selected' : 'dsb-selectable', onClick: (e) => {
            e.stopPropagation();
            onSelect();
        }, children: [_jsx("span", { className: "dsb-selectable__tag", children: label }), _jsx("div", { className: "dsb-selectable__inner", children: children })] }));
}
//# sourceMappingURL=SelectableBlock.js.map