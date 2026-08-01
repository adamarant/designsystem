"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle as DsThemeToggle } from "@adamarant/ds-react";

/* The DS ships a ThemeToggle: a real switch with sun/moon icons and its own
   size scale. The docs had hand-rolled a ghost Button reading "Light"/"Dark",
   which is a component the system already owns, in a worse form, floating in
   the top-right of the content area. This is now a thin adapter — next-themes
   holds the state, the DS draws the control — and it lives in the sidebar
   with the rest of the chrome. */
export function ThemeToggle({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* Before hydration the resolved theme is unknown. Render the control in the
     default (dark) rather than returning null, so the sidebar does not reflow
     when it appears. */
  const theme = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <DsThemeToggle
      size={size}
      theme={theme}
      onThemeChange={setTheme}
      aria-label="Toggle colour theme"
    />
  );
}
