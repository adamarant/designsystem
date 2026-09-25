/* /deprecated. The one place anything deprecated is written down.

   It exists because the alternative was worse: a deprecated component with
   its own page, its own demo and its own nav entry looks exactly like a
   live one, and a reader browsing the sidebar has no way to tell. Five
   pages (chip, tag, stat-card, bottom-sheet, and the editorial half of
   prose) were doing precisely that. They are gone; what they said that
   still matters is a row here.

   No demos on this page, deliberately. A demo is an invitation, and none of
   these should be reached for. The row says what to use instead and why the
   thing was retired, which is all a reader needs, and the reader who needs
   more has the migration guide.

   Last in the sidebar, on its own, for the same reason. */

type Row = {
  what: string
  since: string
  use: string
  why: string
}

const TYPE: Row[] = [
  {
    what: ".ds-hero-title",
    since: "0.38.0",
    use: ".ds-heading-1",
    why: "The ladder names roles; this named a place on the page. Web is 56 to 80px, against this 40 to 72.",
  },
  {
    what: ".ds-section-title",
    since: "0.38.0",
    use: ".ds-heading-2",
    why: "Same reason. Web is 40 to 56px, against this 30 to 36.",
  },
  {
    what: ".ds-admin-title",
    since: "0.38.0",
    use: '.ds-heading-1 under data-surface="product"',
    why: "The surface already says it is a panel; the class said it twice.",
  },
  {
    what: ".ds-heading-ui",
    since: "0.41.0",
    use: ".ds-heading-plain, then see below",
    why: '"UI" described an imaginary place, not a treatment, which is how a panel class ended up on 75 public pages.',
  },
  {
    what: ".ds-heading-plain",
    since: "0.42.0",
    use: ".ds-font-medium, or .ds-font-sans .ds-font-medium",
    why: "Not a role: it named a treatment and could not size anything, so 67 of its 129 uses carried a size utility beside it.",
  },
  {
    what: ".ds-editorial-title",
    since: "0.38.0",
    use: ".ds-heading-1",
    why: "The editorial family predates the ladder and duplicates three of its rungs.",
  },
  {
    what: ".ds-editorial-lede",
    since: "0.38.0",
    use: ".ds-copy",
    why: "Same curve, and copy follows the surface instead of fighting it.",
  },
  {
    what: ".ds-editorial-body",
    since: "0.38.0",
    use: ".ds-prose-block",
    why: "Not a rename: 18px on the root against 16 inherited, headings on tokens against element sizes, --ds-space-5 rhythm against em. Closed across 8 consumers in 0.40.0.",
  },
  {
    what: ".ds-prose",
    since: "0.43.0",
    use: ".ds-prose-block",
    why: "Two prose components was one too many, and where they overlapped they disagreed: links are info and always underlined here, interactive and on hover there.",
  },
]

const COMPONENTS: Row[] = [
  {
    what: ".ds-chip",
    since: "0.38.0",
    use: ".ds-badge--interactive",
    why: "Badge absorbed it. 14 uses across 4 consumers against badge's 169 across 16, and the React wrapper had none at all.",
  },
  {
    what: ".ds-tag",
    since: "0.38.0",
    use: ".ds-badge",
    why: "Three classes named the same object. --primary maps to .ds-badge--subtle, not --primary: the tinted neutral, not the info blue.",
  },
  {
    what: ".ds-stat-card",
    since: "0.38.0",
    use: ".ds-card + .ds-stat",
    why: "It re-declared the card's box declaration for declaration, so it could never receive --hover, --interactive, --elevated, or the container query that restacks a card.",
  },
  {
    what: ".ds-bottom-sheet",
    since: "0.38.0",
    use: ".ds-drawer--bottom",
    why: "The same drawer with different numbers: both pin to the bottom edge, both slide up, both are full width.",
  },
  {
    what: ".ds-form-group",
    since: "0.38.0",
    use: ".ds-field",
    why: "A second wrapper vocabulary beside field.css. Watch the label: .ds-label nested in .ds-field doubles the gap, so the part you want is .ds-field__label.",
  },
  {
    what: ".ds-help",
    since: "0.38.0",
    use: ".ds-field__hint",
    why: "Zero uses across the consumers, so nothing had to migrate.",
  },
  {
    what: ".ds-toolbar__segmented",
    since: "0.38.0",
    use: ".ds-segmented, inside the toolbar",
    why: "A second segmented control that had drifted on every visible axis, so the same control looked different depending on where it sat.",
  },
]

