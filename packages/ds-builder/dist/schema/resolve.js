/** The value a field falls back to when stored data is missing. */
function fieldDefault(field) {
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
 * Collapse a possibly-localized stored value to the active locale.
 * A localized field stores `{ [locale]: value }`; we pick the active locale,
 * fall back to the document's default locale, then to the field default.
 * Non-localized values pass through untouched.
 */
function resolveValue(field, raw, locale, defaultLocale) {
    if (raw === null)
        return null;
    if (raw === undefined)
        return fieldDefault(field);
    if (field.localized && typeof raw === 'object' && !Array.isArray(raw)) {
        const map = raw;
        const picked = map[locale] ?? map[defaultLocale];
        return picked === undefined ? fieldDefault(field) : picked;
    }
    return raw;
}
/**
 * Resolve a block instance's stored data into render-ready, single-locale data:
 * fills defaults for missing fields and collapses localized maps. Only keys
 * declared in `fields` survive — unknown stored keys are dropped, so a block
 * that removed a field never receives stale data.
 */
export function resolveData(fields, data, locale, defaultLocale) {
    const out = {};
    for (const key of Object.keys(fields)) {
        out[key] = resolveValue(fields[key], data[key], locale, defaultLocale);
    }
    return out;
}
//# sourceMappingURL=resolve.js.map