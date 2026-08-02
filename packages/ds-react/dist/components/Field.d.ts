import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface FieldProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
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
export declare const Field: import("react").ForwardRefExoticComponent<FieldProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Field.d.ts.map