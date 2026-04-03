export default function InputPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Input</h1>
        <p>Form inputs with surface bg, clean borders, focus ring.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Input</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-form-group">
  <label class="ds-label">Email address</label>
  <input class="ds-input" type="email" placeholder="you@example.com" />
  <p class="ds-help">We'll never share your email</p>
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Label htmlFor=&quot;name&quot;&gt;Name&lt;/Label&gt;
&lt;Input id=&quot;name&quot; placeholder=&quot;Enter your name&quot; /&gt;

&lt;Label htmlFor=&quot;email&quot;&gt;Email&lt;/Label&gt;
&lt;Input id=&quot;email&quot; state=&quot;error&quot; placeholder=&quot;Invalid&quot; /&gt;
&lt;Help variant=&quot;error&quot;&gt;Please enter a valid email&lt;/Help&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-form-group">
  <label class="ds-label">Username</label>
  <input class="ds-input ds-input--error" type="text" value="ab" />
  <p class="ds-help ds-help--error">Username must be at least 3 characters</p>
</div>
<div class="ds-form-group">
  <label class="ds-label">Password</label>
  <input class="ds-input ds-input--success" type="password" value="strongpass" />
</div>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Input size=&quot;xs&quot; placeholder=&quot;XS&quot; /&gt;
&lt;Input size=&quot;sm&quot; placeholder=&quot;SM&quot; /&gt;
&lt;Input placeholder=&quot;MD (default)&quot; /&gt;
&lt;Input size=&quot;lg&quot; placeholder=&quot;LG&quot; /&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Textarea</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<input class="ds-input ds-input--xs" placeholder="Extra Small (24px)" />
<input class="ds-input ds-input--sm" placeholder="Small (32px)" />
<input class="ds-input" placeholder="Default (40px)" />
<input class="ds-input ds-input--lg" placeholder="Large (48px)" />` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Textarea placeholder=&quot;Write something...&quot; /&gt;
&lt;Textarea state=&quot;error&quot; placeholder=&quot;Error state&quot; /&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Select & Checkbox</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-form-group">
  <label class="ds-label">Description</label>
  <textarea class="ds-textarea" placeholder="Write something..."></textarea>
</div>
<div class="ds-form-group">
  <label class="ds-label">Country</label>
  <select class="ds-select">
    <option>United States</option>
    <option>United Kingdom</option>
    <option>Germany</option>
  </select>
</div>
<label class="ds-checkbox"><input type="checkbox" /> Remember me</label>
<label class="ds-radio"><input type="radio" name="plan" /> Free plan</label>` }} />
        <details className="demo-code">
          <summary>View React Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;Select&gt;
  &lt;option&gt;Choose...&lt;/option&gt;
  &lt;option&gt;Option A&lt;/option&gt;
&lt;/Select&gt;

&lt;Checkbox&gt;&lt;input type=&quot;checkbox&quot; /&gt; Remember me&lt;/Checkbox&gt;
&lt;Radio&gt;&lt;input type=&quot;radio&quot; name=&quot;opt&quot; /&gt; Option A&lt;/Radio&gt;` }} /></pre>
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
                <td><code>.ds-input</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-textarea</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-select</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-label</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-help</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-form-group</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-checkbox</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-radio</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--success</code></td>
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
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
