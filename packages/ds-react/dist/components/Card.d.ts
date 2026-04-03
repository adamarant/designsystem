import { type ComponentPropsWithoutRef } from "react";
type CardVariant = "default" | "interactive" | "elevated" | "hover";
export interface CardProps extends ComponentPropsWithoutRef<"div"> {
    /** Visual variant. Default: "default" */
    variant?: CardVariant;
    /** Reduced padding. Default: false */
    compact?: boolean;
    /** Remove internal dividers (header/footer borders). Default: false */
    flush?: boolean;
    /** Additional className */
    className?: string;
}
export interface CardHeaderProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface CardTitleProps extends ComponentPropsWithoutRef<"h3"> {
    className?: string;
}
export interface CardDescriptionProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface CardBodyProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface CardFooterProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
type MediaAspect = "default" | "square" | "video" | "auto";
export interface CardMediaProps extends ComponentPropsWithoutRef<"img"> {
    /** Aspect ratio. Default: "default" (16/10) */
    aspect?: MediaAspect;
    className?: string;
}
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>> & {
    Header: import("react").ForwardRefExoticComponent<CardHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<CardTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<CardDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Body: import("react").ForwardRefExoticComponent<CardBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<CardFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    Media: import("react").ForwardRefExoticComponent<CardMediaProps & import("react").RefAttributes<HTMLImageElement>>;
};
export {};
//# sourceMappingURL=Card.d.ts.map