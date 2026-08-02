import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";

/* The outcome of a flow, after an action — not .ds-empty-state, which is a
   container with nothing in it. See result.css for the rule and the test.

   Two ways in, as of 2 Aug 2026: the composed props below (the shorthand
   for the canonical shape) or the compound parts, still exported, for what
   the shorthand cannot express. A bare shell is what makes consumers
   hand-roll, and hand-rolling is how cortex ended up rendering these
   classes for an empty state. */

type ResultVariant = "success" | "error" | "warning" | "info";

export interface ResultProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Valence of the outcome. Omit for a neutral result — a 404, say. */
  variant?: ResultVariant;
  /** Composed shorthand: the glyph. */
  icon?: ReactNode;
  /** Composed shorthand: the headline. */
  title?: ReactNode;
  /** Composed shorthand: the explanation. */
  description?: ReactNode;
  /** Composed shorthand: what to do next — continue, retry, go back. */
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export interface ResultIconProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface ResultTitleProps extends ComponentPropsWithoutRef<"h3"> { className?: string; }
export interface ResultDescriptionProps extends ComponentPropsWithoutRef<"p"> { className?: string; }
export interface ResultActionsProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const variantMap: Record<ResultVariant, string> = { success: "ds-result--success", error: "ds-result--error", warning: "ds-result--warning", info: "ds-result--info" };

const Icon = forwardRef<HTMLDivElement, ResultIconProps>(function I({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-result__icon", className)} {...r} />; });
const Title = forwardRef<HTMLHeadingElement, ResultTitleProps>(function T({ className, ...r }, ref) { return <h3 ref={ref} className={cn("ds-result__title", className)} {...r} />; });
const Description = forwardRef<HTMLParagraphElement, ResultDescriptionProps>(function D({ className, ...r }, ref) { return <p ref={ref} className={cn("ds-result__description", className)} {...r} />; });
const Actions = forwardRef<HTMLDivElement, ResultActionsProps>(function A({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-result__actions", className)} {...r} />; });

const Root = forwardRef<HTMLDivElement, ResultProps>(function Result(
  { variant, icon, title, description, actions, children, className, role, ...rest },
  ref,
) {
  /* A result is announced: the user has just acted, and the outcome has to
     reach a screen reader. An error interrupts, everything else is polite.
     Overridable, because a result that IS the page, under its own <h1>, is
     already announced by the navigation. (.ds-empty-state does the
     opposite: it must never be a live region.)

     `variant` has no default on purpose. It used to default to "success",
     which made the neutral result unreachable through this wrapper even
     though the CSS has always supported it — a 404 came out green. */
  const announced = role ?? (variant === "error" ? "alert" : "status");

  return (
    <div
      ref={ref}
      role={announced}
      className={cn("ds-result", variant && variantMap[variant], className)}
      {...rest}
    >
      {icon ? <Icon>{icon}</Icon> : null}
      {title ? <Title>{title}</Title> : null}
      {description ? <Description>{description}</Description> : null}
      {children}
      {actions ? <Actions>{actions}</Actions> : null}
    </div>
  );
});

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Icon as ResultIcon, Title as ResultTitle, Description as ResultDescription, Actions as ResultActions };

export const Result = Object.assign(Root, { Icon, Title, Description, Actions });
