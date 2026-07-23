import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type DividerVariant = "default" | "subtle" | "strong";
type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends ComponentPropsWithoutRef<"hr"> {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
  className?: string;
}

const variantMap: Record<DividerVariant, string> = {
  default: "",
  subtle: "ds-divider--subtle",
  /* No CSS behind it: divider.css ships --subtle/--spacious/--vertical/--label,
     never --strong. Emitted a phantom until DS 0.30; now a no-op rather than a
     lie. Needs a DS decision before it can mean anything. */
  strong: "",
};

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  function Divider({ variant = "default", orientation = "horizontal", className, ...rest }, ref) {
    return (
      <hr
        ref={ref}
        className={cn(
          "ds-divider",
          variantMap[variant],
          orientation === "vertical" && "ds-divider--vertical",
          className,
        )}
        {...rest}
      />
    );
  },
);
