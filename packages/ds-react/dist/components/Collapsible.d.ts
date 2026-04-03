import { type ComponentPropsWithoutRef } from "react";
export interface CollapsibleProps extends ComponentPropsWithoutRef<"div"> {
    defaultOpen?: boolean;
    className?: string;
}
export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export interface CollapsibleContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare function CollapsibleRoot({ defaultOpen, className, children, ...rest }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
export declare const Collapsible: typeof CollapsibleRoot & {
    Trigger: import("react").ForwardRefExoticComponent<CollapsibleTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<CollapsibleContentProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Collapsible.d.ts.map