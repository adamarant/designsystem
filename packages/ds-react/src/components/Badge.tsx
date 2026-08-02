import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { type Size } from "../types";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "purple"
  | "outline"
  | "inverted";

type BadgeOwnProps = {
  /** Semantic color variant. Default: "default" (neutral muted) */
  variant?: BadgeVariant;
  /** Show colored dot indicator before text. Default: false */
  dot?: boolean;
  /** Uppercase small caps style (for "NEW", "BETA", etc.). Default: false */
  upper?: boolean;
  /** Size tier. Default: "md" (no class emitted). */
  size?: Exclude<Size, "xs">;
  /**
   * Selected state — the filter/toggle "this one is on". Distinct from
   * variant="inverted", which is a look: a brand may render its selected
   * badge inverted, but the two are not the same thing.
   */
  active?: boolean;
  /** Leaves room for <Badge.Remove> on the trailing edge. */
  removable?: boolean;
  /** Additional className */
  className?: string;
};

/**
 * Clickable form. Renders a <button type="button"> and takes the control
 * contract: 24px WCAG target, hover, focus ring, disabled. Set it (or pass
 * onClick, which implies it) for filter and toggle badges.
 */
export type BadgeProps =
  | (BadgeOwnProps &
      Omit<ComponentPropsWithoutRef<"span">, keyof BadgeOwnProps> & {
        interactive?: false;
      })
  | (BadgeOwnProps &
      Omit<ComponentPropsWithoutRef<"button">, keyof BadgeOwnProps> & {
        interactive: true;
      });

export interface BadgeRemoveProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Maps                                                               */
/* ------------------------------------------------------------------ */

const variantMap: Record<BadgeVariant, string> = {
  default: "",
  primary: "ds-badge--primary",
  success: "ds-badge--success",
  warning: "ds-badge--warning",
  error: "ds-badge--error",
  info: "ds-badge--info",
  purple: "ds-badge--purple",
  outline: "ds-badge--outline",
  inverted: "ds-badge--inverted",
};

const sizeMap: Record<Exclude<Size, "xs">, string> = {
  sm: "ds-badge--sm",
  md: "",
  lg: "ds-badge--lg",
};

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

/* One element, two forms. `interactive` (or an onClick, which implies it)
   renders a real <button>: a badge that can be clicked is a control, and
   the control contract — target size, focus ring, disabled — belongs to
   the component, not to the page that happens to use it. */
const BadgeRoot = forwardRef<HTMLSpanElement | HTMLButtonElement, BadgeProps>(
  function Badge(props, ref) {
    const {
      variant = "default",
      size = "md",
      dot,
      upper,
      active,
      removable,
      interactive,
      className,
      ...rest
    } = props as BadgeOwnProps & {
      interactive?: boolean;
      [key: string]: unknown;
    };

    const isInteractive = interactive ?? "onClick" in props;

    const classes = cn(
      "ds-badge",
      variantMap[variant],
      sizeMap[size],
      dot && "ds-badge--dot",
      upper && "ds-badge--upper",
      active && "ds-badge--active",
      removable && "ds-badge--removable",
      isInteractive && "ds-badge--interactive",
      className,
    );

    if (isInteractive) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={classes}
          {...(rest as ComponentPropsWithoutRef<"button">)}
        />
      );
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={classes}
        {...(rest as ComponentPropsWithoutRef<"span">)}
      />
    );
  },
);

/* The remove control. Its own button, its own label: aria-label is required
   by the component's ARIA contract ("Remove [name]"). */
const BadgeRemove = forwardRef<HTMLButtonElement, BadgeRemoveProps>(
  function BadgeRemove({ className, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={cn("ds-badge__remove", className)}
        {...rest}
      >
        {children ?? "×"}
      </button>
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { BadgeRemove };

export const Badge = Object.assign(BadgeRoot, { Remove: BadgeRemove });
