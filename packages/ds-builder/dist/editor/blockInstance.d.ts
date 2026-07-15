import type { BlockDefinition } from '../types/block.js';
import type { BlockInstance } from '../types/page.js';
/**
 * Build a new block instance for the palette to insert. Data starts empty —
 * the renderer applies each field's `default`, so the block renders sensibly
 * the moment it lands on the canvas and the author fills the rest in the panel.
 * Id generation lives here (not the reducer) so the reducer stays pure.
 */
export declare function createBlockInstance(def: BlockDefinition): BlockInstance;
//# sourceMappingURL=blockInstance.d.ts.map