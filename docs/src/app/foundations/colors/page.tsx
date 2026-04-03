export default function ColorsPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Colors</h1>
        <p>Semantic color tokens for light and dark themes. Every color adapts automatically via data-theme.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Backgrounds</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-bg", "Base background"],
              ["color-bg-subtle", "Subtle background"],
              ["color-bg-muted", "Muted background"],
              ["color-bg-muted-hover", "Muted hover"],
              ["color-bg-muted-active", "Muted active"],
              ["color-bg-elevated", "Elevated (active state)"],
              ["color-bg-elevated-hover", "Elevated hover"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Surface</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-surface", "Card / panel surface"],
              ["color-surface-hover", "Surface hover"],
              ["color-surface-active", "Surface active"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Text</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--ds-space-4);">
            ${[
              ["color-text", "Primary text", "AAA in both themes"],
              ["color-text-secondary", "Secondary text", "AAA in both themes"],
              ["color-text-tertiary", "Tertiary text", "Decorative only"],
              ["color-text-disabled", "Disabled text", "Exempt per WCAG"],
            ].map(([token, label, note]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label} &mdash; ${note}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Inverted</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
              <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-color-inverted);"></div>
              <div>
                <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">color-inverted</div>
                <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">Primary button bg</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
              <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-color-on-inverted);"></div>
              <div>
                <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">color-on-inverted</div>
                <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">Text on inverted bg</div>
              </div>
            </div>
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Borders</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-border", "Default border"],
              ["color-border-hover", "Border hover"],
              ["color-border-active", "Border active / focus"],
              ["color-border-subtle", "Subtle divider"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 3px solid var(--ds-${token}); flex-shrink: 0; background: transparent;"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Interactive</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-interactive", "Interactive default"],
              ["color-interactive-hover", "Interactive hover"],
              ["color-interactive-subtle", "Interactive subtle bg"],
              ["color-interactive-border", "Interactive border"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Brand</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-brand", "Brand primary"],
              ["color-brand-hover", "Brand hover"],
              ["color-brand-subtle", "Brand subtle bg"],
              ["color-brand-border", "Brand border"],
              ["color-on-brand", "Text on brand"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Status</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${["success", "warning", "error", "info"].flatMap((status) => [
              [`color-${status}`, `${status.charAt(0).toUpperCase() + status.slice(1)} base`],
              [`color-${status}-subtle`, `${status.charAt(0).toUpperCase() + status.slice(1)} subtle bg`],
              [`color-${status}-border`, `${status.charAt(0).toUpperCase() + status.slice(1)} border`],
              [`color-${status}-solid`, `${status.charAt(0).toUpperCase() + status.slice(1)} solid fill`],
            ]).map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Accent</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${["blue", "purple", "green", "orange"].flatMap((c) => [
              [`color-accent-${c}`, `Accent ${c}`],
              [`color-accent-${c}-subtle`, `Accent ${c} subtle`],
              [`color-accent-${c}-border`, `Accent ${c} border`],
            ]).map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Overlay</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-overlay", "Modal overlay"],
              ["color-overlay-subtle", "Subtle overlay"],
              ["color-overlay-hover", "Overlay hover"],
              ["color-overlay-active", "Overlay active"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token}); background-image: linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%); background-size: 8px 8px; background-position: 0 0, 0 4px, 4px -4px, -4px 0px;"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Static &amp; Selection</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-static-white", "Static white (never changes)"],
              ["color-static-black", "Static black (never changes)"],
              ["color-selection-bg", "Selection background"],
              ["color-selection-text", "Selection text"],
              ["color-nav-bg", "Navigation glass bg"],
              ["color-nav-border", "Navigation border"],
            ].map(([token, label]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>
    </>
  );
}
