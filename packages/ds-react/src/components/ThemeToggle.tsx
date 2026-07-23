"use client";

import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

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

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

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
          <SunIcon />
        </span>
        <span className="ds-theme-toggle__icon ds-theme-toggle__icon--moon">
          <MoonIcon />
        </span>
      </button>
    );
  },
);
