"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useRef, } from "react";
import { cn } from "../utils/cn";
/**
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
export const ClipReveal = forwardRef(function ClipReveal({ rootMargin = "0px 0px -8% 0px", revealTimeout = 1200, className, children, ...rest }, ref) {
    const elRef = useRef(null);
    useEffect(() => {
        const el = elRef.current;
        if (!el)
            return;
        const img = el.querySelector("img");
        let armed = false;
        let done = false;
        let timer;
        const reveal = () => {
            if (done)
                return;
            done = true;
            if (timer)
                clearTimeout(timer);
            // Visually a no-op unless the element was armed; armed -> plays the wipe.
            el.setAttribute("data-clip-shown", "");
            observer.disconnect();
        };
        const revealWhenPainted = () => {
            if (!img || (img.complete && img.naturalWidth > 0)) {
                reveal();
                return;
            }
            img.addEventListener("load", reveal, { once: true });
            img.addEventListener("error", reveal, { once: true }); // never hide a broken image
            if (typeof img.decode === "function")
                img.decode().then(reveal).catch(() => { });
        };
        const observer = new IntersectionObserver((entries) => {
            if (done)
                return;
            const entry = entries[entries.length - 1];
            if (entry.isIntersecting) {
                if (armed) {
                    revealWhenPainted();
                    timer = setTimeout(reveal, revealTimeout); // last-resort guarantee
                }
                else {
                    reveal(); // visible at mount: keep it visible, no wipe
                }
            }
            else if (!armed) {
                armed = true;
                el.setAttribute("data-clip-armed", ""); // off-screen: arm to wipe on entry
            }
        }, { rootMargin });
        observer.observe(el);
        return () => {
            observer.disconnect();
            if (timer)
                clearTimeout(timer);
        };
    }, [rootMargin, revealTimeout]);
    return (_jsx("div", { ref: (node) => {
            elRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, className: cn("ds-clip-reveal", className), ...rest, children: children }));
});
//# sourceMappingURL=ClipReveal.js.map