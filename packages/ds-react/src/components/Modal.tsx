"use client";

import {
  type ComponentPropsWithoutRef,
  forwardRef,
} from "react";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

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

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sizeMap: Record<ModalSize, string> = {
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

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  function ModalContent({ className, ...rest }, ref) {
    return (
      <Dialog.Popup
        ref={ref}
        className={cn("ds-modal__content", className)}
        {...rest}
      />
    );
  },
);

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  function ModalHeader({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-modal__header", className)} {...rest} />
    );
  },
);

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  function ModalClose({ className, ...rest }, ref) {
    return (
      <Dialog.Close
        ref={ref}
        aria-label="Close"
        className={cn("ds-modal__close", className)}
        {...rest}
      />
    );
  },
);

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  function ModalBody({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-modal__body", className)} {...rest} />
    );
  },
);

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  function ModalFooter({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-modal__footer", className)} {...rest} />
    );
  },
);

/* ================================================================== */
/*  Modal (root + behavior + dot notation)                             */
/*  Skeleton: Base UI Dialog — focus trap, scroll lock, Escape,        */
/*  outside-press, focus restore. Skin: ds-modal classes, unchanged.   */
/* ================================================================== */

const ModalRoot = forwardRef<HTMLDivElement, ModalProps>(
  function Modal(
    {
      open,
      onClose,
      size = "default",
      fullscreenMobile,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <Dialog.Root
        open={open}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) onClose();
        }}
      >
        <Dialog.Portal keepMounted>
          <Dialog.Backdrop
            ref={ref}
            className={cn(
              "ds-modal",
              open && "ds-modal--open",
              sizeMap[size],
              fullscreenMobile && "ds-modal--fullscreen-mobile",
              className,
            )}
            {...rest}
          >
            {children}
          </Dialog.Backdrop>
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
);

export const Modal = Object.assign(ModalRoot, {
  Content: ModalContent,
  Header: ModalHeader,
  Close: ModalClose,
  Body: ModalBody,
  Footer: ModalFooter,
});
