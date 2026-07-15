import type { BlockDefinition } from '../types/block.js';
/** Runtime lookup surface over a consumer's registered blocks. */
export interface Registry {
    /** the block definition for a type, or undefined if not registered */
    get(type: string): BlockDefinition | undefined;
    /** whether a type is registered */
    has(type: string): boolean;
    /** all registered blocks, in registration order (for the palette) */
    list(): BlockDefinition[];
}
/**
 * Build a registry from the consumer's blocks. The consumer owns this list —
 * it decides which blocks exist. Duplicate types throw immediately so a
 * copy-paste mistake fails loud at startup, not silently at render.
 */
export declare function createRegistry(blocks: readonly BlockDefinition<any>[]): Registry;
//# sourceMappingURL=createRegistry.d.ts.map