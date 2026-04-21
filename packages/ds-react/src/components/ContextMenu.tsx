"use client";

import {
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

export interface ContextMenuAction {
  type?: "action";
  id: string;
  label: string;
  icon?: ReactNode;
  shortcut?: ReactNode;
  variant?: "default" | "danger";
  disabled?: boolean;
  onSelect: () => void;
}

export interface ContextMenuDivider {
  type: "divider";
}

export interface ContextMenuLabel {
  type: "label";
  label: string;
}

export type ContextMenuItem =
  | ContextMenuAction
  | ContextMenuDivider
  | ContextMenuLabel;

export interface UseContextMenuOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

export interface UseContextMenuReturn {
  open: (
    event: MouseEvent | globalThis.MouseEvent,
    items: ContextMenuItem[],
  ) => void;
  close: () => void;
  isOpen: boolean;
  render: ReactNode;
}

/* ================================================================== */
/*  Helpers                                                            */
/* ================================================================== */

function isAction(item: ContextMenuItem): item is ContextMenuAction {
  return !("type" in item) || item.type === "action" || item.type === undefined;
}

/* ================================================================== */
/*  Hook                                                               */
/* ================================================================== */

interface OpenState {
  x: number;
  y: number;
  items: ContextMenuItem[];
}

export function useContextMenu(
  options?: UseContextMenuOptions,
): UseContextMenuReturn {
  const [state, setState] = useState<OpenState | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [flip, setFlip] = useState<{ x: boolean; y: boolean }>({
    x: false,
    y: false,
  });
  const menuRef = useRef<HTMLDivElement | null>(null);
  const onCloseRef = useRef(options?.onClose);
  const onOpenRef = useRef(options?.onOpen);

  useEffect(() => {
    onCloseRef.current = options?.onClose;
    onOpenRef.current = options?.onOpen;
  }, [options?.onClose, options?.onOpen]);

  const close = useCallback(() => {
    setState((prev) => {
      if (prev) onCloseRef.current?.();
      return null;
    });
    setActiveIdx(-1);
    setFlip({ x: false, y: false });
  }, []);

  const open = useCallback(
    (
      event: MouseEvent | globalThis.MouseEvent,
      items: ContextMenuItem[],
    ) => {
      event.preventDefault();
      setState({ x: event.clientX, y: event.clientY, items });
      setActiveIdx(-1);
      setFlip({ x: false, y: false });
      onOpenRef.current?.();
    },
    [],
  );

  // Apply cursor coordinates imperatively (runtime values, not tokenizable)
  // and compute flip placement based on measured menu size vs viewport.
  useLayoutEffect(() => {
    if (!state || !menuRef.current) return;
    const el = menuRef.current;
    el.style.setProperty("top", `${state.y}px`);
    el.style.setProperty("left", `${state.x}px`);
    const rect = el.getBoundingClientRect();
    const pad = 8;
    const overflowX = state.x + rect.width > window.innerWidth - pad;
    const overflowY = state.y + rect.height > window.innerHeight - pad;
    if (overflowX !== flip.x || overflowY !== flip.y) {
      setFlip({ x: overflowX, y: overflowY });
    }
  }, [state, flip.x, flip.y]);

  // Focus the menu on open so keyboard events are captured
  useEffect(() => {
    if (!state || !menuRef.current) return;
    menuRef.current.focus();
  }, [state]);

  // Outside click, Escape, scroll, and resize close.
  // Deferred to next tick so the originating right-click doesn't self-close.
  useEffect(() => {
    if (!state) return;
    const onDown = (e: globalThis.MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        close();
      }
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onScroll = () => close();
    const t = window.setTimeout(() => {
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onKey);
      window.addEventListener("scroll", onScroll, true);
      window.addEventListener("resize", close);
    }, 0);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", close);
    };
  }, [state, close]);

  const onMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!state) return;

    const enabled = state.items
      .map((it, i) => (isAction(it) && !it.disabled ? i : -1))
      .filter((i) => i >= 0);
    if (enabled.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const cur = enabled.indexOf(activeIdx);
      const next = cur < 0 || cur >= enabled.length - 1 ? 0 : cur + 1;
      setActiveIdx(enabled[next]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const cur = enabled.indexOf(activeIdx);
      const next = cur <= 0 ? enabled.length - 1 : cur - 1;
      setActiveIdx(enabled[next]);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIdx(enabled[0]);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIdx(enabled[enabled.length - 1]);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeIdx >= 0) {
        const it = state.items[activeIdx];
        if (isAction(it) && !it.disabled) {
          it.onSelect();
          close();
        }
      }
    }
  };

  const render: ReactNode =
    state && typeof document !== "undefined"
      ? createPortal(
          <div
            ref={menuRef}
            role="menu"
            tabIndex={-1}
            onKeyDown={onMenuKeyDown}
            onContextMenu={(e) => e.preventDefault()}
            className={cn(
              "ds-context-menu",
              flip.x && "ds-context-menu--flip-x",
              flip.y && "ds-context-menu--flip-y",
            )}
          >
            {state.items.map((item, i) => {
              if (item.type === "divider") {
                return (
                  <hr
                    key={`div-${i}`}
                    className="ds-context-menu__divider"
                  />
                );
              }
              if (item.type === "label") {
                return (
                  <div
                    key={`lbl-${i}-${item.label}`}
                    className="ds-context-menu__label"
                  >
                    {item.label}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  tabIndex={-1}
                  disabled={item.disabled}
                  aria-disabled={item.disabled || undefined}
                  onClick={() => {
                    item.onSelect();
                    close();
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={cn(
                    "ds-context-menu__item",
                    item.variant === "danger" &&
                      "ds-context-menu__item--danger",
                    item.disabled && "ds-context-menu__item--disabled",
                    i === activeIdx && "ds-context-menu__item--active",
                  )}
                >
                  {item.icon && (
                    <span className="ds-context-menu__item-icon">
                      {item.icon}
                    </span>
                  )}
                  <span className="ds-context-menu__item-label">
                    {item.label}
                  </span>
                  {item.shortcut && (
                    <span className="ds-context-menu__item-shortcut">
                      {item.shortcut}
                    </span>
                  )}
                </button>
              );
            })}
          </div>,
          document.body,
        )
      : null;

  return { open, close, isOpen: state !== null, render };
}
