import {
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
} from "react";
import { cn } from "../utils/cn";

/* A form field is a canonical shape — label, control, hint, error — so it
   takes data-driven props, not compound parts (CLAUDE.md §2b: compound is
   for components whose composition IS the point, and a field's is not).

   Until 2 Aug 2026 this was a bare <div> with a className: the CSS shipped
   __label, __hint, __error, --required and --horizontal, and the wrapper
   exposed none of them, so every consumer hand-assembled the parts. That is
   why a second vocabulary (.ds-form-group + .ds-label, 37 and 62 uses) grew
   next to this one — the composed API was never finished, not because
   anyone was careless.

   The wiring is the other half of the value: htmlFor and aria-describedby
   are derived here, so the label points at the control and the control
   announces its hint and error without the page remembering to do it. */

export interface FieldProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  /** Label text. Rendered as <label> pointing at the control. */
  label?: ReactNode;
  /** Help text under the control. Announced via aria-describedby. */
  hint?: ReactNode;
  /** Error message. Announced, and takes precedence over the hint. */
  error?: ReactNode;
  /** Success message. Suppressed while `error` is set. */
  success?: ReactNode;
  /** Marks the label with the required asterisk. Does NOT set `required` on
   *  the control — that stays the control's own prop, so validation and
   *  presentation cannot drift apart. */
  required?: boolean;
  /** Label beside the control instead of above it. */
  horizontal?: boolean;
  /** Dims the whole field. The control still needs its own `disabled`. */
  disabled?: boolean;
  /** The control: an <Input>, <Textarea>, <Select>… */
  children?: ReactNode;
  className?: string;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(
  {
    label,
    hint,
    error,
    success,
    required,
    horizontal,
    disabled,
    children,
    className,
    id,
    ...rest
  },
  ref,
) {
  const reactId = useId();
  const controlId = id ?? `field-${reactId}`;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  /* Attach the id and the description wiring to the control, never
     overwriting what the page set on purpose. */
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id: (children.props as { id?: string }).id ?? controlId,
        "aria-describedby":
          (children.props as { "aria-describedby"?: string })[
            "aria-describedby"
          ] ?? describedBy,
        "aria-invalid":
          (children.props as { "aria-invalid"?: boolean })["aria-invalid"] ??
          (error ? true : undefined),
      })
    : children;

  return (
    <div
      ref={ref}
      className={cn(
        "ds-field",
        required && "ds-field--required",
        horizontal && "ds-field--horizontal",
        disabled && "ds-field--disabled",
        className,
      )}
      {...rest}
    >
      {label ? (
        <label className="ds-field__label" htmlFor={controlId}>
          {label}
        </label>
      ) : null}
      {control}
      {error ? (
        <span className="ds-field__error" id={errorId} role="alert">
          {error}
        </span>
      ) : null}
      {success && !error ? (
        <span className="ds-field__success">{success}</span>
      ) : null}
      {hint && !error ? (
        <span className="ds-field__hint" id={hintId}>
          {hint}
        </span>
      ) : null}
    </div>
  );
});
