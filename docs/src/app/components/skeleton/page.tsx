export default function SkeletonPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Skeleton</h1>
        <p>Loading placeholders with a subtle pulse animation.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Text Skeleton</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-skeleton ds-skeleton--heading"></div>
<div class="ds-skeleton ds-skeleton--text"></div>
<div class="ds-skeleton ds-skeleton--text ds-skeleton--w-3/4"></div>
<div class="ds-skeleton ds-skeleton--text ds-skeleton--w-1/2"></div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-skeleton ds-skeleton--heading&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;ds-skeleton ds-skeleton--text&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;ds-skeleton ds-skeleton--text ds-skeleton--w-3/4&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;ds-skeleton ds-skeleton--text ds-skeleton--w-1/2&quot;&gt;&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Card Skeleton</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-card">
  <div class="ds-card__body" style="display:flex;gap:1rem;align-items:center;">
    <div class="ds-skeleton ds-skeleton--avatar"></div>
    <div style="flex:1;">
      <div class="ds-skeleton ds-skeleton--text ds-skeleton--w-1/3"></div>
      <div class="ds-skeleton ds-skeleton--text-sm ds-skeleton--w-1/2"></div>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-card&quot;&gt;
  &lt;div class=&quot;ds-card__body&quot; style=&quot;display:flex;gap:1rem;align-items:center;&quot;&gt;
    &lt;div class=&quot;ds-skeleton ds-skeleton--avatar&quot;&gt;&lt;/div&gt;
    &lt;div style=&quot;flex:1;&quot;&gt;
      &lt;div class=&quot;ds-skeleton ds-skeleton--text ds-skeleton--w-1/3&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;ds-skeleton ds-skeleton--text-sm ds-skeleton--w-1/2&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
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
                <td><code>.ds-skeleton</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--text</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--text-sm</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--text-lg</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--heading</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--circle</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--avatar</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--card</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--btn</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--input</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--w-1/2</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--w-3/4</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--w-1/3</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
