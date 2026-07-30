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
    <div className="demo-type-list">
      {rows.map((r) => (
        <div className="demo-type-row" key={r.cls}>
          <div className="demo-type-row__head">
            <code className="demo-type-row__cls">.{r.cls}</code>
            <span className="demo-type-row__spec">{r.spec}</span>
          </div>
          <p className="demo-type-row__use">{r.use}</p>
          <div className="demo-type-row__sample">
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
      <div className="demo-page-header">
        <h1>Typography</h1>
        <p>
          Ten named classes, two entry points, one set of tokens underneath. Pick a class by
          what the text <em>is</em>, never by how big you want it.
        </p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Two doors, one system</h2>
        <p className="demo-section__description">
          A site and an application want different typography, and the split is not cosmetic.
          A marketing page is a composition: the type scales with the viewport because the page
          is meant to breathe. A dashboard is a tool: its density is a product decision, so its
          type does <strong>not</strong> reflow when you widen the window, and it never reaches
          for the display face &mdash; display type on a data table is noise.
        </p>
        <p className="demo-section__description">
          Same tokens on both sides. What changes is which set of classes comes on stage.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Door A &mdash; Web</h2>
        <p className="demo-section__description">
          Site, landing, editorial. Display face, fluid sizes, tight tracking, balanced line
          breaks. Sizes come from <code>--ds-text-hero</code> and <code>--ds-text-section</code>:
          to re-scale a brand, override those two tokens in the project&apos;s{" "}
          <code>theme.css</code> and leave the classes alone.
        </p>
        <div className="demo-preview">
          <TypeTable rows={WEB} />
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Door B &mdash; Product</h2>
        <p className="demo-section__description">
          Admin, dashboard, forms, tables. Body face throughout, fixed sizes, no{" "}
          <code>clamp()</code>. Pair with <code>ds-tabular-nums</code> wherever numbers stack
          into a column.
        </p>
        <div className="demo-preview">
          <TypeTable rows={PRODUCT} />
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Small means irrelevant</h2>
        <p className="demo-section__description">
          <code>ds-body</code> and <code>ds-meta</code> exist because of a count, not a taste.
          Across the 21 consumers <code>ds-text-sm</code> has 610 uses and{" "}
          <code>ds-text-xs</code> 286, against 58 for <code>ds-text-base</code>: body copy in
          this ecosystem drifted to 14px and nobody chose that. It happens because the DS had no
          class meaning &ldquo;this is reading text&rdquo;, so the handiest thing in reach was
          the smallest step of the ramp &mdash; and once the body sits at 14, everything
          subordinate has to go to 12, then 10. The page compresses downward and size stops
          meaning anything.
        </p>
        <p className="demo-section__description">
          <strong>
            So: content is <code>ds-body</code>, at full strength. Only genuinely supplementary
            text is <code>ds-meta</code>.
          </strong>{" "}
          A timestamp, a count, a tag. A link is an action, not metadata, however minor it looks
          &mdash; it does not go in <code>ds-meta</code>.
        </p>
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

      <section className="demo-section">
        <h2 className="demo-section__title">Long-form</h2>
        <p className="demo-section__description">
          Two containers, and they are not interchangeable. Use <code>ds-editorial-body</code>{" "}
          for content you author, where the reading rhythm is the point. Use{" "}
          <code>ds-prose-block</code> for markdown or CMS output you do not control, where the
          job is to dress whatever elements arrive. Do not nest one in the other.
        </p>
        <div className="demo-preview">
          <TypeTable rows={LONGFORM} />
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">One class, never a stack</h2>
        <p className="demo-section__description">
          A stack of utilities on a heading renders fine the first time. The cost lands on the
          second developer, who composes a slightly different stack for a heading at the same
          level. Neither is wrong, and the page ends up with two hierarchies &mdash; no console
          error, nothing to catch it. Worse, a hand-set weight escapes{" "}
          <code>--ds-font-display-weight</code>, so a brand-wide weight change silently skips
          those elements.
        </p>
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
        <p className="demo-section__description">
          Rule of thumb, and what the typography-soup hook enforces: three or more family, size
          and colour utilities on one element &mdash; <code>ds-font-display</code> plus{" "}
          <code>ds-text-4xl</code> plus <code>ds-text-primary</code>, say &mdash; means you are
          rebuilding a class that already exists. One size plus one colour is fine and stays
          inside the budget.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Bare headings</h2>
        <p className="demo-section__description">
          <code>h1</code>&ndash;<code>h6</code> carry the display face and are fluid, so an
          unclassed heading is safe on a phone. They are still the fallback, not the API: inside
          a page you name the role. Sizes are <code>h1</code> 32&nbsp;&rarr;&nbsp;48,{" "}
          <code>h2</code> 26&nbsp;&rarr;&nbsp;36, <code>h3</code> 22&nbsp;&rarr;&nbsp;24, then{" "}
          <code>h4</code> 20, <code>h5</code> 18, <code>h6</code> 16 fixed with snug leading.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Font Families</h2>
        <div
          className="demo-preview"
          dangerouslySetInnerHTML={{
            __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-6);">
            <div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-1);">font-display</div>
              <div style="font-family: var(--ds-font-display); font-weight: var(--ds-font-display-weight); font-size: var(--ds-text-3xl); line-height: var(--ds-leading-tight);">Clash Display for headings</div>
            </div>
            <div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-1);">font-sans</div>
              <div style="font-family: var(--ds-font-sans); font-size: var(--ds-text-lg); line-height: var(--ds-leading-normal);">Switzer for body text and UI elements</div>
            </div>
            <div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-1);">font-mono</div>
              <div style="font-family: var(--ds-font-mono); font-size: var(--ds-text-base); line-height: var(--ds-leading-normal);">Geist Mono for code and token names</div>
            </div>
          </div>
        `,
          }}
        />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Font Sizes</h2>
        <p className="demo-section__description">
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
                <div style="min-width: 140px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token}<br><span style="font-size: var(--ds-text-2xs);">${size}</span></div>
                <div style="font-size: var(--ds-${token}); line-height: var(--ds-leading-snug); font-family: var(--ds-font-sans);">The quick brown fox</div>
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          }}
        />
        <p className="demo-section__description">
          Four more sizes are fluid and sit outside this ramp: <code>--ds-text-hero</code>{" "}
          (40&nbsp;&rarr;&nbsp;72px), <code>--ds-text-section</code> (30&nbsp;&rarr;&nbsp;36px),
          and the editorial pair <code>--ds-text-editorial-title</code> and{" "}
          <code>--ds-text-editorial-lede</code>. Those are the tokens a consumer overrides to
          re-scale a brand.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Font Weights</h2>
        <p className="demo-section__description">
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
                <div style="min-width: 160px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token} (${val})</div>
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

      <section className="demo-section">
        <h2 className="demo-section__title">Line Heights</h2>
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
                <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-2);">${token} (${val})</div>
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

      <section className="demo-section">
        <h2 className="demo-section__title">Letter Spacing</h2>
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
                <div style="min-width: 180px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token} (${val})</div>
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
