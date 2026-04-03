import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface SkeletonProps extends ComponentPropsWithoutRef<"div"> {
  circle?: boolean;
  className?: string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({ circle, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-skeleton", circle && "ds-skeleton--circle", className)}
        {...rest}
      />
    );
  },
);
