import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface StatProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
    /** The metric's name — "Properties", "Revenue". */
    label?: ReactNode;
    /** The number. Renders with tabular figures, and follows the surface. */
    value?: ReactNode;
    /** The line under it — a delta, a period, a comparison. */
    detail?: ReactNode;
    /** Optional glyph in its own muted box. */
    icon?: ReactNode;
    children?: ReactNode;
    className?: string;
}
export interface StatLabelProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface StatValueProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface StatDetailProps extends ComponentPropsWithoutRef<"p"> {
    className?: string;
}
export interface StatIconProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const Label: import("react").ForwardRefExoticComponent<StatLabelProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const Value: import("react").ForwardRefExoticComponent<StatValueProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const Detail: import("react").ForwardRefExoticComponent<StatDetailProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const Icon: import("react").ForwardRefExoticComponent<StatIconProps & import("react").RefAttributes<HTMLDivElement>>;
export { Label as StatLabel, Value as StatValue, Detail as StatDetail, Icon as StatIcon };
export declare const Stat: import("react").ForwardRefExoticComponent<StatProps & import("react").RefAttributes<HTMLDivElement>> & {
    Label: import("react").ForwardRefExoticComponent<StatLabelProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Value: import("react").ForwardRefExoticComponent<StatValueProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Detail: import("react").ForwardRefExoticComponent<StatDetailProps & import("react").RefAttributes<HTMLParagraphElement>>;
    Icon: import("react").ForwardRefExoticComponent<StatIconProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Stat.d.ts.map