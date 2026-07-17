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
/** A picked image. `mediaId` is set when chosen from the @adamarant/cms library. */
export interface ImageValue {
    mediaId?: string | null;
    url: string;
    alt?: string;
    width?: number | null;
    height?: number | null;
}
/** A link target. */
export interface LinkValue {
    href: string;
    label?: string;
    external?: boolean;
}
interface FieldCommon {
    label?: string;
    help?: string;
    required?: boolean;
    /**
     * When true the field stores a per-locale map `{ [locale]: value }`.
     * The renderer collapses it to the active locale before the block sees it,
     * so block components only ever receive single-locale, plain values.
     */
    localized?: boolean;
}
export interface TextField extends FieldCommon {
    type: 'text';
    multiline?: boolean;
    default?: string;
}
export interface RichTextField extends FieldCommon {
    type: 'richtext';
    default?: string;
}
export interface NumberField extends FieldCommon {
    type: 'number';
    min?: number;
    max?: number;
    step?: number;
    default?: number;
}
export interface BooleanField extends FieldCommon {
    type: 'boolean';
    default?: boolean;
}
export interface SelectField<V extends string = string> extends FieldCommon {
    type: 'select';
    options: ReadonlyArray<{
        label: string;
        value: V;
    }>;
    default?: V;
}
export interface ImageField extends FieldCommon {
    type: 'image';
    default?: ImageValue | null;
}
export interface LinkField extends FieldCommon {
    type: 'link';
    default?: LinkValue | null;
}
export interface ColorTokenField extends FieldCommon {
    type: 'colorToken';
    /** allowed DS color tokens (e.g. ['brand','surface','text']); the UI shows swatches. */
    tokens?: readonly string[];
    default?: string;
}
/**
 * A group of named sub-fields resolved as one object value. On its own it is a
 * grouped mini-form; wrapped in a `list` (`{ type: 'list', of: objectField }`)
 * it becomes a repeater of structured items — the "cards" pattern (a schedule
 * of shows, a timeline of awards) that a scalar list cannot express.
 */
export interface ObjectField<F extends Fields = Fields> extends FieldCommon {
    type: 'object';
    /** the named sub-fields each object value contains */
    fields: F;
    default?: Partial<InferFields<F>>;
}
export interface ListField<F extends Field = Field> extends FieldCommon {
    type: 'list';
    /** the descriptor each item in the repeater conforms to (may be an object) */
    of: F;
    default?: Array<InferField<F>>;
}
export type Field = TextField | RichTextField | NumberField | BooleanField | SelectField | ImageField | LinkField | ColorTokenField | ObjectField | ListField;
export type Fields = Record<string, Field>;
/** Map a single descriptor to its runtime value type. */
export type InferField<F extends Field> = F extends TextField ? string : F extends RichTextField ? string : F extends NumberField ? number : F extends BooleanField ? boolean : F extends SelectField<infer V> ? V : F extends ImageField ? ImageValue | null : F extends LinkField ? LinkValue | null : F extends ColorTokenField ? string : F extends ObjectField<infer OF> ? InferFields<OF> : F extends ListField<infer I> ? Array<InferField<I>> : never;
/** Map a whole `fields` object to the block's resolved data shape. */
export type InferFields<F extends Fields> = {
    [K in keyof F]: InferField<F[K]>;
};
export {};
//# sourceMappingURL=fields.d.ts.map