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
export function defineBlock(def) {
    return def;
}
//# sourceMappingURL=defineBlock.js.map