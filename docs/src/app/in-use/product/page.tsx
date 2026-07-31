/* in-use/product — the Product door, as a finished page.

   An admin screen. The whole point of this one is what it does NOT do: no
   display face anywhere, no clamp() on any size, no hero. Density comes out
   of the spacing, never out of a smaller body size, which is the trap this
   door exists to name.

   Table rows are sample data. The four figures at the top are the real
   measurement recorded in src/base/typography.css when the text roles were
   added on 30 July 2026. */

type Row = {
  project: string;
  cls: string;
  uses: number;
  smallest: string;
  state: "clean" | "review" | "drift";
};

const ROWS: Row[] = [
  {
    project: "esys",
    cls: ".ds-body",
    uses: 184,
    smallest: "12px",
    state: "clean",
  },
  {
    project: "studio",
    cls: ".ds-body",
    uses: 141,
    smallest: "12px",
    state: "clean",
  },
  {
    project: "riccardo",
    cls: ".ds-text-sm",
    uses: 96,
    smallest: "10px",
    state: "review",
  },
  {
    project: "dokle",
    cls: ".ds-editorial-body",
    uses: 72,
    smallest: "12px",
    state: "clean",
  },
  {
    project: "vibhe",
    cls: ".ds-text-sm",
    uses: 68,
    smallest: "10px",
    state: "drift",
  },
  {
    project: "stokefy",
    cls: ".ds-body",
    uses: 54,
    smallest: "12px",
    state: "clean",
  },
  {
    project: "market-anarchy",
    cls: ".ds-text-sm",
    uses: 41,
    smallest: "10px",
    state: "review",
  },
];

const BADGE: Record<Row["state"], string> = {
  clean: "ds-badge ds-badge--success",
  review: "ds-badge ds-badge--warning",
  drift: "ds-badge ds-badge--error",
};

