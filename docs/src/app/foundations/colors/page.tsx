export default function ColorsPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Colors</h1>
        <p>Semantic color tokens for light and dark themes. Every color adapts automatically via data-theme.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Background</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-bg", "Page background", "The only bg token. Everything else is surface."],
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
        <h2 className="demo-section__title">Surface</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-surface", "Card, panel, input", "Base surface"],
              ["color-surface-hover", "Surface hover state", ""],
              ["color-surface-muted", "Badge, chip, kbd, toggle off", "Neutral component fill"],
              ["color-surface-muted-hover", "Hover of muted", ""],
              ["color-surface-elevated", "Raised above muted", "Visual layer above muted"],
              ["color-surface-elevated-hover", "Hover of elevated", ""],
              ["color-surface-active", "Sidebar active, tab selected", "Same value as elevated, different semantics"],
            ].map(([token, label, note]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}${note ? ` &mdash; ${note}` : ""}</div>
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
              ["color-selection-text", "Text selection color", "Applied to ::selection"],
              ["color-selection-bg", "Text selection background", "Applied to ::selection"],
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
            ${[
              ["color-inverted", "Primary button bg"],
              ["color-on-inverted", "Text on inverted bg"],
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
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-interactive", "Links, focus ring, tab indicator", "Neutral (not blue)"],
              ["color-interactive-hover", "Interactive hover", ""],
              ["color-interactive-subtle", "Interactive subtle bg", ""],
              ["color-interactive-border", "Interactive border", ""],
            ].map(([token, label, note]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}${note ? ` &mdash; ${note}` : ""}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Brand</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-brand", "Project identity color", "Override per-project"],
              ["color-brand-hover", "Brand hover", ""],
              ["color-brand-subtle", "Brand subtle bg", ""],
              ["color-brand-border", "Brand border", ""],
              ["color-on-brand", "Text on brand bg", ""],
            ].map(([token, label, note]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}${note ? ` &mdash; ${note}` : ""}</div>
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
              [`color-accent-${c}`, `Accent ${c}`, "Decorative — badges, categories"],
              [`color-accent-${c}-subtle`, `Accent ${c} subtle`, ""],
              [`color-accent-${c}-border`, `Accent ${c} border`, ""],
            ]).map(([token, label, note]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}${note ? ` &mdash; ${note}` : ""}</div>
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
            ${["success", "warning", "error", "info"].flatMap((s) => [
              [`color-${s}`, `${s.charAt(0).toUpperCase() + s.slice(1)}`, "Text / icon / solid fill"],
              [`color-${s}-subtle`, `${s.charAt(0).toUpperCase() + s.slice(1)} subtle`, "Background fill"],
              [`color-${s}-border`, `${s.charAt(0).toUpperCase() + s.slice(1)} border`, ""],
            ]).map(([token, label, note]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}${note ? ` &mdash; ${note}` : ""}</div>
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
              ["color-overlay", "Modal / drawer backdrop"],
              ["color-overlay-subtle", "Subtle tint (table row highlight)"],
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
        <h2 className="demo-section__title">Static</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--ds-space-3);">
            ${[
              ["color-static-white", "Always white", "Never changes between themes. Text on photos, dark overlays."],
              ["color-static-black", "Always black", "Never changes between themes. Text on light overlays."],
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
        <h2 className="demo-section__title">Deprecated (do not use)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--ds-space-3); opacity: 0.5;">
            ${[
              ["color-bg-subtle", "color-bg"],
              ["color-bg-muted", "color-surface-muted"],
              ["color-bg-muted-hover", "color-surface-muted-hover"],
              ["color-bg-muted-active", "eliminated"],
              ["color-bg-elevated", "color-surface-elevated"],
              ["color-bg-elevated-hover", "color-surface-elevated-hover"],
              ["color-success-solid", "color-success"],
              ["color-warning-solid", "color-warning"],
              ["color-error-solid", "color-error"],
              ["color-info-solid", "color-info"],
              ["color-nav-bg", "color-surface"],
              ["color-nav-border", "color-border"],
              ["color-overlay-hover", "surface-hover"],
              ["color-overlay-active", "surface-active"],
            ].map(([token, replacement]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-3); padding: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-radius: var(--ds-radius-md); border: 1px dashed var(--ds-color-border); flex-shrink: 0; background: var(--ds-${token});"></div>
                <div>
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono); text-decoration: line-through;">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">Use ${replacement} instead</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>
    </>
  );
}
