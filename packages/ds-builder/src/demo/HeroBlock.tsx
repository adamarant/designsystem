/**
 * Phase-0 spike block. Proves the model end-to-end: a typed schema, a single
 * render component used by both editor and public site, localized fields.
 * TODO(phase-4): real DS-composed blocks live in the consumer, not here — this
 * demo will move to examples/ before first publish.
 */
import { defineBlock } from '../registry/defineBlock.js'
import type { Fields, InferFields } from '../schema/fields.js'
import type { BlockRenderProps } from '../types/block.js'

const heroFields = {
  overline: { type: 'text', label: 'Overline', localized: true, default: '' },
  title: { type: 'text', label: 'Title', localized: true, required: true, default: '' },
  subtitle: {
    type: 'text',
    label: 'Subtitle',
    multiline: true,
    localized: true,
    default: '',
  },
  image: { type: 'image', label: 'Background image' },
  cta: { type: 'link', label: 'Call to action' },
  align: {
    type: 'select',
    label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
    ],
    default: 'left',
  },
} as const satisfies Fields

type HeroData = InferFields<typeof heroFields>

function HeroRender({ data }: BlockRenderProps<HeroData>) {
  const align: 'left' | 'center' = data.align
  return (
    <section className="ds-section" data-align={align}>
      <div className="ds-container">
        <div className="ds-stack ds-stack--lg">
          {data.overline ? <p className="ds-overline">{data.overline}</p> : null}
          <h1 className="ds-hero-title">{data.title}</h1>
          {data.subtitle ? <p className="ds-prose">{data.subtitle}</p> : null}
          {data.cta ? (
            <a className="ds-btn" href={data.cta.href}>
              {data.cta.label ?? 'Learn more'}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export const HeroBlock = defineBlock({
  type: 'hero',
  version: 1,
  label: 'Hero',
  category: 'Header',
  fields: heroFields,
  render: HeroRender,
})
