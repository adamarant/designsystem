import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

/* @deprecated 2 Aug 2026 — use <Card><Stat …/></Card>.

   .ds-stat-card re-declared the card's box, so it can never inherit a card
   modifier or the container query, and its value carries two typography
   faults <Stat> fixed: the display face on a data screen, and a hardcoded
   size with no lever. Kept working, unchanged, until the next major.
   Migration map in components/stat-card.css. */

export interface StatCardProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface StatCardLabelProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface StatCardValueProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface StatCardDetailProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface StatCardIconProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const StatCardLabel = forwardRef<HTMLDivElement, StatCardLabelProps>(
  function StatCardLabel({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-stat-card__label", className)} {...rest} />;
  },
);

const StatCardValue = forwardRef<HTMLDivElement, StatCardValueProps>(
  function StatCardValue({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-stat-card__value", className)} {...rest} />;
  },
);

const StatCardDetail = forwardRef<HTMLDivElement, StatCardDetailProps>(
  function StatCardDetail({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-stat-card__detail", className)} {...rest} />;
  },
);

const StatCardIcon = forwardRef<HTMLDivElement, StatCardIconProps>(
  function StatCardIcon({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-stat-card__icon", className)} {...rest} />;
  },
);

const StatCardRoot = forwardRef<HTMLDivElement, StatCardProps>(
  function StatCard({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ds-stat-card", className)} {...rest} />;
  },
);

/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { StatCardLabel, StatCardValue, StatCardDetail, StatCardIcon };

export const StatCard = Object.assign(StatCardRoot, {
  Label: StatCardLabel,
  Value: StatCardValue,
  Detail: StatCardDetail,
  Icon: StatCardIcon,
});
