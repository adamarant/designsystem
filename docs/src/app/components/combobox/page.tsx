export default function ComboboxPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Combobox</h1>
        <p>Text input with filterable dropdown results. Supports single/multi-select, inline creation, and keyboard navigation.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Basic Combobox</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-combobox">
  <input class="ds-combobox__input" placeholder="Search..." />
  <div class="ds-combobox__listbox ds-combobox__listbox--open">
    <div class="ds-combobox__option ds-combobox__option--active">Option 1</div>
    <div class="ds-combobox__option">Option 2</div>
    <div class="ds-combobox__option ds-combobox__option--selected">Option 3</div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-combobox&quot;&gt;
  &lt;input class=&quot;ds-combobox__input&quot; placeholder=&quot;Search...&quot; /&gt;
  &lt;div class=&quot;ds-combobox__listbox ds-combobox__listbox--open&quot;&gt;
    &lt;div class=&quot;ds-combobox__option ds-combobox__option--active&quot;&gt;Option 1&lt;/div&gt;
    &lt;div class=&quot;ds-combobox__option&quot;&gt;Option 2&lt;/div&gt;
    &lt;div class=&quot;ds-combobox__option ds-combobox__option--selected&quot;&gt;Option 3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Multi-select with Tags</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-combobox ds-combobox--multi">
  <div class="ds-combobox__input-area">
    <span class="ds-combobox__tag">React <button class="ds-combobox__tag-remove">&times;</button></span>
    <span class="ds-combobox__tag">Vue <button class="ds-combobox__tag-remove">&times;</button></span>
    <input class="ds-combobox__input" placeholder="Add more..." />
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-combobox ds-combobox--multi&quot;&gt;
  &lt;div class=&quot;ds-combobox__input-area&quot;&gt;
    &lt;span class=&quot;ds-combobox__tag&quot;&gt;React &lt;button class=&quot;ds-combobox__tag-remove&quot;&gt;&amp;times;&lt;/button&gt;&lt;/span&gt;
    &lt;span class=&quot;ds-combobox__tag&quot;&gt;Vue &lt;button class=&quot;ds-combobox__tag-remove&quot;&gt;&amp;times;&lt;/button&gt;&lt;/span&gt;
    &lt;input class=&quot;ds-combobox__input&quot; placeholder=&quot;Add more...&quot; /&gt;
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
                <td><code>.ds-combobox</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__input-area</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__input</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__clear</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__listbox</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__group</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__group-label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__option</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__option-check</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__option-desc</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__create</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__empty</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__loading</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__tag</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__tag-remove</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--xs</code></td>
                <td>Size</td>
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
                <td><code>--open</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--multi</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
