import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";
import { ignorePasswordManagers } from "../utils/passwordManager";

/* ================================================================== */
/*  Shared types                                                       */
/* ================================================================== */

type InputState = "default" | "error" | "success";
type InputSize = Size;

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
  /**
   * Allow password managers (1Password, etc.) to offer autofill on this field.
   * Default false: the manager overlay is suppressed. Set true ONLY on real
   * sign-in fields, and pass the matching autoComplete
   * (e.g. "username" / "current-password").
   */
  allowPasswordManager?: boolean;
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
    {
      state = "default",
      size = "md",
      flush,
      inline,
      allowPasswordManager,
      className,
      ...rest
    },
    ref,
  ) {
    return (
      <input
        ref={ref}
        aria-invalid={state === "error" || undefined}
        {...(allowPasswordManager ? {} : ignorePasswordManagers)}
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
  /** Allow password managers to offer autofill. Default false: suppressed. */
  allowPasswordManager?: boolean;
  /** Additional className */
  className?: string;
}

const textareaStateMap: Record<TextareaState, string> = {
  default: "",
  error: "ds-textarea--error",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { state = "default", allowPasswordManager, className, ...rest },
    ref,
  ) {
    return (
      <textarea
        ref={ref}
        aria-invalid={state === "error" || undefined}
        {...(allowPasswordManager ? {} : ignorePasswordManagers)}
        className={cn("ds-textarea", textareaStateMap[state], className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Select — moved to Select.tsx, where the panel mode lives too.      */
/*  The barrel keeps exporting it from there under the same name.      */
/* ================================================================== */

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
/*  Checkbox / Radio                                                   */
/*  Native <input> inside a styled <label> — the CSS drives states via */
/*  `& input:checked` / `:has(input:disabled)`, so accessibility is    */
/*  the platform's, not ours. Two modes:                               */
/*  - enriched: pass `label` (and friends) and the wrapper renders the */
/*    full canonical markup (input + __content/__label/__description); */
/*  - legacy shell: children only → renders exactly what it always     */
/*    did, existing consumers keep working untouched.                  */
/* ================================================================== */

type CheckControlSize = Exclude<Size, "xs">;

interface CheckControlOwnProps {
  /** Size tier. Default: "md" */
  size?: CheckControlSize;
  /** Label rendered in __content/__label. Enables the enriched markup. */
  label?: ReactNode;
  /** Secondary line under the label. */
  description?: ReactNode;
  /** Checked state (controlled) — forwarded to the native input. */
  checked?: boolean;
  /** Initial state (uncontrolled) — forwarded to the native input. */
  defaultChecked?: boolean;
  /** Called with the next checked state. */
  onCheckedChange?: (checked: boolean) => void;
  /** Disables the native input (the CSS reacts via :has). */
  disabled?: boolean;
  /** Native input name (forms). */
  name?: string;
  /** Native input value (forms). */
  value?: string;
  /** Extra props forwarded to the native <input>. */
  inputProps?: ComponentPropsWithoutRef<"input">;
}

export interface CheckboxProps
  extends ComponentPropsWithoutRef<"label">,
    CheckControlOwnProps {
  /** Additional className */
  className?: string;
}

export interface RadioProps
  extends ComponentPropsWithoutRef<"label">,
    CheckControlOwnProps {
  /** Additional className */
  className?: string;
}

const checkSizeMap: Record<CheckControlSize, string> = {
  sm: "--sm",
  md: "",
  lg: "--lg",
};

function renderCheckControl(
  block: "ds-checkbox" | "ds-radio",
  type: "checkbox" | "radio",
  props: CheckboxProps,
  ref: ForwardedRef<HTMLLabelElement>,
) {
  const {
    size = "md",
    label,
    description,
    checked,
    defaultChecked,
    onCheckedChange,
    disabled,
    name,
    value,
    inputProps,
    className,
    children,
    ...rest
  } = props;

  const enriched =
    label !== undefined ||
    description !== undefined ||
    checked !== undefined ||
    defaultChecked !== undefined ||
    onCheckedChange !== undefined ||
    inputProps !== undefined ||
    name !== undefined ||
    value !== undefined ||
    disabled !== undefined;

  /* Only attach a handler when the consumer gave one — keeps the
     component usable from Server Components in uncontrolled mode. */
  const handleChange =
    onCheckedChange || inputProps?.onChange
      ? (e: ChangeEvent<HTMLInputElement>) => {
          inputProps?.onChange?.(e);
          onCheckedChange?.(e.target.checked);
        }
      : undefined;

  const sizeClass = checkSizeMap[size] && `${block}${checkSizeMap[size]}`;

  return (
    <label ref={ref} className={cn(block, sizeClass, className)} {...rest}>
      {enriched && (
        <input
          type={type}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          value={value}
          {...inputProps}
          onChange={handleChange}
        />
      )}
      {enriched && (label !== undefined || description !== undefined) && (
        <span className={`${block}__content`}>
          {label !== undefined && (
            <span className={`${block}__label`}>{label}</span>
          )}
          {description !== undefined && (
            <span className={`${block}__description`}>{description}</span>
          )}
        </span>
      )}
      {children}
    </label>
  );
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox(props, ref) {
    return renderCheckControl("ds-checkbox", "checkbox", props, ref);
  },
);

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  function Radio(props, ref) {
    return renderCheckControl("ds-radio", "radio", props, ref);
  },
);
