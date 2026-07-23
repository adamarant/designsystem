import { type ComponentPropsWithoutRef, type MouseEvent, forwardRef } from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type ToggleSize = Exclude<Size, "xs">;

export interface ToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "role"> {
  /** Checked state. */
  checked: boolean;
  /** Called when the user toggles. */
  onCheckedChange: (checked: boolean) => void;
  /** Size. Default: "md" */
  size?: ToggleSize;
  /** Additional className */
  className?: string;
}

export interface ToggleLabelProps extends ComponentPropsWithoutRef<"label"> {
  /** Additional className */
  className?: string;
}

export interface ToggleLabelTextProps
  extends ComponentPropsWithoutRef<"span"> {
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sizeMap: Record<ToggleSize, string> = {
  sm: "ds-toggle--sm",
  md: "",
  lg: "ds-toggle--lg",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const ToggleLabel = forwardRef<HTMLLabelElement, ToggleLabelProps>(
  function ToggleLabel({ className, ...rest }, ref) {
    return (
      <label
        ref={ref}
        className={cn("ds-toggle-label", className)}
        {...rest}
      />
    );
  },
);

const ToggleLabelText = forwardRef<HTMLSpanElement, ToggleLabelTextProps>(
  function ToggleLabelText({ className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cn("ds-toggle-label__text", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Toggle (root + dot notation)                                       */
/* ================================================================== */

const ToggleRoot = forwardRef<HTMLButtonElement, ToggleProps>(
  function Toggle(
    { checked, onCheckedChange, size = "md", disabled, className, onClick, ...rest },
    ref,
  ) {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) onCheckedChange(!checked);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={cn("ds-toggle", sizeMap[size], className)}
        {...rest}
      />
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { ToggleLabel, ToggleLabelText };

export const Toggle = Object.assign(ToggleRoot, {
  Label: ToggleLabel,
  LabelText: ToggleLabelText,
});
