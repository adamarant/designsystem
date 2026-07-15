import type { SupabaseClient } from '@supabase/supabase-js';
import type { PageDocument } from '../types/page.js';
import { type PageRow, type PageStoreConfig, type PageSummary } from './config.js';
/** List pages (summaries only, newest edits first). */
export declare function listPages(sb: SupabaseClient, config: PageStoreConfig): Promise<PageSummary[]>;
/** Fetch the working draft for a slug (admin/editor). */
export declare function getDraft(sb: SupabaseClient, config: PageStoreConfig, slug: string): Promise<PageDocument | null>;
/** Fetch the published content for a slug (public site). Null if unpublished. */
export declare function getPublished(sb: SupabaseClient, config: PageStoreConfig, slug: string): Promise<PageDocument | null>;
/** Create a new page with an empty draft. */
export declare function createPage(sb: SupabaseClient, config: PageStoreConfig, input: {
    slug: string;
    title?: string;
    defaultLocale?: string;
    locales?: string[];
}): Promise<PageRow>;
/**
 * Save the working draft. Does NOT publish — the live page is untouched.
 * Validate the document with `validateDocument(registry, doc)` before calling.
 */
export declare function saveDraft(sb: SupabaseClient, config: PageStoreConfig, slug: string, document: PageDocument): Promise<void>;
/**
 * Publish: snapshot the current draft into the versions table, then promote it
 * to `published_content` and bump the version counter. The snapshot is written
 * first so a failure can never leave a published version with no history row.
 */
export declare function publishPage(sb: SupabaseClient, config: PageStoreConfig, slug: string, note?: string): Promise<{
    version: number;
}>;
/** Delete a page (its version history cascades). */
export declare function deletePage(sb: SupabaseClient, config: PageStoreConfig, slug: string): Promise<void>;
//# sourceMappingURL=pages.d.ts.map