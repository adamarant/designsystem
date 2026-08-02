import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";

/* The state of a container that has nothing in it — not <Result>, which is
   the outcome of a flow after an action. See empty-state.css for the rule
   and the test ("if another component renders it for you, it is an empty
   state").

   Two ways in, as of 2 Aug 2026: the composed props below or the compound
   parts, still exported. Note what is deliberately absent: no variant and
   no role. Emptiness has no valence, and it must never be announced — a
   screen reader narrating every empty table is noise. */

export interface EmptyStateProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Composed shorthand: the glyph. Always neutral — nothing to signal. */
  icon?: ReactNode;
  /** Composed shorthand: what is empty. */
  title?: ReactNode;
  /** Composed shorthand: why, or what to do about it. */
  description?: ReactNode;
  /** Composed shorthand: the way out of emptiness — "create the first one". */
  actions?: ReactNode;
  /** Sits the state inside a bordered card. */
  card?: boolean;
  /** Tighter padding and a smaller glyph, for a state inside a small box. */
  compact?: boolean;
  /** Left-aligned instead of centred. */
  left?: boolean;
  children?: ReactNode;
  className?: string;
}

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
  function EmptyState(
    { icon, title, description, actions, card, compact, left, children, className, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "ds-empty-state",
          card && "ds-empty-state--card",
          compact && "ds-empty-state--compact",
          left && "ds-empty-state--left",
          className,
        )}
        {...rest}
      >
        {icon ? <Icon>{icon}</Icon> : null}
        {title ? <Title>{title}</Title> : null}
        {description ? <Description>{description}</Description> : null}
        {children}
        {actions ? <Actions>{actions}</Actions> : null}
      </div>
    );
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Icon as EmptyStateIcon, Title as EmptyStateTitle, Description as EmptyStateDescription, Actions as EmptyStateActions };

export const EmptyState = Object.assign(EmptyStateRoot, {
  Icon, Title, Description, Actions,
});
