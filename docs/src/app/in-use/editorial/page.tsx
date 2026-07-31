/* in-use/editorial — the Editorial door, as a finished page.

   An article, set the way the system says an article should be set:
   .ds-editorial-title / -lede / -body, a byline that splits content from
   metadata, one figure that breaks the measure, and nothing else.

   The subject is the measure, and the figure inside the article is a live
   comparison of the two caps it discusses, so the piece demonstrates the
   thing it argues about. Every number quoted was measured on
   /in-use/web at a 1512px viewport, not estimated. */

export default function InUseEditorialPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Editorial</h1>
        <p>
          A long-form article. Three editorial classes carry the whole page, and
          the vertical rhythm inside the body comes from the class rather than
          from the markup.
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
                Everything inside the frame is the article, including its
                caption and its end matter.
              </p>
              <ul className="typo-body">
                <li>
                  <strong>The body sets its own rhythm.</strong>{" "}
                  <code className="ex-code">.ds-editorial-body</code> puts 48px
                  above an <code className="ex-code">h2</code> and 20px under
                  it, so the heading opens the section instead of hovering
                  between two. No margin is written in the page.
                </li>
                <li>
                  <strong>The title block is wider than the text block.</strong>{" "}
                  42rem against 48ch. A 72px title inside a reading measure
                  wraps four times and stops working as a title.
                </li>
                <li>
                  <strong>
                    The measure is applied here, not by the class.
                  </strong>{" "}
                  <code className="ex-code">.ds-editorial-lede</code> caps
                  itself at <code className="ex-code">--ds-measure</code>;{" "}
                  <code className="ex-code">.ds-editorial-body</code>, which
                  sets the longest text in the system, caps at nothing. In a
                  wide container it runs the full width of its parent. That is
                  the second gap this exercise found.
                </li>
                <li>
                  <strong>The byline is a spec block, not a grey line.</strong>{" "}
                  Author, date and reading time each get a 14px uppercase label
                  over a 16px value, so the eye knows what it is looking at
                  before it reads. Three spans separated by dots, all at the
                  same weight, name nothing and are the version this page
                  started with. Topic tags underneath use{" "}
                  <code className="ex-code">.ds-badge--upper</code> at 10px,
                  which is the one place on the page small is the whole point.
                </li>
                <li>
                  <strong>The caption is numbered and tied down.</strong> One
                  size utility, one colour, inside the budget, plus a figure
                  number and a rule joining it to the frame above. Loose grey
                  text under a figure reads as a stray thought; a caption has to
                  say what it is a caption of. The system has no dedicated
                  caption class, and it is not missing one.
                </li>
                <li>
                  <strong>The end matter is readable.</strong> The method behind
                  every number in the piece is what makes the piece checkable,
                  so it gets labelled pairs at body size. It used to be one line
                  of <code className="ex-code">.ds-meta</code>, 12px tertiary,
                  which is the treatment the system reserves for a timestamp.
                </li>
              </ul>
            </div>
          </div>

          <div className="ex-seam">
            <span className="typo-label">Below: the article</span>
            <span className="ex-canvas__cls">
              Nothing past this line is a note
            </span>
          </div>

          <div className="ex-canvas">
            <div className="ex-canvas__bar">
              <span className="typo-label">Article</span>
              <span className="ex-canvas__cls">
                .ds-editorial-title .ds-editorial-lede .ds-editorial-body
                .ds-overline .ds-meta
              </span>
            </div>

            <article className="ex-article">
              <div className="ex-article__col">
                {/* ── Header ─────────────────────────────────────────────── */}
                <header>
                  <p className="ds-overline">Foundations</p>
                  <h2 className="ds-editorial-title">
                    Why 60ch is not sixty characters
                  </h2>
                  <p className="ds-editorial-lede ex-article__lede">
                    The <code className="ex-code">ch</code> unit reads like a
                    promise about character count. It is a promise about the
                    digit zero, and in most sans faces those are two different
                    numbers.
                  </p>
                  <div className="ex-article__meta">
                    <div className="ex-meta">
                      <p className="ds-overline">Written by</p>
                      <p className="ds-body">Design system notes</p>
                    </div>
                    <div className="ex-meta">
                      <p className="ds-overline">Published</p>
                      <p className="ds-body">31 July 2026</p>
                    </div>
                    <div className="ex-meta">
                      <p className="ds-overline">Reading time</p>
                      <p className="ds-body ds-tabular-nums">5 min</p>
                    </div>
                  </div>
                  <div className="ex-tags">
                    <span className="ds-badge ds-badge--upper">Measure</span>
                    <span className="ds-badge ds-badge--upper">Tokens</span>
                    <span className="ds-badge ds-badge--upper">Inter</span>
                  </div>
                </header>

                {/* ── Body, part one ─────────────────────────────────────── */}
                <div className="ds-editorial-body ex-article__body">
                  <p>
                    Somewhere in every stylesheet there is a line capping the
                    width of a paragraph. Ours reads{" "}
                    <code className="ex-code">
                      max-inline-size: var(--ds-measure)
                    </code>
                    , and the token behind it is 60ch. Read out loud, that
                    sounds like sixty characters.
                  </p>
                  <p>
                    It is not. The CSS <code className="ex-code">ch</code> unit
                    is defined as the advance width of the digit zero in the
                    current font. Zero is a lining figure: it has to stack in a
                    column of numbers, so it is drawn at or near the width of
                    the widest digit. Lowercase letters are mostly narrower than
                    that, and the letters that carry English text are the
                    narrowest of all.
                  </p>
                  <p>
                    How much narrower is whatever the typeface decides. In Inter
                    the gap is wide enough to move a paragraph out of the range
                    it was aiming for.
                  </p>

                  <h2>The measurement</h2>
                  <p>
                    Both text blocks on the Web exemplar were capped at 60ch,
                    then measured line by line at the width the browser actually
                    chose. The full lines came back at 73, 83, 73, 83 and 76
                    characters. The comfortable range that reading research
                    keeps landing on runs from roughly 45 to 75, with 66 the
                    figure usually quoted for a single column. Every one of
                    those lines sits at the top of it or past it.
                  </p>
                </div>

                {/* ── Figure, breaking the measure ───────────────────────── */}
                <figure className="ex-fig">
                  <div className="ex-fig__frame">
                    <div className="ex-fig__row">
                      <p className="ds-overline">60ch, the token</p>
                      <p className="ds-body ex-fig__wide">
                        Zero is a lining figure: it has to stack in a column of
                        numbers, so it is drawn at or near the width of the
                        widest digit in the face.
                      </p>
                    </div>
                    <div className="ex-fig__row">
                      <p className="ds-overline">48ch, what these pages use</p>
                      <p className="ds-body ex-fig__tight">
                        Zero is a lining figure: it has to stack in a column of
                        numbers, so it is drawn at or near the width of the
                        widest digit in the face.
                      </p>
                    </div>
                  </div>
                  <figcaption className="ex-fig__caption">
                    <span className="ds-overline ex-fig__n">Fig. 1</span>
                    <span className="ds-text-sm ds-text-secondary">
                      The same sentence under both caps, at the same 16px. The
                      unit did not change and the font did not change. Only the
                      number in front of it did.
                    </span>
                  </figcaption>
                </figure>

                {/* ── Body, part two ─────────────────────────────────────── */}
                <div className="ds-editorial-body ex-article__body">
                  <h2>What to set instead</h2>
                  <p>
                    The unit is still the right one. A measure in pixels freezes
                    a single font size, and the first consumer that re-scales
                    its type breaks it silently.{" "}
                    <code className="ex-code">ch</code> tracks the size, which
                    is exactly what a measure should do. The number in front of
                    it is the part that has to be chosen by looking.
                  </p>
                  <ul>
                    <li>Keep the cap in ch, so it follows the font size.</li>
                    <li>
                      Pick the number by counting a rendered line, not by
                      reading the unit name.
                    </li>
                    <li>
                      For Inter, 48ch measures 61 to 69 characters. A narrower
                      face needs a larger number for the same result.
                    </li>
                  </ul>
                  <blockquote>
                    The unit is not lying. It answers a different question from
                    the one its name suggests.
                  </blockquote>

                  <h3>Where the system stands today</h3>
                  <p>
                    <code className="ex-code">--ds-measure</code> is 60ch.{" "}
                    <code className="ex-code">.ds-editorial-lede</code> uses it.{" "}
                    <code className="ex-code">.ds-editorial-body</code>, the
                    class that sets the longest text anywhere in the system,
                    caps at nothing at all, so an article dropped into a wide
                    container runs the full width of its parent. These three
                    pages cap locally at 48ch and leave the token where it is.
                    Moving it would move twenty-one products at once, which is a
                    decision rather than a fix.
                  </p>

                  <h2>The rule that survives</h2>
                  <p>
                    Measure the thing. A unit with a number in its name invites
                    you to trust the number, and the only way to know what a
                    line is doing is to count what the browser produced.
                  </p>
                </div>

                <div className="ex-article__end">
                  <h3 className="ds-heading-ui ds-text-lg">
                    How this was measured
                  </h3>
                  <div className="ex-article__end-grid">
                    <div className="ex-meta">
                      <p className="ds-overline">Typeface</p>
                      <p className="ds-body">Inter, optical sizing on</p>
                    </div>
                    <div className="ex-meta">
                      <p className="ds-overline">Sizes</p>
                      <p className="ds-body ds-tabular-nums">16px and 22px</p>
                    </div>
                    <div className="ex-meta">
                      <p className="ds-overline">Viewport</p>
                      <p className="ds-body ds-tabular-nums">1512px</p>
                    </div>
                    <div className="ex-meta">
                      <p className="ds-overline">Method</p>
                      <p className="ds-body">Range rect per character</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
