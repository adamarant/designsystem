/* foundations/typography

   Same shell as every other docs page: .demo-section with a real
   .demo-section__title, one left edge, and therefore an entry in the page
   map. It used to run its own 12-column band — LABEL (4) | CONTENT (8) —
   which was the last survivor of a layout the rest of the docs dropped, and
   it cost the page its map entries and its alignment with its siblings.

   The one place two columns stay is the specimen list, and that is the
   point: a label rail on a fixed 11rem and the type beside it, so the eye
   reads one column of names and one column of type. Sizes here run from
   80px to 12px, and they only stop looking like a random staircase when
   every specimen starts at the same x.

   Chrome uses .typo-* classes; the one deliberate exception is the section
   lede, set in .demo-section__description so the page eats its own cooking.
   The ladder renders once: the surface, theme and viewport it resolves
   against are the header's segmented modes, not sections of this page. The
   raw ramps (text sizes, numeric weights, leading, tracking) are not
   documented here on purpose: the source is their truth. */

/* One sentence for every specimen, the classic one: comparing rungs only
   works when the text holds still. */
const SPECIMEN = "Almost before we knew it, we had left the ground."

type Spec = { cls: string; what: string }

/* The what-column speaks the scale's own arithmetic: body is x100 and every
   rung is its ratio (80px = x500), which is also how the Figma Foundation
   file names the tokens. */
const ROLES: Spec[] = [
  { cls: "ds-heading-1", what: "x500" },
  { cls: "ds-heading-2", what: "x400" },
  { cls: "ds-heading-3", what: "x300" },
  { cls: "ds-heading-4", what: "x250" },
  { cls: "ds-heading-5", what: "x200" },
  { cls: "ds-heading-6", what: "x150" },
  { cls: "ds-copy", what: "x125" },
  { cls: "ds-body", what: "x100" },
  { cls: "ds-caption", what: "x080" },
  { cls: "ds-meta", what: "x075" },
  { cls: "ds-overline", what: "x085 spaced" },
]

const WEIGHTS: [string, string][] = [
  ["weight-delicate", "300 · light"],
  ["weight-standard", "400 · normal"],
  ["weight-robust", "500 · medium"],
  ["weight-intense", "600 · semibold"],
]

/* The two-column rail. Label left, type right, a hairline between rows. */
function SpecRow({
  name,
  what,
  children,
}: {
  name: string
  what: string
  children: React.ReactNode
}) {
  return (
    <div className="typo-spec__row">
      <div className="typo-spec__label">
        <code>{name}</code>
        <span className="typo-label">{what}</span>
      </div>
      <div className="typo-spec__type">{children}</div>
    </div>
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

      <section className="demo-section">
        <h2 className="demo-section__title">The roles</h2>
        <p className="demo-section__description">
          Rendered at the resolution picked in the header. Web, the default, is the display face on
          fluid sizes, and the viewport control pins it between its clamp ends. Product
          (<code className="ex-code">data-surface=&quot;product&quot;</code>{" "}
          on the shell) is the body face on fixed sizes: density is a product decision, not the
          viewport&rsquo;s. Body and small never move: a timestamp is 12px everywhere.
        </p>
        <div className="typo-specs">
          {ROLES.map((r) => (
            <SpecRow key={r.cls} name={`.${r.cls}`} what={r.what}>
              <span className={r.cls}>{SPECIMEN}</span>
            </SpecRow>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Small means irrelevant</h2>
        <p className="demo-section__description">
          Body copy drifted to 14px across 21 consumers because no class said &ldquo;this is
          reading text&rdquo;. Content is ds-body, at full strength. ds-caption is the subordinate
          half of a pair, never a page&rsquo;s default, and a link is an action, not metadata.
        </p>
        <div className="typo-split">
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
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Weight</h2>
        <p className="demo-section__description">
          Roles read four semantic names. A typeface with no Medium cut re-maps robust once in
          theme.css instead of re-declaring classes; the numeric ramp stays in the source for raw
          work. Headings never set a weight by hand.
        </p>
        <div className="typo-specs">
          {WEIGHTS.map(([token, val]) => (
            <SpecRow key={token} name={token} what={val}>
              <div
                className="typo-weight"
                dangerouslySetInnerHTML={{
                  __html: `<span style="font-weight: var(--ds-${token})">${SPECIMEN}</span>`,
                }}
              />
            </SpecRow>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">The old names</h2>
        <p className="demo-section__description">
          Frozen means deprecated and unchanged until the next major, which removes them all at
          once. ds-hero-title, ds-section-title, ds-admin-title and the ds-editorial-* family went
          at 0.38.0; ds-heading-ui became ds-heading-plain at 0.41.0 and both were deprecated at
          0.42.0; ds-prose at 0.43.0. Successors: heading-1 and heading-2 on web; heading-1 and
          heading-3/4/5 on product; copy for editorial, lede and body alike; prose-block for
          prose. Bare h1 to h6 keep their legacy sizes and flip to the role tokens at the major.
          Deltas and the full map live in the migration guide.
        </p>
      </section>
    </>
  )
}
