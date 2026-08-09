export default function Home() {
  return (
    <>
      <div className="demo-page-header demo-intro-header">
        <h1>Design System</h1>
        {/* No counts and no component list here. Both were stale, and the
            list was worse than stale: it named Tag, deprecated in 0.38.0 and
            migrated to zero uses. The sidebar sits right beside this page and
            is generated from the real inventory — it is the list. */}
        <p>Interactive React components, built on top of the CSS components and design tokens.</p>
      </div>

      <div className="demo-intro">
        <section className="demo-section">
          <h2 className="demo-section__title">Quick Start</h2>
          <div className="demo-preview demo-preview--col">
            <code className="ds-font-mono ds-text-sm ds-text-secondary">
              npm install @adamarant/designsystem @adamarant/ds-react
            </code>
          </div>
        </section>
      </div>
    </>
  );
}
