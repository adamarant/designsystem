import { type RefObject } from "react";
/**
 * Traps keyboard focus inside a container element. Tab and Shift+Tab cycle
 * through focusable children without escaping. Focus is restored to the
 * previously-focused element on cleanup.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useFocusTrap(ref, isModalOpen);
 */
export declare function useFocusTrap(ref: RefObject<HTMLElement | null>, enabled?: boolean): void;
//# sourceMappingURL=useFocusTrap.d.ts.map