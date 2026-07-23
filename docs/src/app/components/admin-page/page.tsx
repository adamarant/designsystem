export default function AdminPagePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Admin Page</h1>
        <p>Vertical rhythm contract for an admin page: header, toolbar, body and footer spaced by the system instead of by a per-page wrapper.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">List page: header, toolbar, body, pagination</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-admin-page">
  <div class="ds-page-header">
    <div class="ds-page-header__lead">
      <h1 class="ds-page-header__title ds-admin-title">Projects</h1>
    </div>
    <div class="ds-page-header__actions">
      <button class="ds-btn">New Project</button>
    </div>
  </div>
  <div class="ds-admin-page__toolbar">
    <div class="ds-flex ds-flex-wrap ds-gap-3 ds-items-center">
      <div class="ds-input-group ds-flex-1"><input class="ds-input ds-input--lg" placeholder="Search projects…"></div>
      <div class="ds-segmented" role="radiogroup" aria-label="Status">
        <button class="ds-segmented__item ds-segmented__item--active" role="radio" aria-checked="true">All</button>
        <button class="ds-segmented__item" role="radio" aria-checked="false">Draft</button>
      </div>
    </div>
  </div>
  <div class="ds-admin-page__body">
    <div class="ds-table-wrapper"><table class="ds-table"><tbody><tr><td>…</td></tr></tbody></table></div>
  </div>
  <div class="ds-admin-page__footer">
    <nav class="ds-pagination" aria-label="Pagination"><span class="ds-pagination__info">1 / 4</span></nav>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-admin-page&quot;&gt;
  &lt;div class=&quot;ds-page-header&quot;&gt;
    &lt;div class=&quot;ds-page-header__lead&quot;&gt;
      &lt;h1 class=&quot;ds-page-header__title ds-admin-title&quot;&gt;Projects&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-page-header__actions&quot;&gt;
      &lt;button class=&quot;ds-btn&quot;&gt;New Project&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-admin-page__toolbar&quot;&gt;
    &lt;div class=&quot;ds-flex ds-flex-wrap ds-gap-3 ds-items-center&quot;&gt;
      &lt;div class=&quot;ds-input-group ds-flex-1&quot;&gt;&lt;input class=&quot;ds-input ds-input--lg&quot; placeholder=&quot;Search projects…&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;ds-segmented&quot; role=&quot;radiogroup&quot; aria-label=&quot;Status&quot;&gt;
        &lt;button class=&quot;ds-segmented__item ds-segmented__item--active&quot; role=&quot;radio&quot; aria-checked=&quot;true&quot;&gt;All&lt;/button&gt;
        &lt;button class=&quot;ds-segmented__item&quot; role=&quot;radio&quot; aria-checked=&quot;false&quot;&gt;Draft&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-admin-page__body&quot;&gt;
    &lt;div class=&quot;ds-table-wrapper&quot;&gt;&lt;table class=&quot;ds-table&quot;&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;…&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-admin-page__footer&quot;&gt;
    &lt;nav class=&quot;ds-pagination&quot; aria-label=&quot;Pagination&quot;&gt;&lt;span class=&quot;ds-pagination__info&quot;&gt;1 / 4&lt;/span&gt;&lt;/nav&gt;
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
                <td><code>.ds-admin-page</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__toolbar</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__footer</code></td>
                <td>Element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
