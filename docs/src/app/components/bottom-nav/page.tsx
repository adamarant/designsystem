export default function BottomNavPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Bottom Nav</h1>
        <p>Mobile bottom navigation bar, hidden on desktop.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Mobile Bottom Navigation</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<nav class="ds-bottom-nav" style="display:flex;position:relative">
  <a class="ds-bottom-nav__item ds-bottom-nav__item--active">
    <span class="ds-bottom-nav__icon">⌂</span>
    <span class="ds-bottom-nav__label">Home</span>
  </a>
  <a class="ds-bottom-nav__item">
    <span class="ds-bottom-nav__icon">
      ✉
      <span class="ds-bottom-nav__badge">3</span>
    </span>
    <span class="ds-bottom-nav__label">Inbox</span>
  </a>
  <button class="ds-bottom-nav__item ds-bottom-nav__item--create">
    <span class="ds-bottom-nav__create-icon">+</span>
    <span class="ds-bottom-nav__label">New</span>
  </button>
  <a class="ds-bottom-nav__item">
    <span class="ds-bottom-nav__icon">⚙</span>
    <span class="ds-bottom-nav__label">Settings</span>
  </a>
</nav>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;nav class=&quot;ds-bottom-nav&quot; style=&quot;display:flex;position:relative&quot;&gt;
  &lt;a class=&quot;ds-bottom-nav__item ds-bottom-nav__item--active&quot;&gt;
    &lt;span class=&quot;ds-bottom-nav__icon&quot;&gt;⌂&lt;/span&gt;
    &lt;span class=&quot;ds-bottom-nav__label&quot;&gt;Home&lt;/span&gt;
  &lt;/a&gt;
  &lt;a class=&quot;ds-bottom-nav__item&quot;&gt;
    &lt;span class=&quot;ds-bottom-nav__icon&quot;&gt;
      ✉
      &lt;span class=&quot;ds-bottom-nav__badge&quot;&gt;3&lt;/span&gt;
    &lt;/span&gt;
    &lt;span class=&quot;ds-bottom-nav__label&quot;&gt;Inbox&lt;/span&gt;
  &lt;/a&gt;
  &lt;button class=&quot;ds-bottom-nav__item ds-bottom-nav__item--create&quot;&gt;
    &lt;span class=&quot;ds-bottom-nav__create-icon&quot;&gt;+&lt;/span&gt;
    &lt;span class=&quot;ds-bottom-nav__label&quot;&gt;New&lt;/span&gt;
  &lt;/button&gt;
  &lt;a class=&quot;ds-bottom-nav__item&quot;&gt;
    &lt;span class=&quot;ds-bottom-nav__icon&quot;&gt;⚙&lt;/span&gt;
    &lt;span class=&quot;ds-bottom-nav__label&quot;&gt;Settings&lt;/span&gt;
  &lt;/a&gt;
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
                <td><code>.ds-bottom-nav</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__badge</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__create-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__item--active</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__item--create</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
