import { type ComponentPropsWithoutRef } from "react";
export interface StatCardProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface StatCardLabelProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface StatCardValueProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface StatCardDetailProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface StatCardIconProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const StatCardLabel: import("react").ForwardRefExoticComponent<StatCardLabelProps & import("react").RefAttributes<HTMLDivElement>>;
declare const StatCardValue: import("react").ForwardRefExoticComponent<StatCardValueProps & import("react").RefAttributes<HTMLDivElement>>;
declare const StatCardDetail: import("react").ForwardRefExoticComponent<StatCardDetailProps & import("react").RefAttributes<HTMLDivElement>>;
declare const StatCardIcon: import("react").ForwardRefExoticComponent<StatCardIconProps & import("react").RefAttributes<HTMLDivElement>>;
export { StatCardLabel, StatCardValue, StatCardDetail, StatCardIcon };
export declare const StatCard: import("react").ForwardRefExoticComponent<StatCardProps & import("react").RefAttributes<HTMLDivElement>> & {
    Label: import("react").ForwardRefExoticComponent<StatCardLabelProps & import("react").RefAttributes<HTMLDivElement>>;
    Value: import("react").ForwardRefExoticComponent<StatCardValueProps & import("react").RefAttributes<HTMLDivElement>>;
    Detail: import("react").ForwardRefExoticComponent<StatCardDetailProps & import("react").RefAttributes<HTMLDivElement>>;
    Icon: import("react").ForwardRefExoticComponent<StatCardIconProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=StatCard.d.ts.map