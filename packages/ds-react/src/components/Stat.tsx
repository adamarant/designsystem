import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react";
import { cn } from "../utils/cn";

/* A metric — label, value, detail, optional icon. A content block, not a
   box: put it inside a <Card> and it inherits every card modifier
   (hover, interactive, elevated, the container query). See stat.css for why
   the box was taken away from it.

   Composed props are the shorthand; the parts stay exported for the cases
   the shorthand cannot express. */

export interface StatProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** The metric's name — "Properties", "Revenue". */
  label?: ReactNode;
  /** The number. Renders with tabular figures, and follows the surface. */
  value?: ReactNode;
  /** The line under it — a delta, a period, a comparison. */
  detail?: ReactNode;
  /** Optional glyph in its own muted box. */
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export interface StatLabelProps extends ComponentPropsWithoutRef<"p"> { className?: string; }
export interface StatValueProps extends ComponentPropsWithoutRef<"p"> { className?: string; }
export interface StatDetailProps extends ComponentPropsWithoutRef<"p"> { className?: string; }
export interface StatIconProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Label = forwardRef<HTMLParagraphElement, StatLabelProps>(
  function StatLabel({ className, ...rest }, ref) {
    return <p ref={ref} className={cn("ds-stat__label", className)} {...rest} />;
  },
);
const Value = forwardRef<HTMLParagraphElement, StatValueProps>(
  function StatValue({ className, ...rest }, ref) {
    return <p ref={ref} className={cn("ds-stat__value", className)} {...rest} />;
  },
);
const Detail = forwardRef<HTMLParagraphElement, StatDetailProps>(
  function StatDetail({ className, ...rest }, ref) {
    return <p ref={ref} className={cn("ds-stat__detail", className)} {...rest} />;
  },
);
const Icon = forwardRef<HTMLDivElement, StatIconProps>(
  function StatIcon({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-stat__icon", className)} {...rest} />;
  },
);

const StatRoot = forwardRef<HTMLDivElement, StatProps>(function Stat(
  { label, value, detail, icon, children, className, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={cn("ds-stat", className)} {...rest}>
      {icon ? <Icon>{icon}</Icon> : null}
      {label ? <Label>{label}</Label> : null}
      {value ? <Value>{value}</Value> : null}
      {detail ? <Detail>{detail}</Detail> : null}
      {children}
    </div>
  );
});

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Label as StatLabel, Value as StatValue, Detail as StatDetail, Icon as StatIcon };

export const Stat = Object.assign(StatRoot, { Label, Value, Detail, Icon });
