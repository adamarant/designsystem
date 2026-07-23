import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useCallback, useContext, useEffect, useRef, } from "react";
import { cn } from "../utils/cn";
const DropdownContext = createContext(null);
function useDropdownContext() {
    const ctx = useContext(DropdownContext);
    if (!ctx)
        throw new Error("Dropdown sub-components must be used inside <Dropdown>");
    return ctx;
}
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const alignMap = {
    left: "",
    right: "ds-dropdown__menu--right",
};
const positionMap = {
    down: "",
    up: "ds-dropdown__menu--up",
};
const widthMap = {
    default: "",
    sm: "ds-dropdown__menu--sm",
    lg: "ds-dropdown__menu--lg",
    full: "ds-dropdown__menu--full",
    auto: "ds-dropdown__menu--auto",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const DropdownTrigger = forwardRef(function DropdownTrigger({ className, onClick, ...rest }, ref) {
    const ctx = useDropdownContext();
    const handleClick = (e) => {
        ctx.onToggle();
        onClick?.(e);
    };
    return (_jsx("button", { ref: (node) => {
            ctx.registerTrigger(node);
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, "aria-haspopup": "true", "aria-expanded": ctx.open, onClick: handleClick, className: cn("ds-dropdown__trigger", className), ...rest }));
});
const DropdownMenu = forwardRef(function DropdownMenu({ align = "left", position = "down", width = "default", className, ...rest }, ref) {
    const ctx = useDropdownContext();
    const menuRef = useRef(null);
    /* Keyboard navigation inside menu */
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            ctx.onClose();
            ctx.focusTrigger();
            return;
        }
        const NAV_KEYS = ["ArrowDown", "ArrowUp", "Home", "End"];
        if (!NAV_KEYS.includes(e.key))
            return;
        e.preventDefault();
        const container = menuRef.current;
        if (!container)
            return;
        const items = Array.from(container.querySelectorAll('[role="menuitem"]:not([disabled]):not([aria-disabled="true"])'));
        if (items.length === 0)
            return;
        const current = items.indexOf(document.activeElement);
        let idx;
        if (e.key === "Home") {
            idx = 0;
        }
        else if (e.key === "End") {
            idx = items.length - 1;
        }
        else if (e.key === "ArrowDown") {
            idx = current + 1 >= items.length ? 0 : current + 1;
        }
        else {
            idx = current - 1 < 0 ? items.length - 1 : current - 1;
        }
        items[idx].focus();
    };
    /* Focus first item on open */
    useEffect(() => {
        if (!ctx.open)
            return;
        const container = menuRef.current;
        if (!container)
            return;
        requestAnimationFrame(() => {
            const first = container.querySelector('[role="menuitem"]:not([disabled])');
            first?.focus();
        });
    }, [ctx.open]);
    return (_jsx("div", { ref: (node) => {
            menuRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, role: "menu", onKeyDown: handleKeyDown, className: cn("ds-dropdown__menu", ctx.open && "ds-dropdown__menu--open", alignMap[align], positionMap[position], widthMap[width], className), ...rest }));
});
const DropdownItem = forwardRef(function DropdownItem({ active, danger, disabled, className, onClick, ...rest }, ref) {
    const ctx = useDropdownContext();
    const handleClick = (e) => {
        if (!disabled) {
            onClick?.(e);
            ctx.onClose();
            ctx.focusTrigger();
        }
    };
    return (_jsx("button", { ref: ref, role: "menuitem", disabled: disabled, tabIndex: -1, onClick: handleClick, className: cn("ds-dropdown__item", active && "ds-dropdown__item--active", danger && "ds-dropdown__item--danger", disabled && "ds-dropdown__item--disabled", className), ...rest }));
});
const DropdownItemIcon = forwardRef(function DropdownItemIcon({ className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-dropdown__item-icon", className), ...rest }));
});
const DropdownItemLabel = forwardRef(function DropdownItemLabel({ className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-dropdown__item-label", className), ...rest }));
});
const DropdownItemShortcut = forwardRef(function DropdownItemShortcut({ className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-dropdown__item-shortcut", className), ...rest }));
});
const DropdownDivider = forwardRef(function DropdownDivider({ className, ...rest }, ref) {
    return (_jsx("hr", { ref: ref, className: cn("ds-dropdown__divider", className), ...rest }));
});
const DropdownHeader = forwardRef(function DropdownHeader({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-dropdown__header", className), ...rest }));
});
/* ================================================================== */
/*  Dropdown (root provider + dot notation)                            */
/* ================================================================== */
const DropdownRoot = forwardRef(function Dropdown({ open, onOpenChange, className, ...rest }, ref) {
    const rootRef = useRef(null);
    const triggerRef = useRef(null);
    const onToggle = useCallback(() => onOpenChange(!open), [open, onOpenChange]);
    const onClose = useCallback(() => onOpenChange(false), [onOpenChange]);
    const registerTrigger = useCallback((el) => {
        triggerRef.current = el;
    }, []);
    const focusTrigger = useCallback(() => {
        triggerRef.current?.focus();
    }, []);
    /* Click outside */
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open, onClose]);
    /* Escape at root level (backup for when menu isn't focused) */
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);
    return (_jsx(DropdownContext.Provider, { value: { open, onToggle, onClose, registerTrigger, focusTrigger }, children: _jsx("div", { ref: (node) => {
                rootRef.current = node;
                if (typeof ref === "function")
                    ref(node);
                else if (ref)
                    ref.current = node;
            }, className: cn("ds-dropdown", open && "ds-dropdown--open", className), ...rest }) }));
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { DropdownTrigger, DropdownMenu, DropdownItem, DropdownItemIcon, DropdownItemLabel, DropdownItemShortcut, DropdownDivider, DropdownHeader };
export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Menu: DropdownMenu,
    Item: DropdownItem,
    ItemIcon: DropdownItemIcon,
    ItemLabel: DropdownItemLabel,
    ItemShortcut: DropdownItemShortcut,
    Divider: DropdownDivider,
    Header: DropdownHeader,
});
//# sourceMappingURL=Dropdown.js.map