const UTILITIES: Row[] = [
  {
    what: ".ds-bg-base, -subtle, -muted, -elevated, -hover, -nav",
    since: "27 Jul 2026",
    use: ".ds-bg, .ds-surface-plain / -muted / -elevated / -hover",
    why: "Previous names, identical declarations, so nothing moves. Codemod: scripts/codemod.js <dir> --fix",
  },
  {
    what: ".ds-border-nav",
    since: "28 Jul 2026",
    use: ".ds-border",
    why: "Built on --ds-color-nav-border, itself deprecated, and unused across every consumer.",
  },
  {
    what: ".ds-grip",
    since: "28 Jul 2026",
    use: ".ds-text-secondary + group-hover:.ds-text-primary",
    why: "One hardcoded instance of a generic mechanism, and it only matched .group, not the .ds-group this system ships.",
  },
]

const TOKENS: Row[] = [
  {
    what: "--ds-color-bg-subtle / -muted / -muted-hover / -muted-active / -elevated / -elevated-hover",
    since: "n/d",
    use: "--ds-color-surface-*",
    why: "One prefix carried three meanings. Same values, so nothing moves.",
  },
  {
    what: "--ds-color-overlay-hover / -active",
    since: "n/d",
    use: "--ds-color-surface-hover / -active",
    why: "An overlay is not a surface state.",
  },
  {
    what: "--ds-color-nav-bg / -border",
    since: "n/d",
    use: "--ds-color-surface + backdrop-filter",
    why: "Too specific to be tokens.",
  },
  {
    what: "--ds-color-success-solid / -warning-solid / -error-solid / -info-solid",
    since: "n/d",
    use: "--ds-color-success / -warning / -error / -info",
    why: "Identical in value to the ones they shadowed, and confusing in name.",
  },
]

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className="ds-table-wrapper">
      <table className="ds-table ds-table--compact dep-table">
        <thead>
          <tr>
            <th>Deprecated</th>
            <th>Since</th>
            <th>Use instead</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.what}>
              <td>
                <code>{r.what}</code>
              </td>
              <td className="dep-table__since">{r.since}</td>
              <td>
                <code>{r.use}</code>
              </td>
              <td className="dep-table__why">{r.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function DeprecatedPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Deprecated</h1>
        <p>
          Everything on its way out, and nowhere else. Deprecated means frozen: it still works,
          unchanged, and the next major removes the lot in one release. Nothing here has a demo on
          purpose: a demo is an invitation, and none of these should be reached for.
        </p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Type roles</h2>
        <p className="demo-section__description">
          The pre-ladder names. Each one named a place on the page (a hero, a section, a panel),
          and the ladder names what the text <em>is</em>, letting the surface decide the number.
          Deltas for every swap are in the migration guide; they are not all zero.
        </p>
        <Table rows={TYPE} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Components</h2>
        <p className="demo-section__description">
          Every one of these was a second copy of something the system already had. The pattern
          repeats so exactly it is worth naming: a component that re-declares another component&rsquo;s
          box can never receive that component&rsquo;s improvements, because as far as the system is
          concerned it is not one.
        </p>
        <Table rows={COMPONENTS} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Utilities</h2>
        <p className="demo-section__description">
          Renames, mostly, with identical declarations behind them.
        </p>
        <Table rows={UTILITIES} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Tokens</h2>
        <p className="demo-section__description">
          Same rule as classes: a token is never renamed in place. The new name is added, the old
          one keeps its value, and the major removes it.
        </p>
        <Table rows={TOKENS} />
      </section>
    </>
  )
}
