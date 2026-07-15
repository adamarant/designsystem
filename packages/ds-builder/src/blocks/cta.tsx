import { defineBlock } from '../registry/defineBlock.js'

/** CTA band — a centered title, supporting text, and up to two link buttons. */
export const CtaBlock = defineBlock({
  type: 'cta',
  version: 1,
  label: 'CTA',
  category: 'Sezioni',
  fields: {
    title: { type: 'text', label: 'Titolo', localized: true, required: true, default: '' },
    text: { type: 'text', label: 'Testo', multiline: true, localized: true, default: '' },
    primary: { type: 'link', label: 'Bottone principale' },
    secondary: { type: 'link', label: 'Bottone secondario' },
  },
  render: ({ data }) => (
    <section className="ds-section ds-border-t">
      <div className="ds-container ds-flex ds-flex-col ds-items-center ds-text-center ds-gap-6 ds-max-w-2xl ds-mx-auto">
        <h2 className="ds-section-title">{data.title}</h2>
        {data.text ? <p className="ds-editorial-lede">{data.text}</p> : null}
        {data.primary?.href || data.secondary?.href ? (
          <div className="ds-flex ds-flex-wrap ds-justify-center ds-gap-3">
            {data.primary?.href ? (
              <a href={data.primary.href} className="ds-btn ds-btn--pill ds-btn--lg">
                {data.primary.label || 'Inizia'}
              </a>
            ) : null}
            {data.secondary?.href ? (
              <a
                href={data.secondary.href}
                className="ds-btn ds-btn--outline ds-btn--pill ds-btn--lg"
              >
                {data.secondary.label || 'Scopri'}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  ),
})
