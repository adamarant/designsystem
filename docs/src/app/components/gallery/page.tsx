export default function GalleryPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Gallery</h1>
        <p>Image gallery with main image, thumbnail strip, and lightbox overlay.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Thumbnail Strip</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-gallery">
  <div class="ds-gallery__main" style="height:200px;background:var(--ds-color-bg-muted);border-radius:var(--ds-radius-xl);display:flex;align-items:center;justify-content:center;color:var(--ds-color-text-tertiary)">Main Image</div>
  <div class="ds-gallery__thumbs">
    <button class="ds-gallery__thumb ds-gallery__thumb--active" style="background:var(--ds-color-bg-muted)"></button>
    <button class="ds-gallery__thumb" style="background:var(--ds-color-bg-elevated)"></button>
    <button class="ds-gallery__thumb" style="background:var(--ds-color-bg-elevated)"></button>
    <button class="ds-gallery__thumb-more">+3</button>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-gallery&quot;&gt;
  &lt;div class=&quot;ds-gallery__main&quot; style=&quot;height:200px;background:var(--ds-color-bg-muted);border-radius:var(--ds-radius-xl);display:flex;align-items:center;justify-content:center;color:var(--ds-color-text-tertiary)&quot;&gt;Main Image&lt;/div&gt;
  &lt;div class=&quot;ds-gallery__thumbs&quot;&gt;
    &lt;button class=&quot;ds-gallery__thumb ds-gallery__thumb--active&quot; style=&quot;background:var(--ds-color-bg-muted)&quot;&gt;&lt;/button&gt;
    &lt;button class=&quot;ds-gallery__thumb&quot; style=&quot;background:var(--ds-color-bg-elevated)&quot;&gt;&lt;/button&gt;
    &lt;button class=&quot;ds-gallery__thumb&quot; style=&quot;background:var(--ds-color-bg-elevated)&quot;&gt;&lt;/button&gt;
    &lt;button class=&quot;ds-gallery__thumb-more&quot;&gt;+3&lt;/button&gt;
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
                <td><code>.ds-gallery</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-lightbox</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__main</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__thumbs</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__thumb</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__thumb-more</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__image</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__close</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__prev</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__next</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__counter</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--open</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
