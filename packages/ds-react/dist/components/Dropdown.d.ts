import { type ComponentPropsWithoutRef } from "react";
export interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
    /** Controls visibility. */
    open: boolean;
    /** Called when user requests open/close. */
    onOpenChange: (open: boolean) => void;
    /** Additional className */
    className?: string;
}
export interface DropdownTriggerProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
type MenuAlign = "left" | "right";
type MenuPosition = "down" | "up";
type MenuWidth = "default" | "sm" | "lg" | "full" | "auto";
export interface DropdownMenuProps extends ComponentPropsWithoutRef<"div"> {
    /** Horizontal alignment. Default: "left" */
    align?: MenuAlign;
    /** Vertical position. Default: "down" */
    position?: MenuPosition;
    /** Width variant. Default: "default" (12rem) */
    width?: MenuWidth;
    /** Additional className */
    className?: string;
}
export interface DropdownItemProps extends ComponentPropsWithoutRef<"button"> {
    /** Active/selected state. Default: false */
    active?: boolean;
    /** Danger style on hover. Default: false */
    danger?: boolean;
    /** Disabled. Default: false */
    disabled?: boolean;
    /** Additional className */
    className?: string;
}
export interface DropdownItemIconProps extends ComponentPropsWithoutRef<"span"> {
    className?: string;
}
export interface DropdownItemLabelProps extends ComponentPropsWithoutRef<"span"> {
    className?: string;
}
export interface DropdownItemShortcutProps extends ComponentPropsWithoutRef<"span"> {
    className?: string;
}
export interface DropdownDividerProps extends ComponentPropsWithoutRef<"hr"> {
    className?: string;
}
export interface DropdownHeaderProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const Dropdown: import("react").ForwardRefExoticComponent<DropdownProps & import("react").RefAttributes<HTMLDivElement>> & {
    Trigger: import("react").ForwardRefExoticComponent<DropdownTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Menu: import("react").ForwardRefExoticComponent<DropdownMenuProps & import("react").RefAttributes<HTMLDivElement>>;
    Item: import("react").ForwardRefExoticComponent<DropdownItemProps & import("react").RefAttributes<HTMLButtonElement>>;
    ItemIcon: import("react").ForwardRefExoticComponent<DropdownItemIconProps & import("react").RefAttributes<HTMLSpanElement>>;
    ItemLabel: import("react").ForwardRefExoticComponent<DropdownItemLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
    ItemShortcut: import("react").ForwardRefExoticComponent<DropdownItemShortcutProps & import("react").RefAttributes<HTMLSpanElement>>;
    Divider: import("react").ForwardRefExoticComponent<DropdownDividerProps & import("react").RefAttributes<HTMLHRElement>>;
    Header: import("react").ForwardRefExoticComponent<DropdownHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Dropdown.d.ts.map