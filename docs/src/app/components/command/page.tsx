export default function CommandPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Command</h1>
        <p>Command palette / search overlay following the Cmd+K pattern.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Command Palette</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div style="background:var(--ds-color-surface);border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-xl);overflow:hidden;max-width:32rem;box-shadow:var(--ds-shadow-lg);">
  <div class="ds-command__input-wrapper">
    <span class="ds-command__input-icon">&#128269;</span>
    <input class="ds-command__input" placeholder="Type a command or search..." />
  </div>
  <div class="ds-command__list">
    <div class="ds-command__group">
      <div class="ds-command__group-heading">Suggestions</div>
      <div class="ds-command__item ds-command__item--active">
        <span class="ds-command__item-label">New File</span>
        <span class="ds-command__item-shortcut">Ctrl+N</span>
      </div>
      <div class="ds-command__item">
        <span class="ds-command__item-label">Open Settings</span>
        <span class="ds-command__item-shortcut">Ctrl+,</span>
      </div>
      <div class="ds-command__item">
        <span class="ds-command__item-label">Toggle Theme</span>
      </div>
    </div>
  </div>
  <div class="ds-command__footer">Navigate with arrow keys &middot; Enter to select &middot; Esc to close</div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div style=&quot;background:var(--ds-color-surface);border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-xl);overflow:hidden;max-width:32rem;box-shadow:var(--ds-shadow-lg);&quot;&gt;
  &lt;div class=&quot;ds-command__input-wrapper&quot;&gt;
    &lt;span class=&quot;ds-command__input-icon&quot;&gt;&amp;#128269;&lt;/span&gt;
    &lt;input class=&quot;ds-command__input&quot; placeholder=&quot;Type a command or search...&quot; /&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-command__list&quot;&gt;
    &lt;div class=&quot;ds-command__group&quot;&gt;
      &lt;div class=&quot;ds-command__group-heading&quot;&gt;Suggestions&lt;/div&gt;
      &lt;div class=&quot;ds-command__item ds-command__item--active&quot;&gt;
        &lt;span class=&quot;ds-command__item-label&quot;&gt;New File&lt;/span&gt;
        &lt;span class=&quot;ds-command__item-shortcut&quot;&gt;Ctrl+N&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;ds-command__item&quot;&gt;
        &lt;span class=&quot;ds-command__item-label&quot;&gt;Open Settings&lt;/span&gt;
        &lt;span class=&quot;ds-command__item-shortcut&quot;&gt;Ctrl+,&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;ds-command__item&quot;&gt;
        &lt;span class=&quot;ds-command__item-label&quot;&gt;Toggle Theme&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-command__footer&quot;&gt;Navigate with arrow keys &amp;middot; Enter to select &amp;middot; Esc to close&lt;/div&gt;
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
                <td><code>.ds-command</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__input-wrapper</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__input-icon</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__input</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__list</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__group</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__group-heading</code></td>
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
                <td><code>__empty</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__footer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--open</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--active</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
