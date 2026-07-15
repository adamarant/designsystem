import type { ReactElement } from 'react';
import type { Registry } from '../registry/createRegistry.js';
import type { BlockInstance } from '../types/page.js';
export interface RenderBlockProps {
    instance: BlockInstance;
    registry: Registry;
    locale: string;
    defaultLocale: string;
    editing?: boolean;
}
/**
 * Render one block instance: migrate old data if needed, resolve defaults +
 * locale, then hand clean single-locale data to the block's component.
 * Returns null for unknown types — callers handle that with a fallback.
 */
export declare function RenderBlock({ instance, registry, locale, defaultLocale, editing, }: RenderBlockProps): ReactElement | null;
//# sourceMappingURL=RenderBlock.d.ts.map