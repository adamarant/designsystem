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
declare const Input: import("react").ForwardRefExoticComponent<CommandInputProps & import("react").RefAttributes<HTMLInputElement>>;
declare const List: import("react").ForwardRefExoticComponent<CommandListProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Item: import("react").ForwardRefExoticComponent<CommandItemProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const Group: import("react").ForwardRefExoticComponent<CommandGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export { Input as CommandInput, List as CommandList, Item as CommandItem, Group as CommandGroup };
export declare const Command: import("react").ForwardRefExoticComponent<CommandProps & import("react").RefAttributes<HTMLDivElement>> & {
    Input: import("react").ForwardRefExoticComponent<CommandInputProps & import("react").RefAttributes<HTMLInputElement>>;
    List: import("react").ForwardRefExoticComponent<CommandListProps & import("react").RefAttributes<HTMLDivElement>>;
    Item: import("react").ForwardRefExoticComponent<CommandItemProps & import("react").RefAttributes<HTMLButtonElement>>;
    Group: import("react").ForwardRefExoticComponent<CommandGroupProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Command.d.ts.map