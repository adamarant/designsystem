import type { PageDocument } from '../types/page.js';
/** Which tables this page store reads/writes. Prefix per project (e.g. `esys_`). */
export interface PageStoreConfig {
    /** e.g. "esys_pages" */
    pagesTable: string;
    /** e.g. "esys_page_versions" */
    versionsTable: string;
}
/** Row shape of the `<prefix>_pages` table. */
export interface PageRow {
    id: string;
    slug: string;
    title: string;
    status: 'draft' | 'published';
    default_locale: string;
    locales: string[];
    draft_content: PageDocument;
    published_content: PageDocument | null;
    current_version: number;
    created_at: string;
    updated_at: string;
}
/** Lightweight listing projection (no heavy content payloads). */
export type PageSummary = Pick<PageRow, 'id' | 'slug' | 'title' | 'status' | 'current_version' | 'updated_at'>;
/**
 * Derive the next published state from the current row. Pure — the publish
 * orchestration logic lives here so it can be tested without a database.
 */
export declare function buildPublish(row: Pick<PageRow, 'draft_content' | 'current_version'>): {
    version: number;
    content: PageDocument;
};
//# sourceMappingURL=config.d.ts.map