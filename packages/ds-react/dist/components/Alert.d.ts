import { type ComponentPropsWithoutRef } from "react";
type AlertVariant = "default" | "info" | "success" | "warning" | "error";
export interface AlertProps extends ComponentPropsWithoutRef<"div"> {
    /** Semantic color variant. Default: "default" */
    variant?: AlertVariant;
    /** Reduced padding, no border-radius. Default: false */
    compact?: boolean;
    /** Full-width banner (no left accent, horizontal borders). Default: false */
    banner?: boolean;
    /** Additional className */
    className?: string;
}
export interface AlertIconProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface AlertContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface AlertTitleProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface AlertDescriptionProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface AlertCloseProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export declare const Alert: import("react").ForwardRefExoticComponent<AlertProps & import("react").RefAttributes<HTMLDivElement>> & {
    Icon: import("react").ForwardRefExoticComponent<AlertIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<AlertContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<AlertTitleProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Description: import("react").ForwardRefExoticComponent<AlertDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Close: import("react").ForwardRefExoticComponent<AlertCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
};
export {};
//# sourceMappingURL=Alert.d.ts.map