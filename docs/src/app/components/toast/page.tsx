export default function ToastPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Toast</h1>
        <p>Notification toasts with positions and enter/exit animations.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Toast Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div style="display:flex;flex-direction:column;gap:0.5rem;">
  <div class="ds-toast ds-toast--success" style="animation:none;">
    <span class="ds-toast__message">Changes saved successfully</span>
    <button class="ds-toast__close">&times;</button>
  </div>
  <div class="ds-toast ds-toast--error" style="animation:none;">
    <span class="ds-toast__message">Failed to upload file</span>
    <button class="ds-toast__close">&times;</button>
  </div>
  <div class="ds-toast ds-toast--warning" style="animation:none;">
    <span class="ds-toast__message">Your session will expire in 5 minutes</span>
    <button class="ds-toast__close">&times;</button>
  </div>
  <div class="ds-toast ds-toast--info" style="animation:none;">
    <span class="ds-toast__message">A new version is available</span>
    <button class="ds-toast__close">&times;</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div style=&quot;display:flex;flex-direction:column;gap:0.5rem;&quot;&gt;
  &lt;div class=&quot;ds-toast ds-toast--success&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;Changes saved successfully&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&amp;times;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toast ds-toast--error&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;Failed to upload file&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&amp;times;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toast ds-toast--warning&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;Your session will expire in 5 minutes&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&amp;times;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toast ds-toast--info&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;A new version is available&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&amp;times;&lt;/button&gt;
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
                <td><code>.ds-toast</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-toast-container</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__message</code></td>
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
                <td><code>--exit</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
