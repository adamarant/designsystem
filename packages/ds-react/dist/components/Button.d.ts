import { type ComponentPropsWithoutRef } from "react";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "success-solid";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    /** Visual style. Default: "primary" (inverted bg) */
    variant?: ButtonVariant;
    /** Size tier. Default: "md" (40px) */
    size?: ButtonSize;
    /** Pill shape (rounded-full). Default: false */
    pill?: boolean;
    /** Full width. Default: false */
    full?: boolean;
    /** Icon-only mode (square, no text padding). Default: false */
    icon?: boolean;
    /** Loading — shows CSS spinner, disables interaction, sets aria-busy. */
    loading?: boolean;
    /** Additional className */
    className?: string;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ButtonGroupProps extends ComponentPropsWithoutRef<"div"> {
    /** Additional className */
    className?: string;
}
export declare const ButtonGroup: import("react").ForwardRefExoticComponent<ButtonGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Button.d.ts.map