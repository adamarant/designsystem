import { type ComponentPropsWithoutRef } from "react";
export interface DescriptionListProps extends ComponentPropsWithoutRef<"dl"> {
    className?: string;
}
export interface DescriptionListTermProps extends ComponentPropsWithoutRef<"dt"> {
    className?: string;
}
export interface DescriptionListDetailProps extends ComponentPropsWithoutRef<"dd"> {
    className?: string;
}
export declare const DescriptionList: import("react").ForwardRefExoticComponent<DescriptionListProps & import("react").RefAttributes<HTMLDListElement>> & {
    Term: import("react").ForwardRefExoticComponent<DescriptionListTermProps & import("react").RefAttributes<HTMLElement>>;
    Detail: import("react").ForwardRefExoticComponent<DescriptionListDetailProps & import("react").RefAttributes<HTMLElement>>;
};
//# sourceMappingURL=DescriptionList.d.ts.map