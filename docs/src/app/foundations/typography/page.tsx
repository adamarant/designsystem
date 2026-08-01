/* foundations/typography

   Built on the structure of brand.s25.studio: a 12-column grid where every
   row is LABEL (4 cols) | CONTENT (8 cols), the label column runs empty on
   continuation rows, and every section carries the same 64px of padding. The
   rhythm comes from the grid holding still, not from per-section spacing.

   Chrome uses .typo-* / .s-* classes only. No DS typography class appears
   outside a specimen, so everything you see set in the system IS the demo. */

type Spec = { cls: string; what: string; sample: string }

const ROLES: Spec[] = [
  { cls: "ds-heading-1", what: "page title · 56 → 80", sample: "We build things that last" },
  { cls: "ds-heading-2", what: "section · 40 → 56", sample: "How we work" },
  { cls: "ds-heading-3", what: "subsection · 32 → 40", sample: "The studio in numbers" },
  { cls: "ds-heading-4", what: "group · 24 → 28", sample: "Selected work" },
  { cls: "ds-heading-5", what: "minor · 20", sample: "Process" },
  { cls: "ds-heading-6", what: "smallest · 18, robust", sample: "Colophon" },
  { cls: "ds-copy", what: "lede · 18 → 22", sample: "Every page we rebuilt this year ended up with fewer elements than the one it replaced." },
  { cls: "ds-body", what: "content · 16", sample: "The default for any content, at full strength, whatever else is on the card." },
  { cls: "ds-caption", what: "half of a pair · 13", sample: "Shot on location in Verona, 2026." },
  { cls: "ds-meta", what: "small · 12", sample: "12 March 2026 · 4 min" },
  { cls: "ds-overline", what: "label, uppercase", sample: "Case study" },
  { cls: "ds-stat-number", what: "big number", sample: "142" },
]

const PRODUCT: Spec[] = [
  { cls: "ds-heading-1", what: "page h1 · 28, intense", sample: "Invoices" },
  { cls: "ds-heading-2", what: "panel · 24, robust", sample: "Billing details" },
  { cls: "ds-heading-3", what: "group · 20", sample: "Payment methods" },
  { cls: "ds-heading-4", what: "field group · 18", sample: "Card on file" },
  { cls: "ds-heading-5", what: "minor · 16", sample: "Backup email" },
  { cls: "ds-heading-6", what: "smallest · 14", sample: "Advanced" },
  { cls: "ds-copy", what: "lede · fixed 18", sample: "Everything billed this month, in one place." },
  { cls: "ds-body", what: "content · 16, invariant", sample: "Cavallino Group" },
  { cls: "ds-meta", what: "small · 12, invariant", sample: "Updated 2 min ago" },
]

const FROZEN: Array<{ old: string; next: string; delta: string }> = [
  { old: "ds-hero-title", next: "ds-heading-1", delta: "web · +8 on desktop" },
  { old: "ds-section-title", next: "ds-heading-2", delta: "web · +20, the hierarchy fix" },
  { old: "ds-editorial-title", next: "ds-heading-1", delta: "web · +8" },
  { old: "ds-editorial-lede", next: "ds-copy", delta: "same curve" },
  { old: "ds-editorial-body", next: "ds-body in ds-prose", delta: "same values" },
  { old: "ds-admin-title", next: "ds-heading-1", delta: "product · +4" },
  { old: "ds-heading-ui", next: "ds-heading-3/4/5", delta: "product · gains a size" },
]

/* One specimen per grid row: the class name sits in the page's own label
   column, the type in the content column. No nested rail, no second grid.
   `surface` sets data-surface on the specimen itself: custom properties
   resolve on the element, so each row re-enters the ladder alone. */
