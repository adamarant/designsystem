/* TEMPORARY — the three open DS decisions, 9 Aug 2026.

   Not in the sidebar on purpose: it is not a foundation and not a component,
   and the nav has four groups with rules. Reach it at /decisions.

   Every preview on this page is RENDERED, not described. Where an option
   proposes something that does not exist yet, it is drawn with a .dec-* class
   in demo.css and labelled as a proposal — so nothing here can be mistaken
   for a component the DS already ships.

   DELETE this directory and the "TEMPORARY — /decisions" block in demo.css
   once the three are decided. */

/* The intro paragraph is not decoration: it stops the heading from being
   :first-child, which both wrappers special-case. Without it the preview
   shows a zeroed top margin and hides the rhythm that is half the decision. */
const ARTICLE = {
  intro: "Twenty-one consumers moved to the role ladder, and the typography classes went to zero.",
  h: "What the migration actually cost",
  p1: "The three families still standing are the ones nobody could decide alone. Each needs a ruling before a single consumer file is worth touching.",
  p2: "The question is not which wrapper is prettier. It is which one a consumer can adopt without reading its source first.",
}

function Article() {
  return (
    <>
      <p>{ARTICLE.intro}</p>
      <h2>{ARTICLE.h}</h2>
      <p>{ARTICLE.p1}</p>
      <p>{ARTICLE.p2}</p>
    </>
  )
}

