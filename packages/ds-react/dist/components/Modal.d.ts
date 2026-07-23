import { type ComponentPropsWithoutRef } from "react";
/** Width variant (not a control-size tier): default 28rem, md/lg wider. */
type ModalSize = "default" | "md" | "lg";
export interface ModalProps extends ComponentPropsWithoutRef<"div"> {
    /** Controls visibility. */
    open: boolean;
    /** Called when user requests close (escape, backdrop click, Modal.Close). */
    onClose: () => void;
    /** Width variant. Default: "default" (28rem) */
    size?: ModalSize;
    /** Fullscreen on mobile (<1024px). Default: false */
    fullscreenMobile?: boolean;
    /** Additional className */
    className?: string;
}
export interface ModalContentProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface ModalCloseProps extends ComponentPropsWithoutRef<"button"> {
    className?: string;
}
export interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export declare const ModalContent: import("react").ForwardRefExoticComponent<ModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalHeader: import("react").ForwardRefExoticComponent<ModalHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalClose: import("react").ForwardRefExoticComponent<ModalCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ModalBody: import("react").ForwardRefExoticComponent<ModalBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalFooter: import("react").ForwardRefExoticComponent<ModalFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>> & {
    Content: import("react").ForwardRefExoticComponent<ModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<ModalHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Close: import("react").ForwardRefExoticComponent<ModalCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
    Body: import("react").ForwardRefExoticComponent<ModalBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<ModalFooterProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Modal.d.ts.map