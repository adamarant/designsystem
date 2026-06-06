import { type ComponentPropsWithoutRef } from "react";
export interface ClipRevealProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * Reveal once and stay revealed (default), or re-arm on every viewport
     * entry/exit so the curtain replays each time it scrolls back into view.
     */
    once?: boolean;
    /**
     * IntersectionObserver `rootMargin`. Default `"0px 0px -8% 0px"` triggers
     * once the wrapper is a little past the bottom edge of the viewport.
     */
    rootMargin?: string;
    className?: string;
}
/**
 * Reveals its content with a top-to-bottom clip-path wipe (the `.ds-clip-reveal`
 * utility) — but only once the inner <img> has actually DECODED **and** scrolled
 * into view. Gating on `img.decode()` rather than the `load` event guarantees
 * the pixels are paint-ready, so the curtain never animates over a blank,
 * not-yet-painted image. With no inner image it falls back to an in-view trigger.
 * Honors `prefers-reduced-motion` (handled in the CSS).
 *
 * Usage:
 *   <ClipReveal className="ds-absolute ds-inset-0">
 *     <Image src={…} alt={…} fill />
 *   </ClipReveal>
 */
export declare const ClipReveal: import("react").ForwardRefExoticComponent<ClipRevealProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ClipReveal.d.ts.map