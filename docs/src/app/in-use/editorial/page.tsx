/* in-use/editorial — the Editorial door.

   An article and nothing else. No note block, no seam, no frame, no docs page
   header: every explanation that used to sit beside the article now lives in
   a data-note on the element it describes, visible only on a click (see
   Inspect.tsx).

   .ds-editorial-title / -lede / -body carry the whole page. The vertical
   rhythm inside the body comes from the class, not from the markup: no margin
   is written here. The measure is applied by the page, because the body class
   caps at nothing. */

import { Inspect } from "@/components/Inspect";

export default function InUseEditorialPage() {
  return (
    <Inspect>
      <div className="ex-canvas">
        <article className="ex-article">
          <div className="ex-article__col">
            {/* ── Header ─────────────────────────────────────────────── */}
            <header>
              <p className="ds-overline">Foundations</p>
              <h2
                className="ds-editorial-title"
                data-cls=".ds-editorial-title"
                data-note="Fluid 40 to 72px. It runs the full 42rem column while the text below drops back to the measure: a 72px title inside a reading measure wraps four times and stops working as a title. The width step between them is the oldest move in magazine layout."
              >
                Why 60ch is not sixty characters
              </h2>
              <p
                className="ds-editorial-lede ex-article__lede"
                data-cls=".ds-editorial-lede"
                data-note="The one class in the system that caps its own measure. It ships 60ch; this page overrides to 48ch, because 60ch measures 73 to 83 characters in Inter."
              >
                The <code className="ex-code">ch</code> unit reads like a
                promise about character count. It is a promise about the digit
                zero, and in most sans faces those are two different numbers.
              </p>
              <div className="ex-article__meta">
                <div
                  className="ex-meta"
                  data-cls=".ds-overline + .ds-body"
                  data-note="A byline as labelled pairs. Three spans separated by dots, all at one weight, name nothing: the reader has to work out which is the author and which is the date. The label says it, so the value can stay at full size."
                >
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
                <span
                  className="ds-badge ds-badge--upper"
                  data-cls=".ds-badge--upper"
                  data-note="10px, uppercase, wide tracking. The smallest text on the page, and the one place small is the point: a tag is a marker, not something you read."
                >
                  Measure
                </span>
                <span className="ds-badge ds-badge--upper">Tokens</span>
                <span className="ds-badge ds-badge--upper">Inter</span>
              </div>
            </header>

            {/* ── Body, part one ─────────────────────────────────────── */}
            <div className="ds-editorial-body ex-article__body">
              <p>
                Somewhere in every stylesheet there is a line capping the width
                of a paragraph. Ours reads{" "}
                <code className="ex-code">
                  max-inline-size: var(--ds-measure)
                </code>
                , and the token behind it is 60ch. Read out loud, that sounds
                like sixty characters.
              </p>
              <p>
                It is not. The CSS <code className="ex-code">ch</code> unit is
                defined as the advance width of the digit zero in the current
                font. Zero is a lining figure: it has to stack in a column of
                numbers, so it is drawn at or near the width of the widest
                digit. Lowercase letters are mostly narrower than that, and the
                letters that carry English text are the narrowest of all.
              </p>
              <p>
                How much narrower is whatever the typeface decides. In Inter the
                gap is wide enough to move a paragraph out of the range it was
                aiming for.
              </p>

              <h2
                data-cls=".ds-editorial-body h2"
                data-note="48px above, 20px under. The class puts the space there, not the markup, which is why every article in the system opens a section the same way. A heading belongs to what follows: equal space on both sides leaves it floating between two things."
              >
                The measurement
              </h2>
              <p>
                Both text blocks on the Web exemplar were capped at 60ch, then
                measured line by line at the width the browser actually chose.
                The full lines came back at 73, 83, 73, 83 and 76 characters.
                The comfortable range that reading research keeps landing on
                runs from roughly 45 to 75, with 66 the figure usually quoted
                for a single column. Every one of those lines sits at the top of
                it or past it.
              </p>
            </div>

            {/* ── Figure, breaking the measure ───────────────────────── */}
            <figure className="ex-fig">
              <div className="ex-fig__frame">
                <div className="ex-fig__row">
                  <p className="ds-overline">60ch, the token</p>
                  <p className="ds-body ex-fig__wide">
                    Zero is a lining figure: it has to stack in a column of
                    numbers, so it is drawn at or near the width of the widest
                    digit in the face.
                  </p>
                </div>
                <div className="ex-fig__row">
                  <p className="ds-overline">48ch, what these pages use</p>
                  <p className="ds-body ex-fig__tight">
                    Zero is a lining figure: it has to stack in a column of
                    numbers, so it is drawn at or near the width of the widest
                    digit in the face.
                  </p>
                </div>
              </div>
              <figcaption
                className="ex-fig__caption"
                data-cls="figcaption"
                data-note="A size utility plus a colour, two utilities, inside the budget. Numbered and tied to the frame by a rule: loose grey text under a figure reads as a stray thought rather than as a caption. The system has no dedicated caption class and is not missing one."
              >
                <span className="ds-overline ex-fig__n">Fig. 1</span>
                <span className="ds-text-sm ds-text-secondary">
                  The same sentence under both caps, at the same 16px. The unit
                  did not change and the font did not change. Only the number in
                  front of it did.
                </span>
              </figcaption>
            </figure>

            {/* ── Body, part two ─────────────────────────────────────── */}
            <div className="ds-editorial-body ex-article__body">
              <h2>What to set instead</h2>
              <p>
                The unit is still the right one. A measure in pixels freezes a
                single font size, and the first consumer that re-scales its type
                breaks it silently. <code className="ex-code">ch</code> tracks
                the size, which is exactly what a measure should do. The number
                in front of it is the part that has to be chosen by looking.
              </p>
              <ul>
                <li>Keep the cap in ch, so it follows the font size.</li>
                <li>
                  Pick the number by counting a rendered line, not by reading
                  the unit name.
                </li>
                <li>
                  For Inter, 48ch measures 61 to 69 characters. A narrower face
                  needs a larger number for the same result.
                </li>
              </ul>
              <blockquote>
                The unit is not lying. It answers a different question from the
                one its name suggests.
              </blockquote>

              <h3>Where the system stands today</h3>
              <p>
                <code className="ex-code">--ds-measure</code> is 60ch.{" "}
                <code className="ex-code">.ds-editorial-lede</code> uses it.{" "}
                <code className="ex-code">.ds-editorial-body</code>, the class
                that sets the longest text anywhere in the system, caps at
                nothing at all, so an article dropped into a wide container runs
                the full width of its parent. These three pages cap locally at
                48ch and leave the token where it is. Moving it would move
                twenty-one products at once, which is a decision rather than a
                fix.
              </p>

              <h2>The rule that survives</h2>
              <p>
                Measure the thing. A unit with a number in its name invites you
                to trust the number, and the only way to know what a line is
                doing is to count what the browser produced.
              </p>
            </div>

            <div className="ex-article__end">
              <h3
                className="ds-heading-ui ds-text-lg"
                data-cls=".ds-heading-ui .ds-text-lg"
                data-note="The class carries family and weight and no size at all, so it inherits 24px from the h3 and collides with anything else at 24px. The size utility steps it down by hand. Below .ds-admin-title the family has no sized member."
              >
                How this was measured
              </h3>
              <div className="ex-article__end-grid">
                <div
                  className="ex-meta"
                  data-cls=".ds-body"
                  data-note="End matter at body size. This was one line of .ds-meta, 12px tertiary, which is the treatment the system reserves for a timestamp, applied to the method behind every number in the article. Nobody read the one thing that made the piece checkable."
                >
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
    </Inspect>
  );
}
