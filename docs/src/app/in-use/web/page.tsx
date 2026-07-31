/* in-use/web — the Web door.

   A landing page and nothing else. No note block, no seam, no frame, no docs
   page header: the route renders the page, and every explanation that used to
   sit beside it now lives in a data-note on the element it describes, visible
   only on a click (see Inspect.tsx).

   Five levels, far apart: 72 statement / 36 section / 16 body / 14 label /
   10 badge. 160px between sections against 40px inside one, and no rules
   anywhere: space groups, a line only divides. Running text stops at
   --ex-measure. */

import { Inspect } from "@/components/Inspect";

export default function InUseWebPage() {
  return (
    <Inspect>
      <div className="ex-canvas">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="ex-sec ex-hero">
          <div className="ex-wrap">
            <p
              className="ds-overline"
              data-cls=".ds-overline"
              data-note="An eyebrow, at 14px against the 16px body under it. Small marks the label, never the content: the moment body copy goes below the label, everything subordinate has to shrink further and the page compresses until size stops meaning anything."
            >
              Type system
            </p>
            <h2
              className="ds-hero-title ex-hero__title"
              data-cls=".ds-hero-title"
              data-note="Fluid from 40px on a phone to 72px here, from --ds-text-hero. Balanced line breaks, tight tracking, and no weight set by hand: display headings read --ds-font-display-weight so one token moves every heading in the product at once."
            >
              Ten names for everything text can be.
            </h2>
            <p
              className="ds-editorial-lede ex-hero__lede"
              data-cls=".ds-editorial-lede"
              data-note="Bigger than body and capped at 48ch. The class ships a 60ch cap, but 60ch renders 73 to 83 characters here because ch is the width of the digit zero and Inter's zero is far wider than its average letter."
            >
              Every heading, label, value and caption in the system answers to one of ten classes.
              You say what the text is, and the size, the face and the colour come with it.
            </p>
            <div className="ex-hero__actions">
              <button
                type="button"
                className="ds-btn ds-btn--xl"
                data-cls=".ds-btn--xl"
                data-note="One dominant action. The button sits at 14px, which is right: a label on a control is scanned, not read."
              >
                Read the ten classes
              </button>
              <button type="button" className="ds-btn ds-btn--outline ds-btn--xl">
                See the tokens
              </button>
            </div>
          </div>
        </div>

        {/* ── Stats ────────────────────────────────────────────────────── */}
        <div className="ex-sec">
          <div className="ex-wrap ex-stats">
            <div className="ex-stat">
              <p
                className="ds-stat-number"
                data-cls=".ds-stat-number"
                data-note="24px, display face, tabular figures. Correct inside a dashboard card and quiet for a marketing stat band, and there is no size lever on it: the class hardcodes --ds-text-2xl. A real gap, left alone rather than patched around."
              >
                21
              </p>
              <p className="ds-overline">Products on the system</p>
            </div>
            <div className="ex-stat">
              <p className="ds-stat-number">10</p>
              <p className="ds-overline">Named text roles</p>
            </div>
            <div className="ex-stat">
              <p className="ds-stat-number">60ch</p>
              <p className="ds-overline">The reading measure</p>
            </div>
          </div>
        </div>

        {/* ── Two doors ────────────────────────────────────────────────── */}
        <div className="ex-sec">
          <div className="ex-wrap">
            <div className="ex-sec__head">
              <p className="ds-overline">Two doors</p>
              <h2
                className="ds-hero-title"
                data-cls=".ds-hero-title"
                data-note="A statement at hero size in the middle of a page. The gap above it is 160px against the 40px under it, a ratio of 4:1, which is what tells you a new section started without a rule having to say so."
              >
                A site scales. A product holds still.
              </h2>
              <p className="ds-body ex-measure">
                Density on a data screen is a decision somebody made, and the window does not get a
                vote. The two doors share every token underneath and open from opposite ends.
              </p>
            </div>
            <div className="ex-doors">
              <div className="ex-door">
                <div className="ex-door__head">
                  <h3 className="ds-section-title">Web</h3>
                  <div className="ex-tags">
                    <span
                      className="ds-badge ds-badge--upper"
                      data-cls=".ds-badge--upper"
                      data-note="10px, uppercase, wide tracking, in a pill. The smallest thing on the page and the one place small is the whole point, because a tag is a marker rather than something you read."
                    >
                      Display face
                    </span>
                    <span className="ds-badge ds-badge--upper">Fluid</span>
                    <span className="ds-badge ds-badge--upper">Balanced breaks</span>
                  </div>
                </div>
                <dl className="ex-spec">
                  <div className="ex-spec__row">
                    <dt
                      className="ds-overline"
                      data-cls=".ds-overline"
                      data-note="A label over a full-size value. The hierarchy comes from case, tracking and distance, not from dimming: two paragraphs side by side carry the same information and give the eye nothing to land on."
                    >
                      Typeface
                    </dt>
                    <dd className="ds-body">Display</dd>
                  </div>
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Title size</dt>
                    <dd className="ds-body ds-tabular-nums">40 to 72px</dd>
                  </div>
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Scales with</dt>
                    <dd className="ds-body">The viewport</dd>
                  </div>
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Used for</dt>
                    <dd className="ds-body">Landing, editorial, marketing</dd>
                  </div>
                </dl>
              </div>

              <div className="ex-door">
                <div className="ex-door__head">
                  <h3
                    className="ds-section-title"
                    data-cls=".ds-section-title"
                    data-note="Fluid 30 to 36px, from --ds-text-section. Re-scale a whole brand by overriding that token and --ds-text-hero in theme.css: the classes never move."
                  >
                    Product
                  </h3>
                  <div className="ex-tags">
                    <span className="ds-badge ds-badge--upper">Body face</span>
                    <span className="ds-badge ds-badge--upper">Fixed</span>
                    <span className="ds-badge ds-badge--upper">Tabular figures</span>
                  </div>
                </div>
                <dl className="ex-spec">
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Typeface</dt>
                    <dd className="ds-body">Body, never display</dd>
                  </div>
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Title size</dt>
                    <dd className="ds-body ds-tabular-nums">20 / 24px</dd>
                  </div>
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Scales with</dt>
                    <dd className="ds-body">Nothing</dd>
                  </div>
                  <div className="ex-spec__row">
                    <dt className="ds-overline">Used for</dt>
                    <dd className="ds-body">Dashboards, forms, tables</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* ── Feature rows ─────────────────────────────────────────────── */}
        <div className="ex-sec">
          <div className="ex-wrap">
            <div className="ex-sec__head">
              <h2 className="ds-section-title">What one class carries</h2>
            </div>
            <div className="ex-rows">
              <div className="ex-row">
                <h3
                  data-cls="h3"
                  data-note="A bare element, on purpose. Between .ds-section-title at 36px and body at 16px the system names no display role, so a row heading has nowhere to go but the element. The gap is real and this page does not paper over it."
                >
                  A heading never sets its own weight
                </h3>
                <div className="ex-row__body ex-measure">
                  <p className="ds-body">
                    Display headings read <code className="ex-code">--ds-font-display-weight</code>.
                    Move that one token and every heading in the product moves with it. A hand-set
                    600 escapes the lever and stays behind.
                  </p>
                </div>
              </div>
              <div className="ex-row">
                <h3>Body copy is 16px, at full strength</h3>
                <div className="ex-row__body ex-measure">
                  <p
                    className="ds-body"
                    data-cls=".ds-body"
                    data-note="16px, primary colour, capped at 48ch. Across the 21 products ds-text-sm had 610 uses against 58 for ds-text-base: body copy drifted to 14px because no class said this is reading text. This one says it."
                  >
                    Across the 21 products <code className="ex-code">ds-text-sm</code> had 610 uses
                    against 58 for <code className="ex-code">ds-text-base</code>. Nobody chose 14px
                    body copy. It arrived because no class said &ldquo;this is reading text&rdquo;,
                    and the smallest step of the ramp was the handiest thing in reach.
                  </p>
                </div>
              </div>
              <div className="ex-row">
                <h3>A brand re-scales with two tokens</h3>
                <div className="ex-row__body ex-measure">
                  <p className="ds-body">
                    Override <code className="ex-code">--ds-text-hero</code> and{" "}
                    <code className="ex-code">--ds-text-section</code> in the project&rsquo;s
                    theme.css. The classes stay where they are, so a brand can shout or whisper
                    without a single consumer rewriting a selector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Close ────────────────────────────────────────────────────── */}
        <div className="ex-sec">
          <div className="ex-wrap ex-close">
            <h2 className="ds-section-title">Start from what the text is</h2>
            <p className="ds-body ex-measure">
              The ten classes live in the foundations. Pick the one that names your content, and
              the hierarchy comes with it.
            </p>
            <div className="ex-close__actions">
              <button type="button" className="ds-btn ds-btn--xl">
                Read the ten classes
              </button>
            </div>
          </div>
        </div>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <div className="ex-foot">
          <p className="ds-body">Adamarant design system</p>
          <div className="ex-foot__links">
            <span className="ds-body">Foundations</span>
            <span className="ds-body">Components</span>
            <span className="ds-body">Changelog</span>
          </div>
          <p
            className="ds-meta"
            data-cls=".ds-meta"
            data-note="12px tertiary, and the only 12px on the page. A copyright is genuinely supplementary, which is the whole test for this class: if the text matters, it is not meta. A link is an action, not metadata, however small it looks."
          >
            &copy; 2026
          </p>
        </div>
      </div>
    </Inspect>
  );
}
