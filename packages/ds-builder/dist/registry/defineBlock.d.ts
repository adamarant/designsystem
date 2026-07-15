import type { Fields } from '../schema/fields.js';
import type { BlockDefinition } from '../types/block.js';
/**
 * Author a block. The `const` type parameter preserves the literal shape of
 * `fields`, so `render`'s `data` prop is precisely typed from the schema —
 * no manual generics, no drift between schema and component.
 *
 * ```ts
 * export const HeroBlock = defineBlock({
 *   type: 'hero', version: 1, label: 'Hero',
 *   fields: { title: { type: 'text', localized: true } },
 *   render: ({ data }) => <h1>{data.title}</h1>, // data.title: string
 * })
 * ```
 */
export declare function defineBlock<const F extends Fields>(def: BlockDefinition<F>): BlockDefinition<F>;
//# sourceMappingURL=defineBlock.d.ts.map