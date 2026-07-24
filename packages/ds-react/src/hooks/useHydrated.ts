"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * `true` once the component has hydrated on the client, `false` during SSR and
 * the first client render. Use it to gate anything the server can't know yet
 * (a resolved theme, a media query, `window`) without a hydration mismatch.
 *
 * Unlike the `useState(false)` + `useEffect(() => setMounted(true))` pattern it
 * replaces, this sets no state inside an effect — so it doesn't trip
 * `react-hooks/set-state-in-effect`, and there's nothing to disable. It reads
 * `false` from the server snapshot and `true` from the client snapshot; React
 * swaps them at hydration for you.
 *
 * @example
 * const hydrated = useHydrated();
 * const theme = hydrated ? resolvedTheme : "dark"; // inert until mounted
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
