import { type ComponentPropsWithoutRef } from "react";
type ResultVariant = "success" | "error" | "warning" | "info";
export interface ResultProps extends ComponentPropsWithoutRef<"div"> {
    variant?: ResultVariant;
    className?: string;
}
export interface ResultIconProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface ResultTitleProps extends ComponentPropsWithoutRef<"h3"> {
    className?: string;
}
export interface ResultDescriptionProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface ResultActionsProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const Icon: import("react").ForwardRefExoticComponent<ResultIconProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Title: import("react").ForwardRefExoticComponent<ResultTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
declare const Description: import("react").ForwardRefExoticComponent<ResultDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const Actions: import("react").ForwardRefExoticComponent<ResultActionsProps & import("react").RefAttributes<HTMLDivElement>>;
export { Icon as ResultIcon, Title as ResultTitle, Description as ResultDescription, Actions as ResultActions };
export declare const Result: import("react").ForwardRefExoticComponent<ResultProps & import("react").RefAttributes<HTMLDivElement>> & {
    Icon: import("react").ForwardRefExoticComponent<ResultIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<ResultTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<ResultDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Actions: import("react").ForwardRefExoticComponent<ResultActionsProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Result.d.ts.map