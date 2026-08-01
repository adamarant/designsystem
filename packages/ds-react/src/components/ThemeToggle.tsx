"use client";

import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";
import { IconMoon, IconSun } from "../icons";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type Theme = "light" | "dark";
type ThemeToggleSize = Exclude<Size, "xs">;

export interface ThemeToggleProps
  extends Omit<
    ComponentPropsWithoutRef<"button">,
    "role" | "aria-checked" | "onChange"
  > {
  /** Current theme. `"dark"` renders as checked (thumb right, moon active). */
  theme: Theme;
  /** Called with the next theme when the user toggles. */
  onThemeChange: (next: Theme) => void;
  /** Size. Default: "md" */
  size?: ThemeToggleSize;
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sizeMap: Record<ThemeToggleSize, string> = {
  sm: "ds-theme-toggle--sm",
  md: "",
  lg: "ds-theme-toggle--lg",
};

/* ================================================================== */
/*  Icons (self-contained — no icon-library dependency)                */
/* ================================================================== */


/* ================================================================== */
/*  ThemeToggle                                                        */
/* ================================================================== */

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  function ThemeToggle(
    {
      theme,
      onThemeChange,
      size = "md",
      disabled,
      className,
      onClick,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) {
    const isDark = theme === "dark";

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) onThemeChange(isDark ? "light" : "dark");
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={
          ariaLabel ?? `Switch to ${isDark ? "light" : "dark"} mode`
        }
        disabled={disabled}
        onClick={handleClick}
        className={cn("ds-theme-toggle", sizeMap[size], className)}
        {...rest}
      >
        <span className="ds-theme-toggle__thumb" />
        <span className="ds-theme-toggle__icon ds-theme-toggle__icon--sun">
          <IconSun size={16} />
        </span>
        <span className="ds-theme-toggle__icon ds-theme-toggle__icon--moon">
          <IconMoon size={16} />
        </span>
      </button>
    );
  },
);
