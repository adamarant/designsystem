import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface EmptyStateProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface EmptyStateIconProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface EmptyStateTitleProps extends ComponentPropsWithoutRef<"h3"> { className?: string; }
export interface EmptyStateDescriptionProps extends ComponentPropsWithoutRef<"p"> { className?: string; }
export interface EmptyStateActionsProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Icon = forwardRef<HTMLDivElement, EmptyStateIconProps>(
  function Icon({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-empty-state__icon", className)} {...rest} />;
  },
);
const Title = forwardRef<HTMLHeadingElement, EmptyStateTitleProps>(
  function Title({ className, ...rest }, ref) {
    return <h3 ref={ref} className={cn("ds-empty-state__title", className)} {...rest} />;
  },
);
const Description = forwardRef<HTMLParagraphElement, EmptyStateDescriptionProps>(
  function Description({ className, ...rest }, ref) {
    return <p ref={ref} className={cn("ds-empty-state__description", className)} {...rest} />;
  },
);
const Actions = forwardRef<HTMLDivElement, EmptyStateActionsProps>(
  function Actions({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-empty-state__actions", className)} {...rest} />;
  },
);

const EmptyStateRoot = forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-empty-state", className)} {...rest} />;
  },
);

export const EmptyState = Object.assign(EmptyStateRoot, {
  Icon, Title, Description, Actions,
});
