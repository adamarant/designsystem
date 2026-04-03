import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type StackSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface StackProps extends ComponentPropsWithoutRef<"div"> {
  /** Render as a different HTML element. Default: "div" */
  as?: ElementType;
  /**
   * Vertical spacing between children.
   * Maps to ds-stack variants:
   * - sm  = 0.5rem (space-2)
   * - md  = 1rem   (space-4, default ds-stack)
   * - lg  = 2rem   (space-8)
   * - xl  = 3rem   (space-12)
   * - 2xl = 4rem   (space-16)
   * - 3xl = 6rem   (space-24)
   *
   * Default: "md"
   */
  gap?: StackSize;
  /** Additional className */
  className?: string;
}

const sizeMap: Record<StackSize, string> = {
  sm: "ds-stack ds-stack--sm",
  md: "ds-stack",
  lg: "ds-stack ds-stack--lg",
  xl: "ds-stack ds-stack--xl",
  "2xl": "ds-stack ds-stack--2xl",
  "3xl": "ds-stack ds-stack--3xl",
};

export const Stack = forwardRef<HTMLElement, StackProps>(function Stack(
  { as: Tag = "div", gap = "md", className, ...rest },
  ref,
) {
  return (
    <Tag ref={ref} className={cn(sizeMap[gap], className)} {...rest} />
  );
});
