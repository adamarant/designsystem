import { type ComponentPropsWithoutRef } from "react";
export interface TimelineProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface TimelineItemProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface TimelineDotProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface TimelineContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const Timeline: import("react").ForwardRefExoticComponent<TimelineProps & import("react").RefAttributes<HTMLDivElement>> & {
    Item: import("react").ForwardRefExoticComponent<TimelineItemProps & import("react").RefAttributes<HTMLDivElement>>;
    Dot: import("react").ForwardRefExoticComponent<TimelineDotProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<TimelineContentProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Timeline.d.ts.map