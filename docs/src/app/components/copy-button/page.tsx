export default function CopyButtonPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Copy Button</h1>
        <p>Icon button with clipboard feedback state (idle → copied).</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default & Copied</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-copy-btn" aria-label="Copy">&#128203;</button>
<button class="ds-copy-btn ds-copy-btn--copied" aria-label="Copied">&#10003;</button>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;button class=&quot;ds-copy-btn&quot; aria-label=&quot;Copy&quot;&gt;&amp;#128203;&lt;/button&gt;
&lt;button class=&quot;ds-copy-btn ds-copy-btn--copied&quot; aria-label=&quot;Copied&quot;&gt;&amp;#10003;&lt;/button&gt;` }} /></pre>
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
                <td><code>.ds-copy-btn</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon-check</code></td>
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
                <td><code>--copied</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
