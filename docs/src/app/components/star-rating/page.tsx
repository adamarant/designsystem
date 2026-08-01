export default function StarRatingPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Star Rating</h1>
        <p>Display or input star ratings with half-star support.</p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">Display</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-star-rating">
  <span class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></span>
  <span class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></span>
  <span class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></span>
  <span class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></span>
  <span class="ds-star-rating__star"><svg data-icon="star-outline" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
  <span class="ds-star-rating__value">4.0</span>
  <span class="ds-star-rating__count">(128)</span>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-star-rating&quot;&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__star&quot;&gt;&lt;svg data-icon=&quot;star-outline&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__value&quot;&gt;4.0&lt;/span&gt;
  &lt;span class=&quot;ds-star-rating__count&quot;&gt;(128)&lt;/span&gt;
&lt;/div&gt;` }} /></pre>
        </details>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Interactive</h2>
        <div className="demo-preview" dangerouslySetInnerHTML={{ __html: `<div class="ds-star-rating ds-star-rating--interactive">
  <button class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></button>
  <button class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></button>
  <button class="ds-star-rating__star ds-star-rating__star--filled"><svg data-icon="star-filled" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z" fill="currentColor" /></svg></button>
  <button class="ds-star-rating__star"><svg data-icon="star-outline" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
  <button class="ds-star-rating__star"><svg data-icon="star-outline" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
</div>` }} />
        <details className="demo-code">
          <summary>View Code</summary>
          <pre><code dangerouslySetInnerHTML={{ __html: `&lt;div class=&quot;ds-star-rating ds-star-rating--interactive&quot;&gt;
  &lt;button class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star ds-star-rating__star--filled&quot;&gt;&lt;svg data-icon=&quot;star-filled&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z&quot; fill=&quot;currentColor&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star&quot;&gt;&lt;svg data-icon=&quot;star-outline&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
  &lt;button class=&quot;ds-star-rating__star&quot;&gt;&lt;svg data-icon=&quot;star-outline&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /&gt;&lt;/svg&gt;&lt;/button&gt;
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
                <td><code>.ds-star-rating</code></td>
                <td>Base</td>
              </tr>
              <tr>
                <td><code>__star</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__value</code></td>
                <td>Element</td>
              </tr>
              <tr>
                <td><code>__count</code></td>
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
                <td><code>--interactive</code></td>
                <td>Modifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
