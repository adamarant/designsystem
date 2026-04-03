import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type ResultVariant = "success" | "error" | "warning" | "info";
export interface ResultProps extends ComponentPropsWithoutRef<"div"> {
  variant?: ResultVariant;
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

const Root = forwardRef<HTMLDivElement, ResultProps>(
  function Result({ variant = "success", className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-result", variantMap[variant], className)} {...rest} />;
  },
);
export const Result = Object.assign(Root, { Icon, Title, Description, Actions });
