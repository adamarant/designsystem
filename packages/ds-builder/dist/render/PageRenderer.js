import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, Suspense } from 'react';
import { RenderBlock } from './RenderBlock.js';
import { BlockBoundary } from './BlockBoundary.js';
/**
 * Renders a page document to React. Server-safe and lightweight — this is the
 * only piece a public site ships; the editor lives behind a separate export.
 *
 * Resilience by construction: unknown block types degrade to `renderUnknown`
 * and throwing blocks are caught per-block by `BlockBoundary`, so no single
 * block can break the page.
 */
export function PageRenderer({ document, registry, locale, editing, renderUnknown, renderError, }) {
    const activeLocale = locale ?? document.defaultLocale;
    return (_jsx(_Fragment, { children: document.blocks.map((instance) => {
            if (!registry.has(instance.type)) {
                return renderUnknown ? (_jsx(Fragment, { children: renderUnknown(instance) }, instance.id)) : null;
            }
            const fallback = renderError ? renderError(instance) : null;
            // Each block sits in its own Suspense so a throw is contained to this
            // segment during streaming SSR (an unwrapped throw errors the whole
            // shell); the BlockBoundary then renders the fallback in its place.
            return (_jsx(Suspense, { fallback: fallback, children: _jsx(BlockBoundary, { fallback: fallback, children: _jsx(RenderBlock, { instance: instance, registry: registry, locale: activeLocale, defaultLocale: document.defaultLocale, editing: editing }) }) }, instance.id));
        }) }));
}
//# sourceMappingURL=PageRenderer.js.map