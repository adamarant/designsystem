import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type IconBtnVariant = "default" | "ghost" | "outline";
type IconBtnSize = "xs" | "sm" | "md" | "lg";

export interface IconBtnProps extends ComponentPropsWithoutRef<"button"> {
  variant?: IconBtnVariant;
  size?: IconBtnSize;
  className?: string;
}

const variantMap: Record<IconBtnVariant, string> = { default: "", ghost: "ds-icon-btn--ghost", outline: "ds-icon-btn--outline" };
const sizeMap: Record<IconBtnSize, string> = { xs: "ds-icon-btn--xs", sm: "ds-icon-btn--sm", md: "", lg: "ds-icon-btn--lg" };

export const IconBtn = forwardRef<HTMLButtonElement, IconBtnProps>(
  function IconBtn({ variant = "default", size = "md", className, ...rest }, ref) {
    return (
      <button ref={ref} className={cn("ds-icon-btn", variantMap[variant], sizeMap[size], className)} {...rest} />
    );
  },
);
