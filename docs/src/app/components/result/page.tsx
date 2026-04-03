export default function ResultPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Result</h1>
        <p>Feedback page for success, error, 404, or informational outcomes.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Success</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-result ds-result--success">
  <div class="ds-result__icon">&#10003;</div>
  <h2 class="ds-result__title">Payment Successful</h2>
  <p class="ds-result__description">Your order has been confirmed and will be shipped shortly.</p>
  <div class="ds-result__actions">
    <button class="ds-btn">View Order</button>
    <button class="ds-btn ds-btn--ghost">Continue Shopping</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-result ds-result--success&quot;&gt;
  &lt;div class=&quot;ds-result__icon&quot;&gt;&amp;#10003;&lt;/div&gt;
  &lt;h2 class=&quot;ds-result__title&quot;&gt;Payment Successful&lt;/h2&gt;
  &lt;p class=&quot;ds-result__description&quot;&gt;Your order has been confirmed and will be shipped shortly.&lt;/p&gt;
  &lt;div class=&quot;ds-result__actions&quot;&gt;
    &lt;button class=&quot;ds-btn&quot;&gt;View Order&lt;/button&gt;
    &lt;button class=&quot;ds-btn ds-btn--ghost&quot;&gt;Continue Shopping&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Error</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-result ds-result--error">
  <div class="ds-result__icon">&#10007;</div>
  <h2 class="ds-result__title">Something went wrong</h2>
  <p class="ds-result__description">We couldn't process your request. Please try again later.</p>
  <div class="ds-result__actions">
    <button class="ds-btn ds-btn--danger">Retry</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-result ds-result--error&quot;&gt;
  &lt;div class=&quot;ds-result__icon&quot;&gt;&amp;#10007;&lt;/div&gt;
  &lt;h2 class=&quot;ds-result__title&quot;&gt;Something went wrong&lt;/h2&gt;
  &lt;p class=&quot;ds-result__description&quot;&gt;We couldn't process your request. Please try again later.&lt;/p&gt;
  &lt;div class=&quot;ds-result__actions&quot;&gt;
    &lt;button class=&quot;ds-btn ds-btn--danger&quot;&gt;Retry&lt;/button&gt;
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
                <td><code>.ds-result</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
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
                <td><code>--success</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--warning</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--info</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
