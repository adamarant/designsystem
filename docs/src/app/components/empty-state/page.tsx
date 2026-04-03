export default function EmptyStatePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Empty State</h1>
        <p>Centered message for when there's no data to display.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Empty State</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-empty-state">
  <div class="ds-empty-state__icon">&#128269;</div>
  <div class="ds-empty-state__title">No results found</div>
  <div class="ds-empty-state__description">Try adjusting your search or filters to find what you're looking for.</div>
  <div class="ds-empty-state__actions">
    <button class="ds-btn ds-btn--secondary">Clear filters</button>
    <button class="ds-btn">New search</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-empty-state&quot;&gt;
  &lt;div class=&quot;ds-empty-state__icon&quot;&gt;&amp;#128269;&lt;/div&gt;
  &lt;div class=&quot;ds-empty-state__title&quot;&gt;No results found&lt;/div&gt;
  &lt;div class=&quot;ds-empty-state__description&quot;&gt;Try adjusting your search or filters to find what you're looking for.&lt;/div&gt;
  &lt;div class=&quot;ds-empty-state__actions&quot;&gt;
    &lt;button class=&quot;ds-btn ds-btn--secondary&quot;&gt;Clear filters&lt;/button&gt;
    &lt;button class=&quot;ds-btn&quot;&gt;New search&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Card Empty State</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-empty-state ds-empty-state--card">
  <div class="ds-empty-state__icon">&#128196;</div>
  <div class="ds-empty-state__title">No documents yet</div>
  <div class="ds-empty-state__description">Upload your first document to get started.</div>
  <div class="ds-empty-state__actions">
    <button class="ds-btn">Upload Document</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-empty-state ds-empty-state--card&quot;&gt;
  &lt;div class=&quot;ds-empty-state__icon&quot;&gt;&amp;#128196;&lt;/div&gt;
  &lt;div class=&quot;ds-empty-state__title&quot;&gt;No documents yet&lt;/div&gt;
  &lt;div class=&quot;ds-empty-state__description&quot;&gt;Upload your first document to get started.&lt;/div&gt;
  &lt;div class=&quot;ds-empty-state__actions&quot;&gt;
    &lt;button class=&quot;ds-btn&quot;&gt;Upload Document&lt;/button&gt;
  &lt;/div&gt;
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
                <td><code>.ds-empty-state</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__description</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__actions</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--card</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
