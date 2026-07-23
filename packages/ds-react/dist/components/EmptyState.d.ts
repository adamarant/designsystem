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
declare const Icon: import("react").ForwardRefExoticComponent<EmptyStateIconProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Title: import("react").ForwardRefExoticComponent<EmptyStateTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
declare const Description: import("react").ForwardRefExoticComponent<EmptyStateDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const Actions: import("react").ForwardRefExoticComponent<EmptyStateActionsProps & import("react").RefAttributes<HTMLDivElement>>;
export { Icon as EmptyStateIcon, Title as EmptyStateTitle, Description as EmptyStateDescription, Actions as EmptyStateActions };
export declare const EmptyState: import("react").ForwardRefExoticComponent<EmptyStateProps & import("react").RefAttributes<HTMLDivElement>> & {
    Icon: import("react").ForwardRefExoticComponent<EmptyStateIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<EmptyStateTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<EmptyStateDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Actions: import("react").ForwardRefExoticComponent<EmptyStateActionsProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=EmptyState.d.ts.map