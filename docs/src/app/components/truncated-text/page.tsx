export default function TruncatedTextPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Truncated Text</h1>
        <p>Display long text (hashes, addresses, IDs) with middle or end truncation.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">End Truncation</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-truncate" style="max-width:12rem">0x1a2b3c4d5e6f7890abcdef1234567890abcdef</span>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;span class=&quot;ds-truncate&quot; style=&quot;max-width:12rem&quot;&gt;0x1a2b3c4d5e6f7890abcdef1234567890abcdef&lt;/span&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Hash Display</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<span class="ds-hash">
  <span class="ds-hash__value">0x1a2b...cdef</span>
  <button class="ds-copy-btn ds-copy-btn--sm" aria-label="Copy">&#128203;</button>
</span>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;span class=&quot;ds-hash&quot;&gt;
  &lt;span class=&quot;ds-hash__value&quot;&gt;0x1a2b...cdef&lt;/span&gt;
  &lt;button class=&quot;ds-copy-btn ds-copy-btn--sm&quot; aria-label=&quot;Copy&quot;&gt;&amp;#128203;&lt;/button&gt;
&lt;/span&gt;` }} /></pre>
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
                <td><code>.ds-truncate</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-hash</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__start</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__separator</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__end</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__value</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--middle</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
