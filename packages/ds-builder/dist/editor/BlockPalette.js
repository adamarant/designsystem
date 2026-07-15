'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useEditor } from './EditorContext.js';
const UNGROUPED = '__ungrouped__';
/**
 * Popover listing every registered block, grouped by `category`. Picking one
 * adds it to the page. The consumer owns the block list, so this is whatever
 * they registered — nothing hard-coded here.
 */
export function BlockPalette({ onPick, onClose }) {
    const { registry, labels } = useEditor();
    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape')
                onClose();
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);
    const blocks = registry.list();
    const groups = new Map();
    for (const def of blocks) {
        const key = def.category ?? UNGROUPED;
        const list = groups.get(key);
        if (list)
            list.push(def);
        else
            groups.set(key, [def]);
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "dsb-palette__backdrop", onClick: onClose }), _jsxs("div", { className: "dsb-palette", role: "menu", "aria-label": labels.blockPalette, children: [_jsx("div", { className: "dsb-palette__title", children: labels.blockPalette }), [...groups.entries()].map(([category, defs]) => (_jsxs("div", { className: "dsb-palette__group", children: [category !== UNGROUPED ? (_jsx("div", { className: "dsb-palette__category", children: category })) : null, defs.map((def) => (_jsx("button", { type: "button", role: "menuitem", className: "dsb-palette__item", onClick: () => onPick(def), children: def.label }, def.type)))] }, category)))] })] }));
}
//# sourceMappingURL=BlockPalette.js.map