export default function TagPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Tag</h1>
        <p>Interactive, optionally removable tag for categorisation and filtering.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-tag">Default</span>
<span class="ds-tag ds-tag--primary">Primary</span>
<span class="ds-tag ds-tag--success">Approved</span>
<span class="ds-tag ds-tag--warning">Pending</span>
<span class="ds-tag ds-tag--error">Rejected</span>
<span class="ds-tag ds-tag--info">Info</span>
<span class="ds-tag ds-tag--purple">Feature</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tag&gt;Default&lt;/Tag&gt;
&lt;Tag variant=&quot;primary&quot;&gt;Primary&lt;/Tag&gt;
&lt;Tag variant=&quot;success&quot;&gt;Success&lt;/Tag&gt;
&lt;Tag variant=&quot;warning&quot;&gt;Warning&lt;/Tag&gt;
&lt;Tag variant=&quot;error&quot;&gt;Error&lt;/Tag&gt;
&lt;Tag variant=&quot;outline&quot;&gt;Outline&lt;/Tag&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-tag ds-tag--removable ds-tag--primary">React <button class="ds-tag__remove" aria-label="Remove">&times;</button></span>
<span class="ds-tag ds-tag--removable ds-tag--success">TypeScript <button class="ds-tag__remove" aria-label="Remove">&times;</button></span>
<span class="ds-tag ds-tag--removable">CSS <button class="ds-tag__remove" aria-label="Remove">&times;</button></span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tag size=&quot;sm&quot;&gt;Small&lt;/Tag&gt;
&lt;Tag&gt;Medium&lt;/Tag&gt;
&lt;Tag size=&quot;lg&quot;&gt;Large&lt;/Tag&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Removable</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-tag ds-tag--sm">Small</span>
<span class="ds-tag">Default</span>
<span class="ds-tag ds-tag--lg">Large</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Tag variant=&quot;primary&quot; removable&gt;
  React
  &lt;Tag.Remove onClick={() =&gt; onRemove(id)} /&gt;
&lt;/Tag&gt;` }} /></pre>
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
                <td><code>.ds-tag</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__remove</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--primary</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--success</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--warning</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--info</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--purple</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--outline</code></td>
                <td>Variant</td>
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
                <td><code>--removable</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
