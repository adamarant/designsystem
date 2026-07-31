/* in-use/web — the Web door, as a finished page.

   /foundations/typography shows the classes one per rail row. This shows what
   happens when they are used together: a landing page carrying a hero, a stat
   band, two columns, three feature rows, a close and a footer, with no CSS of
   its own beyond spacing and grid (see .ex-* in demo.css).

   Every type decision on the page comes from a DS class.

   The doors section was rebuilt on 31 Jul 2026 after review: it used to be a
   36px heading over two paragraphs, which is two levels of hierarchy and
   reads flat. It is now five levels (72 / 36 / 16 / 14 / 10) built on the
   label-over-value device that s25.studio and vanschneider both lean on,
   where the contrast comes from case, tracking and distance rather than from
   dimming the subordinate half. */

export default function InUseWebPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Web</h1>
        <p>
          A landing page, built only from DS classes. Display face, fluid sizes,
          five steps of hierarchy, one measure for every block of running text.
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
                Everything inside the frame is the page itself, and none of it
                is commentary.
              </p>
              <ul className="typo-body">
                <li>
                  <strong>Five levels, far apart.</strong> 72px statement, 36px
                  section heading, 16px body, 14px label, 10px badge. Nothing
                  sits between them, so every step reads as a step. Two levels
                  close together, which is what the doors section was before,
                  reads as no hierarchy at all.
                </li>
                <li>
                  <strong>Labelled pairs, not paragraphs.</strong> A small
                  uppercase label over a full-size value builds hierarchy out of
                  case, tracking and distance instead of dimming text. Two
                  paragraphs side by side carry the same information and give
                  the eye nothing to land on.
                </li>
                <li>
                  <strong>Space groups, rules only divide.</strong> 160px
                  between sections against 40px inside one, a ratio of 4:1, and
                  no hairline anywhere between them. At the 2.5:1 this page used
                  to run, the two gaps read as one gap and the sections ran
                  together. A rule on top of a big gap says the same thing
                  twice.
                </li>
                <li>
                  <strong>One measure, and it is not the token.</strong>{" "}
                  <code className="ex-code">--ds-measure</code> is 60ch, and
                  60ch measured on this page renders 73 to 83 characters per
                  line. The <code className="ex-code">ch</code> unit is the
                  width of the digit zero, which in Inter is much wider than the
                  average lowercase letter. These pages cap running text at
                  48ch, which measures 61 to 69.
                </li>
                <li>
                  <strong>Small marks the label, never the content.</strong> The
                  eyebrow is 14px and the body under it is 16px. The only 12px
                  on the page is the copyright.
                </li>
                <li>
                  <strong>The feature rows still use a bare heading.</strong>{" "}
                  Between <code className="ex-code">.ds-section-title</code> at
                  36px and body at 16px the system names no display role, so the
                  three row headings fall back to{" "}
                  <code className="ex-code">h3</code>. The doors above dodge it
                  by giving each door a full{" "}
                  <code className="ex-code">.ds-section-title</code>, which
                  works because there are two of them and not ten. The gap is
                  real.
                </li>
              </ul>
            </div>
          </div>

          <div className="ex-seam">
            <span className="typo-label">Below: the page</span>
            <span className="ex-canvas__cls">
              Nothing past this line is a note
            </span>
          </div>

          <div className="ex-canvas">
            <div className="ex-canvas__bar">
              <span className="typo-label">Landing page</span>
              <span className="ex-canvas__cls">
                .ds-hero-title .ds-section-title .ds-overline .ds-stat-number
                .ds-body .ds-meta .ds-badge--upper
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
                  Every heading, label, value and caption in the system answers
                  to one of ten classes. You say what the text is, and the size,
                  the face and the colour come with it.
                </p>
                <div className="ex-hero__actions">
                  <button type="button" className="ds-btn ds-btn--xl">
                    Read the ten classes
                  </button>
                  <button
                    type="button"
                    className="ds-btn ds-btn--outline ds-btn--xl"
                  >
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

            {/* ── Two doors ──────────────────────────────────────────────
                Five levels, far apart: 72 statement, 36 door name, 16 value,
                14 label, 10 badge. The previous version had 36 and 16 and a
                pair of paragraphs, which is two levels and reads flat. */}
            <div className="ex-sec">
              <div className="ex-wrap">
                <div className="ex-sec__head">
                  <p className="ds-overline">Two doors</p>
                  <h2 className="ds-hero-title">
                    A site scales. A product holds still.
                  </h2>
                  <p className="ds-body ex-measure">
                    Density on a data screen is a decision somebody made, and
                    the window does not get a vote. The two doors share every
                    token underneath and open from opposite ends.
                  </p>
                </div>
                <div className="ex-doors">
                  <div className="ex-door">
                    <div className="ex-door__head">
                      <h3 className="ds-section-title">Web</h3>
                      <div className="ex-tags">
                        <span className="ds-badge ds-badge--upper">
                          Display face
                        </span>
                        <span className="ds-badge ds-badge--upper">Fluid</span>
                        <span className="ds-badge ds-badge--upper">
                          Balanced breaks
                        </span>
                      </div>
                    </div>
                    <dl className="ex-spec">
                      <div className="ex-spec__row">
                        <dt className="ds-overline">Typeface</dt>
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
                        <dd className="ds-body">
                          Landing, editorial, marketing
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="ex-door">
                    <div className="ex-door__head">
                      <h3 className="ds-section-title">Product</h3>
                      <div className="ex-tags">
                        <span className="ds-badge ds-badge--upper">
                          Body face
                        </span>
                        <span className="ds-badge ds-badge--upper">Fixed</span>
                        <span className="ds-badge ds-badge--upper">
                          Tabular figures
                        </span>
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
                        <code className="ex-code">
                          --ds-font-display-weight
                        </code>
                        . Move that one token and every heading in the product
                        moves with it. A hand-set 600 escapes the lever and
                        stays behind.
                      </p>
                    </div>
                  </div>
                  <div className="ex-row">
                    <h3>Body copy is 16px, at full strength</h3>
                    <div className="ex-row__body ex-measure">
                      <p className="ds-body">
                        Across the 21 products{" "}
                        <code className="ex-code">ds-text-sm</code> had 610 uses
                        against 58 for{" "}
                        <code className="ex-code">ds-text-base</code>. Nobody
                        chose 14px body copy. It arrived because no class said
                        &ldquo;this is reading text&rdquo;, and the smallest
                        step of the ramp was the handiest thing in reach.
                      </p>
                    </div>
                  </div>
                  <div className="ex-row">
                    <h3>A brand re-scales with two tokens</h3>
                    <div className="ex-row__body ex-measure">
                      <p className="ds-body">
                        Override <code className="ex-code">--ds-text-hero</code>{" "}
                        and <code className="ex-code">--ds-text-section</code>{" "}
                        in the project&rsquo;s theme.css. The classes stay where
                        they are, so a brand can shout or whisper without a
                        single consumer rewriting a selector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Close ────────────────────────────────────────────────── */}
            <div className="ex-sec">
              <div className="ex-wrap ex-close">
                <h2 className="ds-section-title">
                  Start from what the text is
                </h2>
                <p className="ds-body ex-measure">
                  The ten classes live in the foundations. Pick the one that
                  names your content, and the hierarchy comes with it.
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
  );
}
