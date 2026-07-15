/**
 * Build a registry from the consumer's blocks. The consumer owns this list —
 * it decides which blocks exist. Duplicate types throw immediately so a
 * copy-paste mistake fails loud at startup, not silently at render.
 */
export function createRegistry(blocks) {
    const map = new Map();
    for (const block of blocks) {
        if (map.has(block.type)) {
            throw new Error(`[ds-builder] duplicate block type "${block.type}" in registry`);
        }
        map.set(block.type, block);
    }
    return {
        get: (type) => map.get(type),
        has: (type) => map.has(type),
        list: () => [...map.values()],
    };
}
//# sourceMappingURL=createRegistry.js.map