export default function AlertPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Alert</h1>
        <p>Contextual feedback banners with semantic variants and dismissibility.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-alert ds-alert--info">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Information</div>
    <div class="ds-alert__description">A new software update is available for download.</div>
  </div>
  <button class="ds-alert__close">&times;</button>
</div>
<div class="ds-alert ds-alert--success" style="margin-top:0.5rem;">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Success</div>
    <div class="ds-alert__description">Your profile has been updated successfully.</div>
  </div>
</div>
<div class="ds-alert ds-alert--warning" style="margin-top:0.5rem;">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Warning</div>
    <div class="ds-alert__description">Your storage is almost full. Consider upgrading your plan.</div>
  </div>
</div>
<div class="ds-alert ds-alert--error" style="margin-top:0.5rem;">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Error</div>
    <div class="ds-alert__description">Unable to process your request. Please try again.</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Alert variant=&quot;info&quot;&gt;
  &lt;Alert.Content&gt;&lt;Alert.Title&gt;Info&lt;/Alert.Title&gt;&lt;/Alert.Content&gt;
&lt;/Alert&gt;
&lt;Alert variant=&quot;success&quot;&gt;
  &lt;Alert.Content&gt;&lt;Alert.Title&gt;Success&lt;/Alert.Title&gt;&lt;/Alert.Content&gt;
&lt;/Alert&gt;
&lt;Alert variant=&quot;warning&quot;&gt;
  &lt;Alert.Content&gt;&lt;Alert.Title&gt;Warning&lt;/Alert.Title&gt;&lt;/Alert.Content&gt;
&lt;/Alert&gt;
&lt;Alert variant=&quot;error&quot;&gt;
  &lt;Alert.Content&gt;&lt;Alert.Title&gt;Error&lt;/Alert.Title&gt;&lt;/Alert.Content&gt;
&lt;/Alert&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Dismissible</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-alert ds-alert--banner ds-alert--info">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Scheduled Maintenance</div>
    <div class="ds-alert__description">System will be down for maintenance on March 1st from 2:00 AM to 4:00 AM UTC.</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Alert variant=&quot;info&quot;&gt;
  &lt;Alert.Content&gt;
    &lt;Alert.Title&gt;Update available&lt;/Alert.Title&gt;
    &lt;Alert.Description&gt;A new version is ready.&lt;/Alert.Description&gt;
  &lt;/Alert.Content&gt;
  &lt;Alert.Close onClick={dismiss} /&gt;
&lt;/Alert&gt;` }} /></pre>
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
                <td><code>.ds-alert</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
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
                <td><code>__close</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--info</code></td>
                <td>Variant</td>
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
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--banner</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
