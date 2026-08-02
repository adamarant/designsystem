import { type ComponentPropsWithoutRef } from "react";
type AlertVariant = "default" | "info" | "success" | "warning" | "error";
export interface AlertProps extends ComponentPropsWithoutRef<"div"> {
    /** Semantic color variant. Default: "default" */
    variant?: AlertVariant;
    /** Reduced padding, no border-radius. Default: false */
    compact?: boolean;
    /** Full-width banner (no radius, horizontal borders only). Default: false */
    banner?: boolean;
    /** Puts <Alert.Actions> on the trailing edge instead of under the content.
     *  Falls back to stacked below md. Default: false */
    actionsInline?: boolean;
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
export interface AlertActionsProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const AlertIcon: import("react").ForwardRefExoticComponent<AlertIconProps & import("react").RefAttributes<HTMLDivElement>>;
declare const AlertContent: import("react").ForwardRefExoticComponent<AlertContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const AlertTitle: import("react").ForwardRefExoticComponent<AlertTitleProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: import("react").ForwardRefExoticComponent<AlertDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const AlertClose: import("react").ForwardRefExoticComponent<AlertCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const AlertActions: import("react").ForwardRefExoticComponent<AlertActionsProps & import("react").RefAttributes<HTMLDivElement>>;
export { AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertClose, AlertActions };
export declare const Alert: import("react").ForwardRefExoticComponent<AlertProps & import("react").RefAttributes<HTMLDivElement>> & {
    Icon: import("react").ForwardRefExoticComponent<AlertIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<AlertContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<AlertTitleProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Description: import("react").ForwardRefExoticComponent<AlertDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Close: import("react").ForwardRefExoticComponent<AlertCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
    Actions: import("react").ForwardRefExoticComponent<AlertActionsProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Alert.d.ts.map