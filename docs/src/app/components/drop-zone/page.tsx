export default function DropZonePage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Drop Zone</h1>
        <p>Dashed-border upload area with icon, label, hint, and progress states.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-drop-zone">
  <div class="ds-drop-zone__icon"><svg data-icon="upload" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.75V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
  <p class="ds-drop-zone__label">Drop files here or click to upload</p>
  <p class="ds-drop-zone__hint">JPG, PNG, WebP &middot; Max 10 MB</p>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-drop-zone&quot;&gt;
  &lt;div class=&quot;ds-drop-zone__icon&quot;&gt;&lt;svg data-icon=&quot;upload&quot; width=&quot;32&quot; height=&quot;32&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M20 14.75V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/div&gt;
  &lt;p class=&quot;ds-drop-zone__label&quot;&gt;Drop files here or click to upload&lt;/p&gt;
  &lt;p class=&quot;ds-drop-zone__hint&quot;&gt;JPG, PNG, WebP &amp;middot; Max 10 MB&lt;/p&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Large (empty state)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-drop-zone ds-drop-zone--lg">
  <div class="ds-drop-zone__icon"><svg data-icon="upload" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.75V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
  <p class="ds-drop-zone__label">Drop files here or click to upload</p>
  <p class="ds-drop-zone__hint">JPG, PNG, WebP, GIF, MP4, WebM</p>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-drop-zone ds-drop-zone--lg&quot;&gt;
  &lt;div class=&quot;ds-drop-zone__icon&quot;&gt;&lt;svg data-icon=&quot;upload&quot; width=&quot;32&quot; height=&quot;32&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M20 14.75V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/div&gt;
  &lt;p class=&quot;ds-drop-zone__label&quot;&gt;Drop files here or click to upload&lt;/p&gt;
  &lt;p class=&quot;ds-drop-zone__hint&quot;&gt;JPG, PNG, WebP, GIF, MP4, WebM&lt;/p&gt;
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
                <td><code>.ds-drop-zone</code></td>
                <td>Base</td>
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
                <td><code>__hint</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__error</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--active</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--uploading</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
