"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sizeMap = {
    default: "",
    md: "ds-modal--md",
    lg: "ds-modal--lg",
};
/* ================================================================== */
/*  Sub-components                                                     */
/*  Content is the Base UI Popup: focus is trapped on the panel, and a */
/*  press on the surrounding .ds-modal overlay counts as outside-press */
/*  and closes the dialog — same semantics as the old backdrop click.  */
/* ================================================================== */
export const ModalContent = forwardRef(function ModalContent({ className, ...rest }, ref) {
    return (_jsx(Dialog.Popup, { ref: ref, className: cn("ds-modal__content", className), ...rest }));
});
export const ModalHeader = forwardRef(function ModalHeader({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__header", className), ...rest }));
});
export const ModalClose = forwardRef(function ModalClose({ className, ...rest }, ref) {
    return (_jsx(Dialog.Close, { ref: ref, "aria-label": "Close", className: cn("ds-modal__close", className), ...rest }));
});
export const ModalBody = forwardRef(function ModalBody({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__body", className), ...rest }));
});
export const ModalFooter = forwardRef(function ModalFooter({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__footer", className), ...rest }));
});
/* ================================================================== */
/*  Modal (root + behavior + dot notation)                             */
/*  Skeleton: Base UI Dialog — focus trap, scroll lock, Escape,        */
/*  outside-press, focus restore. Skin: ds-modal classes, unchanged.   */
/* ================================================================== */
const ModalRoot = forwardRef(function Modal({ open, onClose, size = "default", fullscreenMobile, className, children, ...rest }, ref) {
    return (_jsx(Dialog.Root, { open: open, onOpenChange: (nextOpen) => {
            if (!nextOpen)
                onClose();
        }, children: _jsx(Dialog.Portal, { keepMounted: true, children: _jsx(Dialog.Backdrop, { ref: ref, className: cn("ds-modal", open && "ds-modal--open", sizeMap[size], fullscreenMobile && "ds-modal--fullscreen-mobile", className), ...rest, children: children }) }) }));
});
export const Modal = Object.assign(ModalRoot, {
    Content: ModalContent,
    Header: ModalHeader,
    Close: ModalClose,
    Body: ModalBody,
    Footer: ModalFooter,
});
//# sourceMappingURL=Modal.js.map