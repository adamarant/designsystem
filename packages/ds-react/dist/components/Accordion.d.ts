import { type ComponentPropsWithoutRef } from "react";
type AccordionVariant = "default" | "flush" | "separated";
export interface AccordionProps {
    /** Visual variant. Default: "default" */
    variant?: AccordionVariant;
    /** Allow multiple items open. Default: false (single) */
    multiple?: boolean;
    /** Default open items. */
    defaultOpen?: string[];
    /** Additional className */
    className?: string;
    children: React.ReactNode;
}
export interface AccordionItemProps extends ComponentPropsWithoutRef<"div"> {
    /** Unique value identifying this item. */
    value: string;
    /** Additional className */
    className?: string;
}
export interface AccordionTriggerProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export interface AccordionContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface AccordionBodyProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare function AccordionRoot({ variant, multiple, defaultOpen, className, children, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export declare const Accordion: typeof AccordionRoot & {
    Item: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
    Trigger: import("react").ForwardRefExoticComponent<AccordionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<AccordionContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<AccordionBodyProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Accordion.d.ts.map