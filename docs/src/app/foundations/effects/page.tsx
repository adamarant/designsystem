export default function EffectsPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Effects</h1>
        <p>Shadows, focus ring, transitions, easing curves, backdrop blur, and opacity tokens.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Box Shadows</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--ds-space-8);">
            ${[
              ["shadow-sm", "Small"],
              ["shadow-md", "Medium"],
              ["shadow-lg", "Large"],
            ].map(([token, label]) => `
              <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-3);">
                <div style="width: 120px; height: 80px; background: var(--ds-color-surface); border-radius: var(--ds-radius-lg); box-shadow: var(--ds-${token});"></div>
                <div style="text-align: center;">
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Focus Ring</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-wrap: wrap; gap: var(--ds-space-6); align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-3);">
              <div style="width: 80px; height: 40px; background: var(--ds-color-surface); border-radius: var(--ds-radius-md); border: 1px solid var(--ds-color-border); outline: var(--ds-ring-width) solid var(--ds-ring-color); outline-offset: var(--ds-ring-offset);"></div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary); text-align: center;">ring-width: 2px<br>ring-offset: 2px<br>ring-color: border-active</div>
            </div>
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Transition Durations</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["duration-fast", "100ms", "Micro-interactions"],
              ["duration-normal", "200ms", "Default transitions"],
              ["duration-slow", "400ms", "Complex animations"],
              ["duration-slower", "800ms", "Page transitions"],
            ].map(([token, val, desc]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-4);">
                <div style="min-width: 180px; flex-shrink: 0;">
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${val} &mdash; ${desc}</div>
                </div>
                <div style="flex: 1; height: 32px; position: relative; background: var(--ds-color-bg-muted); border-radius: var(--ds-radius-sm); overflow: hidden;">
                  <div style="position: absolute; left: 0; top: 0; height: 100%; width: calc(${parseInt(val)} / 800 * 100%); background: var(--ds-color-interactive); border-radius: var(--ds-radius-sm); opacity: 0.6;"></div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Easing Curves</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <style>
            @keyframes easing-demo { 0% { transform: translateX(0); } 50% { transform: translateX(200px); } 100% { transform: translateX(0); } }
          </style>
          <div style="display: flex; flex-direction: column; gap: var(--ds-space-4);">
            ${[
              ["ease-default", "ease", "Default browser easing"],
              ["ease-out", "cubic-bezier(0, 0, 0.2, 1)", "Deceleration"],
              ["ease-out-expo", "cubic-bezier(0.16, 1, 0.3, 1)", "Expo deceleration"],
              ["ease-bounce", "cubic-bezier(0.34, 1.56, 0.64, 1)", "Slight overshoot"],
            ].map(([token, val, desc]) => `
              <div style="display: flex; align-items: center; gap: var(--ds-space-4);">
                <div style="min-width: 180px; flex-shrink: 0;">
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${desc}</div>
                  <div style="font-size: var(--ds-text-2xs); color: var(--ds-color-text-disabled); font-family: var(--ds-font-mono);">${val}</div>
                </div>
                <div style="flex: 1; height: 32px; position: relative; background: var(--ds-color-bg-muted); border-radius: var(--ds-radius-sm); overflow: visible;">
                  <div style="width: 24px; height: 24px; background: var(--ds-color-interactive); border-radius: var(--ds-radius-full); position: relative; top: 4px; animation: easing-demo 2s var(--ds-${token}) infinite;"></div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Backdrop Blur</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--ds-space-4);">
            ${[
              ["blur-sm", "4px"],
              ["blur-md", "12px"],
              ["blur-lg", "20px"],
            ].map(([token, val]) => `
              <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-2);">
                <div style="width: 120px; height: 80px; position: relative; border-radius: var(--ds-radius-md); overflow: hidden; background: repeating-linear-gradient(45deg, var(--ds-color-brand), var(--ds-color-brand) 10px, var(--ds-color-success) 10px, var(--ds-color-success) 20px);">
                  <div style="position: absolute; inset: 0; backdrop-filter: blur(var(--ds-${token})); -webkit-backdrop-filter: blur(var(--ds-${token})); background: rgba(255,255,255,0.1);"></div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">${token}</div>
                  <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">${val}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Opacity</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: flex; gap: var(--ds-space-6); align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-2);">
              <div style="width: 80px; height: 40px; background: var(--ds-color-interactive); border-radius: var(--ds-radius-md);"></div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary);">Normal (1)</div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-2);">
              <div style="width: 80px; height: 40px; background: var(--ds-color-interactive); border-radius: var(--ds-radius-md); opacity: var(--ds-opacity-disabled);"></div>
              <div style="font-size: var(--ds-text-xs); font-family: var(--ds-font-mono); color: var(--ds-color-text-tertiary);">opacity-disabled (0.5)</div>
            </div>
          </div>
        ` }} />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Miscellaneous</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--ds-space-4);">
            <div style="display: flex; flex-direction: column; gap: var(--ds-space-2);">
              <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">dot-size</div>
              <div style="display: flex; align-items: center; gap: var(--ds-space-2);">
                <div style="width: var(--ds-dot-size); height: var(--ds-dot-size); border-radius: var(--ds-radius-full); background: var(--ds-color-success);"></div>
                <span style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">6px indicator dot</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--ds-space-2);">
              <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">accent-border-width</div>
              <div style="display: flex; align-items: center; gap: var(--ds-space-2);">
                <div style="width: 40px; height: 40px; border-left: var(--ds-accent-border-width) solid var(--ds-color-brand); background: var(--ds-color-bg-muted); border-radius: 0 var(--ds-radius-sm) var(--ds-radius-sm) 0;"></div>
                <span style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">3px accent bar</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--ds-space-2);">
              <div style="font-size: var(--ds-text-sm); font-family: var(--ds-font-mono);">offset-sm / offset-md</div>
              <div style="font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);">4px / 8px popover offset</div>
            </div>
          </div>
        ` }} />
      </section>
    </>
  );
}
