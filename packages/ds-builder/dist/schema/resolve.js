function isPlainObject(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
/** The value a leaf field falls back to when stored data is missing. */
function scalarDefault(field) {
    if ('default' in field && field.default !== undefined)
        return field.default;
    switch (field.type) {
        case 'text':
        case 'richtext':
        case 'colorToken':
            return '';
        case 'number':
            return 0;
        case 'boolean':
            return false;
        case 'select':
            return field.options[0]?.value;
        case 'image':
        case 'link':
            return null;
        case 'list':
            return [];
        default:
            return undefined;
    }
}
/**
 * Resolve one field's stored value into render-ready, single-locale data.
 * Containers recurse: an `object` resolves each sub-field; a `list` resolves
 * each item against `of`. Localized leaves are collapsed to the active locale
 * (falling back to the default locale, then the field default). Containers are
 * never localized themselves — localization lives on their leaves — so a nested
 * localized leaf is collapsed exactly like a top-level one.
 */
function resolveField(field, raw, locale, defaultLocale) {
    if (field.type === 'object') {
        const src = isPlainObject(raw)
            ? raw
            : isPlainObject(field.default)
                ? field.default
                : {};
        const out = {};
        for (const key of Object.keys(field.fields)) {
            out[key] = resolveField(field.fields[key], src[key], locale, defaultLocale);
        }
        return out;
    }
    if (field.type === 'list') {
        const arr = Array.isArray(raw) ? raw : Array.isArray(field.default) ? field.default : [];
        return arr.map((item) => resolveField(field.of, item, locale, defaultLocale));
    }
    // Leaf.
    if (raw === null)
        return null;
    if (raw === undefined)
        return scalarDefault(field);
    if (field.localized && isPlainObject(raw)) {
        const picked = raw[locale] ?? raw[defaultLocale];
        return picked === undefined ? scalarDefault(field) : picked;
    }
    return raw;
}
/**
 * Resolve a block instance's stored data into render-ready, single-locale data:
 * fills defaults for missing fields and collapses localized maps (recursively,
 * through objects and lists). Only keys declared in `fields` survive — unknown
 * stored keys are dropped, so a block that removed a field never receives stale
 * data.
 */
export function resolveData(fields, data, locale, defaultLocale) {
    const out = {};
    for (const key of Object.keys(fields)) {
        out[key] = resolveField(fields[key], data[key], locale, defaultLocale);
    }
    return out;
}
//# sourceMappingURL=resolve.js.map