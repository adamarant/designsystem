import { type ComponentPropsWithoutRef } from "react";
export interface PopoverProps extends ComponentPropsWithoutRef<"div"> {
    open: boolean;
    onOpenChange: (o: boolean) => void;
    className?: string;
}
export interface PopoverTriggerProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export interface PopoverContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const Popover: import("react").ForwardRefExoticComponent<PopoverProps & import("react").RefAttributes<HTMLDivElement>> & {
    Trigger: import("react").ForwardRefExoticComponent<PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<PopoverContentProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Popover.d.ts.map