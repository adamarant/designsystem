import { validateFields } from './validateFields.js';
/**
 * Validate a whole page document against a registry. This is the "prevention"
 * half of the crash-safety story: reject malformed content at save time so
 * blocks only ever receive well-formed data and rarely need to fail at render.
 *
 * Unknown block types and per-field type mismatches are reported with the
 * offending block id, so the editor can point the user at exactly what's wrong.
 */
export function validateDocument(registry, doc) {
    const issues = [];
    doc.blocks.forEach((instance) => {
        const def = registry.get(instance.type);
        if (!def) {
            issues.push({
                blockId: instance.id,
                blockType: instance.type,
                path: '',
                message: 'unknown block type',
            });
            return;
        }
        let data = instance.data;
        if (def.migrate && instance.version < def.version) {
            data = def.migrate(data, instance.version);
        }
        for (const fieldIssue of validateFields(def.fields, data)) {
            issues.push({ blockId: instance.id, blockType: instance.type, ...fieldIssue });
        }
    });
    return { valid: issues.length === 0, issues };
}
//# sourceMappingURL=validateDocument.js.map