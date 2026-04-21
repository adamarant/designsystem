export default function ContextMenuPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Context Menu</h1>
        <p>Cursor-anchored floating menu for right-click contextual actions. Position is set at runtime by a JS wrapper.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Context Menu</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-context-menu" role="menu" style="position:relative;top:auto;inset-inline-start:auto;animation:none;">
  <div class="ds-context-menu__label">Record</div>
  <button type="button" class="ds-context-menu__item" role="menuitem">
    <span class="ds-context-menu__item-label">Open</span>
    <span class="ds-context-menu__item-shortcut">↵</span>
  </button>
  <button type="button" class="ds-context-menu__item" role="menuitem">
    <span class="ds-context-menu__item-label">Duplicate</span>
  </button>
  <button type="button" class="ds-context-menu__item" role="menuitem">
    <span class="ds-context-menu__item-label">Copy link</span>
  </button>
  <button type="button" class="ds-context-menu__item ds-context-menu__item--disabled" role="menuitem" aria-disabled="true">
    <span class="ds-context-menu__item-label">Move to…</span>
  </button>
  <hr class="ds-context-menu__divider" />
  <button type="button" class="ds-context-menu__item" role="menuitem">
    <span class="ds-context-menu__item-label">Archive</span>
  </button>
  <button type="button" class="ds-context-menu__item ds-context-menu__item--danger" role="menuitem">
    <span class="ds-context-menu__item-label">Delete</span>
    <span class="ds-context-menu__item-shortcut">⌫</span>
  </button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-context-menu&quot; role=&quot;menu&quot; style=&quot;position:relative;top:auto;inset-inline-start:auto;animation:none;&quot;&gt;
  &lt;div class=&quot;ds-context-menu__label&quot;&gt;Record&lt;/div&gt;
  &lt;button type=&quot;button&quot; class=&quot;ds-context-menu__item&quot; role=&quot;menuitem&quot;&gt;
    &lt;span class=&quot;ds-context-menu__item-label&quot;&gt;Open&lt;/span&gt;
    &lt;span class=&quot;ds-context-menu__item-shortcut&quot;&gt;↵&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;ds-context-menu__item&quot; role=&quot;menuitem&quot;&gt;
    &lt;span class=&quot;ds-context-menu__item-label&quot;&gt;Duplicate&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;ds-context-menu__item&quot; role=&quot;menuitem&quot;&gt;
    &lt;span class=&quot;ds-context-menu__item-label&quot;&gt;Copy link&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;ds-context-menu__item ds-context-menu__item--disabled&quot; role=&quot;menuitem&quot; aria-disabled=&quot;true&quot;&gt;
    &lt;span class=&quot;ds-context-menu__item-label&quot;&gt;Move to…&lt;/span&gt;
  &lt;/button&gt;
  &lt;hr class=&quot;ds-context-menu__divider&quot; /&gt;
  &lt;button type=&quot;button&quot; class=&quot;ds-context-menu__item&quot; role=&quot;menuitem&quot;&gt;
    &lt;span class=&quot;ds-context-menu__item-label&quot;&gt;Archive&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;ds-context-menu__item ds-context-menu__item--danger&quot; role=&quot;menuitem&quot;&gt;
    &lt;span class=&quot;ds-context-menu__item-label&quot;&gt;Delete&lt;/span&gt;
    &lt;span class=&quot;ds-context-menu__item-shortcut&quot;&gt;⌫&lt;/span&gt;
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
                <td><code>.ds-context-menu</code></td>
                <td>Base</td>
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
                <td><code>__label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--flip-x</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--flip-y</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
