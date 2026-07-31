/* in-use/web — the Web door, as a finished page.

   /foundations/typography shows the classes one per rail row. This shows what
   happens when they are used together: a landing page carrying a hero, a stat
   band, two columns, three feature rows, a close and a footer, with no CSS of
   its own beyond spacing and grid (see .ex-* in demo.css).

   Every type decision on the page comes from a DS class. Where the page uses
   a bare <h3>, that is deliberate and flagged in the note: the system has no
   named display role between .ds-section-title and body, so the column
   subhead falls back to the element. It is the one gap this page found. */

export default function InUseWebPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Web</h1>
        <p>
          A landing page, built only from DS classes. Display face, fluid sizes, three steps of
          hierarchy, one measure for every block of running text.
        </p>
      </div>

      <section className="s-section">
        <div className="s-container">
          <div className="ex-note">
            <p className="typo-body">What the page below is doing, and why it holds:</p>
            <ul className="typo-body">
              <li>
                <strong>Three sizes, far apart.</strong> 72px title, 36px section heading, 16px
                body. Nothing sits between them, so every step reads as a step.
              </li>
              <li>
                <strong>Unequal spacing.</strong> A section opens with 128px above its heading and
                closes 40px under it. Inside a block the gaps run 16, 24, 40. A heading belongs to
                what follows, and equal space on both sides leaves it floating between two things
                instead of opening one.
              </li>
              <li>
                <strong>One measure, and it is not the token.</strong>{" "}
                <code className="ex-code">--ds-measure</code> is 60ch, and 60ch measured on this
                page renders 73 to 83 characters per line. The <code className="ex-code">ch</code>{" "}
                unit is the width of the digit zero, which in Inter is much wider than the average
                lowercase letter. These pages cap running text at 48ch, which measures 61 to 69.
              </li>
              <li>
                <strong>Small marks the label, never the content.</strong> The eyebrow is 14px and
                the body under it is 16px. The only 12px on the page is the copyright.
              </li>
              <li>
                <strong>One bare heading, on purpose.</strong> The two column subheads are{" "}
                <code className="ex-code">h3</code>. Between{" "}
                <code className="ex-code">.ds-section-title</code> and body the system has no
                named display role, so this page falls back to the element. It is the gap the
                exercise found.
              </li>
            </ul>
          </div>

          <div className="ex-canvas">
            <div className="ex-canvas__bar">
              <span className="typo-label">Landing page</span>
              <span className="ex-canvas__cls">
                .ds-hero-title .ds-section-title .ds-overline .ds-stat-number .ds-body .ds-meta
              </span>
            </div>

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <div className="ex-sec ex-hero">
              <div className="ex-wrap">
                <p className="ds-overline">Type system</p>
                <h2 className="ds-hero-title ex-hero__title">
                  Ten names for everything text can be.
                </h2>
                <p className="ds-editorial-lede ex-hero__lede">
                  Every heading, label, value and caption in the system answers to one of ten
                  classes. You say what the text is, and the size, the face and the colour come
                  with it.
                </p>
                <div className="ex-hero__actions">
                  <button type="button" className="ds-btn ds-btn--xl">
                    Read the ten classes
                  </button>
                  <button type="button" className="ds-btn ds-btn--outline ds-btn--xl">
                    See the tokens
                  </button>
                </div>
              </div>
            </div>

            {/* ── Stats ────────────────────────────────────────────────── */}
            <div className="ex-sec">
              <div className="ex-wrap ex-stats">
                <div className="ex-stat">
                  <p className="ds-stat-number">21</p>
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

            {/* ── Two doors ────────────────────────────────────────────── */}
            <div className="ex-sec">
              <div className="ex-wrap">
                <div className="ex-sec__head">
                  <h2 className="ds-section-title">One system, two doors</h2>
                  <p className="ds-body ex-measure">
                    A site scales with the viewport, because a page is a composition and the
                    composition should fit the screen it lands on. A product holds still. Density
                    on a data screen is a decision somebody made, and the window does not get a
                    vote.
                  </p>
                </div>
                <div className="ex-cols">
                  <div className="ex-col">
                    <h3>Web</h3>
                    <p className="ds-body">
                      Marketing pages, editorial, anything a visitor scrolls. The display face
                      carries the headings and the sizes move with the viewport, 40px on a phone
                      and 72px on a desktop.
                    </p>
                  </div>
                  <div className="ex-col">
                    <h3>Product</h3>
                    <p className="ds-body">
                      Dashboards, forms, tables, settings. The body face carries everything, the
                      sizes are fixed, and the display face never shows up on a screen made of
                      data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Feature rows ─────────────────────────────────────────── */}
            <div className="ex-sec">
              <div className="ex-wrap">
                <div className="ex-sec__head">
                  <h2 className="ds-section-title">What one class carries</h2>
                </div>
                <div className="ex-rows">
                  <div className="ex-row">
                    <h3>A heading never sets its own weight</h3>
                    <div className="ex-row__body ex-measure">
                      <p className="ds-body">
                        Display headings read{" "}
                        <code className="ex-code">--ds-font-display-weight</code>. Move that one
                        token and every heading in the product moves with it. A hand-set 600
                        escapes the lever and stays behind.
                      </p>
                    </div>
                  </div>
                  <div className="ex-row">
                    <h3>Body copy is 16px, at full strength</h3>
                    <div className="ex-row__body ex-measure">
                      <p className="ds-body">
                        Across the 21 products <code className="ex-code">ds-text-sm</code> had 610
                        uses against 58 for <code className="ex-code">ds-text-base</code>. Nobody
                        chose 14px body copy. It arrived because no class said &ldquo;this is
                        reading text&rdquo;, and the smallest step of the ramp was the handiest
                        thing in reach.
                      </p>
                    </div>
                  </div>
                  <div className="ex-row">
                    <h3>A brand re-scales with two tokens</h3>
                    <div className="ex-row__body ex-measure">
                      <p className="ds-body">
                        Override <code className="ex-code">--ds-text-hero</code> and{" "}
                        <code className="ex-code">--ds-text-section</code>{" "}
                        in the project&rsquo;s theme.css. The classes stay where they are, so a
                        brand can shout or
                        whisper without a single consumer rewriting a selector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Close ────────────────────────────────────────────────── */}
            <div className="ex-sec">
              <div className="ex-wrap ex-close">
                <h2 className="ds-section-title">Start from what the text is</h2>
                <p className="ds-body ex-measure">
                  The ten classes live in the foundations. Pick the one that names your content,
                  and the hierarchy comes with it.
                </p>
                <div className="ex-close__actions">
                  <button type="button" className="ds-btn ds-btn--xl">
                    Read the ten classes
                  </button>
                </div>
              </div>
            </div>

            {/* ── Footer ───────────────────────────────────────────────── */}
            <div className="ex-foot">
              <p className="ds-body">Adamarant design system</p>
              <div className="ex-foot__links">
                <span className="ds-body">Foundations</span>
                <span className="ds-body">Components</span>
                <span className="ds-body">Changelog</span>
              </div>
              <p className="ds-meta">&copy; 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
