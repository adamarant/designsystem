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
    <button class="ds-toast__close"><svg data-icon="close" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z" fill="currentColor" /></svg></button>
  </div>
  <div class="ds-toast ds-toast--error" style="animation:none;">
    <span class="ds-toast__message">Failed to upload file</span>
    <button class="ds-toast__close"><svg data-icon="close" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z" fill="currentColor" /></svg></button>
  </div>
  <div class="ds-toast ds-toast--warning" style="animation:none;">
    <span class="ds-toast__message">Your session will expire in 5 minutes</span>
    <button class="ds-toast__close"><svg data-icon="close" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z" fill="currentColor" /></svg></button>
  </div>
  <div class="ds-toast ds-toast--info" style="animation:none;">
    <span class="ds-toast__message">A new version is available</span>
    <button class="ds-toast__close"><svg data-icon="close" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z" fill="currentColor" /></svg></button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div style=&quot;display:flex;flex-direction:column;gap:0.5rem;&quot;&gt;
  &lt;div class=&quot;ds-toast ds-toast--success&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;Changes saved successfully&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&lt;svg data-icon=&quot;close&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toast ds-toast--error&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;Failed to upload file&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&lt;svg data-icon=&quot;close&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toast ds-toast--warning&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;Your session will expire in 5 minutes&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&lt;svg data-icon=&quot;close&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-toast ds-toast--info&quot; style=&quot;animation:none;&quot;&gt;
    &lt;span class=&quot;ds-toast__message&quot;&gt;A new version is available&lt;/span&gt;
    &lt;button class=&quot;ds-toast__close&quot;&gt;&lt;svg data-icon=&quot;close&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
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
