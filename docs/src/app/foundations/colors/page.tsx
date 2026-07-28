import { colorUtilities, colorUtilitiesByProperty } from "@/lib/color-utilities"
import { colorTokensByGroup, unannotatedTokens } from "@/lib/color-tokens"


export default function ColorsPage() {
  const utilities = colorUtilities()
  const utilitiesByProperty = colorUtilitiesByProperty()
  const tokensByGroup = colorTokensByGroup()
  const unannotated = unannotatedTokens()

  return (
    <>
      <div className="demo-page-header">
        <h1>Colors</h1>
        <p>Semantic color tokens for light and dark themes. Every color adapts automatically via data-theme.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Elevation</h2>
        <p className="demo-section__description">
          Four surface tokens, one ladder. Each rung sits <em>on top of</em> the one
          before it, so pick by what your element is stacked on &mdash; not by how
          light or dark you want it.
        </p>
        <div className="demo-preview">
          <div style={{ background: "var(--ds-color-bg)", padding: "var(--ds-space-5)", borderRadius: "var(--ds-radius-lg)", border: "1px solid var(--ds-color-border)" }}>
            <div style={{ fontSize: "var(--ds-text-xs)", fontFamily: "var(--ds-font-mono)", color: "var(--ds-color-text-tertiary)", marginBlockEnd: "var(--ds-space-3)" }}>
              0 &middot; --ds-color-bg &mdash; the page
            </div>
            <div style={{ background: "var(--ds-color-surface)", padding: "var(--ds-space-5)", borderRadius: "var(--ds-radius-lg)", border: "1px solid var(--ds-color-border)" }}>
              <div style={{ fontSize: "var(--ds-text-xs)", fontFamily: "var(--ds-font-mono)", color: "var(--ds-color-text-tertiary)", marginBlockEnd: "var(--ds-space-3)" }}>
                1 &middot; --ds-color-surface &mdash; a card on the page
              </div>
              <div style={{ background: "var(--ds-color-surface-muted)", padding: "var(--ds-space-5)", borderRadius: "var(--ds-radius-md)" }}>
                <div style={{ fontSize: "var(--ds-text-xs)", fontFamily: "var(--ds-font-mono)", color: "var(--ds-color-text-tertiary)", marginBlockEnd: "var(--ds-space-3)" }}>
                  2 &middot; --ds-color-surface-muted &mdash; an element on the card
                </div>
                <div style={{ background: "var(--ds-color-surface-elevated)", padding: "var(--ds-space-4)", borderRadius: "var(--ds-radius-md)" }}>
                  <div style={{ fontSize: "var(--ds-text-xs)", fontFamily: "var(--ds-font-mono)", color: "var(--ds-color-text-tertiary)" }}>
                    3 &middot; --ds-color-surface-elevated &mdash; an element on the muted one
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="demo-section__description">
          <strong>The ladder climbs in dark and inverts in light, on purpose.</strong> In
          dark each rung is lighter than the one below (luminance .0028 &rarr; .0048
          &rarr; .0093 &rarr; .0266). In light you cannot go lighter than the white
          card, so depth is drawn the other way: the page is grey, the card is white,
          and nested fills go <em>darker</em>. Same ladder, same tokens, opposite
          direction &mdash; which is why you choose by stacking position and never by
          the colour you have in mind.
        </p>
        <p className="demo-section__description">
          <strong>Resting elevation is colour; lift is shadow.</strong> The rungs above
          are the resting state. When something rises on interaction &mdash; a card on
          hover, a dropdown opening &mdash; that is <code>--ds-shadow-sm/md/lg</code>,
          used by 18 components and documented in{" "}
          <a href="/foundations/effects">Effects</a>. Two mechanisms, one concept.
        </p>
        <p className="demo-section__description">
          <strong>Not rungs:</strong> <code>--ds-color-surface-active</code> and every{" "}
          <code>-hover</code> token are <em>states</em>, on a different axis. An active
          sidebar item is not stacked higher than its neighbours; it is selected.
        </p>
      </section>

      {tokensByGroup.map(([group, tokens]) => (
        <section className="demo-section" key={group}>
          <h2 className="demo-section__title">{group}</h2>
          <div className="demo-preview">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "var(--ds-space-3)" }}>
              {tokens.map((t) => (
                <div key={t.name} style={{ display: "flex", alignItems: "flex-start", gap: "var(--ds-space-4)", padding: "var(--ds-space-3)", opacity: t.deprecated ? 0.55 : 1 }}>
                  <div style={{ width: 72, height: 72, flexShrink: 0, borderRadius: "var(--ds-radius-lg)", border: "1px solid var(--ds-color-border)", background: `var(${t.name})` }} />
                  <div style={{ minWidth: 0 }}>
                    <div className="ds-overline">
                      {t.light}{t.dark ? ` / ${t.dark}` : " · both themes"}
                    </div>
                    <div className="ds-text-xl" style={{ fontFamily: "var(--ds-font-mono)", marginBlockStart: "var(--ds-space-1)", wordBreak: "break-word" }}>
                      {t.name}
                    </div>
                    <div className="ds-text-base ds-text-secondary" style={{ marginBlockStart: "var(--ds-space-2)" }}>
                      {t.usage ?? t.sourceNote ?? (
                        <span className="ds-text-tertiary">
                          {t.deprecated ? "On its way out — see below." : "No guidance yet."}
                        </span>
                      )}
                    </div>
                    {t.deprecated && (
                      <div className="ds-text-sm" style={{ color: "var(--ds-color-warning)", marginBlockStart: "var(--ds-space-2)" }}>
                        deprecated &mdash; do not use in new code
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {unannotated.length > 0 && (
        <section className="demo-section">
          <h2 className="demo-section__title">Tokens without guidance</h2>
          <p className="demo-section__description">
            These exist in <code>src/tokens/colors.css</code> and nothing here says when
            to reach for them. They are listed rather than hidden: an undocumented token
            is how a wrong one gets picked. Add a line to <code>USAGE</code> in{" "}
            <code>docs/src/lib/color-tokens.ts</code>.
          </p>
          <ul style={{ fontFamily: "var(--ds-font-mono)", fontSize: "var(--ds-text-sm)" }}>
            {unannotated.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </section>
      )}

      <section className="demo-section">
        <h2 className="demo-section__title">Utility classes</h2>
        <p className="demo-section__description">
          The tokens above are CSS variables, for when you write CSS. These are the
          classes that apply them, for when you write <code>className</code> in JSX.
          Same colours, two channels &mdash; and <strong>the names differ</strong>:{" "}
          <code>.ds-text-primary</code> applies <code>--ds-color-text</code>. Read the
          token column rather than inferring it from the class name; that inference
          is where <code>--ds-color-text-primary</code> came from, and it does not exist.
        </p>
        <p className="demo-section__description">
          Generated from <code>src/utilities/*.css</code>, so a new colour appears here
          on its own. {utilities.length} classes.
        </p>

        {utilitiesByProperty.map(([property, list]) => (
          <div key={property} style={{ marginBlockEnd: "var(--ds-space-6)" }}>
            <h3 className="ds-text-secondary ds-text-sm" style={{ fontFamily: "var(--ds-font-mono)", marginBlockEnd: "var(--ds-space-3)" }}>
              {property}
            </h3>
            <div className="demo-preview">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "var(--ds-space-3)" }}>
                {list.map((u) => (
                  <div key={u.cls} style={{ display: "flex", alignItems: "flex-start", gap: "var(--ds-space-4)", padding: "var(--ds-space-3)", opacity: u.replacedBy ? 0.55 : 1 }}>
                    <div style={{ width: 72, height: 72, flexShrink: 0, borderRadius: "var(--ds-radius-lg)", border: "1px solid var(--ds-color-border)", background: `var(${u.token})` }} />
                    <div style={{ minWidth: 0 }}>
                      <div className="ds-overline">
                        {u.property}
                        {u.blended ? " · 50% mix" : ""}
                        {u.alsoSets?.length ? ` · + ${u.alsoSets.join(", ")}` : ""}
                      </div>
                      <div className="ds-text-xl" style={{ fontFamily: "var(--ds-font-mono)", marginBlockStart: "var(--ds-space-1)", wordBreak: "break-word" }}>
                        .{u.cls}
                      </div>
                      <div className="ds-text-base ds-text-secondary" style={{ fontFamily: "var(--ds-font-mono)", marginBlockStart: "var(--ds-space-2)" }}>
                        var({u.token})
                      </div>
                      {u.replacedBy && (
                        <div className="ds-text-sm" style={{ color: "var(--ds-color-warning)", marginBlockStart: "var(--ds-space-2)" }}>
                          deprecated &mdash; use .{u.replacedBy}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

    </>
  );
}
