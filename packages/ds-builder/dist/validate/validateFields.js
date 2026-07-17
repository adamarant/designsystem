function isPlainObject(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
/** Validate a single non-localized value against a scalar/list descriptor. */
function validateValue(field, value, path, issues) {
    switch (field.type) {
        case 'text':
        case 'richtext':
        case 'colorToken':
            if (typeof value !== 'string')
                issues.push({ path, message: `expected string` });
            break;
        case 'number':
            if (typeof value !== 'number' || Number.isNaN(value)) {
                issues.push({ path, message: 'expected number' });
            }
            break;
        case 'boolean':
            if (typeof value !== 'boolean')
                issues.push({ path, message: 'expected boolean' });
            break;
        case 'select': {
            const allowed = field.options.map((o) => o.value);
            if (typeof value !== 'string' || !allowed.includes(value)) {
                issues.push({ path, message: `expected one of ${allowed.join(', ')}` });
            }
            break;
        }
        case 'image':
            if (!isPlainObject(value) || typeof value.url !== 'string') {
                issues.push({ path, message: 'expected image { url }' });
            }
            break;
        case 'link':
            if (!isPlainObject(value) || typeof value.href !== 'string') {
                issues.push({ path, message: 'expected link { href }' });
            }
            break;
        case 'object':
            if (!isPlainObject(value)) {
                issues.push({ path, message: 'expected object' });
                break;
            }
            for (const key of Object.keys(field.fields)) {
                validateField(field.fields[key], value[key], `${path}.${key}`, issues);
            }
            break;
        case 'list':
            if (!Array.isArray(value)) {
                issues.push({ path, message: 'expected array' });
                break;
            }
            // Items go through validateField so an object `of` honours its sub-fields'
            // required + localized rules (a scalar `of` collapses to validateValue).
            value.forEach((item, i) => validateField(field.of, item, `${path}[${i}]`, issues));
            break;
    }
}
/** Validate a field's stored value, accounting for required + localized maps. */
function validateField(field, raw, path, issues) {
    if (raw === undefined || raw === null) {
        if (field.required)
            issues.push({ path, message: 'required' });
        return;
    }
    if (field.localized) {
        if (!isPlainObject(raw)) {
            issues.push({ path, message: 'expected a locale map' });
            return;
        }
        for (const [locale, value] of Object.entries(raw)) {
            validateValue(field, value, `${path}.${locale}`, issues);
        }
        return;
    }
    validateValue(field, raw, path, issues);
}
/**
 * Validate a block's stored data against its schema. Pure — usable on both the
 * server (before save) and the client (in the editor). Extra stored keys are
 * ignored (they are dropped at render), so only declared fields are checked.
 */
export function validateFields(fields, data, issues = []) {
    for (const key of Object.keys(fields)) {
        validateField(fields[key], data[key], key, issues);
    }
    return issues;
}
//# sourceMappingURL=validateFields.js.map