import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextColor =
  | "primary" | "secondary" | "tertiary"
  | "success" | "warning" | "error" | "info"
  | "interactive" | "on-inverted"
  | "always-white" | "always-black"
  | "accent-blue" | "accent-purple" | "accent-green" | "accent-orange";
type TextAlign = "left" | "center" | "right" | "balance";
type TextLeading = "tight" | "snug" | "normal" | "relaxed";
type TextTracking = "tighter" | "tight" | "normal" | "wide" | "wider";
type TextTransform = "uppercase" | "lowercase" | "capitalize";
type TextClamp = "1" | "2" | "3";

export interface TextProps extends ComponentPropsWithoutRef<"span"> {
  /** Render as a different HTML element. Default: "span" */
  as?: ElementType;
  /** Font size */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Text color */
  color?: TextColor;
  /** Text alignment */
  align?: TextAlign;
  /** Line height */
  leading?: TextLeading;
  /** Letter spacing */
  tracking?: TextTracking;
  /** Text transform */
  transform?: TextTransform;
  /** Truncate with ellipsis (single line) */
  truncate?: boolean;
  /** Multi-line clamp (1, 2, or 3 lines) */
  clamp?: TextClamp;
  /** Monospace font */
  mono?: boolean;
  /** Additional className */
  className?: string;
}

const sizeMap: Record<TextSize, string> = {
  xs: "ds-text-xs",
  sm: "ds-text-sm",
  base: "ds-text-base",
  lg: "ds-text-lg",
  xl: "ds-text-xl",
  "2xl": "ds-text-2xl",
  "3xl": "ds-text-3xl",
  "4xl": "ds-text-4xl",
  "5xl": "ds-text-5xl",
  "6xl": "ds-text-6xl",
  "7xl": "ds-text-7xl",
};

const weightMap: Record<TextWeight, string> = {
  light: "ds-font-light",
  normal: "ds-font-normal",
  medium: "ds-font-medium",
  semibold: "ds-font-semibold",
  bold: "ds-font-bold",
};

const colorMap: Record<TextColor, string> = {
  primary: "ds-text-primary",
  secondary: "ds-text-secondary",
  tertiary: "ds-text-tertiary",
  success: "ds-text-success",
  warning: "ds-text-warning",
  error: "ds-text-error",
  info: "ds-text-info",
  interactive: "ds-text-interactive",
  "on-inverted": "ds-text-on-inverted",
  "always-white": "ds-text-always-white",
  "always-black": "ds-text-always-black",
  "accent-blue": "ds-text-accent-blue",
  "accent-purple": "ds-text-accent-purple",
  "accent-green": "ds-text-accent-green",
  "accent-orange": "ds-text-accent-orange",
};

const alignMap: Record<TextAlign, string> = {
  left: "ds-text-left",
  center: "ds-text-center",
  right: "ds-text-right",
  balance: "ds-text-balance",
};

const leadingMap: Record<TextLeading, string> = {
  tight: "ds-leading-tight",
  snug: "ds-leading-snug",
  normal: "ds-leading-normal",
  relaxed: "ds-leading-relaxed",
};

const trackingMap: Record<TextTracking, string> = {
  tighter: "ds-tracking-tighter",
  tight: "ds-tracking-tight",
  normal: "ds-tracking-normal",
  wide: "ds-tracking-wide",
  wider: "ds-tracking-wider",
};

const transformMap: Record<TextTransform, string> = {
  uppercase: "ds-uppercase",
  lowercase: "ds-lowercase",
  capitalize: "ds-capitalize",
};

const clampMap: Record<TextClamp, string> = {
  "1": "ds-line-clamp-1",
  "2": "ds-line-clamp-2",
  "3": "ds-line-clamp-3",
};

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    as: Tag = "span",
    size,
    weight,
    color,
    align,
    leading,
    tracking,
    transform,
    truncate,
    clamp,
    mono,
    className,
    ...rest
  },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        size && sizeMap[size],
        weight && weightMap[weight],
        color && colorMap[color],
        align && alignMap[align],
        leading && leadingMap[leading],
        tracking && trackingMap[tracking],
        transform && transformMap[transform],
        truncate && "ds-truncate",
        clamp && clampMap[clamp],
        mono && "ds-font-mono",
        className,
      )}
      {...rest}
    />
  );
});
