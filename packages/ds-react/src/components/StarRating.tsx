import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface StarRatingProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

export const StarRating = forwardRef<HTMLDivElement, StarRatingProps>(
  function StarRating({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-LStar-LRating", className)} {...rest} />;
  },
);
