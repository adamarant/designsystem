import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  forwardRef,
  useEffect,
  useId,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type ModalSize = "default" | "md" | "lg";

export interface ModalProps extends ComponentPropsWithoutRef<"div"> {
  /** Controls visibility. */
  open: boolean;
  /** Called when user requests close (escape, backdrop click). */
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
/* ================================================================== */

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  function ModalContent({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-modal__content", className)}
        {...rest}
      />
    );
  },
);

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  function ModalHeader({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-modal__header", className)} {...rest} />
    );
  },
);

const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  function ModalClose({ className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        aria-label="Close"
        className={cn("ds-modal__close", className)}
        {...rest}
      />
    );
  },
);

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  function ModalBody({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-modal__body", className)} {...rest} />
    );
  },
);

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  function ModalFooter({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-modal__footer", className)} {...rest} />
    );
  },
);

/* ================================================================== */
/*  Modal (root + behavior + dot notation)                             */
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
    const labelId = useId();

    /* Escape key */
    useEffect(() => {
      if (!open) return;
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);

    /* Scroll lock */
    useEffect(() => {
      if (!open) return;
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }, [open]);

    /* Backdrop click */
    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    };

    const modal = (
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelId}
        onClick={handleBackdropClick}
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
      </div>
    );

    if (typeof document === "undefined") return null;
    return createPortal(modal, document.body);
  },
);

export const Modal = Object.assign(ModalRoot, {
  Content: ModalContent,
  Header: ModalHeader,
  Close: ModalClose,
  Body: ModalBody,
  Footer: ModalFooter,
});
