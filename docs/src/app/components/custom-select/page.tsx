export default function CustomSelectPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Custom Select</h1>
        <p>Styled select dropdown replacing native &lt;select&gt;. Desktop: absolute panel. Mobile: fullscreen sheet with search. Supports multi-select with tags.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-custom-select">
  <button class="ds-custom-select__trigger">
    <span class="ds-custom-select__trigger-label">Apartamento</span>
    <span class="ds-custom-select__chevron">&#9662;</span>
  </button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-custom-select&quot;&gt;
  &lt;button class=&quot;ds-custom-select__trigger&quot;&gt;
    &lt;span class=&quot;ds-custom-select__trigger-label&quot;&gt;Apartamento&lt;/span&gt;
    &lt;span class=&quot;ds-custom-select__chevron&quot;&gt;&amp;#9662;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Multi-Select</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-custom-select ds-custom-select--multi">
  <button class="ds-custom-select__trigger">
    <div class="ds-custom-select__tags">
      <span class="ds-custom-select__tag">React <button class="ds-custom-select__tag-remove" aria-label="Remove">&times;</button></span>
      <span class="ds-custom-select__tag">Vue <button class="ds-custom-select__tag-remove" aria-label="Remove">&times;</button></span>
    </div>
    <span class="ds-custom-select__chevron">&#9662;</span>
  </button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-custom-select ds-custom-select--multi&quot;&gt;
  &lt;button class=&quot;ds-custom-select__trigger&quot;&gt;
    &lt;div class=&quot;ds-custom-select__tags&quot;&gt;
      &lt;span class=&quot;ds-custom-select__tag&quot;&gt;React &lt;button class=&quot;ds-custom-select__tag-remove&quot; aria-label=&quot;Remove&quot;&gt;&amp;times;&lt;/button&gt;&lt;/span&gt;
      &lt;span class=&quot;ds-custom-select__tag&quot;&gt;Vue &lt;button class=&quot;ds-custom-select__tag-remove&quot; aria-label=&quot;Remove&quot;&gt;&amp;times;&lt;/button&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;span class=&quot;ds-custom-select__chevron&quot;&gt;&amp;#9662;&lt;/span&gt;
  &lt;/button&gt;
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
                <td><code>.ds-custom-select</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__trigger</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__trigger-label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__placeholder</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__chevron</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__backdrop</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__panel</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header-title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__header-close</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__search</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__search-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__list</code></td>
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
                <td><code>__empty</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__tags</code></td>
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
                <td><code>--multi</code></td>
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
                <td><code>__trigger--open</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__trigger--disabled</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__option--selected</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
