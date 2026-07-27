'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useEditor } from './EditorContext.js';
import { GripIcon } from './icons.js';
/**
 * The page switcher, wide-viewport form: a rail of links down the left of the
 * editor body. Below the editor's breakpoint the rail is hidden by CSS and the
 * same list rides in the toolbar as a select, so the switcher is never the
 * thing that makes a narrow editor unusable.
 *
 * Links, not callbacks: each page is its own admin route, so a plain anchor
 * keeps routing (and prefetching, if the host wraps it) out of the builder.
 *
 * Reordering is native HTML5 drag, no dependency — the same reason block
 * reorder ships without dnd-kit. Native drag is mouse-only, so the grip is a
 * real button that moves its row with the arrow keys: the order is reachable
 * without a pointer, which drag alone never is.
 */
export function PageRail() {
    const { pages, currentSlug, labels, reorderPages } = useEditor();
    const [draggingSlug, setDraggingSlug] = useState(null);
    const [overSlug, setOverSlug] = useState(null);
    if (!pages?.length)
        return null;
    const canReorder = Boolean(reorderPages) && pages.length > 1;
    function move(from, to) {
        if (!pages || !reorderPages)
            return;
        if (to < 0 || to >= pages.length || from === to)
            return;
        const next = [...pages];
        const [moved] = next.splice(from, 1);
        next.splice(to, 0, moved);
        reorderPages(next);
    }
    function handleDrop(targetSlug) {
        if (!pages || !draggingSlug)
            return;
        move(pages.findIndex((p) => p.slug === draggingSlug), pages.findIndex((p) => p.slug === targetSlug));
        setDraggingSlug(null);
        setOverSlug(null);
    }
    return (_jsxs("nav", { className: "dsb-pages", "aria-label": labels.pages, children: [_jsx("p", { className: "dsb-pages__header", children: labels.pages }), _jsx("ul", { className: "dsb-pages__list", children: pages.map((page, index) => {
                    const current = page.slug === currentSlug;
                    return (_jsxs("li", { className: "dsb-pages__item", draggable: canReorder, "data-dragging": draggingSlug === page.slug || undefined, "data-over": overSlug === page.slug && draggingSlug !== page.slug ? '' : undefined, onDragStart: () => setDraggingSlug(page.slug), onDragEnd: () => {
                            setDraggingSlug(null);
                            setOverSlug(null);
                        }, onDragOver: (e) => {
                            if (!canReorder)
                                return;
                            e.preventDefault();
                            setOverSlug(page.slug);
                        }, onDrop: (e) => {
                            e.preventDefault();
                            handleDrop(page.slug);
                        }, children: [canReorder ? (_jsx("button", { type: "button", className: "dsb-pages__grip", "aria-label": `${labels.reorderPage}: ${page.label || page.slug}`, onKeyDown: (e) => {
                                    if (e.key === 'ArrowUp') {
                                        e.preventDefault();
                                        move(index, index - 1);
                                    }
                                    else if (e.key === 'ArrowDown') {
                                        e.preventDefault();
                                        move(index, index + 1);
                                    }
                                }, children: _jsx(GripIcon, {}) })) : null, _jsx("a", { href: page.href, className: "dsb-pages__link", "aria-current": current ? 'page' : undefined, draggable: false, children: page.label || page.slug })] }, page.slug));
                }) })] }));
}
//# sourceMappingURL=PageRail.js.map