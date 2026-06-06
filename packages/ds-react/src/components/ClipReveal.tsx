"use client";

import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../utils/cn";

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
export const ClipReveal = forwardRef<HTMLDivElement, ClipRevealProps>(
  function ClipReveal(
    { once = true, rootMargin = "0px 0px -8% 0px", className, children, ...rest },
    ref,
  ) {
    const elRef = useRef<HTMLDivElement | null>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      const img = el.querySelector("img");
      let inView = false;
      let ready = false;
      let done = false;

      const sync = () => {
        if (inView && ready) {
          setShown(true);
          if (once) {
            done = true;
            observer.disconnect();
          }
        } else if (!once) {
          setShown(false);
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          if (done) return;
          for (const entry of entries) inView = entry.isIntersecting;
          sync();
        },
        { rootMargin },
      );
      observer.observe(el);

      const markReady = () => {
        ready = true;
        sync();
      };

      if (!img) {
        markReady();
      } else if (img.complete && img.naturalWidth > 0) {
        markReady();
      } else if (typeof img.decode === "function") {
        img
          .decode()
          .then(markReady)
          .catch(() => img.addEventListener("load", markReady, { once: true }));
      } else {
        img.addEventListener("load", markReady, { once: true });
      }

      return () => observer.disconnect();
    }, [once, rootMargin]);

    return (
      <div
        ref={(node) => {
          elRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("ds-clip-reveal", className)}
        data-clip-shown={shown ? "" : undefined}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
