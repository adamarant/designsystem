/* foundations/typography

   Built on the structure of brand.s25.studio: a 12-column grid where every
   row is LABEL (4 cols) | CONTENT (8 cols), the label column runs empty on
   continuation rows, and every section carries the same 64px of padding. The
   rhythm comes from the grid holding still, not from per-section spacing.

   Chrome uses .typo-* / .s-* classes only. No DS typography class appears
   outside a specimen, so everything you see set in the system IS the demo. */

type Spec = { cls: string; what: string; sample: string }

const WEB: Spec[] = [
  { cls: "ds-hero-title", what: "page title", sample: "We build things that last" },
  { cls: "ds-section-title", what: "section heading", sample: "How we work" },
  { cls: "ds-editorial-title", what: "article title", sample: "The value of empty space" },
  { cls: "ds-overline", what: "eyebrow, label", sample: "Case study" },
  { cls: "ds-stat-number", what: "big number", sample: "142" },
]

const PRODUCT: Spec[] = [
  { cls: "ds-admin-title", what: "admin page h1", sample: "Invoices" },
  { cls: "ds-heading-ui", what: "panel, field group", sample: "Billing details" },
  { cls: "ds-body", what: "content, values", sample: "Cavallino Group" },
  { cls: "ds-meta", what: "timestamp, count", sample: "12 March 2026" },
]

const LONGFORM: Spec[] = [
  {
    cls: "ds-editorial-lede",
    what: "lead paragraph",
    sample: "Every page we rebuilt this year ended up with fewer elements than the one it replaced.",
  },
  {
    cls: "ds-editorial-body",
    what: "authored article",
    sample: "The body of the article, with its vertical rhythm already set by the wrapper.",
  },
  {
    cls: "ds-prose-block",
    what: "markdown, CMS",
    sample: "Markdown output, rendered without a class on any individual element.",
  },
]

/* One specimen per grid row: the class name sits in the page's own label
   column, the type in the content column. No nested rail, no second grid. */
function Specimens({ rows }: { rows: Spec[] }) {
  return (
    <>
      {rows.map((r) => (
        <div className="s-row" key={r.cls}>
          <div className="s-label">
            <code className="typo-cls">.{r.cls}</code>
            <span className="typo-label typo-cls__what">{r.what}</span>
          </div>
          <div className="s-content">
            <span className={r.cls}>{r.sample}</span>
          </div>
        </div>
      ))}
    </>
  )
}

