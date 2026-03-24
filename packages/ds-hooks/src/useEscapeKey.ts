import { useEffect } from "react";

/**
 * Calls `handler` when the Escape key is pressed.
 *
 * @example
 * useEscapeKey(() => setOpen(false), isOpen);
 */
export function useEscapeKey(
  handler: (event: KeyboardEvent) => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    function listener(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handler(event);
      }
    }

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [handler, enabled]);
}
