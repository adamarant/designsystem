import { buildPublish, } from './config.js';
/**
 * Server-only page store CRUD. Pass a service-role Supabase client — these run
 * in Server Components / API routes, never in the browser (the tables are RLS
 * locked with no public policies). Functions return data and throw on error,
 * matching the @adamarant/cms convention; wrap them in your route's
 * `{ success, data }` envelope at the HTTP layer.
 */
const emptyDocument = (defaultLocale, locales) => ({
    schemaVersion: 1,
    defaultLocale,
    locales,
    blocks: [],
});
/** List pages (summaries only, newest edits first). */
export async function listPages(sb, config) {
    const { data, error } = await sb
        .from(config.pagesTable)
        .select('id, slug, title, status, current_version, updated_at')
        .order('updated_at', { ascending: false });
    if (error)
        throw new Error(`[ds-builder] listPages: ${error.message}`);
    return (data ?? []);
}
/** Fetch the working draft for a slug (admin/editor). */
export async function getDraft(sb, config, slug) {
    const { data, error } = await sb
        .from(config.pagesTable)
        .select('draft_content')
        .eq('slug', slug)
        .maybeSingle();
    if (error)
        throw new Error(`[ds-builder] getDraft(${slug}): ${error.message}`);
    return data ? data.draft_content : null;
}
/** Fetch the published content for a slug (public site). Null if unpublished. */
export async function getPublished(sb, config, slug) {
    const { data, error } = await sb
        .from(config.pagesTable)
        .select('published_content')
        .eq('slug', slug)
        .maybeSingle();
    if (error)
        throw new Error(`[ds-builder] getPublished(${slug}): ${error.message}`);
    return data ? (data.published_content ?? null) : null;
}
/** Create a new page with an empty draft. */
export async function createPage(sb, config, input) {
    const defaultLocale = input.defaultLocale ?? 'en';
    const locales = input.locales ?? [defaultLocale];
    const { data, error } = await sb
        .from(config.pagesTable)
        .insert({
        slug: input.slug,
        title: input.title ?? '',
        default_locale: defaultLocale,
        locales,
        draft_content: emptyDocument(defaultLocale, locales),
    })
        .select('*')
        .single();
    if (error)
        throw new Error(`[ds-builder] createPage(${input.slug}): ${error.message}`);
    return data;
}
/**
 * Save the working draft. Does NOT publish — the live page is untouched.
 * Validate the document with `validateDocument(registry, doc)` before calling.
 */
export async function saveDraft(sb, config, slug, document) {
    const { error } = await sb
        .from(config.pagesTable)
        .update({ draft_content: document, updated_at: new Date().toISOString() })
        .eq('slug', slug);
    if (error)
        throw new Error(`[ds-builder] saveDraft(${slug}): ${error.message}`);
}
/**
 * Publish: snapshot the current draft into the versions table, then promote it
 * to `published_content` and bump the version counter. The snapshot is written
 * first so a failure can never leave a published version with no history row.
 */
export async function publishPage(sb, config, slug, note) {
    const { data: row, error: readError } = await sb
        .from(config.pagesTable)
        .select('id, draft_content, current_version')
        .eq('slug', slug)
        .single();
    if (readError)
        throw new Error(`[ds-builder] publishPage(${slug}): ${readError.message}`);
    const { version, content } = buildPublish(row);
    const { error: versionError } = await sb.from(config.versionsTable).insert({
        page_id: row.id,
        version,
        content,
        note: note ?? null,
    });
    if (versionError)
        throw new Error(`[ds-builder] publishPage(${slug}) snapshot: ${versionError.message}`);
    const { error: promoteError } = await sb
        .from(config.pagesTable)
        .update({
        published_content: content,
        status: 'published',
        current_version: version,
        updated_at: new Date().toISOString(),
    })
        .eq('slug', slug);
    if (promoteError)
        throw new Error(`[ds-builder] publishPage(${slug}) promote: ${promoteError.message}`);
    return { version };
}
/** Delete a page (its version history cascades). */
export async function deletePage(sb, config, slug) {
    const { error } = await sb.from(config.pagesTable).delete().eq('slug', slug);
    if (error)
        throw new Error(`[ds-builder] deletePage(${slug}): ${error.message}`);
}
//# sourceMappingURL=pages.js.map