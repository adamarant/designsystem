import { HeroBlock } from './hero.js';
import { ProseBlock } from './prose.js';
import { CtaBlock } from './cta.js';
import { ImageBlock } from './image.js';
export { HeroBlock } from './hero.js';
export { ProseBlock } from './prose.js';
export { CtaBlock } from './cta.js';
export { ImageBlock } from './image.js';
/**
 * All shared blocks, in a sensible palette order. Spread into createRegistry
 * alongside any consumer-specific blocks:
 *   createRegistry([...sharedBlocks, MyCustomBlock])
 */
export const sharedBlocks = [HeroBlock, ProseBlock, CtaBlock, ImageBlock];
//# sourceMappingURL=index.js.map