function Section({
  n,
  label,
  lede,
  children,
}: {
  n: string
  label: string
  lede?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="s-section">
      <div className="s-container">
        <div className="s-row">
          <div className="s-label">
            <span className="typo-label">{n}</span>
            <code className="typo-cls">{label}</code>
          </div>
          {lede ? (
            <div className="s-content">
              <p className="ds-copy">{lede}</p>
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="s-row">
      <div className="s-label" />
      <div className="s-content">{children}</div>
    </div>
  )
}

function Option({
  tag,
  title,
  pick,
  children,
}: {
  tag: string
  title: string
  pick?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={pick ? "dec-option dec-option--pick" : "dec-option"}>
      <div className="dec-option__tag">
        <span className="ds-badge ds-badge--sm">{tag}</span>
        <span className="ds-heading-6">{title}</span>
      </div>
      {children}
    </div>
  )
}

/* The same admin panel, rendered twice. The only difference between the two
   is the data-surface attribute on the wrapper. */
function AdminPanel() {
  return (
    <div className="dec-render dec-render--tight">
      <h2 className="ds-heading-3">Subscriptions</h2>
      <p className="ds-body">Nine active, two past due.</p>
      <h3 className="ds-heading-5">Past due</h3>
      <p className="ds-caption">Retry runs nightly at 02:00.</p>
    </div>
  )
}

export default function DecisionsPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Three decisions</h1>
        <p>
          What stands between 21 migrated consumers and the 1.0.0 that removes the frozen
          classes. Every option below is rendered live: what you see is what the choice ships.
        </p>
      </div>

      <section className="s-section">
        <div className="s-container">
          <Row>
            <div className="dec-note">
              <p className="ds-body">
                Temporary page. It is not in the sidebar, and it gets deleted with its styles
                once the three are settled. Counts are from the 21 consumers on 9 Aug 2026.
              </p>
            </div>
          </Row>
        </div>
      </section>

      {/* ───────────────────────── 1 ───────────────────────── */}
      <Section
        n="Decision 1"
        label=".ds-heading-ui"
        lede={
          <>
            129 uses across 18 consumers, the largest family left. It declares a family and a
            weight and <em>no size</em>, so today the element underneath decides: the same class
            is 36px on an <code className="ex-code">h2</code> and 24px on an{" "}
            <code className="ex-code">h3</code>. Its successors are the ladder&rsquo;s
            heading-3/4/5 under <code className="ex-code">data-surface=&quot;product&quot;</code>{" "}
            — which is exactly the attribute nothing declares yet.
          </>
        }
      >
        <Row>
          <div className="dec-options dec-options--2">
            <Option tag="A" title="AdminShell declares it" pick>
              <p className="ds-body">
                One line in <code className="ex-code">ds-admin</code>. Every admin panel in the
                ecosystem resolves the ladder at product sizes, and the 129 uses become a
                mechanical swap afterwards.
              </p>
              <div data-surface="product">
                <AdminPanel />
              </div>
              <ul className="dec-facts ds-caption">
                <li><b>1</b><span>line changed, in one package</span></li>
                <li><b>15</b><span>consumers get it without touching a file</span></li>
                <li><b>ds-admin</b><span>needs a release, and admins re-checked once</span></li>
              </ul>
            </Option>

            <Option tag="B" title="Each consumer marks its own shell">
              <p className="ds-body">
                No DS change. Every project puts the attribute on its own admin wrapper — the
                same edit, 15 times, and every future clone inherits the omission.
              </p>
              <AdminPanel />
              <ul className="dec-facts ds-caption">
                <li><b>15</b><span>edits, one per consumer</span></li>
                <li><b>0</b><span>DS releases</span></li>
                <li><b>each</b><span>new clone starts wrong again</span></li>
              </ul>
            </Option>
          </div>
        </Row>

        <Row>
          <p className="ds-body">
            The two panels above are the same markup. The left one sits inside{" "}
            <code className="ex-code">data-surface=&quot;product&quot;</code>: the ladder switches
            to the body face at fixed, denser sizes. The right one is what an admin renders today
            if a consumer adopts the ladder without the attribute — page-hero type inside a panel.
            That is the whole decision.
          </p>
        </Row>
      </Section>

      {/* ───────────────────────── 2 ───────────────────────── */}
      <Section
        n="Decision 2"
        label=".ds-tag--primary"
        lede={
          <>
            7 uses left, in dokle and cavallinogroup, and the smallest of the three by volume.
            The migration guide calls <code className="ex-code">.ds-tag</code> →{" "}
            <code className="ex-code">.ds-badge</code> &ldquo;optional and safe&rdquo;. It is not:{" "}
            <code className="ex-code">--primary</code> reads the interactive tokens and renders a
            tinted neutral that no badge modifier reproduces.
          </>
        }
      >
        <Row>
          <div className="dec-render">
            <p className="ds-caption">Today — the three tag looks</p>
            <div className="dec-pills">
              <span className="ds-tag">Neutral</span>
              <span className="ds-tag ds-tag--primary">Primary</span>
              <span className="ds-tag ds-tag--inverted">Inverted</span>
            </div>
            <p className="ds-caption">What badge ships</p>
            <div className="dec-pills">
              <span className="ds-badge">Base</span>
              <span className="ds-badge ds-badge--outline">Outline</span>
              <span className="ds-badge ds-badge--primary">Primary</span>
              <span className="ds-badge ds-badge--inverted">Inverted</span>
              <span className="ds-badge ds-badge--active">Active</span>
            </div>
          </div>
        </Row>

        <Row>
          <p className="ds-body">
            Line them up and the gap is visible: badge&rsquo;s <code className="ex-code">
            --primary</code> is the info colour, its <code className="ex-code">--outline</code> is
            transparent with secondary text. Neither is the tinted neutral above. Note also that a
            badge sits about 3px shorter than a tag — 2px less vertical padding and a snugger
            leading.
          </p>
        </Row>

        <Row>
          <div className="dec-options dec-options--3">
            <Option tag="A" title="Add badge--subtle" pick>
              <p className="ds-body">
                Badge gains the one look it is missing. The map becomes complete and the two
                consumers are a rename.
              </p>
              <div className="dec-render dec-render--tight">
                <div className="dec-pills">
                  <span className="ds-badge dec-badge-subtle">Proposal</span>
                  <span className="ds-badge dec-badge-subtle">Awards</span>
                </div>
              </div>
              <p className="ds-caption">
                Rendered from a docs class, not from the DS: this is what the modifier would
                declare.
              </p>
              <ul className="dec-facts ds-caption">
                <li><b>+1</b><span>modifier in the DS</span></li>
                <li><b>7</b><span>uses become a rename</span></li>
              </ul>
            </Option>

            <Option tag="B" title="Rule: compose it locally">
              <p className="ds-body">
                Tag maps to plain badge; dokle and cavallinogroup carry their own tint. The DS
                stays smaller, two consumers gain a custom class each.
              </p>
              <div className="dec-render dec-render--tight">
                <div className="dec-pills">
                  <span className="ds-badge">Proposal</span>
                  <span className="ds-badge">Awards</span>
                </div>
              </div>
              <ul className="dec-facts ds-caption">
                <li><b>0</b><span>DS additions</span></li>
                <li><b>2</b><span>consumers need a grant</span></li>
              </ul>
            </Option>

            <Option tag="C" title="Un-deprecate tag">
              <p className="ds-body">
                Admit tag is its own component and keep it past 1.0.0. Cheapest today, and the
                duplication the 0.38 round set out to remove comes back.
              </p>
              <div className="dec-render dec-render--tight">
                <div className="dec-pills">
                  <span className="ds-tag ds-tag--primary">Proposal</span>
                  <span className="ds-tag ds-tag--primary">Awards</span>
                </div>
              </div>
              <ul className="dec-facts ds-caption">
                <li><b>0</b><span>work anywhere</span></li>
                <li><b>+1</b><span>component that badge already covers</span></li>
              </ul>
            </Option>
          </div>
        </Row>
      </Section>

      {/* ───────────────────────── 3 ───────────────────────── */}
      <Section
        n="Decision 3"
        label=".ds-editorial-body"
        lede={
          <>
            31 uses across 8 consumers, and the one the guide got wrong: it names{" "}
            <code className="ex-code">.ds-copy</code> as the successor, but copy is a leaf text
            role and covers none of the 25 prose rules. The real candidate already exists —{" "}
            <code className="ex-code">.ds-prose-block</code>, 22 rules, and it is a structural
            superset: it dresses all six heading levels where editorial-body stops at h4.
          </>
        }
      >
        <Row>
          <div className="dec-options dec-options--2">
            <Option tag="A" title="prose-block is the successor" pick>
              <div className="dec-render">
                <div className="ds-prose-block">
                  <Article />
                </div>
              </div>
              <ul className="dec-facts ds-caption">
                <li><b>h1-h6</b><span>covered, vs h2-h4 today</span></li>
                <li><b>em</b><span>rhythm, not spacing tokens</span></li>
                <li><b>none</b><span>no size on the root or the headings</span></li>
              </ul>
            </Option>

            <Option tag="B" title="Keep editorial-body, un-deprecate">
              <div className="dec-render">
                <div className="ds-editorial-body">
                  <Article />
                </div>
              </div>
              <ul className="dec-facts ds-caption">
                <li><b>h2-h4</b><span>covered, sized in tokens</span></li>
                <li><b>space-5</b><span>rhythm from the scale</span></li>
                <li><b>0</b><span>consumer edits</span></li>
              </ul>
            </Option>
          </div>
        </Row>

        <Row>
          <p className="ds-body">
            Identical markup in both boxes. The difference you can see is the heading and the
            spacing between blocks, and it is the whole argument: prose-block leaves the heading
            at the bare element size and spaces in <code className="ex-code">em</code>, while
            editorial-body sizes the heading itself and spaces in{" "}
            <code className="ex-code">--ds-space-5</code>. Choosing A is not a rename — the 31
            uses need looking at, and prose-block probably needs to learn the token rhythm first.
          </p>
        </Row>

        <Row>
          <div className="dec-note">
            <p className="ds-body">
              A third path, if neither reads right: keep one wrapper and delete the other from the
              DS, whichever way round. Two components for one job is what put this on the list.
            </p>
          </div>
        </Row>
      </Section>
    </>
  )
}
