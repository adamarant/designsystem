export default function FooterPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Footer</h1>
        <p>The site closing chrome — one canonical shape: optional newsletter, brand + titled link columns, and a small credits row.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Structure</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<footer class="ds-footer"><div class="ds-container ds-footer__inner">…</div></footer>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;footer class=&quot;ds-footer&quot;&gt;&lt;div class=&quot;ds-container ds-footer__inner&quot;&gt;…&lt;/div&gt;&lt;/footer&gt;` }} /></pre>
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
                <td><code>.ds-footer</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-footer__inner</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__newsletter</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__brand</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__columns</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__column</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__link</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__social</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__credits</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>.ds-footer__note</code></td>
                <td>Element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
