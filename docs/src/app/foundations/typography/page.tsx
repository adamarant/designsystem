/* foundations/typography

   Built on the structure of brand.s25.studio: a 12-column grid where every
   row is LABEL (4 cols) | CONTENT (8 cols), the label column runs empty on
   continuation rows, and every section carries the same 64px of padding.

   Chrome uses .typo-* / .s-* classes only. No DS typography class appears
   outside a specimen, so everything you see set in the system IS the demo.
   The ladder renders once: the surface, theme and viewport it resolves
   against are the header's segmented modes, not sections of this page.
   The raw ramps (text sizes, numeric weights, leading, tracking) are not
   documented here on purpose: the source is their truth. */

type Spec = { cls: string; what: string; sample: string }

const ROLES: Spec[] = [
  { cls: "ds-heading-1", what: "page title", sample: "We build things that last" },
  { cls: "ds-heading-2", what: "section", sample: "How we work" },
  { cls: "ds-heading-3", what: "subsection", sample: "The studio in numbers" },
  { cls: "ds-heading-4", what: "group", sample: "Selected work" },
  { cls: "ds-heading-5", what: "minor", sample: "Process" },
  { cls: "ds-heading-6", what: "smallest", sample: "Colophon" },
  { cls: "ds-copy", what: "lede", sample: "Every page we rebuilt this year ended up with fewer elements than the one it replaced." },
  { cls: "ds-body", what: "content", sample: "The default for any content, at full strength, whatever else is on the card." },
  { cls: "ds-caption", what: "half of a pair", sample: "Shot on location in Verona, 2026." },
  { cls: "ds-meta", what: "small", sample: "12 March 2026 · 4 min" },
  { cls: "ds-overline", what: "label, uppercase", sample: "Case study" },
]

/* One specimen per grid row: the class name in the page's own label column,
   the type in the content column. */
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
          One ladder of roles. Pick by what the text <em>is</em>; the surface decides the number.
          One class per element, never a stack.
        </p>
      </div>

      <Section
        label="The roles"
        lede={
          <>
            Rendered at the resolution picked in the header. Web, the default, is the display face
            on fluid sizes, and the viewport control pins it between its clamp ends. Product
            (<code className="ex-code">data-surface=&quot;product&quot;</code> on the shell) is the
            body face on fixed sizes: density is a product decision, not the viewport&rsquo;s.
            Body and small never move: a timestamp is 12px everywhere.
          </>
        }
      >
        <Specimens rows={ROLES} />
        <div className="s-row">
          <div className="s-label">
            <code className="typo-cls">.ds-prose &gt; .ds-body</code>
            <span className="typo-label typo-cls__what">reading body</span>
          </div>
          <div className="s-content">
            <div className="ds-prose">
              <span className="ds-body">
                Editorial is web plus context, not a third surface: inside ds-prose the same body
                class reads at 18 with relaxed leading.
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="Small means irrelevant"
        lede="Body copy drifted to 14px across 21 consumers because no class said &ldquo;this is reading text&rdquo;. Content is ds-body, at full strength. ds-caption is the subordinate half of a pair, never a page&rsquo;s default, and a link is an action, not metadata."
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
        label="Weight"
        lede="Roles read four semantic names. A typeface with no Medium cut re-maps robust once in theme.css instead of re-declaring classes; the numeric ramp stays in the source for raw work. Headings never set a weight by hand."
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
      </Section>

      <Section
        label="The old names"
        lede="ds-hero-title, ds-section-title, ds-admin-title, ds-heading-ui and the ds-editorial-* family are frozen: deprecated at 0.38.0, unchanged until the next major. Successors: heading-1 and heading-2 on web; heading-1 and heading-3/4/5 on product; copy and body-in-prose for editorial. Bare h1 to h6 keep their legacy sizes and flip to the role tokens at the major. Deltas and the full map live in the spec."
      />
    </>
  )
}
