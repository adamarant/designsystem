import { type ComponentPropsWithoutRef } from "react";
type InputState = "default" | "error" | "success";
type InputSize = "xs" | "sm" | "md" | "lg";
export interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
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
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
type TextareaState = "default" | "error";
export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
    /** Validation state. Default: "default" */
    state?: TextareaState;
    /** Additional className */
    className?: string;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export interface SelectProps extends Omit<ComponentPropsWithoutRef<"select">, "size"> {
    /** Size tier. Default: "md" (40px) */
    size?: InputSize;
    /** Full width (select is auto-width by default). Default: false */
    full?: boolean;
    /** Additional className */
    className?: string;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
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
export interface CheckboxProps extends ComponentPropsWithoutRef<"label"> {
    /** Additional className */
    className?: string;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface RadioProps extends ComponentPropsWithoutRef<"label"> {
    /** Additional className */
    className?: string;
}
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLLabelElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map