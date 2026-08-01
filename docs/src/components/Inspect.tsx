"use client";

/* Inspect — the pages say nothing until you ask them something.

   The /in-use routes are meant to BE good typography, not to describe it, and
   every note printed next to the page was competing with the page for the
   same eye. So the notes moved behind a click: mark an element with
   data-note (and optionally data-cls), and clicking it opens a small panel
   with the reasoning plus the size, leading and weight read live off the
   element rather than typed into the copy by hand.

   Nothing is drawn until a click happens. The only permanent chrome is one
   hint in the corner, and it leaves for good the first time you use it.

   The panel's coordinates land on the element as --ex-pop-x / --ex-pop-y
   rather than as a style prop: a click position cannot be a class, but it can
   be a custom property, which keeps the rule itself in demo.css where the
   rest of the layout lives. */

import { useCallback, useEffect, useRef, useState } from "react";

type Active = {
  top: number;
  left: number;
  cls: string;
  note: string;
  spec: string;
};

const POP_WIDTH = 340;

export function Inspect({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const markedRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<Active | null>(null);
  const [used, setUsed] = useState(false);

  const clear = useCallback(() => {
    if (markedRef.current) {
      delete markedRef.current.dataset.insActive;
      markedRef.current = null;
    }
    setActive(null);
  }, []);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const target = e.target as HTMLElement;
      if (target.closest("[data-pop]")) return;

      const el = target.closest<HTMLElement>("[data-note]");
      if (!el || !wrap.contains(el)) {
        clear();
        return;
      }

      clear();
      el.dataset.insActive = "true";
      markedRef.current = el;

      const r = el.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const px = (v: string) => {
        const n = parseFloat(v);
        return Number.isFinite(n) ? `${Math.round(n)}px` : v;
      };

      setActive({
        top: r.bottom - w.top + 12,
        left: Math.max(0, Math.min(r.left - w.left, w.width - POP_WIDTH)),
        cls: el.dataset.cls ?? "",
        note: el.dataset.note ?? "",
        spec: `${px(cs.fontSize)} / ${px(cs.lineHeight)} · ${cs.fontWeight}`,
      });
      setUsed(true);
    },
    [clear],
  );

  useEffect(() => {
    const pop = popRef.current;
    if (!pop || !active) return;
    pop.style.setProperty("--ex-pop-x", `${active.left}px`);
    pop.style.setProperty("--ex-pop-y", `${active.top}px`);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") clear();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clear]);

  return (
    <div className="ex-ins" ref={wrapRef} onClick={onClick}>
      {children}

      {active ? (
        <div className="ex-pop" data-pop="" ref={popRef}>
          <div className="ex-pop__head">
            <code className="ex-pop__cls">{active.cls || "element"}</code>
            <button
              type="button"
              className="ex-pop__close"
              onClick={clear}
              aria-label="Close"
            >
              Close
            </button>
          </div>
          <p className="ex-pop__spec">{active.spec}</p>
          <p className="ex-pop__note">{active.note}</p>
        </div>
      ) : null}

      {used ? null : (
        <p className="ex-hint" aria-hidden="true">
          Click anything
        </p>
      )}
    </div>
  );
}
