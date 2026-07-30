/* Typography — the API first, the tokens after.
   Until 30 Jul 2026 this page rendered five token tables and never once named
   a DS typography class. The measured consequence across 21 consumers:
   `ds-text-sm` 610 uses and `ds-text-xs` 286 against 58 for `ds-text-base`,
   and `ds-admin-title` used exactly once while its sibling `ds-heading-ui`
   had 133. People learn what a docs page shows them.

   The specimen sections below are written in real classes (see demo.css). The
   token tables at the bottom keep the HTML-string form the file has always
   used: inline styles in JSX are blocked by a hook, and a table whose job is
   to render one `var(--ds-text-*)` per row needs a value that varies per row. */

type Row = { cls: string; what: string; sample: string }

const WEB: Row[] = [
  { cls: "ds-hero-title", what: "page title", sample: "We build things that last" },
  { cls: "ds-section-title", what: "section heading", sample: "How we work" },
  { cls: "ds-editorial-title", what: "article title", sample: "The value of empty space" },
  { cls: "ds-overline", what: "eyebrow, label", sample: "Case study" },
  { cls: "ds-stat-number", what: "big number", sample: "142" },
]

const PRODUCT: Row[] = [
  { cls: "ds-admin-title", what: "admin page h1", sample: "Invoices" },
  { cls: "ds-heading-ui", what: "panel, field group", sample: "Billing details" },
  { cls: "ds-body", what: "content, values", sample: "Cavallino Group" },
  { cls: "ds-meta", what: "timestamp, count", sample: "12 March 2026" },
]

const LONGFORM: Row[] = [
  { cls: "ds-editorial-lede", what: "lead paragraph", sample: "Every page we rebuilt this year ended up with fewer elements than the one it replaced." },
  { cls: "ds-editorial-body", what: "authored article", sample: "The body of the article, with its vertical rhythm already set by the wrapper." },
  { cls: "ds-prose-block", what: "markdown, CMS", sample: "Markdown output, rendered without a class on any individual element." },
]

