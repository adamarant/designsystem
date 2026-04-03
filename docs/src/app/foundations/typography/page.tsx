export default function TypographyPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Typography</h1>
        <p>Font families, sizes, weights, line heights, and letter spacing tokens.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Font Families</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-6);">
            <div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-1);">font-display</div>
              <div style="font-family: var(--ds-font-display); font-weight: var(--ds-font-display-weight); font-size: var(--ds-text-3xl); line-height: var(--ds-leading-tight);">Clash Display for headings</div>
            </div>
            <div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-1);">font-sans</div>
              <div style="font-family: var(--ds-font-sans); font-size: var(--ds-text-lg); line-height: var(--ds-leading-normal);">Switzer for body text and UI elements</div>
            </div>
            <div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-1);">font-mono</div>
              <div style="font-family: var(--ds-font-mono); font-size: var(--ds-text-base); line-height: var(--ds-leading-normal);">Geist Mono for code and token names</div>
            </div>
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Font Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["text-2xs", "0.625rem / 10px"],
              ["text-xs", "0.75rem / 12px"],
              ["text-sm", "0.875rem / 14px"],
              ["text-base", "1rem / 16px"],
              ["text-lg", "1.125rem / 18px"],
              ["text-xl", "1.25rem / 20px"],
              ["text-2xl", "1.5rem / 24px"],
              ["text-3xl", "1.875rem / 30px"],
              ["text-4xl", "2.25rem / 36px"],
              ["text-5xl", "3rem / 48px"],
              ["text-6xl", "3.75rem / 60px"],
              ["text-7xl", "4.5rem / 72px"],
            ].map(([token, size]) => `
              <div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
                <div style="min-width: 140px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token}<br><span style="font-size: var(--ds-text-2xs);">${size}</span></div>
                <div style="font-size: var(--ds-${token}); line-height: var(--ds-leading-snug); font-family: var(--ds-font-sans);">The quick brown fox</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Font Weights</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["weight-light", "300"],
              ["weight-normal", "400"],
              ["weight-medium", "500"],
              ["weight-semibold", "600"],
              ["weight-bold", "700"],
            ].map(([token, val]) => `
              <div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
                <div style="min-width: 160px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token} (${val})</div>
                <div style="font-weight: var(--ds-${token}); font-size: var(--ds-text-xl); font-family: var(--ds-font-sans);">The quick brown fox jumps over the lazy dog</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Line Heights</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--ds-space-6);">
            ${[
              ["leading-none", "1"],
              ["leading-tight", "1.1"],
              ["leading-snug", "1.25"],
              ["leading-normal", "1.5"],
              ["leading-relaxed", "1.625"],
              ["leading-loose", "2"],
            ].map(([token, val]) => `
              <div style="padding: var(--ds-space-3); border: 1px solid var(--ds-color-border); border-radius: var(--ds-radius-md);">
                <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-2);">${token} (${val})</div>
                <div style="font-size: var(--ds-text-base); line-height: var(--ds-${token}); font-family: var(--ds-font-sans); background: var(--ds-color-bg-muted); padding: var(--ds-space-2); border-radius: var(--ds-radius-sm);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Letter Spacing</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["tracking-tighter", "-0.02em"],
              ["tracking-tight", "-0.01em"],
              ["tracking-normal", "0"],
              ["tracking-wide", "0.05em"],
              ["tracking-wider", "0.1em"],
            ].map(([token, val]) => `
              <div style="display: flex; align-items: baseline; gap: var(--ds-space-4);">
                <div style="min-width: 180px; font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); flex-shrink: 0;">${token} (${val})</div>
                <div style="letter-spacing: var(--ds-${token}); font-size: var(--ds-text-lg); font-family: var(--ds-font-sans); text-transform: uppercase;">Design system tokens</div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>
    </>
  );
}
