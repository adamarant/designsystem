import { type ComponentPropsWithoutRef } from "react";
export interface HeroProps extends ComponentPropsWithoutRef<"section"> {
    className?: string;
}
export interface HeroTitleProps extends ComponentPropsWithoutRef<"h1"> {
    className?: string;
}
export interface HeroDescriptionProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface HeroActionsProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const Hero: import("react").ForwardRefExoticComponent<HeroProps & import("react").RefAttributes<HTMLElement>> & {
    Title: import("react").ForwardRefExoticComponent<HeroTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<HeroDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Actions: import("react").ForwardRefExoticComponent<HeroActionsProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Hero.d.ts.map