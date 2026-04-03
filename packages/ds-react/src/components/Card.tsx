import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type CardVariant = "default" | "interactive" | "elevated" | "hover";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  /** Visual variant. Default: "default" */
  variant?: CardVariant;
  /** Reduced padding. Default: false */
  compact?: boolean;
  /** Remove internal dividers (header/footer borders). Default: false */
  flush?: boolean;
  /** Additional className */
  className?: string;
}

export interface CardHeaderProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface CardTitleProps extends ComponentPropsWithoutRef<"h3"> {
  className?: string;
}

export interface CardDescriptionProps extends ComponentPropsWithoutRef<"p"> {
  className?: string;
}

export interface CardBodyProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface CardFooterProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

type MediaAspect = "default" | "square" | "video" | "auto";

export interface CardMediaProps extends ComponentPropsWithoutRef<"img"> {
  /** Aspect ratio. Default: "default" (16/10) */
  aspect?: MediaAspect;
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const variantMap: Record<CardVariant, string> = {
  default: "",
  interactive: "ds-card--interactive",
  elevated: "ds-card--elevated",
  hover: "ds-card--hover",
};

const aspectMap: Record<MediaAspect, string> = {
  default: "",
  square: "ds-card__media--square",
  video: "ds-card__media--video",
  auto: "ds-card__media--auto",
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-card__header", className)} {...rest} />
    );
  },
);

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  function CardTitle({ className, ...rest }, ref) {
    return (
      <h3 ref={ref} className={cn("ds-card__title", className)} {...rest} />
    );
  },
);

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  function CardDescription({ className, ...rest }, ref) {
    return (
      <p
        ref={ref}
        className={cn("ds-card__description", className)}
        {...rest}
      />
    );
  },
);

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  function CardBody({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-card__body", className)} {...rest} />
    );
  },
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-card__footer", className)} {...rest} />
    );
  },
);

const CardMedia = forwardRef<HTMLImageElement, CardMediaProps>(
  function CardMedia({ aspect = "default", className, ...rest }, ref) {
    return (
      <img
        ref={ref}
        className={cn("ds-card__media", aspectMap[aspect], className)}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Card (root + dot notation)                                         */
/* ================================================================== */

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  function Card(
    { variant = "default", compact, flush, className, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "ds-card",
          variantMap[variant],
          compact && "ds-card--compact",
          flush && "ds-card--flush",
          className,
        )}
        {...rest}
      />
    );
  },
);

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
  Media: CardMedia,
});
