export default function DatepickerPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Datepicker</h1>
        <p>Calendar dropdown for date selection. Popover positioning with scale animation. Supports compact mode for inline/table usage.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Default</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-datepicker ds-datepicker--open" style="min-height:20rem;">
  <button class="ds-datepicker__trigger">Mar 20, 2026</button>
  <div class="ds-datepicker__panel">
    <div class="ds-datepicker__header">
      <button class="ds-datepicker__nav">‹</button>
      <span class="ds-datepicker__title">March 2026</span>
      <button class="ds-datepicker__nav">›</button>
    </div>
    <div class="ds-datepicker__weekdays">
      <span class="ds-datepicker__weekday">Mo</span>
      <span class="ds-datepicker__weekday">Tu</span>
      <span class="ds-datepicker__weekday">We</span>
      <span class="ds-datepicker__weekday">Th</span>
      <span class="ds-datepicker__weekday">Fr</span>
      <span class="ds-datepicker__weekday">Sa</span>
      <span class="ds-datepicker__weekday">Su</span>
    </div>
    <div class="ds-datepicker__grid">
      <button class="ds-datepicker__day ds-datepicker__day--other-month">24</button>
      <button class="ds-datepicker__day ds-datepicker__day--other-month">25</button>
      <button class="ds-datepicker__day ds-datepicker__day--other-month">26</button>
      <button class="ds-datepicker__day ds-datepicker__day--other-month">27</button>
      <button class="ds-datepicker__day ds-datepicker__day--other-month">28</button>
      <button class="ds-datepicker__day">1</button>
      <button class="ds-datepicker__day">2</button>
      <button class="ds-datepicker__day">3</button>
      <button class="ds-datepicker__day">4</button>
      <button class="ds-datepicker__day">5</button>
      <button class="ds-datepicker__day">6</button>
      <button class="ds-datepicker__day">7</button>
      <button class="ds-datepicker__day">8</button>
      <button class="ds-datepicker__day">9</button>
      <button class="ds-datepicker__day">10</button>
      <button class="ds-datepicker__day">11</button>
      <button class="ds-datepicker__day">12</button>
      <button class="ds-datepicker__day">13</button>
      <button class="ds-datepicker__day">14</button>
      <button class="ds-datepicker__day ds-datepicker__day--selected">15</button>
      <button class="ds-datepicker__day">16</button>
      <button class="ds-datepicker__day">17</button>
      <button class="ds-datepicker__day">18</button>
      <button class="ds-datepicker__day">19</button>
      <button class="ds-datepicker__day ds-datepicker__day--today">20</button>
      <button class="ds-datepicker__day">21</button>
      <button class="ds-datepicker__day">22</button>
      <button class="ds-datepicker__day">23</button>
      <button class="ds-datepicker__day">24</button>
      <button class="ds-datepicker__day">25</button>
      <button class="ds-datepicker__day">26</button>
      <button class="ds-datepicker__day">27</button>
      <button class="ds-datepicker__day">28</button>
      <button class="ds-datepicker__day">29</button>
      <button class="ds-datepicker__day">30</button>
      <button class="ds-datepicker__day">31</button>
    </div>
    <div class="ds-datepicker__footer">
      <button class="ds-datepicker__today">Today</button>
    </div>
  </div>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-datepicker ds-datepicker--open&quot; style=&quot;min-height:20rem;&quot;&gt;
  &lt;button class=&quot;ds-datepicker__trigger&quot;&gt;Mar 20, 2026&lt;/button&gt;
  &lt;div class=&quot;ds-datepicker__panel&quot;&gt;
    &lt;div class=&quot;ds-datepicker__header&quot;&gt;
      &lt;button class=&quot;ds-datepicker__nav&quot;&gt;‹&lt;/button&gt;
      &lt;span class=&quot;ds-datepicker__title&quot;&gt;March 2026&lt;/span&gt;
      &lt;button class=&quot;ds-datepicker__nav&quot;&gt;›&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-datepicker__weekdays&quot;&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;Mo&lt;/span&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;Tu&lt;/span&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;We&lt;/span&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;Th&lt;/span&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;Fr&lt;/span&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;Sa&lt;/span&gt;
      &lt;span class=&quot;ds-datepicker__weekday&quot;&gt;Su&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-datepicker__grid&quot;&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--other-month&quot;&gt;24&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--other-month&quot;&gt;25&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--other-month&quot;&gt;26&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--other-month&quot;&gt;27&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--other-month&quot;&gt;28&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;1&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;2&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;3&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;4&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;5&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;6&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;7&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;8&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;9&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;10&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;11&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;12&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;13&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;14&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--selected&quot;&gt;15&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;16&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;17&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;18&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;19&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day ds-datepicker__day--today&quot;&gt;20&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;21&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;22&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;23&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;24&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;25&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;26&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;27&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;28&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;29&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;30&lt;/button&gt;
      &lt;button class=&quot;ds-datepicker__day&quot;&gt;31&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ds-datepicker__footer&quot;&gt;
      &lt;button class=&quot;ds-datepicker__today&quot;&gt;Today&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">With Step Arrows</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-datepicker">
  <button class="ds-datepicker__step">‹</button>
  <button class="ds-datepicker__trigger">Mar 20, 2026</button>
  <button class="ds-datepicker__step">›</button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-datepicker&quot;&gt;
  &lt;button class=&quot;ds-datepicker__step&quot;&gt;‹&lt;/button&gt;
  &lt;button class=&quot;ds-datepicker__trigger&quot;&gt;Mar 20, 2026&lt;/button&gt;
  &lt;button class=&quot;ds-datepicker__step&quot;&gt;›&lt;/button&gt;
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
                <td><code>.ds-datepicker</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__trigger</code></td>
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
                <td><code>__title</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__nav</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__weekdays</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__weekday</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__grid</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__day</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__footer</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__today</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__step</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>--compact</code></td>
                <td>Variant</td>
              </tr>
              <tr>
                <td><code>--open</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__day--today</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__day--selected</code></td>
                <td>Modifier</td>
              </tr>
              <tr>
                <td><code>__day--other-month</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
