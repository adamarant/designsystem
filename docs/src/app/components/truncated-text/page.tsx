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
  <button class="ds-copy-btn ds-copy-btn--sm" aria-label="Copy"><svg data-icon="copy" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
</span>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;span class=&quot;ds-hash&quot;&gt;
  &lt;span class=&quot;ds-hash__value&quot;&gt;0x1a2b...cdef&lt;/span&gt;
  &lt;button class=&quot;ds-copy-btn ds-copy-btn--sm&quot; aria-label=&quot;Copy&quot;&gt;&lt;svg data-icon=&quot;copy&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
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
