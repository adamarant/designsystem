import { type ComponentPropsWithoutRef } from "react";
export interface BottomSheetProps extends ComponentPropsWithoutRef<"div"> {
    open: boolean;
    onClose: () => void;
    className?: string;
}
export interface BottomSheetContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface BottomSheetHeaderProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface BottomSheetBodyProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const Content: import("react").ForwardRefExoticComponent<BottomSheetContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Header: import("react").ForwardRefExoticComponent<BottomSheetHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
declare const Body: import("react").ForwardRefExoticComponent<BottomSheetBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export { Content as BottomSheetContent, Header as BottomSheetHeader, Body as BottomSheetBody };
export declare const BottomSheet: import("react").ForwardRefExoticComponent<BottomSheetProps & import("react").RefAttributes<HTMLDivElement>> & {
    Content: import("react").ForwardRefExoticComponent<BottomSheetContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<BottomSheetHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<BottomSheetBodyProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=BottomSheet.d.ts.map