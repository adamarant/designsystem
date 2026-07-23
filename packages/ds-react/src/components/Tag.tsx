import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";
import type { Size } from "../types";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type TagVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "purple"
  | "outline";

type TagSize = Exclude<Size, "xs">;

export interface TagProps extends ComponentPropsWithoutRef<"span"> {
  /** Semantic color variant. Default: "default" (neutral muted) */
  variant?: TagVariant;
  /** Size. Default: "md" */
  size?: TagSize;
  /** Removable — tighter right padding for close button. Default: false */
  removable?: boolean;
  /** Additional className */
  className?: string;
}

export interface TagRemoveProps extends ComponentPropsWithoutRef<"button"> {
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const variantMap: Record<TagVariant, string> = {
  default: "",
  primary: "ds-tag--primary",
  success: "ds-tag--success",
  warning: "ds-tag--warning",
  error: "ds-tag--error",
  info: "ds-tag--info",
  purple: "ds-tag--purple",
  outline: "ds-tag--outline",
};

const sizeMap: Record<TagSize, string> = {
  sm: "ds-tag--sm",
  md: "",
  lg: "ds-tag--lg",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const TagRemove = forwardRef<HTMLButtonElement, TagRemoveProps>(
  function TagRemove({ className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        aria-label="Remove"
        className={cn("ds-tag__remove", className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Tag (root + dot notation)                                          */
/* ================================================================== */

const TagRoot = forwardRef<HTMLSpanElement, TagProps>(
  function Tag(
    { variant = "default", size = "md", removable, className, ...rest },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={cn(
          "ds-tag",
          variantMap[variant],
          sizeMap[size],
          removable && "ds-tag--removable",
          className,
        )}
        {...rest}
      />
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { TagRemove };

export const Tag = Object.assign(TagRoot, {
  Remove: TagRemove,
});
