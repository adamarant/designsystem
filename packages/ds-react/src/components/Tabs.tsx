import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  createContext,
  forwardRef,
  useContext,
  useId,
  useRef,
} from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

/* ================================================================== */
/*  Context                                                            */
/* ================================================================== */

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs sub-components must be used inside <Tabs>");
  return ctx;
}

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type TabsVariant = "default" | "pills" | "pills-flat" | "vertical";
type TabsSize = Exclude<Size, "xs">;

export interface TabsProps {
  /** Currently active tab value. */
  value: string;
  /** Called when the user selects a tab. */
  onValueChange: (value: string) => void;
  /** Children (Tabs.List + Tabs.Panel). */
  children: React.ReactNode;
}

export interface TabsListProps extends ComponentPropsWithoutRef<"div"> {
  /** Visual variant. Default: "default" (underline) */
  variant?: TabsVariant;
  /** Size. Default: "md" */
  size?: TabsSize;
  /** Stretch tabs to full width. Default: false */
  full?: boolean;
  /** Accessible label for the tab list. */
  "aria-label"?: string;
  /** Additional className */
  className?: string;
}

export interface TabsTabProps extends ComponentPropsWithoutRef<"button"> {
  /** Unique value identifying this tab. */
  value: string;
  /** Disabled. Default: false */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

export interface TabsIconProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export interface TabsCountProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export interface TabsPanelProps extends ComponentPropsWithoutRef<"div"> {
  /** Value matching the corresponding Tab. */
  value: string;
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const variantMap: Record<TabsVariant, string> = {
  default: "",
  pills: "ds-tabs--pills",
  "pills-flat": "ds-tabs--pills-flat",
  vertical: "ds-tabs--vertical",
};

const sizeMap: Record<TabsSize, string> = {
  sm: "ds-tabs--sm",
  md: "",
  lg: "ds-tabs--lg",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  function TabsList(
    { variant = "default", size = "md", full, className, ...rest },
    ref,
  ) {
    const listRef = useRef<HTMLDivElement | null>(null);
    const isVertical = variant === "vertical";

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const prev = isVertical ? "ArrowUp" : "ArrowLeft";
      const next = isVertical ? "ArrowDown" : "ArrowRight";

      if (e.key !== prev && e.key !== next) return;

      e.preventDefault();
      const container = listRef.current;
      if (!container) return;

      const tabs = Array.from(
        container.querySelectorAll<HTMLButtonElement>(
          '[role="tab"]:not([disabled]):not([aria-disabled="true"])',
        ),
      );
      if (tabs.length === 0) return;

      const current = tabs.indexOf(document.activeElement as HTMLButtonElement);
      let idx: number;
      if (e.key === next) {
        idx = current + 1 >= tabs.length ? 0 : current + 1;
      } else {
        idx = current - 1 < 0 ? tabs.length - 1 : current - 1;
      }
      tabs[idx].focus();
    };

    return (
      <div
        ref={(node) => {
          listRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="tablist"
        aria-orientation={isVertical ? "vertical" : "horizontal"}
        onKeyDown={handleKeyDown}
        className={cn(
          "ds-tabs",
          variantMap[variant],
          sizeMap[size],
          full && "ds-tabs--full",
          className,
        )}
        {...rest}
      />
    );
  },
);

const TabsTab = forwardRef<HTMLButtonElement, TabsTabProps>(
  function TabsTab({ value, disabled, className, ...rest }, ref) {
    const ctx = useTabsContext();
    const isActive = ctx.value === value;
    const tabId = `${ctx.baseId}-tab-${value}`;
    const panelId = `${ctx.baseId}-panel-${value}`;

    return (
      <button
        ref={ref}
        role="tab"
        id={tabId}
        aria-selected={isActive}
        aria-controls={panelId}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        onClick={() => {
          if (!disabled) ctx.onValueChange(value);
        }}
        className={cn(
          "ds-tab",
          isActive && "ds-tab--active",
          className,
        )}
        {...rest}
      />
    );
  },
);

const TabsIcon = forwardRef<HTMLSpanElement, TabsIconProps>(
  function TabsIcon({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cn("ds-tab__icon", className)} {...rest} />
    );
  },
);

const TabsCount = forwardRef<HTMLSpanElement, TabsCountProps>(
  function TabsCount({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cn("ds-tab__count", className)} {...rest} />
    );
  },
);

const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  function TabsPanel({ value, className, ...rest }, ref) {
    const ctx = useTabsContext();
    const isActive = ctx.value === value;
    const tabId = `${ctx.baseId}-tab-${value}`;
    const panelId = `${ctx.baseId}-panel-${value}`;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId}
        tabIndex={0}
        className={cn("ds-tab-panel", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Tabs (root provider + dot notation)                                */
/* ================================================================== */

function TabsRoot({ value, onValueChange, children }: TabsProps) {
  const baseId = useId();

  return (
    <TabsContext.Provider value={{ value, onValueChange, baseId }}>
      {children}
    </TabsContext.Provider>
  );
}

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { TabsList, TabsTab, TabsIcon, TabsCount, TabsPanel };

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Icon: TabsIcon,
  Count: TabsCount,
  Panel: TabsPanel,
});
