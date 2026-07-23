import { type ComponentPropsWithoutRef } from "react";
export interface PageHeaderProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface PageHeaderLeadProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface PageHeaderTitleProps extends ComponentPropsWithoutRef<"h1"> {
    className?: string;
}
export interface PageHeaderDescriptionProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface PageHeaderActionsProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface PageHeaderBackProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export declare const PageHeaderLead: import("react").ForwardRefExoticComponent<PageHeaderLeadProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PageHeaderTitle: import("react").ForwardRefExoticComponent<PageHeaderTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
export declare const PageHeaderDescription: import("react").ForwardRefExoticComponent<PageHeaderDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
export declare const PageHeaderActions: import("react").ForwardRefExoticComponent<PageHeaderActionsProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PageHeaderBack: import("react").ForwardRefExoticComponent<PageHeaderBackProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const PageHeader: import("react").ForwardRefExoticComponent<PageHeaderProps & import("react").RefAttributes<HTMLDivElement>> & {
    Lead: import("react").ForwardRefExoticComponent<PageHeaderLeadProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<PageHeaderTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<PageHeaderDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Actions: import("react").ForwardRefExoticComponent<PageHeaderActionsProps & import("react").RefAttributes<HTMLDivElement>>;
    Back: import("react").ForwardRefExoticComponent<PageHeaderBackProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=PageHeader.d.ts.map