import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface CenterProps extends ComponentPropsWithoutRef<"div"> {
  /** Render as a different HTML element. Default: "div" */
  as?: ElementType;
  /** Additional className */
  className?: string;
}

export const Center = forwardRef<HTMLElement, CenterProps>(function Center(
  { as: Tag = "div", className, ...rest },
  ref,
) {
  return (
    <Tag ref={ref} className={cn("ds-center", className)} {...rest} />
  );
});
