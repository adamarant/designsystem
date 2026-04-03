export default function ColorPickerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Color Picker</h1>
        <p>Grid of color swatches for selection.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-color-picker">
  <button class="ds-color-picker__swatch ds-color-picker__swatch--active" style="--swatch-color:#ef4444"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#f97316"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#eab308"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#22c55e"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#3b82f6"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#8b5cf6"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#ec4899"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#6b7280"></button>
  <button class="ds-color-picker__swatch" style="--swatch-color:#18181b"></button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-color-picker&quot;&gt;
  &lt;button class=&quot;ds-color-picker__swatch ds-color-picker__swatch--active&quot; style=&quot;--swatch-color:#ef4444&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#f97316&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#eab308&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#22c55e&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#3b82f6&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#8b5cf6&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#ec4899&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#6b7280&quot;&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-color-picker__swatch&quot; style=&quot;--swatch-color:#18181b&quot;&gt;&lt;/button&gt;
&lt;/div&gt;` }} /></pre>
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
                <td><code>.ds-color-picker</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__swatch</code></td>
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
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
