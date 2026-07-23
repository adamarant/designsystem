import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type AvatarSize = Size | "xl";
type StatusVariant = "online" | "offline" | "busy";

export interface AvatarProps extends ComponentPropsWithoutRef<"span"> {
  /** Size tier. Default: "md" (40px) */
  size?: AvatarSize;
  /** Square shape instead of circle. Default: false */
  square?: boolean;
  /** Border around avatar (useful in groups). Default: false */
  bordered?: boolean;
  /** Additional className */
  className?: string;
}

export interface AvatarStatusProps extends ComponentPropsWithoutRef<"span"> {
  /** Status indicator color. */
  variant: StatusVariant;
  /** Additional className */
  className?: string;
}

export interface AvatarGroupProps extends ComponentPropsWithoutRef<"div"> {
  /** Smaller overlap for small avatars. Default: false */
  sm?: boolean;
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const sizeMap: Record<AvatarSize, string> = {
  xs: "ds-avatar--xs",
  sm: "ds-avatar--sm",
  md: "",
  lg: "ds-avatar--lg",
  xl: "ds-avatar--xl",
};

const statusMap: Record<StatusVariant, string> = {
  online: "ds-avatar__status--online",
  offline: "ds-avatar__status--offline",
  busy: "ds-avatar__status--busy",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const AvatarStatus = forwardRef<HTMLSpanElement, AvatarStatusProps>(
  function AvatarStatus({ variant, className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cn("ds-avatar__status", statusMap[variant], className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Avatar (root + dot notation)                                       */
/* ================================================================== */

const AvatarRoot = forwardRef<HTMLSpanElement, AvatarProps>(
  function Avatar(
    { size = "md", square, bordered, className, ...rest },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={cn(
          "ds-avatar",
          sizeMap[size],
          square && "ds-avatar--square",
          bordered && "ds-avatar--bordered",
          className,
        )}
        {...rest}
      />
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { AvatarStatus };

export const Avatar = Object.assign(AvatarRoot, {
  Status: AvatarStatus,
});

/* ================================================================== */
/*  AvatarGroup                                                        */
/* ================================================================== */

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup({ sm, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "ds-avatar-group",
          sm && "ds-avatar-group--sm",
          className,
        )}
        {...rest}
      />
    );
  },
);
