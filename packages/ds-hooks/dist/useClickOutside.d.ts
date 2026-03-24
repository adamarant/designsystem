import { type RefObject } from "react";
/**
 * Calls `handler` when a click/touch occurs outside all provided refs.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => setOpen(false));
 */
export declare function useClickOutside(ref: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[], handler: (event: MouseEvent | TouchEvent) => void, enabled?: boolean): void;
//# sourceMappingURL=useClickOutside.d.ts.map