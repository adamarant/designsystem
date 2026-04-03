import Link from "next/link";

const pages = [
  { href: "/foundations/colors", title: "Colors", desc: "Semantic color tokens for backgrounds, text, borders, and status." },
  { href: "/foundations/typography", title: "Typography", desc: "Font families, sizes, weights, line heights, and tracking." },
  { href: "/foundations/spacing", title: "Spacing", desc: "Spacing scale, size tiers, border radius, and z-index layers." },
  { href: "/foundations/effects", title: "Effects", desc: "Shadows, focus ring, transitions, easing, blur, and opacity." },
];

export default function FoundationsPage() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Foundations</h1>
        <p>Design tokens that power every component. Override any token to re-theme the entire system.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--ds-space-4)" }}>
        {pages.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            style={{
              display: "block",
              padding: "var(--ds-space-6)",
              background: "var(--ds-color-surface)",
              border: "1px solid var(--ds-color-border)",
              borderRadius: "var(--ds-radius-lg)",
              textDecoration: "none",
              color: "inherit",
              transition: "border-color var(--ds-duration-normal) var(--ds-ease-default)",
            }}
          >
            <h2 style={{ fontSize: "var(--ds-text-lg)", fontWeight: "var(--ds-weight-semibold)", marginBottom: "var(--ds-space-2)" }}>{p.title}</h2>
            <p style={{ fontSize: "var(--ds-text-sm)", color: "var(--ds-color-text-secondary)", margin: 0 }}>{p.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
