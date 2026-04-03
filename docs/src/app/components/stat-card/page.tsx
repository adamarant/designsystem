export default function StatCardPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Stat Card</h1>
        <p>Compact metric display with label, value, detail, and optional icon.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Stat</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-stat-card">
  <div class="ds-stat-card__label">Total Revenue</div>
  <div class="ds-stat-card__value">\$45,231</div>
  <div class="ds-stat-card__detail">+12.5% from last month</div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-stat-card&quot;&gt;
  &lt;div class=&quot;ds-stat-card__label&quot;&gt;Total Revenue&lt;/div&gt;
  &lt;div class=&quot;ds-stat-card__value&quot;&gt;\$45,231&lt;/div&gt;
  &lt;div class=&quot;ds-stat-card__detail&quot;&gt;+12.5% from last month&lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">With Icon</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-stat-card">
  <div class="ds-stat-card__icon">&#128200;</div>
  <div class="ds-stat-card__label">Active Users</div>
  <div class="ds-stat-card__value">1,234</div>
  <div class="ds-stat-card__detail">+5.2% this week</div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-stat-card&quot;&gt;
  &lt;div class=&quot;ds-stat-card__icon&quot;&gt;&amp;#128200;&lt;/div&gt;
  &lt;div class=&quot;ds-stat-card__label&quot;&gt;Active Users&lt;/div&gt;
  &lt;div class=&quot;ds-stat-card__value&quot;&gt;1,234&lt;/div&gt;
  &lt;div class=&quot;ds-stat-card__detail&quot;&gt;+5.2% this week&lt;/div&gt;
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
                <td><code>.ds-stat-card</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__value</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__detail</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
