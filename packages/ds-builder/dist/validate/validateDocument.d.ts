import type { Registry } from '../registry/createRegistry.js';
import type { PageDocument } from '../types/page.js';
import { type ValidationIssue } from './validateFields.js';
export interface BlockIssue extends ValidationIssue {
    blockId: string;
    blockType: string;
}
export interface DocumentValidation {
    valid: boolean;
    issues: BlockIssue[];
}
/**
 * Validate a whole page document against a registry. This is the "prevention"
 * half of the crash-safety story: reject malformed content at save time so
 * blocks only ever receive well-formed data and rarely need to fail at render.
 *
 * Unknown block types and per-field type mismatches are reported with the
 * offending block id, so the editor can point the user at exactly what's wrong.
 */
export declare function validateDocument(registry: Registry, doc: PageDocument): DocumentValidation;
//# sourceMappingURL=validateDocument.d.ts.map