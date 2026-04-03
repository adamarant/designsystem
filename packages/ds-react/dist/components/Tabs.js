import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useContext, useId, useRef, } from "react";
import { cn } from "../utils/cn";
const TabsContext = createContext(null);
function useTabsContext() {
    const ctx = useContext(TabsContext);
    if (!ctx)
        throw new Error("Tabs sub-components must be used inside <Tabs>");
    return ctx;
}
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const variantMap = {
    default: "",
    pills: "ds-tabs--pills",
    "pills-flat": "ds-tabs--pills-flat",
    vertical: "ds-tabs--vertical",
};
const sizeMap = {
    sm: "ds-tabs--sm",
    md: "",
    lg: "ds-tabs--lg",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const TabsList = forwardRef(function TabsList({ variant = "default", size = "md", full, className, ...rest }, ref) {
    const listRef = useRef(null);
    const isVertical = variant === "vertical";
    const handleKeyDown = (e) => {
        const prev = isVertical ? "ArrowUp" : "ArrowLeft";
        const next = isVertical ? "ArrowDown" : "ArrowRight";
        if (e.key !== prev && e.key !== next)
            return;
        e.preventDefault();
        const container = listRef.current;
        if (!container)
            return;
        const tabs = Array.from(container.querySelectorAll('[role="tab"]:not([disabled]):not([aria-disabled="true"])'));
        if (tabs.length === 0)
            return;
        const current = tabs.indexOf(document.activeElement);
        let idx;
        if (e.key === next) {
            idx = current + 1 >= tabs.length ? 0 : current + 1;
        }
        else {
            idx = current - 1 < 0 ? tabs.length - 1 : current - 1;
        }
        tabs[idx].focus();
    };
    return (_jsx("div", { ref: (node) => {
            listRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, role: "tablist", "aria-orientation": isVertical ? "vertical" : "horizontal", onKeyDown: handleKeyDown, className: cn("ds-tabs", variantMap[variant], sizeMap[size], full && "ds-tabs--full", className), ...rest }));
});
const TabsTab = forwardRef(function TabsTab({ value, disabled, className, ...rest }, ref) {
    const ctx = useTabsContext();
    const isActive = ctx.value === value;
    const tabId = `${ctx.baseId}-tab-${value}`;
    const panelId = `${ctx.baseId}-panel-${value}`;
    return (_jsx("button", { ref: ref, role: "tab", id: tabId, "aria-selected": isActive, "aria-controls": panelId, "aria-disabled": disabled || undefined, disabled: disabled, tabIndex: isActive ? 0 : -1, onClick: () => {
            if (!disabled)
                ctx.onValueChange(value);
        }, className: cn("ds-tab", isActive && "ds-tab--active", className), ...rest }));
});
const TabsIcon = forwardRef(function TabsIcon({ className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-tab__icon", className), ...rest }));
});
const TabsCount = forwardRef(function TabsCount({ className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-tab__count", className), ...rest }));
});
const TabsPanel = forwardRef(function TabsPanel({ value, className, ...rest }, ref) {
    const ctx = useTabsContext();
    const isActive = ctx.value === value;
    const tabId = `${ctx.baseId}-tab-${value}`;
    const panelId = `${ctx.baseId}-panel-${value}`;
    if (!isActive)
        return null;
    return (_jsx("div", { ref: ref, role: "tabpanel", id: panelId, "aria-labelledby": tabId, tabIndex: 0, className: cn("ds-tab-panel", className), ...rest }));
});
/* ================================================================== */
/*  Tabs (root provider + dot notation)                                */
/* ================================================================== */
function TabsRoot({ value, onValueChange, children }) {
    const baseId = useId();
    return (_jsx(TabsContext.Provider, { value: { value, onValueChange, baseId }, children: children }));
}
export const Tabs = Object.assign(TabsRoot, {
    List: TabsList,
    Tab: TabsTab,
    Icon: TabsIcon,
    Count: TabsCount,
    Panel: TabsPanel,
});
//# sourceMappingURL=Tabs.js.map