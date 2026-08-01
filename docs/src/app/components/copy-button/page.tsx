export default function CopyButtonPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Copy Button</h1>
        <p>Icon button with clipboard feedback state (idle → copied).</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default & Copied</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<button class="ds-copy-btn" aria-label="Copy"><svg data-icon="copy" class="ds-copy-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg><svg data-icon="check" class="ds-copy-btn__icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z" fill="currentColor" /></svg></button>
<button class="ds-copy-btn ds-copy-btn--copied" aria-label="Copied"><svg data-icon="copy" class="ds-copy-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg><svg data-icon="check" class="ds-copy-btn__icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z" fill="currentColor" /></svg></button>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;button class=&quot;ds-copy-btn&quot; aria-label=&quot;Copy&quot;&gt;&lt;svg data-icon=&quot;copy&quot; class=&quot;ds-copy-btn__icon&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;svg data-icon=&quot;check&quot; class=&quot;ds-copy-btn__icon-check&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
&lt;button class=&quot;ds-copy-btn ds-copy-btn--copied&quot; aria-label=&quot;Copied&quot;&gt;&lt;svg data-icon=&quot;copy&quot; class=&quot;ds-copy-btn__icon&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;svg data-icon=&quot;check&quot; class=&quot;ds-copy-btn__icon-check&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;` }} /></pre>
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
                <td><code>.ds-copy-btn</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon-check</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--sm</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--copied</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
