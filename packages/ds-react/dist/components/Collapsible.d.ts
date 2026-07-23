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
declare const Trigger: import("react").ForwardRefExoticComponent<CollapsibleTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const Content: import("react").ForwardRefExoticComponent<CollapsibleContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare function CollapsibleRoot({ defaultOpen, className, children, ...rest }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
export { Trigger as CollapsibleTrigger, Content as CollapsibleContent };
export declare const Collapsible: typeof CollapsibleRoot & {
    Trigger: import("react").ForwardRefExoticComponent<CollapsibleTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<CollapsibleContentProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Collapsible.d.ts.map