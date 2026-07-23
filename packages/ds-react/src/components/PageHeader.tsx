import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

export interface PageHeaderProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface PageHeaderLeadProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface PageHeaderTitleProps
  extends ComponentPropsWithoutRef<"h1"> {
  className?: string;
}

export interface PageHeaderDescriptionProps
  extends ComponentPropsWithoutRef<"p"> {
  className?: string;
}

export interface PageHeaderActionsProps
  extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export interface PageHeaderBackProps
  extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

export const PageHeaderLead = forwardRef<HTMLDivElement, PageHeaderLeadProps>(
  function PageHeaderLead({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ds-page-header__lead", className)}
        {...rest}
      />
    );
  },
);

export const PageHeaderTitle = forwardRef<
  HTMLHeadingElement,
  PageHeaderTitleProps
>(function PageHeaderTitle({ className, ...rest }, ref) {
  return (
    <h1
      ref={ref}
      className={cn("ds-page-header__title", "ds-admin-title", className)}
      {...rest}
    />
  );
});

export const PageHeaderDescription = forwardRef<
  HTMLParagraphElement,
  PageHeaderDescriptionProps
>(function PageHeaderDescription({ className, ...rest }, ref) {
  return (
    <p
      ref={ref}
      className={cn("ds-page-header__description", className)}
      {...rest}
    />
  );
});

export const PageHeaderActions = forwardRef<
  HTMLDivElement,
  PageHeaderActionsProps
>(function PageHeaderActions({ className, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={cn("ds-page-header__actions", className)}
      {...rest}
    />
  );
});

export const PageHeaderBack = forwardRef<
  HTMLButtonElement,
  PageHeaderBackProps
>(function PageHeaderBack({ className, ...rest }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Back"
      className={cn("ds-page-header__back", className)}
      {...rest}
    />
  );
});

/* ================================================================== */
/*  PageHeader (root + dot notation)                                   */
/* ================================================================== */

const PageHeaderRoot = forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn("ds-page-header", className)} {...rest} />
    );
  },
);

export const PageHeader = Object.assign(PageHeaderRoot, {
  Lead: PageHeaderLead,
  Title: PageHeaderTitle,
  Description: PageHeaderDescription,
  Actions: PageHeaderActions,
  Back: PageHeaderBack,
});
