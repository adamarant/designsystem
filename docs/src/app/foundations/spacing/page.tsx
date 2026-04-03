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
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-2);">
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
                <div style="min-width: 160px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token}<br><span style="font-size: var(--ds-text-2xs);">${val}</span></div>
                <div style="height: 16px; width: var(--ds-${token}); background: var(--ds-color-interactive); border-radius: var(--ds-radius-sm); min-width: 2px;"></div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Component Size Tiers</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-3);">
            ${[
              ["size-1", "1.5rem / 24px", "xs"],
              ["size-2", "2rem / 32px", "sm"],
              ["size-3", "2.5rem / 40px", "md (default)"],
              ["size-4", "3rem / 48px", "lg"],
              ["size-5", "3.5rem / 56px", "xl"],
              ["size-6", "4rem / 64px", "2xl"],
            ].map(([token, val, tier]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3);">
                <div style="min-width: 160px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token} &mdash; ${tier}<br><span style="font-size: var(--ds-text-2xs);">${val}</span></div>
                <div style="height: var(--ds-${token}); width: var(--ds-${token}); background: var(--ds-color-interactive-subtle); border: 1px solid var(--ds-color-interactive-border); border-radius: var(--ds-radius-md); display: flex; align-items: center; justify-content: center; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-secondary);">${tier}</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Border Radius</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--ds-space-4);">
            ${[
              ["radius-none", "0"],
              ["radius-sm", "6px"],
              ["radius-md", "8px"],
              ["radius-lg", "12px"],
              ["radius-xl", "16px"],
              ["radius-2xl", "20px"],
              ["radius-full", "9999px"],
            ].map(([token, val]) => `
              <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-2);">
                <div style="width: 64px; height: 64px; background: var(--ds-color-interactive-subtle); border: 2px solid var(--ds-color-interactive-border); border-radius: var(--ds-${token});"></div>
                <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); text-align: center;">${token}<br>${val}</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Z-Index Layers</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-2);">
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
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${desc}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Container Widths</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-3);">
            ${[
              ["container-sm", "640px"],
              ["container-md", "768px"],
              ["container-lg", "1024px"],
              ["container-max", "1440px"],
            ].map(([token, val]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3);">
                <div style="min-width: 160px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token} (${val})</div>
                <div style="height: 16px; width: 100%; max-width: var(--ds-${token}); background: var(--ds-color-brand-subtle); border: 1px solid var(--ds-color-brand-border); border-radius: var(--ds-radius-sm);"></div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>
    </>
  );
}
