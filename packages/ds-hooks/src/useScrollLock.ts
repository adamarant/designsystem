import { useEffect } from "react";

/**
 * Prevents body scroll when enabled. Restores original overflow on cleanup.
 * Useful for modals, drawers, and fullscreen overlays.
 *
 * @example
 * useScrollLock(isModalOpen);
 */
export function useScrollLock(enabled = true): void {
  useEffect(() => {
    if (!enabled) return;

    const original = document.body.style.overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    // Prevent layout shift from scrollbar disappearing
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = original;
      document.body.style.paddingRight = "";
    };
  }, [enabled]);
}
