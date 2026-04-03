export default function BadgePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Badge</h1>
        <p>Pill shape, border + subtle bg, clean and refined.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-badge">Default</span>
<span class="ds-badge ds-badge--primary">Primary</span>
<span class="ds-badge ds-badge--success">Success</span>
<span class="ds-badge ds-badge--warning">Warning</span>
<span class="ds-badge ds-badge--error">Error</span>
<span class="ds-badge ds-badge--info">Info</span>
<span class="ds-badge ds-badge--purple">Purple</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Badge&gt;Default&lt;/Badge&gt;
&lt;Badge variant=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;
&lt;Badge variant=&quot;success&quot;&gt;Success&lt;/Badge&gt;
&lt;Badge variant=&quot;warning&quot;&gt;Warning&lt;/Badge&gt;
&lt;Badge variant=&quot;error&quot;&gt;Error&lt;/Badge&gt;
&lt;Badge variant=&quot;info&quot;&gt;Info&lt;/Badge&gt;
&lt;Badge variant=&quot;purple&quot;&gt;Purple&lt;/Badge&gt;
&lt;Badge variant=&quot;outline&quot;&gt;Outline&lt;/Badge&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Modifiers</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-badge ds-badge--outline">Outline</span>
<span class="ds-badge ds-badge--dot ds-badge--success">Online</span>
<span class="ds-badge ds-badge--upper ds-badge--primary">New</span>
<span class="ds-badge ds-badge--upper ds-badge--purple">Beta</span>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Badge variant=&quot;success&quot; dot&gt;Online&lt;/Badge&gt;
&lt;Badge variant=&quot;error&quot; dot&gt;Offline&lt;/Badge&gt;
&lt;Badge variant=&quot;primary&quot; upper&gt;New&lt;/Badge&gt;
&lt;Badge variant=&quot;purple&quot; upper&gt;Beta&lt;/Badge&gt;` }} /></pre>
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
                <td><code>.ds-badge</code></td>
                <td>Base</td>
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
                <td><code>--dot</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--upper</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
