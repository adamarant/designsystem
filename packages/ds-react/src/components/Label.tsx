import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type LabelColor = "primary" | "secondary";
type LabelSpacing = "1" | "1.5" | "2" | "3";

export interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  /** Text color. Default: "secondary" */
  color?: LabelColor;
  /** Bottom margin. Default: "2" (ds-mb-2) */
  spacing?: LabelSpacing;
  /** Additional className */
  className?: string;
}

const colorMap: Record<LabelColor, string> = {
  primary: "ds-text-primary",
  secondary: "ds-text-secondary",
};

const spacingMap: Record<LabelSpacing, string> = {
  "1": "ds-mb-1",
  "1.5": "ds-mb-1.5",
  "2": "ds-mb-2",
  "3": "ds-mb-3",
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { color = "secondary", spacing = "2", className, ...rest },
  ref,
) {
  return (
    <label
      ref={ref}
      className={cn(
        "ds-block ds-text-sm ds-font-medium",
        colorMap[color],
        spacingMap[spacing],
        className,
      )}
      {...rest}
    />
  );
});
