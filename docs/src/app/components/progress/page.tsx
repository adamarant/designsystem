export default function ProgressPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Progress</h1>
        <p>Progress bar with label row and step indicator for multi-step flows.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Progress Bar</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-progress__label">
  <span>Uploading files...</span>
  <span>64%</span>
</div>
<div class="ds-progress">
  <div class="ds-progress__bar" style="width:64%;"></div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-progress__label&quot;&gt;
  &lt;span&gt;Uploading files...&lt;/span&gt;
  &lt;span&gt;64%&lt;/span&gt;
&lt;/div&gt;
&lt;div class=&quot;ds-progress&quot;&gt;
  &lt;div class=&quot;ds-progress__bar&quot; style=&quot;width:64%;&quot;&gt;&lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Variants & Sizes</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-progress ds-progress--success" style="margin-bottom:0.5rem;"><div class="ds-progress__bar" style="width:100%;"></div></div>
<div class="ds-progress ds-progress--warning" style="margin-bottom:0.5rem;"><div class="ds-progress__bar" style="width:75%;"></div></div>
<div class="ds-progress ds-progress--error" style="margin-bottom:0.5rem;"><div class="ds-progress__bar" style="width:30%;"></div></div>
<div class="ds-progress ds-progress--sm" style="margin-bottom:0.5rem;"><div class="ds-progress__bar" style="width:50%;"></div></div>
<div class="ds-progress ds-progress--lg"><div class="ds-progress__bar" style="width:80%;"></div></div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-progress ds-progress--success&quot; style=&quot;margin-bottom:0.5rem;&quot;&gt;&lt;div class=&quot;ds-progress__bar&quot; style=&quot;width:100%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;
&lt;div class=&quot;ds-progress ds-progress--warning&quot; style=&quot;margin-bottom:0.5rem;&quot;&gt;&lt;div class=&quot;ds-progress__bar&quot; style=&quot;width:75%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;
&lt;div class=&quot;ds-progress ds-progress--error&quot; style=&quot;margin-bottom:0.5rem;&quot;&gt;&lt;div class=&quot;ds-progress__bar&quot; style=&quot;width:30%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;
&lt;div class=&quot;ds-progress ds-progress--sm&quot; style=&quot;margin-bottom:0.5rem;&quot;&gt;&lt;div class=&quot;ds-progress__bar&quot; style=&quot;width:50%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;
&lt;div class=&quot;ds-progress ds-progress--lg&quot;&gt;&lt;div class=&quot;ds-progress__bar&quot; style=&quot;width:80%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Step Indicator</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-steps">
  <div class="ds-step ds-step--completed">
    <div class="ds-step__indicator">&#10003;</div>
    <div class="ds-step__content">
      <span class="ds-step__title">Account</span>
    </div>
  </div>
  <div class="ds-step__connector"></div>
  <div class="ds-step ds-step--current">
    <div class="ds-step__indicator">2</div>
    <div class="ds-step__content">
      <span class="ds-step__title">Profile</span>
    </div>
  </div>
  <div class="ds-step__connector"></div>
  <div class="ds-step">
    <div class="ds-step__indicator">3</div>
    <div class="ds-step__content">
      <span class="ds-step__title">Review</span>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-steps&quot;&gt;
  &lt;div class=&quot;ds-step ds-step--completed&quot;&gt;
    &lt;div class=&quot;ds-step__indicator&quot;&gt;&amp;#10003;&lt;/div&gt;
    &lt;div class=&quot;ds-step__content&quot;&gt;
      &lt;span class=&quot;ds-step__title&quot;&gt;Account&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-step__connector&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;ds-step ds-step--current&quot;&gt;
    &lt;div class=&quot;ds-step__indicator&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;ds-step__content&quot;&gt;
      &lt;span class=&quot;ds-step__title&quot;&gt;Profile&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;ds-step__connector&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;ds-step&quot;&gt;
    &lt;div class=&quot;ds-step__indicator&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;ds-step__content&quot;&gt;
      &lt;span class=&quot;ds-step__title&quot;&gt;Review&lt;/span&gt;
    &lt;/div&gt;
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
                <td><code>.ds-progress</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-steps</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>.ds-step</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__bar</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__label</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__indicator</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__content</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__description</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__connector</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--success</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--warning</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--info</code></td>
                <td>Variant</td>
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
                <td><code>--completed</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--current</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--error</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>--vertical</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
