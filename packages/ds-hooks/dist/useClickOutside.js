import { useEffect } from "react";
/**
 * Calls `handler` when a click/touch occurs outside all provided refs.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => setOpen(false));
 */
export function useClickOutside(ref, handler, enabled = true) {
    useEffect(() => {
        if (!enabled)
            return;
        const refs = Array.isArray(ref) ? ref : [ref];
        function listener(event) {
            const target = event.target;
            const isInside = refs.some((r) => r.current && r.current.contains(target));
            if (!isInside)
                handler(event);
        }
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler, enabled]);
}
//# sourceMappingURL=useClickOutside.js.map