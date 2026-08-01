import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";
import { IconCheck, IconCopy } from "../icons";

export interface CopyButtonProps extends ComponentPropsWithoutRef<"button"> { className?: string; }

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  function CopyButton({ className, children, ...rest }, ref) {
    return (
      <button ref={ref} className={cn("ds-copy-btn", className)} {...rest}>
        {children ?? (
          <>
            <IconCopy className="ds-copy-btn__icon" />
            <IconCheck className="ds-copy-btn__icon-check" />
          </>
        )}
      </button>
    );
  },
);
