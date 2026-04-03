import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useId, } from "react";
import { createPortal } from "react-dom";
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
/* ================================================================== */
const ModalContent = forwardRef(function ModalContent({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__content", className), ...rest }));
});
const ModalHeader = forwardRef(function ModalHeader({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__header", className), ...rest }));
});
const ModalClose = forwardRef(function ModalClose({ className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, "aria-label": "Close", className: cn("ds-modal__close", className), ...rest }));
});
const ModalBody = forwardRef(function ModalBody({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__body", className), ...rest }));
});
const ModalFooter = forwardRef(function ModalFooter({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-modal__footer", className), ...rest }));
});
/* ================================================================== */
/*  Modal (root + behavior + dot notation)                             */
/* ================================================================== */
const ModalRoot = forwardRef(function Modal({ open, onClose, size = "default", fullscreenMobile, className, children, ...rest }, ref) {
    const labelId = useId();
    /* Escape key */
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);
    /* Scroll lock */
    useEffect(() => {
        if (!open)
            return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);
    /* Backdrop click */
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget)
            onClose();
    };
    const modal = (_jsx("div", { ref: ref, role: "dialog", "aria-modal": "true", "aria-labelledby": labelId, onClick: handleBackdropClick, className: cn("ds-modal", open && "ds-modal--open", sizeMap[size], fullscreenMobile && "ds-modal--fullscreen-mobile", className), ...rest, children: children }));
    if (typeof document === "undefined")
        return null;
    return createPortal(modal, document.body);
});
export const Modal = Object.assign(ModalRoot, {
    Content: ModalContent,
    Header: ModalHeader,
    Close: ModalClose,
    Body: ModalBody,
    Footer: ModalFooter,
});
//# sourceMappingURL=Modal.js.map