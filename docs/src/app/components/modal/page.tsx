export default function ModalPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Modal</h1>
        <p>Backdrop blur, shadow-2xl, rounded-xl. Smooth scale transition.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Modal</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-modal ds-modal--open" style="position:relative;background:transparent;padding:0;">
  <div class="ds-modal__content" style="position:relative;transform:none;">
    <div class="ds-modal__header">
      <div>
        <h3>Confirm Action</h3>
        <p>This action cannot be undone.</p>
      </div>
      <button class="ds-modal__close" aria-label="Close">&times;</button>
    </div>
    <div class="ds-modal__body">
      <p>Are you sure you want to delete this project? All data will be permanently removed.</p>
    </div>
    <div class="ds-modal__footer">
      <button class="ds-btn ds-btn--secondary">Cancel</button>
      <button class="ds-btn ds-btn--danger">Delete</button>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `const [open, setOpen] = useState(false);

&lt;Button onClick={() =&gt; setOpen(true)}&gt;Open&lt;/Button&gt;
&lt;Modal open={open} onClose={() =&gt; setOpen(false)}&gt;
  &lt;Modal.Content&gt;
    &lt;Modal.Header&gt;
      &lt;h3&gt;Confirm&lt;/h3&gt;
      &lt;Modal.Close onClick={() =&gt; setOpen(false)} /&gt;
    &lt;/Modal.Header&gt;
    &lt;Modal.Body&gt;Are you sure?&lt;/Modal.Body&gt;
    &lt;Modal.Footer&gt;
      &lt;Button variant=&quot;ghost&quot; onClick={() =&gt; setOpen(false)}&gt;Cancel&lt;/Button&gt;
      &lt;Button onClick={() =&gt; setOpen(false)}&gt;Confirm&lt;/Button&gt;
    &lt;/Modal.Footer&gt;
  &lt;/Modal.Content&gt;
&lt;/Modal&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Size Variants</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<p style="font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);">default (32rem) &middot; <code>.ds-modal--md</code> (42rem) &middot; <code>.ds-modal--lg</code> (56rem)</p>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Modal open={open} onClose={close} size=&quot;md&quot;&gt;...&lt;/Modal&gt;
&lt;Modal open={open} onClose={close} size=&quot;lg&quot;&gt;...&lt;/Modal&gt;
&lt;Modal open={open} onClose={close} fullscreenMobile&gt;...&lt;/Modal&gt;` }} /></pre>
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
                <td><code>.ds-modal</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__close</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__body</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__footer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--md</code></td>
                <td>Size</td>
              </tr>
              <tr>
                <td><code>--lg</code></td>
                <td>Size</td>
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
