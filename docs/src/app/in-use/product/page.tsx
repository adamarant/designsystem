/* in-use/product — the Product door.

   A whole application screen and nothing else. No note block, no seam, no
   frame, no docs page header: every explanation lives in a data-note on the
   element it describes, visible only on a click (see Inspect.tsx).

   Body face throughout, every size fixed, no clamp() anywhere. Density is
   carried by the spacing and the reading text stays at 16px while it happens.

   The shell is .ex-shell and not .ds-admin: .ds-admin__sidebar and
   .ds-admin__header are position:fixed against the viewport at 100dvh, so the
   real component escapes any container it is put in. Every type class inside
   the shell is the system's own.

   Table rows are sample data. The four figures are the real measurement
   recorded in src/base/typography.css on 30 July 2026. */

import { Inspect } from "@/components/Inspect";

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
    <Inspect>
      <div className="ex-canvas">
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
              <p className="ds-overline ex-shell__group-label">Design system</p>
              <div className="ex-nav-item ex-nav-item--active">
                <span
                  className="ds-body"
                  data-cls=".ds-body"
                  data-note="The active nav item is primary while the rest sit at secondary. Menus and footers are the one place an all-secondary block is correct, and the state is expressed as a surface change rather than by stacking colour utilities by hand."
                >
                  Type audit
                </span>
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
                <span className="ds-body ds-text-secondary">Design system</span>
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
                  <h2
                    className="ds-admin-title"
                    data-cls=".ds-admin-title"
                    data-note="Body face at 24px, fixed, no clamp. .ds-section-title would put 36px of editorial type on a screen made of data and a bare h1 would inherit 48px of it. Admin is functional, not editorial: it must not reach for the display face."
                  >
                    Type audit
                  </h2>
                  <p className="ds-body">
                    Which class every project reaches for when it sets reading
                    text, and how far down the ramp it goes after that.
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
                  <p
                    className="ds-stat-number ds-tabular-nums"
                    data-cls=".ds-stat-number"
                    data-note="Tabular figures, so the digits line up in a column and the eye compares magnitude without reading. The class also sets --ds-font-display: invisible here because this site aliases both faces onto Inter, but on a consumer with a real display face these figures come out editorial on a dashboard."
                  >
                    610
                  </p>
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
                  <h3
                    className="ds-heading-ui ds-text-lg"
                    data-cls=".ds-heading-ui .ds-text-lg"
                    data-note="The class carries family and weight and no size, so on an h3 it inherits 24px and collides with the 24px page title. The size utility steps it down by hand. Below .ds-admin-title the family has no sized member: a real gap."
                  >
                    By project
                  </h3>
                  <span className="ds-badge ds-badge--warning ds-badge--upper">
                    3 need review
                  </span>
                  <span className="ds-meta ex-app__spacer">7 of 21</span>
                </div>
                <div className="ds-table-wrapper">
                  <table
                    className="ds-table"
                    data-cls=".ds-table"
                    data-note="14px, and that is the component rather than a choice. A table cell is scanned, not read, which is the one place small is right. The detail block underneath is .ds-body at 16px, because that text is read."
                  >
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
                            <span className={BADGE[r.state]}>{r.state}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination: the count is content and reads at body size,
              the range under it is genuinely supplementary. */}
                <div className="ex-pager">
                  <p
                    className="ds-meta"
                    data-cls=".ds-meta"
                    data-note="12px tertiary. A range under a table is genuinely supplementary, which is the test for this class: if the text matters it is not meta. The buttons beside it are actions and stay at full size, however small they look."
                  >
                    Showing 1 to 7 of 21 projects
                  </p>
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
                    Reading text is set with a size utility rather than a role,
                    so the page has no class that means &ldquo;this is
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
    </Inspect>
  );
}
