"use client";
import { useEffect, useState } from "react";

export type PaletteName = "brand" | "mono" | "editorial" | "surface";

const PALETTES: Record<PaletteName, readonly string[]> = {
  brand: ["brand", "brand-hover", "interactive", "text"],
  mono: ["text", "text-secondary", "text-tertiary", "border-active"],
  editorial: ["brand", "brand-subtle", "surface-elevated", "text-tertiary"],
  surface: ["surface", "surface-muted", "surface-elevated", "border"],
};

const FALLBACK: Record<PaletteName, string[]> = {
  brand: ["#2563eb", "#1d4ed8", "#3f3f46", "#09090b"],
  mono: ["#09090b", "#52525b", "#71717a", "#a1a1aa"],
  editorial: ["#2563eb", "rgba(37,99,235,0.1)", "#f4f4f5", "#71717a"],
  surface: ["#ffffff", "#e4e4e7", "#f4f4f5", "#e4e4e7"],
};

function resolveTokens(tokens: readonly string[]): string[] {
  const styles = getComputedStyle(document.documentElement);
  return tokens
    .map((t) => styles.getPropertyValue(`--ds-color-${t}`).trim())
    .filter(Boolean);
}

export function useDsColors(palette: PaletteName = "brand"): string[] {
  const [colors, setColors] = useState<string[]>(() => FALLBACK[palette]);

  useEffect(() => {
    const apply = () => {
      const resolved = resolveTokens(PALETTES[palette]);
      if (resolved.length === PALETTES[palette].length) setColors(resolved);
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class", "style"],
    });
    return () => observer.disconnect();
  }, [palette]);

  return colors;
}

export function useDsColor(token: string, fallback = "#09090b"): string {
  const [color, setColor] = useState<string>(fallback);

  useEffect(() => {
    const apply = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue(`--ds-color-${token}`)
        .trim();
      if (v) setColor(v);
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class", "style"],
    });
    return () => observer.disconnect();
  }, [token]);

  return color;
}