function Specimen({ rows }: { rows: Row[] }) {
  return (
    <div className="typo-spec">
      {rows.map((r) => (
        <div className="typo-spec__row" key={r.cls}>
          <div className="typo-spec__label">
            <code>.{r.cls}</code>
            <span>{r.what}</span>
          </div>
          <div className="typo-spec__sample">
            <span className={r.cls}>{r.sample}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TypographyPage() {
  return (
    <>
      <header className="typo-hero">
        <p className="ds-overline">Foundations</p>
        <h1 className="ds-hero-title">Typography</h1>
        <p className="ds-editorial-lede typo-hero__lede">
          Ten named classes. Pick by what the text <em>is</em>, never by how big you want it.
        </p>
      </header>

      <div className="typo-act">
        <span className="ds-meta typo-act__n">01 &nbsp;/&nbsp; Two doors</span>
        <h2 className="ds-section-title">A site scales. A product does not.</h2>
        <p className="ds-editorial-lede typo-act__lede">
          Same tokens on both sides. What changes is which classes come on stage.
        </p>
      </div>

      <div className="typo-doors">
        <div className="typo-door">
          <p className="ds-overline">Door A</p>
          <h3>Web</h3>
          <p className="ds-body typo-door__what">Site, landing, editorial.</p>
          <ul className="typo-door__facts">
            <li className="ds-body">Display face</li>
            <li className="ds-body">Fluid, 40 &rarr; 72px</li>
            <li className="ds-body">Balanced line breaks</li>
            <li className="ds-meta">re-scale via --ds-text-hero</li>
          </ul>
        </div>
        <div className="typo-door">
          <p className="ds-overline">Door B</p>
          <h3>Product</h3>
          <p className="ds-body typo-door__what">Admin, dashboard, forms, tables.</p>
          <ul className="typo-door__facts">
            <li className="ds-body">Body face, never display</li>
            <li className="ds-body">Fixed sizes, no clamp()</li>
            <li className="ds-body">Density is a product call</li>
            <li className="ds-meta">tabular figures in columns</li>
          </ul>
        </div>
      </div>

      <div className="typo-act">
        <span className="ds-meta typo-act__n">02 &nbsp;/&nbsp; The classes</span>
        <h2 className="ds-section-title">Ten of them, and that is the whole API.</h2>
      </div>

      <section className="typo-block">
        <h3>Web</h3>
        <Specimen rows={WEB} />
      </section>

      <section className="typo-block">
        <h3>Product</h3>
        <Specimen rows={PRODUCT} />
      </section>

      <section className="typo-block">
        <h3>Long-form</h3>
        <p className="ds-body typo-block__lede">Authored content takes <code>ds-editorial-body</code>. Markdown you do not control takes <code>ds-prose-block</code>. Never nest one in the other.</p>
        <Specimen rows={LONGFORM} />
      </section>

      <div className="typo-act">
        <span className="ds-meta typo-act__n">03 &nbsp;/&nbsp; The rules</span>
        <h2 className="ds-section-title">Two habits that flatten every page.</h2>
      </div>

      <section className="typo-block">
        <h3>Small means irrelevant</h3>
        <p className="ds-body typo-block__lede">Body copy drifted to 14px across 21 consumers because no class said &ldquo;this is reading text&rdquo;.</p>
        <p className="ds-body typo-block__lede"><strong>Content is <code>ds-body</code>. Only genuinely supplementary text is <code>ds-meta</code>.</strong> A link is an action, not metadata.</p>
        <div className="demo-preview">
          <div className="demo-compare">
            <div>
              <span className="demo-compare__label demo-compare__label--avoid">
                Avoid: everything small, so nothing reads as important
              </span>
              <div className="demo-specimen-card">
                <div className="ds-text-xs ds-text-secondary ds-uppercase">Case study</div>
                <div className="ds-text-lg ds-font-display">Cavallino Group</div>
                <p className="ds-text-sm ds-text-secondary">
                  A bilingual property platform with a synced catalogue and a private area for
                  agents.
                </p>
                <div className="demo-specimen-card__row">
                  <span className="ds-text-xs ds-text-tertiary">12 March 2026</span>
                  <span className="ds-text-xs ds-text-secondary">Read the case</span>
                </div>
              </div>
            </div>
            <div>
              <span className="demo-compare__label demo-compare__label--use">
                Use: three roles, one grey, the content at full strength
              </span>
              <div className="demo-specimen-card">
                <div className="ds-overline">Case study</div>
                <div className="ds-card__title">Cavallino Group</div>
                <p className="ds-body">
                  A bilingual property platform with a synced catalogue and a private area for
                  agents.
                </p>
                <div className="demo-specimen-card__row">
                  <span className="ds-meta">12 March 2026</span>
                  <span className="ds-body ds-font-medium">Read the case</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="typo-block">
        <h3>One class, never a stack</h3>
        <p className="ds-body typo-block__lede">Two developers pick two different stacks for the same level. Two hierarchies, no error.</p>
        <div className="demo-preview">
          <div className="demo-compare">
            <div>
              <span className="demo-compare__label demo-compare__label--avoid">
                Avoid: four typographic decisions taken by hand
              </span>
              <pre className="demo-snippet">
                <code>{`<h2 className="ds-font-display ds-text-4xl
               ds-font-medium ds-text-primary">`}</code>
              </pre>
            </div>
            <div>
              <span className="demo-compare__label demo-compare__label--use">
                Use: none to take
              </span>
              <pre className="demo-snippet">
                <code>{`<h2 className="ds-section-title">`}</code>
              </pre>
            </div>
          </div>
        </div>
        <p className="ds-body typo-block__lede">Three or more type utilities on one element means the class already exists.</p>
      </section>

      <section className="typo-block">
        <h3>Bare headings</h3>
        <p className="ds-body typo-block__lede">Fluid and safe on a phone, but the fallback, not the API. 32&ndash;48, 26&ndash;36, 22&ndash;24, then 20, 18, 16.</p>
      </section>

      <div className="typo-act">
        <span className="ds-meta typo-act__n">04 &nbsp;/&nbsp; Reference</span>
        <h2 className="ds-section-title">The tokens underneath.</h2>
      </div>

      <section className="typo-block">
        <h3>Font Families</h3>
        <div
          className="demo-preview"
          dangerouslySetInnerHTML={{
            __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-6);">
            <div>
              <div class="demo-token-label demo-token-label--block">font-display</div>
              <div style="font-family: var(--ds-font-display); font-weight: var(--ds-font-display-weight); font-size: var(--ds-text-3xl); line-height: var(--ds-leading-tight);">Clash Display for headings</div>
            </div>
            <div>
              <div class="demo-token-label demo-token-label--block">font-sans</div>
              <div style="font-family: var(--ds-font-sans); font-size: var(--ds-text-lg); line-height: var(--ds-leading-normal);">Switzer for body text and UI elements</div>
            </div>
            <div>
              <div class="demo-token-label demo-token-label--block">font-mono</div>
              <div style="font-family: var(--ds-font-mono); font-size: var(--ds-text-base); line-height: var(--ds-leading-normal);">Geist Mono for code and token names</div>
            </div>
          </div>
        `,
          }}
        />
      </section>

      <section className="typo-block">
        <h3>Font Sizes</h3>
        <p className="ds-body typo-block__lede">The layer under the classes. Reach for it when building a component, not when writing a page.</p>
        <div
          className="demo-preview"
          dangerouslySetInnerHTML={{
            __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["text-2xs", "0.625rem / 10px"],
              ["text-xs", "0.75rem / 12px"],
              ["text-sm", "0.875rem / 14px"],
              ["text-base", "1rem / 16px"],
              ["text-lg", "1.125rem / 18px"],
              ["text-xl", "1.25rem / 20px"],
              ["text-2xl", "1.5rem / 24px"],
              ["text-3xl", "1.875rem / 30px"],
              ["text-4xl", "2.25rem / 36px"],
              ["text-5xl", "3rem / 48px"],
              ["text-6xl", "3.75rem / 60px"],
              ["text-7xl", "4.5rem / 72px"],
            ]
              .map(
                ([token, size]) => `
              <div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
                <div class="demo-token-label">${token}<span class="demo-token-label__size">${size}</span></div>
                <div style="font-size: var(--ds-${token}); line-height: var(--ds-leading-snug); font-family: var(--ds-font-sans);">The quick brown fox</div>
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          }}
        />
        <p className="ds-body typo-block__lede">
          Outside this ramp, four fluid sizes: <code>--ds-text-hero</code>, <code>--ds-text-section</code>, and the editorial pair. Those are what a brand overrides.
        </p>
      </section>

      <section className="typo-block">
        <h3>Font Weights</h3>
        <p className="ds-body typo-block__lede">
          Headings never set a weight by hand. They take <code>--ds-font-display-weight</code>, <code>--ds-admin-title-weight</code> or <code>--ds-heading-ui-weight</code>.
        </p>
        <div
          className="demo-preview"
          dangerouslySetInnerHTML={{
            __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["weight-light", "300"],
              ["weight-normal", "400"],
              ["weight-medium", "500"],
              ["weight-semibold", "600"],
              ["weight-bold", "700"],
            ]
              .map(
                ([token, val]) => `
              <div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
                <div class="demo-token-label">${token} (${val})</div>
                <div style="font-weight: var(--ds-${token}); font-size: var(--ds-text-xl); font-family: var(--ds-font-sans);">The quick brown fox jumps over the lazy dog</div>
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          }}
        />
      </section>

      <section className="typo-block">
        <h3>Line Heights</h3>
        <div
          className="demo-preview"
          dangerouslySetInnerHTML={{
            __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--ds-space-6);">
            ${[
              ["leading-none", "1"],
              ["leading-tight", "1.1"],
              ["leading-snug", "1.25"],
              ["leading-normal", "1.5"],
              ["leading-relaxed", "1.625"],
              ["leading-loose", "2"],
            ]
              .map(
                ([token, val]) => `
              <div style="padding: var(--ds-space-3); border: 1px solid var(--ds-color-border); border-radius: var(--ds-radius-md);">
                <div class="demo-token-label demo-token-label--block">${token} (${val})</div>
                <div style="font-size: var(--ds-text-base); line-height: var(--ds-${token}); font-family: var(--ds-font-sans); background: var(--ds-color-surface-muted); padding: var(--ds-space-2); border-radius: var(--ds-radius-sm);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</div>
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          }}
        />
      </section>

      <section className="typo-block">
        <h3>Letter Spacing</h3>
        <div
          className="demo-preview"
          dangerouslySetInnerHTML={{
            __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["tracking-tighter", "-0.02em"],
              ["tracking-tight", "-0.01em"],
              ["tracking-normal", "0"],
              ["tracking-wide", "0.05em"],
              ["tracking-wider", "0.1em"],
            ]
              .map(
                ([token, val]) => `
              <div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
                <div class="demo-token-label">${token} (${val})</div>
                <div style="letter-spacing: var(--ds-${token}); font-size: var(--ds-text-lg); font-family: var(--ds-font-sans); text-transform: uppercase;">Design system tokens</div>
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          }}
        />
      </section>
    </>
  )
}
