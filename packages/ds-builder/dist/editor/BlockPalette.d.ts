import type { BlockDefinition } from '../types/block.js';
interface BlockPaletteProps {
    onPick: (def: BlockDefinition) => void;
    onClose: () => void;
}
/**
 * Popover listing every registered block, grouped by `category`. Picking one
 * adds it to the page. The consumer owns the block list, so this is whatever
 * they registered — nothing hard-coded here.
 */
export declare function BlockPalette({ onPick, onClose }: BlockPaletteProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockPalette.d.ts.map