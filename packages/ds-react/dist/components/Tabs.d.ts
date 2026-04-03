import { type ComponentPropsWithoutRef } from "react";
type TabsVariant = "default" | "pills" | "pills-flat" | "vertical";
type TabsSize = "sm" | "md" | "lg";
export interface TabsProps {
    /** Currently active tab value. */
    value: string;
    /** Called when the user selects a tab. */
    onValueChange: (value: string) => void;
    /** Children (Tabs.List + Tabs.Panel). */
    children: React.ReactNode;
}
export interface TabsListProps extends ComponentPropsWithoutRef<"div"> {
    /** Visual variant. Default: "default" (underline) */
    variant?: TabsVariant;
    /** Size. Default: "md" */
    size?: TabsSize;
    /** Stretch tabs to full width. Default: false */
    full?: boolean;
    /** Accessible label for the tab list. */
    "aria-label"?: string;
    /** Additional className */
    className?: string;
}
export interface TabsTabProps extends ComponentPropsWithoutRef<"button"> {
    /** Unique value identifying this tab. */
    value: string;
    /** Disabled. Default: false */
    disabled?: boolean;
    /** Additional className */
    className?: string;
}
export interface TabsIconProps extends ComponentPropsWithoutRef<"span"> {
    className?: string;
}
export interface TabsCountProps extends ComponentPropsWithoutRef<"span"> {
    className?: string;
}
export interface TabsPanelProps extends ComponentPropsWithoutRef<"div"> {
    /** Value matching the corresponding Tab. */
    value: string;
    /** Additional className */
    className?: string;
}
declare function TabsRoot({ value, onValueChange, children }: TabsProps): import("react/jsx-runtime").JSX.Element;
export declare const Tabs: typeof TabsRoot & {
    List: import("react").ForwardRefExoticComponent<TabsListProps & import("react").RefAttributes<HTMLDivElement>>;
    Tab: import("react").ForwardRefExoticComponent<TabsTabProps & import("react").RefAttributes<HTMLButtonElement>>;
    Icon: import("react").ForwardRefExoticComponent<TabsIconProps & import("react").RefAttributes<HTMLSpanElement>>;
    Count: import("react").ForwardRefExoticComponent<TabsCountProps & import("react").RefAttributes<HTMLSpanElement>>;
    Panel: import("react").ForwardRefExoticComponent<TabsPanelProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Tabs.d.ts.map