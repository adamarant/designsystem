import { type ComponentPropsWithoutRef } from "react";
export interface EmptyStateProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface EmptyStateIconProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface EmptyStateTitleProps extends ComponentPropsWithoutRef<"h3"> {
    className?: string;
}
export interface EmptyStateDescriptionProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface EmptyStateActionsProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const EmptyState: import("react").ForwardRefExoticComponent<EmptyStateProps & import("react").RefAttributes<HTMLDivElement>> & {
    Icon: import("react").ForwardRefExoticComponent<EmptyStateIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<EmptyStateTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<EmptyStateDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Actions: import("react").ForwardRefExoticComponent<EmptyStateActionsProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=EmptyState.d.ts.map