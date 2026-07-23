import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface TruncatedTextProps extends ComponentPropsWithoutRef<"div"> {
  lines?: number;
  className?: string;
}

export const TruncatedText = forwardRef<HTMLDivElement, TruncatedTextProps>(
  function TruncatedText({ lines, className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-truncate", /* truncated-text.css has --middle, no line-clamp: `lines` is inert */ lines && "", className)} {...rest} />;
  },
);
