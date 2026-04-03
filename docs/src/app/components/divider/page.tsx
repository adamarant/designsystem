export default function DividerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Divider</h1>
        <p>Horizontal and vertical separators with optional centered label.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Divider Types</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<p>Content above</p>
<hr class="ds-divider" />
<p>Content below</p>
<hr class="ds-divider ds-divider--subtle" />
<p>After subtle divider</p>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;p&gt;Content above&lt;/p&gt;
&lt;hr class=&quot;ds-divider&quot; /&gt;
&lt;p&gt;Content below&lt;/p&gt;
&lt;hr class=&quot;ds-divider ds-divider--subtle&quot; /&gt;
&lt;p&gt;After subtle divider&lt;/p&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Label Divider</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-divider ds-divider--label">Or continue with</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-divider ds-divider--label&quot;&gt;Or continue with&lt;/div&gt;` }} /></pre>
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
                <td><code>.ds-divider</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--vertical</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--subtle</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--spacious</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--label</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
