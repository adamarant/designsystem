export default function ChipPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Chip</h1>
        <p>Interactive filter/sort chips with optional remove button.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Filter Chips</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-flex ds-items-center ds-gap-1">
  <span class="ds-chip">Status: Active <button class="ds-chip__remove">&times;</button></span>
  <button class="ds-chip ds-chip--logic">AND</button>
  <span class="ds-chip ds-chip--sort">Date ↑ <button class="ds-chip__remove">&times;</button></span>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-flex ds-items-center ds-gap-1&quot;&gt;
  &lt;span class=&quot;ds-chip&quot;&gt;Status: Active &lt;button class=&quot;ds-chip__remove&quot;&gt;&amp;times;&lt;/button&gt;&lt;/span&gt;
  &lt;button class=&quot;ds-chip ds-chip--logic&quot;&gt;AND&lt;/button&gt;
  &lt;span class=&quot;ds-chip ds-chip--sort&quot;&gt;Date ↑ &lt;button class=&quot;ds-chip__remove&quot;&gt;&amp;times;&lt;/button&gt;&lt;/span&gt;
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
                <td><code>.ds-chip</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__remove</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--logic</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--sort</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
