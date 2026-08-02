export default function SpacingPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Spacing</h1>
        <p>Spacing scale, component size tiers, border radius, and z-index layers.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Spacing Scale</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div class="demo-token-list">
            ${[
              ["space-0", "0"],
              ["space-0-5", "0.125rem / 2px"],
              ["space-1", "0.25rem / 4px"],
              ["space-1-5", "0.375rem / 6px"],
              ["space-2", "0.5rem / 8px"],
              ["space-2-5", "0.625rem / 10px"],
              ["space-3", "0.75rem / 12px"],
              ["space-4", "1rem / 16px"],
              ["space-5", "1.25rem / 20px"],
              ["space-6", "1.5rem / 24px"],
              ["space-8", "2rem / 32px"],
              ["space-10", "2.5rem / 40px"],
              ["space-12", "3rem / 48px"],
              ["space-16", "4rem / 64px"],
              ["space-20", "5rem / 80px"],
              ["space-24", "6rem / 96px"],
              ["space-32", "8rem / 128px"],
            ].map(([token, val]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3);">
                <div class="demo-token-label">${token}<span class="demo-token-label__size">${val}</span></div>
                <div style="height: 16px; width: var(--ds-${token}); background: var(--ds-color-interactive); border-radius: var(--ds-radius-sm); min-width: 2px;"></div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Component Size Tiers</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div class="demo-token-list">
            ${[
              ["size-1", "1.5rem / 24px", "xs"],
              ["size-2", "2rem / 32px", "sm"],
              ["size-3", "2.5rem / 40px", "md (default)"],
              ["size-4", "3rem / 48px", "lg"],
              ["size-5", "3.5rem / 56px", "xl"],
              ["size-6", "4rem / 64px", "2xl"],
            ].map(([token, val, tier]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3);">
                <div class="demo-token-label">${token} &mdash; ${tier}<span class="demo-token-label__size">${val}</span></div>
                <div style="height: var(--ds-${token}); width: var(--ds-${token}); background: var(--ds-color-interactive-subtle); border: 1px solid var(--ds-color-interactive-border); border-radius: var(--ds-radius-md); display: flex; align-items: center; justify-content: center; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-secondary);">${tier}</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Icon Sizes</h2>
        <p className="ds-copy demo-section__description">
          The other half of the size-tier contract. Two controls of the same
          height only <em>look</em>{" "}the same if the glyphs inside them match, and
          until these existed nothing said what a glyph should measure &mdash; it
          was implied by each component&rsquo;s padding, so icons were sized by eye
          and drifted. <code>--ds-icon-N</code> is the glyph that belongs inside a{" "}
          <code>--ds-size-N</code> control.
        </p>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div class="demo-token-list">
            ${[
              ["icon-1", "1rem / 16px", "size-1", "24px control"],
              ["icon-2", "1.25rem / 20px", "size-2", "32px control"],
              ["icon-3", "1.5rem / 24px", "size-3", "40px control"],
              ["icon-4", "1.75rem / 28px", "size-4", "48px control"],
            ].map(([token, val, pair, ctrl]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3);">
                <div class="demo-token-label">${token} &mdash; ${ctrl}<span class="demo-token-label__size">${val}</span></div>
                <div style="height: var(--ds-${pair}); width: var(--ds-${pair}); background: var(--ds-color-interactive-subtle); border: 1px solid var(--ds-color-interactive-border); border-radius: var(--ds-radius-md); display: flex; align-items: center; justify-content: center; color: var(--ds-color-text);">
                  <svg style="width: var(--ds-${token}); height: var(--ds-${token});" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="3" y1="8" x2="21" y2="8"></line>
                    <line x1="3" y1="16" x2="21" y2="16"></line>
                  </svg>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
        <p className="ds-copy demo-section__description">
          <strong>Documented, not yet enforced.</strong> Nothing stops a component
          being handed a glyph of another size, and two places do not match the
          scale today: <code>.ds-icon-btn--xs</code> leaves 20px inside a 24px
          control where the scale says 16, and <code>.ds-nav__icon-btn</code> is
          2.25rem, which is not a tier at all. Both are visible in every consumer,
          so neither was changed on the way in.
        </p>
        <p className="ds-copy demo-section__description">
          Glyphs are authored on a 24-unit grid &mdash;{" "}
          <code>viewBox=&quot;0 0 24 24&quot;</code>, <code>stroke-width: 2</code>,
          round caps &mdash; which every icon in <code>ds-react</code> follows. The
          token is the rendered box, not the grid.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Border Radius</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(min(140px, 100%), 1fr)); gap: var(--ds-space-4);">
            ${[
              ["radius-none", "0"],
              ["radius-sm", "6px"],
              ["radius-md", "8px"],
              ["radius-lg", "12px"],
              ["radius-xl", "16px"],
              ["radius-2xl", "20px"],
              ["radius-full", "9999px"],
            ].map(([token, val]) => `
              <div class="demo-token-list">
                <div style="width: 64px; height: 64px; background: var(--ds-color-interactive-subtle); border: 2px solid var(--ds-color-interactive-border); border-radius: var(--ds-${token});"></div>
                <div class="demo-token-label demo-token-label--center">${token}<span class="demo-token-label__size">${val}</span></div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Z-Index Layers</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div class="demo-token-list">
            ${[
              ["z-base", "0", "Default stacking"],
              ["z-dropdown", "50", "Dropdown menus"],
              ["z-sticky", "60", "Sticky headers"],
              ["z-overlay", "80", "Overlay backgrounds"],
              ["z-modal", "100", "Modal dialogs"],
              ["z-toast", "150", "Toast notifications"],
              ["z-tooltip", "200", "Tooltips"],
            ].map(([token, val, desc]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="min-width: 60px; font-size: var(--ds-text-lg); font-weight: var(--ds-weight-bold); font-family: var(--ds-font-mono); color: var(--ds-color-text); text-align: right;">${val}</div>
                <div style="height: 32px; background: var(--ds-color-interactive-subtle); border: 1px solid var(--ds-color-interactive-border); border-radius: var(--ds-radius-sm); flex: 1; max-width: calc(${val} * 2px + 80px); min-width: 80px;"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div class="demo-token-note">${desc}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Container Widths</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div class="demo-token-list">
            ${[
              ["container-sm", "640px"],
              ["container-md", "768px"],
              ["container-lg", "1024px"],
              ["container-max", "1440px"],
            ].map(([token, val]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3);">
                <div class="demo-token-label">${token} (${val})</div>
                <div style="height: 16px; width: 100%; max-width: var(--ds-${token}); background: var(--ds-color-brand-subtle); border: 1px solid var(--ds-color-brand-border); border-radius: var(--ds-radius-sm);"></div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>
    </>
  );
}
