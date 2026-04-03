export default function BreadcrumbPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Breadcrumb</h1>
        <p>A horizontal breadcrumb trail for hierarchical navigation.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Breadcrumb</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-breadcrumb" aria-label="Breadcrumb">
  <span class="ds-breadcrumb__item">
    <a href="#" class="ds-breadcrumb__link">Home</a>
  </span>
  <span class="ds-breadcrumb__item">
    <a href="#" class="ds-breadcrumb__link">Products</a>
  </span>
  <span class="ds-breadcrumb__item">
    <span class="ds-breadcrumb__current" aria-current="page">Widget Pro</span>
  </span>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-breadcrumb&quot; aria-label=&quot;Breadcrumb&quot;&gt;
  &lt;span class=&quot;ds-breadcrumb__item&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;ds-breadcrumb__link&quot;&gt;Home&lt;/a&gt;
  &lt;/span&gt;
  &lt;span class=&quot;ds-breadcrumb__item&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;ds-breadcrumb__link&quot;&gt;Products&lt;/a&gt;
  &lt;/span&gt;
  &lt;span class=&quot;ds-breadcrumb__item&quot;&gt;
    &lt;span class=&quot;ds-breadcrumb__current&quot; aria-current=&quot;page&quot;&gt;Widget Pro&lt;/span&gt;
  &lt;/span&gt;
&lt;/nav&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Compact Breadcrumb</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-breadcrumb ds-breadcrumb--compact" aria-label="Breadcrumb">
  <span class="ds-breadcrumb__item">
    <a href="#" class="ds-breadcrumb__link">Dashboard</a>
  </span>
  <span class="ds-breadcrumb__item">
    <a href="#" class="ds-breadcrumb__link">Settings</a>
  </span>
  <span class="ds-breadcrumb__item">
    <span class="ds-breadcrumb__current" aria-current="page">Profile</span>
  </span>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-breadcrumb ds-breadcrumb--compact&quot; aria-label=&quot;Breadcrumb&quot;&gt;
  &lt;span class=&quot;ds-breadcrumb__item&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;ds-breadcrumb__link&quot;&gt;Dashboard&lt;/a&gt;
  &lt;/span&gt;
  &lt;span class=&quot;ds-breadcrumb__item&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;ds-breadcrumb__link&quot;&gt;Settings&lt;/a&gt;
  &lt;/span&gt;
  &lt;span class=&quot;ds-breadcrumb__item&quot;&gt;
    &lt;span class=&quot;ds-breadcrumb__current&quot; aria-current=&quot;page&quot;&gt;Profile&lt;/span&gt;
  &lt;/span&gt;
&lt;/nav&gt;` }} /></pre>
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
                <td><code>.ds-breadcrumb</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__link</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__current</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
