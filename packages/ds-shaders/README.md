# @adamarant/ds-shaders

WebGL shaders for the Digiko Design System. Opinionated React wrappers around [`@paper-design/shaders-react`](https://github.com/paper-design/shaders) that read DS color tokens at runtime and react to theme changes.

## Install

```bash
npm install @adamarant/ds-shaders
```

Peer dep: `react >= 18`.

## Use

All components are client components. Add `"use client"` to the parent file when consuming from a Next.js Server Component.

```tsx
"use client";
import { MeshGradient } from "@adamarant/ds-shaders/effects";

export function Hero() {
  return (
    <MeshGradient
      palette="brand"
      style={{ width: "100%", height: "60vh" }}
      distortion={1}
      swirl={0.8}
      speed={0.2}
    />
  );
}
```

## Palettes

Every shader accepts a `palette` prop that resolves to DS tokens at mount and re-resolves on `data-theme` change.

| Palette | Tokens |
|---------|--------|
| `brand` (default) | `--ds-color-brand`, `--ds-color-brand-hover`, `--ds-color-interactive`, `--ds-color-text` |
| `mono` | `--ds-color-text`, `--ds-color-text-secondary`, `--ds-color-text-tertiary`, `--ds-color-border-active` |
| `editorial` | `--ds-color-brand`, `--ds-color-brand-subtle`, `--ds-color-surface-elevated`, `--ds-color-text-tertiary` |
| `surface` | `--ds-color-surface`, `--ds-color-surface-muted`, `--ds-color-surface-elevated`, `--ds-color-border` |

You can always override with explicit color props:

```tsx
<MeshGradient colors={["#ff00ff", "#00ffff", "#ffff00", "#ff8800"]} />
```

## Categories

```ts
import { /* 20 components */ } from "@adamarant/ds-shaders/effects";
import { /* 6 components */ } from "@adamarant/ds-shaders/filters";
import { /* 3 components */ } from "@adamarant/ds-shaders/logos";
```

**Effects** (background, no input): `MeshGradient`, `StaticMeshGradient`, `StaticRadialGradient`, `SmokeRing`, `NeuroNoise`, `PerlinNoise`, `SimplexNoise`, `DotOrbit`, `DotGrid`, `Metaballs`, `Waves`, `Voronoi`, `Warp`, `GodRays`, `Spiral`, `Swirl`, `Dithering`, `GrainGradient`, `PulsingBorder`, `ColorPanels`.

**Filters** (image input, optional): `PaperTexture`, `FlutedGlass`, `Water`, `ImageDithering`, `HalftoneDots`, `HalftoneCmyk`.

**Logos** (image input, required for shape): `Heatmap`, `LiquidMetal`, `GemSmoke`. Pass `image="/logo.svg"` to apply the shader to your logo's silhouette.

## SSR

Shaders need a browser canvas. The wrappers use `useEffect` for token resolution; on the server they render with hardcoded fallback colors and hydrate once mounted. No `next/dynamic` required, but adding `ssr: false` is fine if you want to skip the fallback flash.

## License

`@paper-design/shaders-react` is licensed under PolyForm Shield 1.0.0 — free for commercial use except for products competing with Paper. This package inherits the same license. See [LICENSE](./LICENSE) and [REQUIRED-NOTICES.md](./REQUIRED-NOTICES.md).
