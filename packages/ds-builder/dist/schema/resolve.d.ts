import type { Fields } from './fields.js';
/**
 * Resolve a block instance's stored data into render-ready, single-locale data:
 * fills defaults for missing fields and collapses localized maps. Only keys
 * declared in `fields` survive — unknown stored keys are dropped, so a block
 * that removed a field never receives stale data.
 */
export declare function resolveData(fields: Fields, data: Record<string, unknown>, locale: string, defaultLocale: string): Record<string, unknown>;
//# sourceMappingURL=resolve.d.ts.map