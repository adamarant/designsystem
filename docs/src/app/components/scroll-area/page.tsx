export default function ScrollAreaPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Scroll Area</h1>
        <p>Custom-styled scrollbar for overflow containers. Cross-browser.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Vertical Scroll</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-scroll-area" style="max-height:8rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-lg);padding:var(--ds-space-3)">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-scroll-area&quot; style=&quot;max-height:8rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-lg);padding:var(--ds-space-3)&quot;&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
  &lt;p&gt;Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/p&gt;
  &lt;p&gt;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.&lt;/p&gt;
  &lt;p&gt;Duis aute irure dolor in reprehenderit in voluptate velit esse.&lt;/p&gt;
  &lt;p&gt;Excepteur sint occaecat cupidatat non proident, sunt in culpa.&lt;/p&gt;
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
                <td><code>.ds-scroll-area</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--horizontal</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--both</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--thin</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
