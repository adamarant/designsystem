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

type Row = { cls: string; use: string; spec: string; sample: string }

const WEB: Row[] = [
  {
    cls: "ds-hero-title",
    use: "Top-of-page marquee title. One per page.",
    spec: "display · fluid 40 → 72px · balance + break-word",
    sample: "We build things that last",
  },
  {
    cls: "ds-section-title",
    use: "Section heading inside a page.",
    spec: "display · fluid 30 → 36px · balance + break-word",
    sample: "How we work",
  },
  {
    cls: "ds-editorial-title",
    use: "Article or case-study title. Bigger than a section, narrower use.",
    spec: "display · fluid 40 → 72px · balance + break-word",
    sample: "The value of empty space",
  },
  {
    cls: "ds-overline",
    use: "Eyebrow above a title, metric label, small all-caps category.",
    spec: "sans · 14px · medium · wide tracking · uppercase · secondary",
    sample: "Case study",
  },
  {
    cls: "ds-stat-number",
    use: "A large numeric value: price, metric, ordinal.",
    spec: "display · 24px · tabular figures",
    sample: "142",
  },
]

const PRODUCT: Row[] = [
  {
    cls: "ds-admin-title",
    use: "The h1 at the top of an admin or dashboard page.",
    spec: "sans · 20 → 24px at 640 · weight via --ds-admin-title-weight",
    sample: "Invoices",
  },
  {
    cls: "ds-heading-ui",
    use: "Functional heading: field group, panel, sidebar section, settings.",
    spec: "sans · inherits size · weight via --ds-heading-ui-weight",
    sample: "Billing details",
  },
  {
    cls: "ds-body",
    use: "Reading text and data values. The default for content.",
    spec: "sans · 16px · leading 1.5 · primary",
    sample: "Cavallino Group",
  },
  {
    cls: "ds-meta",
    use: "Timestamps, counts, tags, copyright. Supplementary only.",
    spec: "sans · 12px · tertiary",
    sample: "12 March 2026",
  },
]

const LONGFORM: Row[] = [
  {
    cls: "ds-editorial-lede",
    use: "The lead paragraph under an article title.",
    spec: "sans · fluid 18 → 22px · max-width --ds-measure",
    sample:
      "Every page we rebuilt this year ended up with fewer elements than the one it replaced.",
  },
  {
    cls: "ds-editorial-body",
    use: "Wrapper for authored long-form. Dresses h2/h3/h4, lists, quotes, code.",
    spec: "18px · leading 1.625 · h2 fluid 24 → 32, h3 20 → 24",
    sample: "The body of the article, with its vertical rhythm already set by the wrapper.",
  },
  {
    cls: "ds-prose-block",
    use: "Wrapper for markdown or CMS output you do not control.",
    spec: "leading 1.625 · full element coverage incl. tables and images",
    sample: "Markdown output, rendered without a class on any individual element.",
  },
]

function TypeTable({ rows }: { rows: Row[] }) {
  return (
    <table className="typo-table">
      <thead>
        <tr>
          <th className="typo-table__cls">Class</th>
          <th>Use for</th>
          <th className="typo-table__spec">Renders</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.cls}>
            <td className="typo-table__cls">.{r.cls}</td>
            <td>{r.use}</td>
            <td className="typo-table__spec">{r.spec}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
        <TypeTable rows={WEB} />
      </section>

      <section className="typo-block">
        <h3>Product</h3>
        <TypeTable rows={PRODUCT} />
      </section>

      <section className="typo-block">
        <h3>Long-form</h3>
        <p className="ds-body typo-block__lede">Authored content takes <code>ds-editorial-body</code>. Markdown you do not control takes <code>ds-prose-block</code>. Never nest one in the other.</p>
        <TypeTable rows={LONGFORM} />
      </section>

      <div className="typo-act">
        <span className="ds-meta typo-act__n">03 &nbsp;/&nbsp; The rules</span>
        <h2 className="ds-section-title">Two habits that flatten every page.</h2>
      </div>

      <section className="typo-block">
        <h3>Small means irrelevant</h3>
        <p className="ds-body typo-block__lede">Across the 21 consumers <code>ds-text-sm</code> has 610 uses against 58 for <code>ds-text-base</code>. Body copy drifted to 14px because no class said &ldquo;this is reading text&rdquo;, so the smallest step of the ramp was the handiest thing in reach. Once the body sits at 14, everything under it goes to 12, then 10.</p>
        <p className="ds-body typo-block__lede"><strong>Content is <code>ds-body</code>, at full strength. Only genuinely supplementary text is <code>ds-meta</code>.</strong> A link is an action, not metadata, however minor it looks.</p>
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
        <p className="ds-body typo-block__lede">A stack renders fine the first time. The cost lands on the second developer, who picks a slightly different stack for a heading at the same level. Two hierarchies, no console error. And a hand-set weight escapes <code>--ds-font-display-weight</code>, so a brand-wide change skips it.</p>
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
        <p className="ds-body typo-block__lede">Three or more family, size and colour utilities on one element means the class already exists. One size plus one colour is fine.</p>
      </section>

      <section className="typo-block">
        <h3>Bare headings</h3>
        <p className="ds-body typo-block__lede"><code>h1</code>&ndash;<code>h6</code> are fluid and safe on a phone, but they are the fallback, not the API. Inside a page, name the role. Sizes: 32&ndash;48, 26&ndash;36, 22&ndash;24, then 20, 18, 16 fixed.</p>
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
        <p className="ds-body typo-block__lede">
          The raw ramp. It is the layer <em>under</em> the classes above, not a substitute for
          them &mdash; reach for it when you are building a component, not when you are writing
          a page.
        </p>
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
          Four more sizes are fluid and sit outside this ramp: <code>--ds-text-hero</code>{" "}
          (40&nbsp;&rarr;&nbsp;72px), <code>--ds-text-section</code> (30&nbsp;&rarr;&nbsp;36px),
          and the editorial pair <code>--ds-text-editorial-title</code> and{" "}
          <code>--ds-text-editorial-lede</code>. Those are the tokens a consumer overrides to
          re-scale a brand.
        </p>
      </section>

      <section className="typo-block">
        <h3>Font Weights</h3>
        <p className="ds-body typo-block__lede">
          Headings do not set a weight by hand. Display headings take{" "}
          <code>--ds-font-display-weight</code>, and the two body-font heading classes take{" "}
          <code>--ds-admin-title-weight</code> and <code>--ds-heading-ui-weight</code>. Override
          those tokens once per project; a literal weight on a heading is what the
          hardcoded-font-weight hook blocks.
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
