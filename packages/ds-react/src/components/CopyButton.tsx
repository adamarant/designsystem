import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface CopyButtonProps extends ComponentPropsWithoutRef<"button"> { className?: string; }

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  function CopyButton({ className, ...rest }, ref) {
    return <button ref={ref} className={cn("ds-copy-button", className)} {...rest} />;
  },
);