function Section({
  label,
  lede,
  children,
}: {
  label: string
  lede?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="s-section">
      <div className="s-container">
        <div className="s-row">
          <div className="s-label">
            <span className="typo-label">{label}</span>
          </div>
          {lede ? (
            <div className="s-content">
              <p className="typo-body">{lede}</p>
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export default function TypographyPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Typography</h1>
        <p>
          Ten named classes. Pick by what the text <em>is</em>, never by how big you want it.
        </p>
      </div>

      <Section
        label="Two doors"
        lede="A site scales with the viewport because a page is a composition. A product does not: density is a decision, not the window's. Same tokens on both sides."
      >
        <div className="s-row">
          <div className="s-label" />
          <div className="s-content">
            <div className="s-split">
              <div>
                <h2 className="typo-heading">Web</h2>
                <p className="typo-body typo-door__what">Site, landing, editorial.</p>
                <ul className="typo-facts">
                  <li>Display face</li>
                  <li>Fluid, 40 &rarr; 72px</li>
                  <li>Balanced line breaks</li>
                  <li>
                    Re-scale via <code className="typo-cls">--ds-text-hero</code>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="typo-heading">Product</h2>
                <p className="typo-body typo-door__what">Admin, dashboard, forms, tables.</p>
                <ul className="typo-facts">
                  <li>Body face, never display</li>
                  <li>Fixed sizes, no clamp()</li>
                  <li>Density is a product call</li>
                  <li>Tabular figures in columns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="Web"
        lede="Display face, fluid sizes. Re-scale a brand by overriding --ds-text-hero and --ds-text-section in theme.css, never by restating the class."
      >
        <Specimens rows={WEB} />
      </Section>

      <Section
        label="Product"
        lede="Body face throughout, fixed sizes, no clamp(). Pair with ds-tabular-nums wherever numbers stack into a column."
      >
        <Specimens rows={PRODUCT} />
      </Section>

      <Section
        label="Long-form"
        lede="Authored content takes ds-editorial-body. Markdown you do not control takes ds-prose-block. Never nest one in the other."
      >
        <Specimens rows={LONGFORM} />
      </Section>

      <Section
        label="Small means irrelevant"
        lede="Body copy drifted to 14px across 21 consumers because no class said &ldquo;this is reading text&rdquo;. Content is ds-body, at full strength. Only genuinely supplementary text is ds-meta, and a link is an action, not metadata."
      >
        <div className="s-row">
          <div className="s-label" />
          <div className="s-content">
            <div className="s-split">
              <div>
                <span className="typo-label typo-verdict typo-verdict--bad">Avoid</span>
                <div className="typo-card">
                  <div className="ds-text-xs ds-text-secondary ds-uppercase">Case study</div>
                  <div className="ds-text-lg ds-font-display">Cavallino Group</div>
                  <p className="ds-text-sm ds-text-secondary">
                    A bilingual property platform with a synced catalogue.
                  </p>
                  <div className="typo-card__row">
                    <span className="ds-text-xs ds-text-tertiary">12 March 2026</span>
                    <span className="ds-text-xs ds-text-secondary">Read the case</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="typo-label typo-verdict typo-verdict--good">Use</span>
                <div className="typo-card">
                  <div className="ds-overline">Case study</div>
                  <div className="ds-card__title">Cavallino Group</div>
                  <p className="ds-body">A bilingual property platform with a synced catalogue.</p>
                  <div className="typo-card__row">
                    <span className="ds-meta">12 March 2026</span>
                    <span className="ds-body ds-font-medium">Read the case</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="One class, never a stack"
        lede="Two developers pick two different stacks for the same level and the page ends with two hierarchies, no error. Three or more type utilities on one element means the class already exists."
      >
        <div className="s-row">
          <div className="s-label" />
          <div className="s-content">
            <div className="s-split">
              <div>
                <span className="typo-label typo-verdict typo-verdict--bad">Avoid</span>
                <pre className="typo-snippet">
                  <code>{`<h2 className="ds-font-display
    ds-text-4xl ds-font-medium
    ds-text-primary">`}</code>
                </pre>
              </div>
              <div>
                <span className="typo-label typo-verdict typo-verdict--good">Use</span>
                <pre className="typo-snippet">
                  <code>{`<h2 className="ds-section-title">`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="Bare headings"
        lede="h1 to h6 are fluid and safe on a phone, but they are the fallback, not the API. Inside a page, name the role. Sizes: 32 to 48, 26 to 36, 22 to 24, then 20, 18, 16."
      />

      <Section label="Typefaces">
        <div className="s-row">
          <div className="s-label">
            <code className="typo-cls">--ds-font-display</code>
            <span className="typo-label typo-cls__what">headings</span>
          </div>
          <div
            className="s-content"
            dangerouslySetInnerHTML={{
              __html: `<div style="font-family: var(--ds-font-display); font-weight: var(--ds-font-display-weight); font-size: var(--ds-text-3xl); line-height: var(--ds-leading-tight);">Inter, Display optical cut</div>`,
            }}
          />
        </div>
        <div className="s-row">
          <div className="s-label">
            <code className="typo-cls">--ds-font-sans</code>
            <span className="typo-label typo-cls__what">body, UI</span>
          </div>
          <div
            className="s-content"
            dangerouslySetInnerHTML={{
              __html: `<div style="font-family: var(--ds-font-sans); font-size: var(--ds-text-lg); line-height: var(--ds-leading-normal);">Inter, Text optical cut, for body and interface</div>`,
            }}
          />
        </div>
        <div className="s-row">
          <div className="s-label">
            <code className="typo-cls">--ds-font-mono</code>
            <span className="typo-label typo-cls__what">code, tokens</span>
          </div>
          <div
            className="s-content"
            dangerouslySetInnerHTML={{
              __html: `<div style="font-family: var(--ds-font-mono); font-size: var(--ds-text-base); line-height: var(--ds-leading-normal);">Geist Mono for code and token names</div>`,
            }}
          />
        </div>
      </Section>

      <Section
        label="Scale"
        lede="The raw ramp, under the classes. Reach for it when building a component, not when writing a page. Four more sizes are fluid and sit outside it: --ds-text-hero, --ds-text-section and the editorial pair."
      >
        {[
          ["text-2xs", "10"],
          ["text-xs", "12"],
          ["text-sm", "14"],
          ["text-base", "16"],
          ["text-lg", "18"],
          ["text-xl", "20"],
          ["text-2xl", "24"],
          ["text-3xl", "30"],
          ["text-4xl", "36"],
          ["text-5xl", "48"],
          ["text-6xl", "60"],
          ["text-7xl", "72"],
        ].map(([token, px]) => (
          <div className="s-row" key={token}>
            <div className="s-label">
              <code className="typo-cls">{token}</code>
              <span className="typo-label typo-cls__what">{px}px</span>
            </div>
            <div
              className="s-content"
              dangerouslySetInnerHTML={{
                __html: `<div style="font-size: var(--ds-${token}); line-height: var(--ds-leading-snug);">The quick brown fox</div>`,
              }}
            />
          </div>
        ))}
      </Section>

      <Section
        label="Weight"
        lede="Headings never set a weight by hand. They take --ds-font-display-weight, --ds-admin-title-weight or --ds-heading-ui-weight."
      >
        {[
          ["weight-light", "300"],
          ["weight-normal", "400"],
          ["weight-medium", "500"],
          ["weight-semibold", "600"],
          ["weight-bold", "700"],
        ].map(([token, val]) => (
          <div className="s-row" key={token}>
            <div className="s-label">
              <code className="typo-cls">{token}</code>
              <span className="typo-label typo-cls__what">{val}</span>
            </div>
            <div
              className="s-content"
              dangerouslySetInnerHTML={{
                __html: `<div style="font-weight: var(--ds-${token}); font-size: var(--ds-text-xl);">The quick brown fox jumps over the lazy dog</div>`,
              }}
            />
          </div>
        ))}
      </Section>

      <Section label="Leading">
        {[
          ["leading-none", "1"],
          ["leading-tight", "1.1"],
          ["leading-snug", "1.25"],
          ["leading-normal", "1.5"],
          ["leading-relaxed", "1.625"],
          ["leading-loose", "2"],
        ].map(([token, val]) => (
          <div className="s-row" key={token}>
            <div className="s-label">
              <code className="typo-cls">{token}</code>
              <span className="typo-label typo-cls__what">{val}</span>
            </div>
            <div
              className="s-content"
              dangerouslySetInnerHTML={{
                __html: `<div style="font-size: var(--ds-text-base); line-height: var(--ds-${token}); max-width: 46ch;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</div>`,
              }}
            />
          </div>
        ))}
      </Section>

      <Section label="Tracking">
        {[
          ["tracking-tighter", "-0.02em"],
          ["tracking-tight", "-0.01em"],
          ["tracking-normal", "0"],
          ["tracking-wide", "0.05em"],
          ["tracking-wider", "0.1em"],
        ].map(([token, val]) => (
          <div className="s-row" key={token}>
            <div className="s-label">
              <code className="typo-cls">{token}</code>
              <span className="typo-label typo-cls__what">{val}</span>
            </div>
            <div
              className="s-content"
              dangerouslySetInnerHTML={{
                __html: `<div style="letter-spacing: var(--ds-${token}); font-size: var(--ds-text-lg); text-transform: uppercase;">Design system tokens</div>`,
              }}
            />
          </div>
        ))}
      </Section>
    </>
  )
}
