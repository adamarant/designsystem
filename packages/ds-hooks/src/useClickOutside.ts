import { useEffect, type RefObject } from "react";

/**
 * Calls `handler` when a click/touch occurs outside all provided refs.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => setOpen(false));
 */
export function useClickOutside(
  ref: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    const refs = Array.isArray(ref) ? ref : [ref];

    function listener(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      const isInside = refs.some(
        (r) => r.current && r.current.contains(target),
      );
      if (!isInside) handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, enabled]);
}
