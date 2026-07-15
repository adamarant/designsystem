/**
 * Derive the next published state from the current row. Pure — the publish
 * orchestration logic lives here so it can be tested without a database.
 */
export function buildPublish(row) {
    return { version: row.current_version + 1, content: row.draft_content };
}
//# sourceMappingURL=config.js.map