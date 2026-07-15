import type { BlockDefinition } from '../types/block.js'

/** Runtime lookup surface over a consumer's registered blocks. */
export interface Registry {
  /** the block definition for a type, or undefined if not registered */
  get(type: string): BlockDefinition | undefined
  /** whether a type is registered */
  has(type: string): boolean
  /** all registered blocks, in registration order (for the palette) */
  list(): BlockDefinition[]
}

/**
 * Build a registry from the consumer's blocks. The consumer owns this list —
 * it decides which blocks exist. Duplicate types throw immediately so a
 * copy-paste mistake fails loud at startup, not silently at render.
 */
// Param is BlockDefinition<any>[] (not BlockDefinition<Fields>[]): a block's
// `render` prop makes BlockDefinition invariant in its field shape, so
// specifically-typed blocks from defineBlock aren't assignable to the general
// type. Accepting <any> lets consumers pass their typed blocks without a cast.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createRegistry(blocks: readonly BlockDefinition<any>[]): Registry {
  const map = new Map<string, BlockDefinition>()
  for (const block of blocks) {
    if (map.has(block.type)) {
      throw new Error(`[ds-builder] duplicate block type "${block.type}" in registry`)
    }
    map.set(block.type, block)
  }
  return {
    get: (type) => map.get(type),
    has: (type) => map.has(type),
    list: () => [...map.values()],
  }
}
