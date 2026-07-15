import { defineBlock } from '../registry/defineBlock.js'

/**
 * Prose — a long-form text section. Content is stored as plain text; blank
 * lines split paragraphs. Rendered inside the design-system prose wrapper.
 */
export const ProseBlock = defineBlock({
  type: 'prose',
  version: 1,
  label: 'Testo',
  category: 'Sezioni',
  fields: {
    content: { type: 'richtext', label: 'Contenuto', localized: true, default: '' },
  },
  render: ({ data }) => {
    const paragraphs = String(data.content ?? '')
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean)
    return (
      <section className="ds-section">
        <div className="ds-container ds-max-w-3xl ds-mx-auto">
          <div className="ds-prose">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    )
  },
})
