export default function DropdownPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Dropdown</h1>
        <p>Floating menu with surface bg, scale transition, keyboard-friendly items.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Dropdown</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-dropdown ds-dropdown--open" style="position:relative;">
  <button class="ds-btn ds-btn--secondary ds-dropdown__trigger">Options &#9662;</button>
  <div class="ds-dropdown__menu ds-dropdown__menu--open" style="position:relative;top:auto;opacity:1;visibility:visible;transform:none;">
    <div class="ds-dropdown__header">Actions</div>
    <div class="ds-dropdown__item">Edit</div>
    <div class="ds-dropdown__item">Duplicate</div>
    <div class="ds-dropdown__item">Archive</div>
    <hr class="ds-dropdown__divider" />
    <div class="ds-dropdown__item ds-dropdown__item--danger">Delete</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `const [open, setOpen] = useState(false);

&lt;Dropdown open={open} onOpenChange={setOpen}&gt;
  &lt;Dropdown.Trigger&gt;Actions&lt;/Dropdown.Trigger&gt;
  &lt;Dropdown.Menu&gt;
    &lt;Dropdown.Header&gt;File&lt;/Dropdown.Header&gt;
    &lt;Dropdown.Item onClick={handleNew}&gt;New&lt;/Dropdown.Item&gt;
    &lt;Dropdown.Item onClick={handleOpen}&gt;Open&lt;/Dropdown.Item&gt;
    &lt;Dropdown.Divider /&gt;
    &lt;Dropdown.Item danger onClick={handleDelete}&gt;Delete&lt;/Dropdown.Item&gt;
  &lt;/Dropdown.Menu&gt;
&lt;/Dropdown&gt;` }} /></pre>
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
                <td><code>.ds-dropdown</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__trigger</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__menu</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__item</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__item-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__item-label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__item-shortcut</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__divider</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
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
