import { type ComponentPropsWithoutRef } from "react";
export interface ClipRevealProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * IntersectionObserver `rootMargin`. Default `"0px 0px -8% 0px"` triggers a
     * little before the wrapper reaches the bottom edge of the viewport.
     */
    rootMargin?: string;
    /**
     * Hard cap (ms) after entering view by which the content reveals no matter
     * what, so a flaky decode/load can never strand it clipped. Default 1200.
     */
    revealTimeout?: number;
    className?: string;
}
/**
 * @deprecated 2026-06-12. The image clip-reveal is being retired: it delays the
 * first paint and adds a per-image IntersectionObserver for a non-essential
 * flourish. No replacement, render images directly. Kept functional for
 * backward-compat; slated for removal in the next DS major. Tracked in
 * infra/DS_HEALTH.md.
 *
 * Reveals its content with a top-to-bottom clip-path wipe (the `.ds-clip-reveal`
 * utility).
 *
 * FAIL-SAFE BY DESIGN: the content is visible by default. On mount the component
 * only *arms* (hides, via `data-clip-armed`) wrappers that start OFF-screen, then
 * plays the wipe (`data-clip-shown`) when they scroll in and the image has
 * painted. Wrappers already in view at mount are left visible (no wipe — you
 * don't animate what's already on screen). If the JS never runs, never hydrates,
 * or the image errors, the content simply stays visible: it cannot be hidden by
 * a failed reveal. `revealTimeout` is the last-resort guarantee against a stuck
 * clip. Honors `prefers-reduced-motion` via the CSS.
 *
 * Usage:
 *   <ClipReveal className="ds-absolute ds-inset-0">
 *     <Image src={…} alt={…} fill />
 *   </ClipReveal>
 */
export declare const ClipReveal: import("react").ForwardRefExoticComponent<ClipRevealProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ClipReveal.d.ts.map