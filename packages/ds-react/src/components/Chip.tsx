import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { type Size } from "../types";
import { cn } from "../utils/cn";

export interface ChipProps extends ComponentPropsWithoutRef<"span"> {
  /** Size tier. Default: "md" (no class emitted). */
  size?: Exclude<Size, "xs">;
  className?: string;
}

const sizeMap: Record<Exclude<Size, "xs">, string> = {
  sm: "ds-chip--sm",
  md: "",
  lg: "ds-chip--lg",
};

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  function Chip({ size = "md", className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cn("ds-chip", sizeMap[size], className)}
        {...rest}
      />
    );
  },
);
