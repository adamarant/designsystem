"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Helpers                                                            */
/* ================================================================== */
function isAction(item) {
    return !("type" in item) || item.type === "action" || item.type === undefined;
}
export function useContextMenu(options) {
    const [state, setState] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    const [flip, setFlip] = useState({
        x: false,
        y: false,
    });
    const menuRef = useRef(null);
    const onCloseRef = useRef(options?.onClose);
    const onOpenRef = useRef(options?.onOpen);
    useEffect(() => {
        onCloseRef.current = options?.onClose;
        onOpenRef.current = options?.onOpen;
    }, [options?.onClose, options?.onOpen]);
    const close = useCallback(() => {
        setState((prev) => {
            if (prev)
                onCloseRef.current?.();
            return null;
        });
        setActiveIdx(-1);
        setFlip({ x: false, y: false });
    }, []);
    const open = useCallback((event, items) => {
        event.preventDefault();
        setState({ x: event.clientX, y: event.clientY, items });
        setActiveIdx(-1);
        setFlip({ x: false, y: false });
        onOpenRef.current?.();
    }, []);
    // Apply cursor coordinates imperatively (runtime values, not tokenizable)
    // and compute flip placement based on measured menu size vs viewport.
    useLayoutEffect(() => {
        if (!state || !menuRef.current)
            return;
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
        if (!state || !menuRef.current)
            return;
        menuRef.current.focus();
    }, [state]);
    // Outside click, Escape, scroll, and resize close.
    // Deferred to next tick so the originating right-click doesn't self-close.
    useEffect(() => {
        if (!state)
            return;
        const onDown = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                close();
            }
        };
        const onKey = (e) => {
            if (e.key === "Escape")
                close();
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
    const onMenuKeyDown = (e) => {
        if (!state)
            return;
        const enabled = state.items
            .map((it, i) => (isAction(it) && !it.disabled ? i : -1))
            .filter((i) => i >= 0);
        if (enabled.length === 0)
            return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            const cur = enabled.indexOf(activeIdx);
            const next = cur < 0 || cur >= enabled.length - 1 ? 0 : cur + 1;
            setActiveIdx(enabled[next]);
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            const cur = enabled.indexOf(activeIdx);
            const next = cur <= 0 ? enabled.length - 1 : cur - 1;
            setActiveIdx(enabled[next]);
        }
        else if (e.key === "Home") {
            e.preventDefault();
            setActiveIdx(enabled[0]);
        }
        else if (e.key === "End") {
            e.preventDefault();
            setActiveIdx(enabled[enabled.length - 1]);
        }
        else if (e.key === "Enter" || e.key === " ") {
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
    const render = state && typeof document !== "undefined"
        ? createPortal(_jsx("div", { ref: menuRef, role: "menu", tabIndex: -1, onKeyDown: onMenuKeyDown, onContextMenu: (e) => e.preventDefault(), className: cn("ds-context-menu", flip.x && "ds-context-menu--flip-x", flip.y && "ds-context-menu--flip-y"), children: state.items.map((item, i) => {
                if (item.type === "divider") {
                    return (_jsx("hr", { className: "ds-context-menu__divider" }, `div-${i}`));
                }
                if (item.type === "label") {
                    return (_jsx("div", { className: "ds-context-menu__label", children: item.label }, `lbl-${i}-${item.label}`));
                }
                return (_jsxs("button", { type: "button", role: "menuitem", tabIndex: -1, disabled: item.disabled, "aria-disabled": item.disabled || undefined, onClick: () => {
                        item.onSelect();
                        close();
                    }, onMouseEnter: () => setActiveIdx(i), className: cn("ds-context-menu__item", item.variant === "danger" &&
                        "ds-context-menu__item--danger", item.disabled && "ds-context-menu__item--disabled", i === activeIdx && "ds-context-menu__item--active"), children: [item.icon && (_jsx("span", { className: "ds-context-menu__item-icon", children: item.icon })), _jsx("span", { className: "ds-context-menu__item-label", children: item.label }), item.shortcut && (_jsx("span", { className: "ds-context-menu__item-shortcut", children: item.shortcut }))] }, item.id));
            }) }), document.body)
        : null;
    return { open, close, isOpen: state !== null, render };
}
//# sourceMappingURL=ContextMenu.js.map