export default function MediaLibraryPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Media Library</h1>
        <p>Grid items, selection toolbar, detail panel, and folder sidebar for media management UI.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Media Item (selected)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-media-item ds-media-item--selected" aria-selected="true"><div class="ds-media-item__thumb ds-aspect-square"><img src="#" class="ds-w-full ds-h-full ds-object-cover" alt="" /></div><div class="ds-media-item__check">✓</div><div class="ds-media-item__info"><p class="ds-text-xs ds-text-primary ds-truncate">photo.jpg</p><p class="ds-text-xs ds-text-tertiary">1.2 MB</p></div></button>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;button class=&quot;ds-media-item ds-media-item--selected&quot; aria-selected=&quot;true&quot;&gt;&lt;div class=&quot;ds-media-item__thumb ds-aspect-square&quot;&gt;&lt;img src=&quot;#&quot; class=&quot;ds-w-full ds-h-full ds-object-cover&quot; alt=&quot;&quot; /&gt;&lt;/div&gt;&lt;div class=&quot;ds-media-item__check&quot;&gt;✓&lt;/div&gt;&lt;div class=&quot;ds-media-item__info&quot;&gt;&lt;p class=&quot;ds-text-xs ds-text-primary ds-truncate&quot;&gt;photo.jpg&lt;/p&gt;&lt;p class=&quot;ds-text-xs ds-text-tertiary&quot;&gt;1.2 MB&lt;/p&gt;&lt;/div&gt;&lt;/button&gt;` }} /></pre>
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
                <td><code>.ds-media-item</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-media-toolbar</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-media-detail</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-media-folder</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__thumb</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__check</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__info</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__count</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__spacer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__preview</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__actions</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--selected</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--active</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
