import { defineBlock } from '../registry/defineBlock.js'

/**
 * Hero — overline, title, lede, and an optional call-to-action link.
 * Centered. Uses design-system classes; the consumer supplies the DS CSS.
 */
export const HeroBlock = defineBlock({
  type: 'hero',
  version: 1,
  label: 'Hero',
  category: 'Header',
  fields: {
    overline: { type: 'text', label: 'Overline', localized: true, default: '' },
    title: { type: 'text', label: 'Titolo', localized: true, required: true, default: '' },
    lede: { type: 'text', label: 'Testo', multiline: true, localized: true, default: '' },
    cta: { type: 'link', label: 'Bottone (opzionale)' },
  },
  render: ({ data }) => (
    <section className="ds-section ds-flex ds-items-center">
      <div className="ds-container ds-flex ds-flex-col ds-items-center ds-text-center ds-gap-6 ds-max-w-3xl ds-mx-auto">
        {data.overline ? <p className="ds-overline">{data.overline}</p> : null}
        <h1 className="ds-hero-title">{data.title}</h1>
        {data.lede ? <p className="ds-editorial-lede">{data.lede}</p> : null}
        {data.cta?.href ? (
          <a
            href={data.cta.href}
            className="ds-btn ds-btn--pill ds-btn--xl"
            {...(data.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {data.cta.label || 'Scopri'}
          </a>
        ) : null}
      </div>
    </section>
  ),
})
