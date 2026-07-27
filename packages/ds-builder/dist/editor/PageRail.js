'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditor } from './EditorContext.js';
/**
 * The page switcher, wide-viewport form: a rail of links down the left of the
 * editor body. Below the editor's breakpoint the rail is hidden by CSS and the
 * same list rides in the toolbar as a select, so the switcher is never the
 * thing that makes a narrow editor unusable.
 *
 * Links, not callbacks: each page is its own admin route, so a plain anchor
 * keeps routing (and prefetching, if the host wraps it) out of the builder.
 */
export function PageRail() {
    const { pages, currentSlug, labels } = useEditor();
    if (!pages?.length)
        return null;
    return (_jsxs("nav", { className: "dsb-pages", "aria-label": labels.pages, children: [_jsx("p", { className: "dsb-pages__header", children: labels.pages }), _jsx("ul", { className: "dsb-pages__list", children: pages.map((page) => {
                    const current = page.slug === currentSlug;
                    return (_jsx("li", { children: _jsx("a", { href: page.href, className: "dsb-pages__link", "aria-current": current ? 'page' : undefined, children: page.label || page.slug }) }, page.slug));
                }) })] }));
}
//# sourceMappingURL=PageRail.js.map