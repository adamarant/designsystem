import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Shared types                                                       */
/* ================================================================== */

type InputState = "default" | "error" | "success";
type InputSize = "xs" | "sm" | "md" | "lg";

/* ================================================================== */
/*  Input                                                              */
/* ================================================================== */

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  /** Validation state. Default: "default" */
  state?: InputState;
  /** Size tier. Default: "md" (40px) */
  size?: InputSize;
  /** Flush — no border, no bg, no padding (for use inside styled containers). */
  flush?: boolean;
  /** Inline — auto-width for flex rows. */
  inline?: boolean;
  /** Additional className */
  className?: string;
}

const inputStateMap: Record<InputState, string> = {
  default: "",
  error: "ds-input--error",
  success: "ds-input--success",
};

const inputSizeMap: Record<InputSize, string> = {
  xs: "ds-input--xs",
  sm: "ds-input--sm",
  md: "",
  lg: "ds-input--lg",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { state = "default", size = "md", flush, inline, className, ...rest },
    ref,
  ) {
    return (
      <input
        ref={ref}
        aria-invalid={state === "error" || undefined}
        className={cn(
          "ds-input",
          inputStateMap[state],
          inputSizeMap[size],
          flush && "ds-input--flush",
          inline && "ds-input--inline",
          className,
        )}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Textarea                                                           */
/* ================================================================== */

type TextareaState = "default" | "error";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  /** Validation state. Default: "default" */
  state?: TextareaState;
  /** Additional className */
  className?: string;
}

const textareaStateMap: Record<TextareaState, string> = {
  default: "",
  error: "ds-textarea--error",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ state = "default", className, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        aria-invalid={state === "error" || undefined}
        className={cn("ds-textarea", textareaStateMap[state], className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Select                                                             */
/* ================================================================== */

export interface SelectProps
  extends Omit<ComponentPropsWithoutRef<"select">, "size"> {
  /** Size tier. Default: "md" (40px) */
  size?: InputSize;
  /** Full width (select is auto-width by default). Default: false */
  full?: boolean;
  /** Additional className */
  className?: string;
}

const selectSizeMap: Record<InputSize, string> = {
  xs: "ds-select--xs",
  sm: "ds-select--sm",
  md: "",
  lg: "ds-select--lg",
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ size = "md", full, className, ...rest }, ref) {
    return (
      <select
        ref={ref}
        className={cn(
          "ds-select",
          selectSizeMap[size],
          full && "ds-select--full",
          className,
        )}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  InputGroup (input with icon)                                       */
/* ================================================================== */

export interface InputGroupProps extends ComponentPropsWithoutRef<"div"> {
  /** Place icon on the right side instead of left. Default: false */
  iconRight?: boolean;
  /** Additional className */
  className?: string;
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup({ iconRight, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "ds-input-group",
          iconRight && "ds-input-group--icon-right",
          className,
        )}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  InputGroupIcon                                                     */
/* ================================================================== */

export interface InputGroupIconProps extends ComponentPropsWithoutRef<"div"> {
  /** Additional className */
  className?: string;
}

export const InputGroupIcon = forwardRef<HTMLDivElement, InputGroupIconProps>(
  function InputGroupIcon({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-input-group__icon", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Help (help text / error message below input)                       */
/* ================================================================== */

type HelpVariant = "default" | "error";

export interface HelpProps extends ComponentPropsWithoutRef<"p"> {
  /** Variant. Default: "default" (tertiary text) */
  variant?: HelpVariant;
  /** Additional className */
  className?: string;
}

const helpVariantMap: Record<HelpVariant, string> = {
  default: "",
  error: "ds-help--error",
};

export const Help = forwardRef<HTMLParagraphElement, HelpProps>(
  function Help({ variant = "default", className, ...rest }, ref) {
    return (
      <p
        ref={ref}
        className={cn("ds-help", helpVariantMap[variant], className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Checkbox                                                           */
/* ================================================================== */

export interface CheckboxProps extends ComponentPropsWithoutRef<"label"> {
  /** Additional className */
  className?: string;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox({ className, ...rest }, ref) {
    return (
      <label
        ref={ref}
        className={cn("ds-checkbox", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Radio                                                              */
/* ================================================================== */

export interface RadioProps extends ComponentPropsWithoutRef<"label"> {
  /** Additional className */
  className?: string;
}

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  function Radio({ className, ...rest }, ref) {
    return (
      <label
        ref={ref}
        className={cn("ds-radio", className)}
        {...rest}
      />
    );
  },
);
