import type { Fields } from '../schema/fields.js';
export interface ValidationIssue {
    /** dot/bracket path to the offending value, e.g. "cta.href" or "items[2].title" */
    path: string;
    message: string;
}
/**
 * Validate a block's stored data against its schema. Pure — usable on both the
 * server (before save) and the client (in the editor). Extra stored keys are
 * ignored (they are dropped at render), so only declared fields are checked.
 */
export declare function validateFields(fields: Fields, data: Record<string, unknown>, issues?: ValidationIssue[]): ValidationIssue[];
//# sourceMappingURL=validateFields.d.ts.map