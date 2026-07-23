import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Context                                                            */
/* ================================================================== */

interface DropdownContextValue {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  registerTrigger: (el: HTMLButtonElement | null) => void;
  /** Return focus to the trigger — on Escape and item selection,
      never on outside click (the user is focusing elsewhere). */
  focusTrigger: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx)
    throw new Error("Dropdown sub-components must be used inside <Dropdown>");
  return ctx;
}

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

export interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  /** Controls visibility. */
  open: boolean;
  /** Called when user requests open/close. */
  onOpenChange: (open: boolean) => void;
  /** Additional className */
  className?: string;
}

export interface DropdownTriggerProps
  extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}

type MenuAlign = "left" | "right";
type MenuPosition = "down" | "up";
type MenuWidth = "default" | "sm" | "lg" | "full" | "auto";

export interface DropdownMenuProps extends ComponentPropsWithoutRef<"div"> {
  /** Horizontal alignment. Default: "left" */
  align?: MenuAlign;
  /** Vertical position. Default: "down" */
  position?: MenuPosition;
  /** Width variant. Default: "default" (12rem) */
  width?: MenuWidth;
  /** Additional className */
  className?: string;
}

export interface DropdownItemProps extends ComponentPropsWithoutRef<"button"> {
  /** Active/selected state. Default: false */
  active?: boolean;
  /** Danger style on hover. Default: false */
  danger?: boolean;
  /** Disabled. Default: false */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

export interface DropdownItemIconProps
  extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export interface DropdownItemLabelProps
  extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export interface DropdownItemShortcutProps
  extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export interface DropdownDividerProps
  extends ComponentPropsWithoutRef<"hr"> {
  className?: string;
}

export interface DropdownHeaderProps
  extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const alignMap: Record<MenuAlign, string> = {
  left: "",
  right: "ds-dropdown__menu--right",
};

const positionMap: Record<MenuPosition, string> = {
  down: "",
  up: "ds-dropdown__menu--up",
};

const widthMap: Record<MenuWidth, string> = {
  default: "",
  sm: "ds-dropdown__menu--sm",
  lg: "ds-dropdown__menu--lg",
  full: "ds-dropdown__menu--full",
  auto: "ds-dropdown__menu--auto",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  function DropdownTrigger({ className, onClick, ...rest }, ref) {
    const ctx = useDropdownContext();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      ctx.onToggle();
      onClick?.(e);
    };

    return (
      <button
        ref={(node) => {
          ctx.registerTrigger(node);
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        aria-haspopup="true"
        aria-expanded={ctx.open}
        onClick={handleClick}
        className={cn("ds-dropdown__trigger", className)}
        {...rest}
      />
    );
  },
);

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  function DropdownMenu(
    { align = "left", position = "down", width = "default", className, ...rest },
    ref,
  ) {
    const ctx = useDropdownContext();
    const menuRef = useRef<HTMLDivElement | null>(null);

    /* Keyboard navigation inside menu */
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        e.preventDefault();
        ctx.onClose();
        ctx.focusTrigger();
        return;
      }

      const NAV_KEYS = ["ArrowDown", "ArrowUp", "Home", "End"];
      if (!NAV_KEYS.includes(e.key)) return;
      e.preventDefault();

      const container = menuRef.current;
      if (!container) return;

      const items = Array.from(
        container.querySelectorAll<HTMLButtonElement>(
          '[role="menuitem"]:not([disabled]):not([aria-disabled="true"])',
        ),
      );
      if (items.length === 0) return;

      const current = items.indexOf(
        document.activeElement as HTMLButtonElement,
      );
      let idx: number;
      if (e.key === "Home") {
        idx = 0;
      } else if (e.key === "End") {
        idx = items.length - 1;
      } else if (e.key === "ArrowDown") {
        idx = current + 1 >= items.length ? 0 : current + 1;
      } else {
        idx = current - 1 < 0 ? items.length - 1 : current - 1;
      }
      items[idx].focus();
    };

    /* Focus first item on open */
    useEffect(() => {
      if (!ctx.open) return;
      const container = menuRef.current;
      if (!container) return;
      requestAnimationFrame(() => {
        const first = container.querySelector<HTMLButtonElement>(
          '[role="menuitem"]:not([disabled])',
        );
        first?.focus();
      });
    }, [ctx.open]);

    return (
      <div
        ref={(node) => {
          menuRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="menu"
        onKeyDown={handleKeyDown}
        className={cn(
          "ds-dropdown__menu",
          ctx.open && "ds-dropdown__menu--open",
          alignMap[align],
          positionMap[position],
          widthMap[width],
          className,
        )}
        {...rest}
      />
    );
  },
);

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  function DropdownItem(
    { active, danger, disabled, className, onClick, ...rest },
    ref,
  ) {
    const ctx = useDropdownContext();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick?.(e);
        ctx.onClose();
        ctx.focusTrigger();
      }
    };

    return (
      <button
        ref={ref}
        role="menuitem"
        disabled={disabled}
        tabIndex={-1}
        onClick={handleClick}
        className={cn(
          "ds-dropdown__item",
          active && "ds-dropdown__item--active",
          danger && "ds-dropdown__item--danger",
          disabled && "ds-dropdown__item--disabled",
          className,
        )}
        {...rest}
      />
    );
  },
);

const DropdownItemIcon = forwardRef<HTMLSpanElement, DropdownItemIconProps>(
  function DropdownItemIcon({ className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cn("ds-dropdown__item-icon", className)}
        {...rest}
      />
    );
  },
);

const DropdownItemLabel = forwardRef<HTMLSpanElement, DropdownItemLabelProps>(
  function DropdownItemLabel({ className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cn("ds-dropdown__item-label", className)}
        {...rest}
      />
    );
  },
);

const DropdownItemShortcut = forwardRef<
  HTMLSpanElement,
  DropdownItemShortcutProps
>(function DropdownItemShortcut({ className, ...rest }, ref) {
  return (
    <span
      ref={ref}
      className={cn("ds-dropdown__item-shortcut", className)}
      {...rest}
    />
  );
});

const DropdownDivider = forwardRef<HTMLHRElement, DropdownDividerProps>(
  function DropdownDivider({ className, ...rest }, ref) {
    return (
      <hr
        ref={ref}
        className={cn("ds-dropdown__divider", className)}
        {...rest}
      />
    );
  },
);

const DropdownHeader = forwardRef<HTMLDivElement, DropdownHeaderProps>(
  function DropdownHeader({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-dropdown__header", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Dropdown (root provider + dot notation)                            */
/* ================================================================== */

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown({ open, onOpenChange, className, ...rest }, ref) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const onToggle = useCallback(
      () => onOpenChange(!open),
      [open, onOpenChange],
    );
    const onClose = useCallback(() => onOpenChange(false), [onOpenChange]);
    const registerTrigger = useCallback(
      (el: HTMLButtonElement | null) => {
        triggerRef.current = el;
      },
      [],
    );
    const focusTrigger = useCallback(() => {
      triggerRef.current?.focus();
    }, []);

    /* Click outside */
    useEffect(() => {
      if (!open) return;
      const handler = (e: globalThis.MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open, onClose]);

    /* Escape at root level (backup for when menu isn't focused) */
    useEffect(() => {
      if (!open) return;
      const handler = (e: globalThis.KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);

    return (
      <DropdownContext.Provider
        value={{ open, onToggle, onClose, registerTrigger, focusTrigger }}
      >
        <div
          ref={(node) => {
            rootRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(
            "ds-dropdown",
            open && "ds-dropdown--open",
            className,
          )}
          {...rest}
        />
      </DropdownContext.Provider>
    );
  },
);

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
