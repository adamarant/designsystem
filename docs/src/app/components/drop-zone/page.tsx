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
  <div class="ds-drop-zone__icon">&#9729;</div>
  <p class="ds-drop-zone__label">Drop files here or click to upload</p>
  <p class="ds-drop-zone__hint">JPG, PNG, WebP &middot; Max 10 MB</p>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-drop-zone&quot;&gt;
  &lt;div class=&quot;ds-drop-zone__icon&quot;&gt;&amp;#9729;&lt;/div&gt;
  &lt;p class=&quot;ds-drop-zone__label&quot;&gt;Drop files here or click to upload&lt;/p&gt;
  &lt;p class=&quot;ds-drop-zone__hint&quot;&gt;JPG, PNG, WebP &amp;middot; Max 10 MB&lt;/p&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Large (empty state)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-drop-zone ds-drop-zone--lg">
  <div class="ds-drop-zone__icon">&#9729;</div>
  <p class="ds-drop-zone__label">Drop files here or click to upload</p>
  <p class="ds-drop-zone__hint">JPG, PNG, WebP, GIF, MP4, WebM</p>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-drop-zone ds-drop-zone--lg&quot;&gt;
  &lt;div class=&quot;ds-drop-zone__icon&quot;&gt;&amp;#9729;&lt;/div&gt;
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
