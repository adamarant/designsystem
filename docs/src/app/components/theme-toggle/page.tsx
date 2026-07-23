export default function ThemeTogglePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Theme Toggle</h1>
        <p>A modern light/dark switch that shows both icons (sun + moon) at once, so the current and available theme are always visible. aria-checked="true" means dark mode.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Theme Toggle States</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-theme-toggle" role="switch" aria-checked="false" aria-label="Switch to dark mode">
  <span class="ds-theme-toggle__thumb"></span>
  <span class="ds-theme-toggle__icon ds-theme-toggle__icon--sun"></span>
  <span class="ds-theme-toggle__icon ds-theme-toggle__icon--moon"></span>
</button>
<button class="ds-theme-toggle" role="switch" aria-checked="true" aria-label="Switch to light mode">
  <span class="ds-theme-toggle__thumb"></span>
  <span class="ds-theme-toggle__icon ds-theme-toggle__icon--sun"></span>
  <span class="ds-theme-toggle__icon ds-theme-toggle__icon--moon"></span>
</button>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;button class=&quot;ds-theme-toggle&quot; role=&quot;switch&quot; aria-checked=&quot;false&quot; aria-label=&quot;Switch to dark mode&quot;&gt;
  &lt;span class=&quot;ds-theme-toggle__thumb&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-theme-toggle__icon ds-theme-toggle__icon--sun&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-theme-toggle__icon ds-theme-toggle__icon--moon&quot;&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;button class=&quot;ds-theme-toggle&quot; role=&quot;switch&quot; aria-checked=&quot;true&quot; aria-label=&quot;Switch to light mode&quot;&gt;
  &lt;span class=&quot;ds-theme-toggle__thumb&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-theme-toggle__icon ds-theme-toggle__icon--sun&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-theme-toggle__icon ds-theme-toggle__icon--moon&quot;&gt;&lt;/span&gt;
&lt;/button&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Small</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-theme-toggle ds-theme-toggle--sm" role="switch" aria-checked="true" aria-label="Switch to light mode">
  <span class="ds-theme-toggle__thumb"></span>
  <span class="ds-theme-toggle__icon ds-theme-toggle__icon--sun"></span>
  <span class="ds-theme-toggle__icon ds-theme-toggle__icon--moon"></span>
</button>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;button class=&quot;ds-theme-toggle ds-theme-toggle--sm&quot; role=&quot;switch&quot; aria-checked=&quot;true&quot; aria-label=&quot;Switch to light mode&quot;&gt;
  &lt;span class=&quot;ds-theme-toggle__thumb&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-theme-toggle__icon ds-theme-toggle__icon--sun&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-theme-toggle__icon ds-theme-toggle__icon--moon&quot;&gt;&lt;/span&gt;
&lt;/button&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">API Reference</h2>
        <div className="ds-table-wrapper">
          <table className="ds-table ds-table--compact">
            <thead>
              <tr>
                <th>Class</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>.ds-theme-toggle</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__thumb</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--checked</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--disabled</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