function Specimens({ rows, surface }: { rows: Spec[]; surface?: "product" }) {
  return (
    <>
      {rows.map((r) => (
        <div className="s-row" key={r.cls + r.what}>
          <div className="s-label">
            <code className="typo-cls">.{r.cls}</code>
            <span className="typo-label typo-cls__what">{r.what}</span>
          </div>
          <div className="s-content">
            <span className={r.cls} {...(surface ? { "data-surface": surface } : {})}>
              {r.sample}
            </span>
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
          One ladder of roles, resolved by context. Pick by what the text <em>is</em>; the surface
          and the viewport decide the number.
        </p>
      </div>

      <Section
        label="One ladder, two surfaces"
        lede={
          <>
            A site scales with the viewport because a page is a composition. A product does not:
            density is a decision, not the window&rsquo;s. The same role class renders both;{" "}
            <code className="typo-cls">data-surface=&quot;product&quot;</code> on the shell flips
            the resolution, and web is the unmarked default.
          </>
        }
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
                  <li>Fluid: each clamp&rsquo;s ends are mobile and desktop</li>
                  <li>Balanced line breaks</li>
                  <li>
                    Re-scale via <code className="typo-cls">--ds-type-h1-size</code>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="typo-heading">Product</h2>
                <p className="typo-body typo-door__what">Admin, dashboard, forms, tables.</p>
                <ul className="typo-facts">
                  <li>Body face, never display</li>
                  <li>Fixed sizes, no clamp()</li>
                  <li>
                    <code className="typo-cls">data-surface</code> on the shell, inherits down
                  </li>
                  <li>Tabular figures in columns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="The roles"
        lede="This page is a web surface, so this is the web resolution: display headings, fluid sizes. ds-overline and ds-stat-number are not rungs; the overline is the uppercase incarnation of the label role, the stat number a display value."
      >
        <Specimens rows={ROLES} />
      </Section>

      <Section
        label="Same roles, product"
        lede="Identical classes, resolved through data-surface. The face switches to the body family, the sizes freeze, the h1 takes the intense weight. Body and small do not move: a timestamp is 12px on both surfaces."
      >
        <Specimens rows={PRODUCT} surface="product" />
      </Section>

      <Section
        label="Long-form"
        lede="Editorial is not a third surface: it is web plus the ds-prose context, where the body role reads at 18 with relaxed leading. An article is heading-1, copy, then body inside ds-prose. Markdown you do not control keeps ds-prose-block."
      >
        <div className="s-row">
          <div className="s-label">
            <code className="typo-cls">.ds-prose &gt; .ds-body</code>
            <span className="typo-label typo-cls__what">reading body · 18</span>
          </div>
          <div className="s-content">
            <div className="ds-prose">
              <span className="ds-body">
                Inside the prose context the same body class reads at editorial strength, and the
                wrapper sets the rhythm.
              </span>
            </div>
          </div>
        </div>
        <div className="s-row">
          <div className="s-label">
            <code className="typo-cls">.ds-prose-block</code>
            <span className="typo-label typo-cls__what">markdown, CMS</span>
          </div>
          <div className="s-content">
            <span className="ds-prose-block">
              Markdown output, rendered without a class on any individual element.
            </span>
          </div>
        </div>
      </Section>

      <Section
        label="Small means irrelevant"
        lede="Body copy drifted to 14px across 21 consumers because no class said &ldquo;this is reading text&rdquo;. Content is ds-body, at full strength. ds-caption is the subordinate half of a pair, never a page&rsquo;s default. Only genuinely supplementary text is ds-meta, and a link is an action, not metadata."
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
                  <code>{`<h2 className="ds-heading-2">`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="The old names, frozen"
        lede="Published classes are never deleted and never renamed. These seven are deprecated at 0.38.0 and stay byte-identical until the next major; each has a successor, and migration is per page, eyes on the deltas."
      >
        {FROZEN.map((r) => (
          <div className="s-row" key={r.old}>
            <div className="s-label">
              <code className="typo-cls">.{r.old}</code>
              <span className="typo-label typo-cls__what">{r.delta}</span>
            </div>
            <div className="s-content">
              <code className="typo-cls">&rarr; .{r.next}</code>
            </div>
          </div>
        ))}
      </Section>

      <Section
        label="Bare headings"
        lede="h1 to h6 are fluid and safe on a phone, but they are the fallback, not the API. Today they keep the legacy sizes: 32 to 48, 26 to 36, 22 to 24, then 20, 18, 16. At the next major they read the role tokens of the ambient surface. Inside a page, name the role."
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
        lede="The raw ramp, under the classes. Reach for it when building a component, not when writing a page. The fluid sizes live in the role tokens, --ds-type-h1-size down to --ds-type-h4-size, with the frozen legacy four alongside until the next major."
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
        lede="Four semantic names are the brand lever: a typeface with no Medium cut re-maps robust once in theme.css instead of re-declaring classes. Roles read the names; the numbers underneath stay for raw work. Headings never set a weight by hand."
      >
        {[
          ["weight-delicate", "300 · light"],
          ["weight-standard", "400 · normal"],
          ["weight-robust", "500 · medium"],
          ["weight-intense", "600 · semibold"],
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
