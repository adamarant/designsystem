import type { BlockDefinition } from '../types/block.js'
import type { BlockInstance } from '../types/page.js'

/** A fresh, sufficiently-unique id for a placed block. */
function newBlockId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto
  if (c?.randomUUID) return c.randomUUID()
  // Fallback for older runtimes: timestamp + counter keeps ids unique per session.
  newBlockId.n = (newBlockId.n ?? 0) + 1
  return `b_${Date.now().toString(36)}_${newBlockId.n.toString(36)}`
}
newBlockId.n = 0 as number

/**
 * Build a new block instance for the palette to insert. Data starts empty —
 * the renderer applies each field's `default`, so the block renders sensibly
 * the moment it lands on the canvas and the author fills the rest in the panel.
 * Id generation lives here (not the reducer) so the reducer stays pure.
 */
export function createBlockInstance(def: BlockDefinition): BlockInstance {
  return { id: newBlockId(), type: def.type, version: def.version, data: {} }
}
