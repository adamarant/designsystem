/** A single placed block in a page. */
export interface BlockInstance {
  /** stable uuid — survives reorder, used for selection & dnd keys */
  id: string
  /** block type, keyed into the registry */
  type: string
  /** the block version this data was authored against (for migration) */
  version: number
  /**
   * Raw stored data. Localized fields hold `{ [locale]: value }` maps; the
   * renderer collapses them per active locale.
   */
  data: Record<string, unknown>
}

/**
 * The full editable content of one page. Stored as JSON in Supabase
 * (`<prefix>_pages`). Locale-agnostic by design: `locales` is whatever the
 * consumer configured — adding a language (e.g. "ja") is data, not a package change.
 */
export interface PageDocument {
  /** storage schema version, for document-level migrations */
  schemaVersion: 1
  /** source locale; the fallback when a localized field lacks the active locale */
  defaultLocale: string
  /** every locale this document holds content for */
  locales: string[]
  /** ordered blocks */
  blocks: BlockInstance[]
}
