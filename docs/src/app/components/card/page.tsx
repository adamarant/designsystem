export default function CardPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Card</h1>
        <p>Surface + border, hover with shadow lift, rounded-xl.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-card">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Project Overview</h3>
    <p class="ds-card__description">Summary of the current sprint progress</p>
  </div>
  <div class="ds-card__body">Content goes here</div>
  <div class="ds-card__footer">
    <button class="ds-btn ds-btn--sm ds-btn--secondary">Cancel</button>
    <button class="ds-btn ds-btn--sm">Save</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Card&gt;
  &lt;Card.Header&gt;
    &lt;Card.Title&gt;Project Alpha&lt;/Card.Title&gt;
    &lt;Card.Description&gt;A short description&lt;/Card.Description&gt;
  &lt;/Card.Header&gt;
  &lt;Card.Body&gt;Card content goes here.&lt;/Card.Body&gt;
  &lt;Card.Footer&gt;
    &lt;Button variant=&quot;ghost&quot; size=&quot;sm&quot;&gt;Cancel&lt;/Button&gt;
    &lt;Button size=&quot;sm&quot;&gt;Save&lt;/Button&gt;
  &lt;/Card.Footer&gt;
&lt;/Card&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-stat-card">
  <div class="ds-stat-card__icon">&#128200;</div>
  <div class="ds-stat-card__label">Total Revenue</div>
  <div class="ds-stat-card__value">\$45,231</div>
  <div class="ds-stat-card__detail">+12.5% from last month</div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Card variant=&quot;interactive&quot;&gt;Hover lift&lt;/Card&gt;
&lt;Card variant=&quot;elevated&quot;&gt;Shadow&lt;/Card&gt;
&lt;Card variant=&quot;hover&quot;&gt;Border highlight&lt;/Card&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Compact & Flush</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-card ds-card--interactive">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Design System</h3>
    <p class="ds-card__description">CSS component library</p>
  </div>
  <div class="ds-card__body">Click to open project details</div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Card compact&gt;Reduced padding&lt;/Card&gt;
&lt;Card flush&gt;No internal dividers&lt;/Card&gt;` }} /></pre>
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
                <td><code>.ds-card</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
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
                <td><code>__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__footer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__media</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--interactive</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--elevated</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--hover</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--flush</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
