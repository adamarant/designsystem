import { type ComponentPropsWithoutRef } from "react";
export interface CommandProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface CommandInputProps extends ComponentPropsWithoutRef<"input"> {
    className?: string;
}
export interface CommandListProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface CommandItemProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export interface CommandGroupProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const Command: import("react").ForwardRefExoticComponent<CommandProps & import("react").RefAttributes<HTMLDivElement>> & {
    Input: import("react").ForwardRefExoticComponent<CommandInputProps & import("react").RefAttributes<HTMLInputElement>>;
    List: import("react").ForwardRefExoticComponent<CommandListProps & import("react").RefAttributes<HTMLDivElement>>;
    Item: import("react").ForwardRefExoticComponent<CommandItemProps & import("react").RefAttributes<HTMLButtonElement>>;
    Group: import("react").ForwardRefExoticComponent<CommandGroupProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Command.d.ts.map