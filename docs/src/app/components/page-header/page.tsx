export default function PageHeaderPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Page Header</h1>
        <p>Top bar of an admin/dashboard page: optional back arrow, title, and right-aligned actions slot.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Page header with action</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-page-header">
  <div class="ds-page-header__lead">
    <button class="ds-page-header__back" aria-label="Back">&larr;</button>
    <div>
      <h1 class="ds-page-header__title ds-admin-title">Edit article</h1>
      <p class="ds-page-header__description">Draft saved 2 minutes ago</p>
    </div>
  </div>
  <div class="ds-page-header__actions">
    <button class="ds-btn">Save</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-page-header&quot;&gt;
  &lt;div class=&quot;ds-page-header__lead&quot;&gt;
    &lt;button class=&quot;ds-page-header__back&quot; aria-label=&quot;Back&quot;&gt;&amp;larr;&lt;/button&gt;
    &lt;div&gt;
      &lt;h1 class=&quot;ds-page-header__title ds-admin-title&quot;&gt;Edit article&lt;/h1&gt;
      &lt;p class=&quot;ds-page-header__description&quot;&gt;Draft saved 2 minutes ago&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-page-header__actions&quot;&gt;
    &lt;button class=&quot;ds-btn&quot;&gt;Save&lt;/button&gt;
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
                <td><code>.ds-page-header</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__lead</code></td>
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
                <td><code>__back</code></td>
                <td>Element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
