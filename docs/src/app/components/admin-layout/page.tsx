export default function AdminLayoutPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Admin Layout</h1>
        <p>Sidebar + header + main content system for admin dashboards with collapsible sidebar.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Expanded Sidebar</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-admin ds-admin--expanded">
  <aside class="ds-admin__sidebar">
    <div class="ds-admin__sidebar-header">Logo</div>
    <nav class="ds-admin__nav">
      <a class="ds-admin__nav-item ds-admin__nav-item--active">
        <span class="ds-admin__nav-icon">&#9776;</span>
        <span class="ds-admin__nav-label">Dashboard</span>
      </a>
    </nav>
  </aside>
  <header class="ds-admin__header">
    <div class="ds-admin__header-inner">Header</div>
  </header>
  <main class="ds-admin__main">
    <div class="ds-admin__content">Content</div>
  </main>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-admin ds-admin--expanded&quot;&gt;
  &lt;aside class=&quot;ds-admin__sidebar&quot;&gt;
    &lt;div class=&quot;ds-admin__sidebar-header&quot;&gt;Logo&lt;/div&gt;
    &lt;nav class=&quot;ds-admin__nav&quot;&gt;
      &lt;a class=&quot;ds-admin__nav-item ds-admin__nav-item--active&quot;&gt;
        &lt;span class=&quot;ds-admin__nav-icon&quot;&gt;&amp;#9776;&lt;/span&gt;
        &lt;span class=&quot;ds-admin__nav-label&quot;&gt;Dashboard&lt;/span&gt;
      &lt;/a&gt;
    &lt;/nav&gt;
  &lt;/aside&gt;
  &lt;header class=&quot;ds-admin__header&quot;&gt;
    &lt;div class=&quot;ds-admin__header-inner&quot;&gt;Header&lt;/div&gt;
  &lt;/header&gt;
  &lt;main class=&quot;ds-admin__main&quot;&gt;
    &lt;div class=&quot;ds-admin__content&quot;&gt;Content&lt;/div&gt;
  &lt;/main&gt;
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
                <td><code>.ds-admin</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__sidebar</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__sidebar-header</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__sidebar-badge</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__sidebar-footer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__nav</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__nav-item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__nav-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__nav-label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__subnav</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__subnav-item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__footer-link</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header-inner</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header-toggle</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__main</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__container</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__overlay</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__mobile-menu</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--expanded</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--collapsed</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