export default function InUseProductPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Product</h1>
        <p>
          An admin screen. Body face, fixed sizes, no fluid type. Density is
          carried by the spacing, and the reading text stays at 16px while it
          happens.
        </p>
      </div>

      <section className="s-section">
        <div className="s-container">
          <div className="s-row ex-note">
            <div className="s-label">
              <span className="typo-label">Notes on the page</span>
            </div>
            <div className="s-content">
              <p className="typo-body">
                Everything from here to the frame is documentation talking.
                Inside the frame is a whole screen: sidebar, header, account,
                content, pagination. A dashboard is mostly chrome, and chrome is
                where a type system actually gets tested, because that is where
                nav items, counts, labels and states all have to hold at small
                sizes at once.
              </p>
              <ul className="typo-body">
                <li>
                  <strong>The page title is the body face.</strong> The h1 is{" "}
                  <code className="ex-code">.ds-admin-title</code>, body face at
                  24px. <code className="ex-code">.ds-section-title</code> would
                  put 36px of editorial type on a screen made of data, and a
                  bare <code className="ex-code">h1</code> would inherit 48px of
                  it.
                </li>
                <li>
                  <strong>
                    <code className="ex-code">.ds-heading-ui</code> carries no
                    size.
                  </strong>{" "}
                  It sets family and weight and stops there, so an{" "}
                  <code className="ex-code">h3</code> wearing it inherits 24px
                  and collides with the 24px page title. Both section headings
                  here add <code className="ex-code">.ds-text-lg</code> to step
                  down. The sized member of that family is{" "}
                  <code className="ex-code">.ds-admin-title</code>, and below it
                  there is nothing.
                </li>
                <li>
                  <strong>Nothing here is fluid.</strong> Every size on the
                  screen is fixed. A dashboard that reflows its type with the
                  window is telling the user their density depends on how wide
                  they dragged it.
                </li>
                <li>
                  <strong>Density is spacing.</strong> Blocks sit 32px apart
                  here against 128px on the Web page, and the padding inside
                  them is tighter. The body text is still 16px in both.
                </li>
                <li>
                  <strong>One frame, not four cards.</strong> The figures share
                  a single bordered strip with hairline dividers. Four separate
                  cards in a row is the default admin look: four borders, four
                  radii and four surfaces all competing at equal weight, and
                  nothing on the screen leads.
                </li>
                <li>
                  <strong>The table gets the full width.</strong> The detail
                  sits under it rather than beside it. A panel in the next
                  column squeezes six columns of data into two thirds of the
                  frame and clips the last two.
                </li>
                <li>
                  <strong>Numbers are tabular and right aligned.</strong>{" "}
                  <code className="ex-code">.ds-tabular-nums</code> plus{" "}
                  <code className="ex-code">.ds-table__cell--number</code>: the
                  digits line up in a column so the eye can compare magnitude
                  without reading.
                </li>
                <li>
                  <strong>
                    The 14px in the table is the component, not a choice.
                  </strong>{" "}
                  <code className="ex-code">.ds-table</code> ships at 14px,
                  which is the one place small is right: a table cell is
                  scanned, not read. The detail block under it is{" "}
                  <code className="ex-code">.ds-body</code> at 16px, because
                  that text is read.
                </li>
                <li>
                  <strong>
                    One element here does reach for the display face.
                  </strong>{" "}
                  <code className="ex-code">.ds-stat-number</code> sets{" "}
                  <code className="ex-code">--ds-font-display</code>, and so
                  does <code className="ex-code">.ds-stat-card__value</code>. On
                  this site that token is aliased to the same Inter, so nothing
                  shows. In a consumer that loads a separate display face, the
                  four figures at the top of this screen come out in editorial
                  type on a dashboard, which is the one thing this door exists
                  to prevent.
                </li>
                <li>
                  <strong>The shell is not .ds-admin.</strong>{" "}
                  <code className="ex-code">.ds-admin__sidebar</code> and{" "}
                  <code className="ex-code">.ds-admin__header</code> are{" "}
                  <code className="ex-code">position: fixed</code> against the
                  viewport at <code className="ex-code">100dvh</code>, so the
                  real component cannot be embedded in a frame: it escapes and
                  covers the documentation. The chrome here is drawn locally.
                  Every type class inside it is the system&rsquo;s own.
                </li>
              </ul>
            </div>
          </div>

          <div className="ex-seam">
            <span className="typo-label">Below: the screen</span>
            <span className="ex-canvas__cls">
              Nothing past this line is a note
            </span>
          </div>

          <div className="ex-canvas">
            <div className="ex-canvas__bar">
              <span className="typo-label">Admin screen</span>
              <span className="ex-canvas__cls">
                .ds-admin-title .ds-heading-ui .ds-body .ds-meta
                .ds-tabular-nums
              </span>
            </div>

            <div className="ex-shell">
              {/* ── Sidebar ──────────────────────────────────────────────── */}
              <aside className="ex-shell__side">
                <div className="ex-shell__brand">
                  <span className="ds-body ds-font-medium">Adamarant</span>
                  <span className="ds-meta">Ops</span>
                </div>

                <div className="ex-shell__group">
                  <p className="ds-overline ex-shell__group-label">Overview</p>
                  <div className="ex-nav-item">
                    <span className="ds-body">Dashboard</span>
                  </div>
                  <div className="ex-nav-item">
                    <span className="ds-body">Projects</span>
                    <span className="ds-meta ds-tabular-nums">21</span>
                  </div>
                </div>

                <div className="ex-shell__group">
                  <p className="ds-overline ex-shell__group-label">
                    Design system
                  </p>
                  <div className="ex-nav-item ex-nav-item--active">
                    <span className="ds-body">Type audit</span>
                    <span className="ds-badge ds-badge--warning ds-badge--upper">
                      3
                    </span>
                  </div>
                  <div className="ex-nav-item">
                    <span className="ds-body">Colour audit</span>
                  </div>
                  <div className="ex-nav-item">
                    <span className="ds-body">Components</span>
                    <span className="ds-meta ds-tabular-nums">54</span>
                  </div>
                  <div className="ex-nav-item">
                    <span className="ds-body">Releases</span>
                  </div>
                </div>

                <div className="ex-shell__side-foot">
                  <p className="ds-overline">Version</p>
                  <p className="ds-body ds-tabular-nums">0.41.2</p>
                </div>
              </aside>

              {/* ── Main ─────────────────────────────────────────────────── */}
              <div className="ex-shell__main">
                <div className="ex-shell__top">
                  <div className="ex-crumbs">
                    <span className="ds-body ds-text-secondary">
                      Design system
                    </span>
                    <span className="ds-meta">/</span>
                    <span className="ds-body">Type audit</span>
                  </div>
                  <div className="ex-shell__top-right">
                    <div className="ex-fauxfield">
                      <span className="ds-body ds-text-tertiary">
                        Search projects
                      </span>
                    </div>
                    <span className="ex-avatar">
                      <span className="ds-meta">RM</span>
                    </span>
                  </div>
                </div>

                <div className="ex-app">
                  {/* ── Page header ────────────────────────────────────────── */}
                  <div className="ex-app__head">
                    <div className="ex-app__head-text">
                      <p className="ds-overline">Audit</p>
                      <h2 className="ds-admin-title">Type audit</h2>
                      <p className="ds-body">
                        Which class every project reaches for when it sets
                        reading text, and how far down the ramp it goes after
                        that.
                      </p>
                    </div>
                    <div className="ex-app__actions">
                      <button
                        type="button"
                        className="ds-btn ds-btn--outline ds-btn--sm"
                      >
                        Export
                      </button>
                      <button type="button" className="ds-btn ds-btn--sm">
                        Run audit
                      </button>
                    </div>
                  </div>

                  {/* ── Figures ─────────────────────────────────────────────
                  One divided strip. Four separate bordered cards gave four
                  borders, four radii and four surfaces competing at equal
                  weight, which is the default admin look and reads as noise. */}
                  <div className="ex-app__block ex-app__figures">
                    <div className="ex-figure">
                      <p className="ds-overline">ds-text-sm</p>
                      <p className="ds-stat-number ds-tabular-nums">610</p>
                      <p className="ds-meta ex-figure__detail">
                        Body copy that drifted to 14px
                      </p>
                    </div>
                    <div className="ex-figure">
                      <p className="ds-overline">ds-text-xs</p>
                      <p className="ds-stat-number ds-tabular-nums">286</p>
                      <p className="ds-meta ex-figure__detail">
                        Everything subordinate to it
                      </p>
                    </div>
                    <div className="ex-figure">
                      <p className="ds-overline">ds-text-base</p>
                      <p className="ds-stat-number ds-tabular-nums">58</p>
                      <p className="ds-meta ex-figure__detail">
                        The size nobody reached for
                      </p>
                    </div>
                    <div className="ex-figure">
                      <p className="ds-overline">Projects</p>
                      <p className="ds-stat-number ds-tabular-nums">21</p>
                      <p className="ds-meta ex-figure__detail">
                        All audited this week
                      </p>
                    </div>
                  </div>

                  {/* ── Table, full width ──────────────────────────────────── */}
                  <div className="ex-app__block">
                    <div className="ex-app__toolbar">
                      <h3 className="ds-heading-ui ds-text-lg">By project</h3>
                      <span className="ds-badge ds-badge--warning ds-badge--upper">
                        3 need review
                      </span>
                      <span className="ds-meta ex-app__spacer">7 of 21</span>
                    </div>
                    <div className="ds-table-wrapper">
                      <table className="ds-table">
                        <thead>
                          <tr>
                            <th>Project</th>
                            <th>Reading text set with</th>
                            <th className="ds-table__cell--number">Uses</th>
                            <th className="ds-table__cell--number">Smallest</th>
                            <th>State</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ROWS.map((r) => (
                            <tr key={r.project}>
                              <td className="ds-table__cell--primary">
                                {r.project}
                              </td>
                              <td>
                                <code className="ex-code">{r.cls}</code>
                              </td>
                              <td className="ds-table__cell--number ds-tabular-nums">
                                {r.uses}
                              </td>
                              <td className="ds-table__cell--number ds-tabular-nums">
                                {r.smallest}
                              </td>
                              <td>
                                <span className={BADGE[r.state]}>
                                  {r.state}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination: the count is content and reads at body size,
                    the range under it is genuinely supplementary. */}
                    <div className="ex-pager">
                      <p className="ds-meta">Showing 1 to 7 of 21 projects</p>
                      <div className="ex-pager__btns">
                        <button
                          type="button"
                          className="ds-btn ds-btn--outline ds-btn--sm"
                          aria-disabled="true"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="ds-btn ds-btn--outline ds-btn--sm"
                        >
                          Next
                        </button>
                      </div>
                    </div>

                    {/* ── Selected row, full width under the table ────────── */}
                    <div className="ex-app__detail">
                      <div className="ex-app__detail-head">
                        <div className="ex-app__detail-name">
                          <h4 className="ds-heading-ui ds-text-lg">vibhe</h4>
                          <span className="ds-badge ds-badge--error ds-badge--upper">
                            Drift
                          </span>
                        </div>
                        <button
                          type="button"
                          className="ds-btn ds-btn--outline ds-btn--sm"
                        >
                          Open report
                        </button>
                      </div>
                      <p className="ds-body ex-measure ex-app__detail-text">
                        Reading text is set with a size utility rather than a
                        role, so the page has no class that means &ldquo;this is
                        content&rdquo;. Everything under it had to go smaller to
                        stay subordinate.
                      </p>
                      <div className="ex-app__detail-grid">
                        <div className="ex-meta">
                          <p className="ds-overline">Body class</p>
                          <p className="ds-body">
                            <code className="ex-code">.ds-text-sm</code>
                          </p>
                        </div>
                        <div className="ex-meta">
                          <p className="ds-overline">Smallest text</p>
                          <p className="ds-body ds-tabular-nums">10px</p>
                        </div>
                        <div className="ex-meta">
                          <p className="ds-overline">Files affected</p>
                          <p className="ds-body ds-tabular-nums">23</p>
                        </div>
                        <div className="ex-meta">
                          <p className="ds-overline">Last audited</p>
                          <p className="ds-body">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
