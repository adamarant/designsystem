export default function MediaLibraryPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Media Library</h1>
        <p>Grid items, selection toolbar, detail panel, and folder sidebar for media management UI.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Media Item (selected)</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-media-item ds-media-item--selected" aria-selected="true"><div class="ds-media-item__thumb ds-aspect-square"><img src="#" class="ds-w-full ds-h-full ds-object-cover" alt="" /></div><div class="ds-media-item__check"><svg data-icon="check" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z" fill="currentColor" /></svg></div><div class="ds-media-item__info"><p class="ds-text-xs ds-text-primary ds-truncate">photo.jpg</p><p class="ds-text-xs ds-text-tertiary">1.2 MB</p></div></button>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;button class=&quot;ds-media-item ds-media-item--selected&quot; aria-selected=&quot;true&quot;&gt;&lt;div class=&quot;ds-media-item__thumb ds-aspect-square&quot;&gt;&lt;img src=&quot;#&quot; class=&quot;ds-w-full ds-h-full ds-object-cover&quot; alt=&quot;&quot; /&gt;&lt;/div&gt;&lt;div class=&quot;ds-media-item__check&quot;&gt;&lt;svg data-icon=&quot;check&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/div&gt;&lt;div class=&quot;ds-media-item__info&quot;&gt;&lt;p class=&quot;ds-text-xs ds-text-primary ds-truncate&quot;&gt;photo.jpg&lt;/p&gt;&lt;p class=&quot;ds-text-xs ds-text-tertiary&quot;&gt;1.2 MB&lt;/p&gt;&lt;/div&gt;&lt;/button&gt;` }} /></pre>
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
                <td><code>.ds-media-detail-slot</code></td>
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
                <td><code>__action</code></td>
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
              <tr>
                <td><code>--danger</code></td>
                <td>Variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
