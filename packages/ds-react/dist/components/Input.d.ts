import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import type { Size } from "../types";
type InputState = "default" | "error" | "success";
type InputSize = Size;
export interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
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
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
type TextareaState = "default" | "error";
export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
    /** Validation state. Default: "default" */
    state?: TextareaState;
    /** Allow password managers to offer autofill. Default false: suppressed. */
    allowPasswordManager?: boolean;
    /** Additional className */
    className?: string;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export interface InputGroupProps extends ComponentPropsWithoutRef<"div"> {
    /** Place icon on the right side instead of left. Default: false */
    iconRight?: boolean;
    /** Additional className */
    className?: string;
}
export declare const InputGroup: import("react").ForwardRefExoticComponent<InputGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface InputGroupIconProps extends ComponentPropsWithoutRef<"div"> {
    /** Additional className */
    className?: string;
}
export declare const InputGroupIcon: import("react").ForwardRefExoticComponent<InputGroupIconProps & import("react").RefAttributes<HTMLDivElement>>;
type HelpVariant = "default" | "error";
export interface HelpProps extends ComponentPropsWithoutRef<"p"> {
    /** Variant. Default: "default" (tertiary text) */
    variant?: HelpVariant;
    /** Additional className */
    className?: string;
}
export declare const Help: import("react").ForwardRefExoticComponent<HelpProps & import("react").RefAttributes<HTMLParagraphElement>>;
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
export interface CheckboxProps extends ComponentPropsWithoutRef<"label">, CheckControlOwnProps {
    /** Additional className */
    className?: string;
}
export interface RadioProps extends ComponentPropsWithoutRef<"label">, CheckControlOwnProps {
    /** Additional className */
    className?: string;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLLabelElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map