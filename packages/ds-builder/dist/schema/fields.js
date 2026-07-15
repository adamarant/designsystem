/**
 * Field descriptors — the typed schema primitive of ds-builder.
 *
 * A block declares a `fields` object. Each entry is a descriptor that drives
 * three things at once from a single source of truth:
 *   1. the block's data TYPE (via `InferFields`, so authors get end-to-end safety);
 *   2. the auto-generated property panel in the editor (via the `type` + metadata);
 *   3. runtime resolution (defaults + locale collapse) in the renderer.
 *
 * We use explicit descriptors rather than raw Zod because every editable field
 * needs an editor widget anyway — the descriptor carries widget intent, label,
 * help, localization and default in one place. Validation can be layered on top.
 */
export {};
//# sourceMappingURL=fields.js.map