export default function DescriptionListPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Description List</h1>
        <p>Key-value pairs display with horizontal, vertical, bordered, and striped layouts.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Vertical (Default)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-description-list">
  <div class="ds-description-list__item">
    <dt class="ds-description-list__term">Name</dt>
    <dd class="ds-description-list__detail">John Doe</dd>
  </div>
  <div class="ds-description-list__item">
    <dt class="ds-description-list__term">Email</dt>
    <dd class="ds-description-list__detail">john@example.com</dd>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-description-list&quot;&gt;
  &lt;div class=&quot;ds-description-list__item&quot;&gt;
    &lt;dt class=&quot;ds-description-list__term&quot;&gt;Name&lt;/dt&gt;
    &lt;dd class=&quot;ds-description-list__detail&quot;&gt;John Doe&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-description-list__item&quot;&gt;
    &lt;dt class=&quot;ds-description-list__term&quot;&gt;Email&lt;/dt&gt;
    &lt;dd class=&quot;ds-description-list__detail&quot;&gt;john@example.com&lt;/dd&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Horizontal & Bordered</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-description-list ds-description-list--horizontal ds-description-list--bordered">
  <div class="ds-description-list__item">
    <dt class="ds-description-list__term">Status</dt>
    <dd class="ds-description-list__detail">Active</dd>
  </div>
  <div class="ds-description-list__item">
    <dt class="ds-description-list__term">Role</dt>
    <dd class="ds-description-list__detail">Administrator</dd>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-description-list ds-description-list--horizontal ds-description-list--bordered&quot;&gt;
  &lt;div class=&quot;ds-description-list__item&quot;&gt;
    &lt;dt class=&quot;ds-description-list__term&quot;&gt;Status&lt;/dt&gt;
    &lt;dd class=&quot;ds-description-list__detail&quot;&gt;Active&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-description-list__item&quot;&gt;
    &lt;dt class=&quot;ds-description-list__term&quot;&gt;Role&lt;/dt&gt;
    &lt;dd class=&quot;ds-description-list__detail&quot;&gt;Administrator&lt;/dd&gt;
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
                <td><code>.ds-description-list</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__term</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__detail</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--horizontal</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--bordered</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--striped</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
