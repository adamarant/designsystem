import { type ReactElement, type ReactNode } from 'react';
import type { Registry } from '../registry/createRegistry.js';
import type { PageDocument } from '../types/page.js';
export interface PageRendererProps {
    document: PageDocument;
    registry: Registry;
    /** active locale; defaults to `document.defaultLocale` */
    locale?: string;
    /** true inside the builder canvas */
    editing?: boolean;
    /** rendered when a block type is missing from the registry (default: skip) */
    renderUnknown?: (instance: {
        type: string;
        id: string;
    }) => ReactNode;
    /** rendered when a block throws (default: skip) */
    renderError?: (instance: {
        type: string;
        id: string;
    }) => ReactNode;
}
/**
 * Renders a page document to React. Server-safe and lightweight — this is the
 * only piece a public site ships; the editor lives behind a separate export.
 *
 * Resilience by construction: unknown block types degrade to `renderUnknown`
 * and throwing blocks are caught per-block by `BlockBoundary`, so no single
 * block can break the page.
 */
export declare function PageRenderer({ document, registry, locale, editing, renderUnknown, renderError, }: PageRendererProps): ReactElement;
//# sourceMappingURL=PageRenderer.d.ts.map