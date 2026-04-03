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
  strong: "ds-divider--strong",
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
