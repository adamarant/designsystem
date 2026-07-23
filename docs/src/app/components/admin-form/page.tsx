export default function AdminFormPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Admin Form Layout</h1>
        <p>Two-column admin edit shell: growing main column + fixed-width sidebar, single column below lg.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Form layout</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-admin-form">
  <div class="ds-admin-form__main">…</div>
  <aside class="ds-admin-form__sidebar">…</aside>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-admin-form&quot;&gt;
  &lt;div class=&quot;ds-admin-form__main&quot;&gt;…&lt;/div&gt;
  &lt;aside class=&quot;ds-admin-form__sidebar&quot;&gt;…&lt;/aside&gt;
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
                <td><code>.ds-admin-form</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__main</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__sidebar</code></td>
                <td>Element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
