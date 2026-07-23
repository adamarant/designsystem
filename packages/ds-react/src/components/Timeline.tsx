import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface TimelineProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface TimelineItemProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface TimelineDotProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface TimelineContentProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Item = forwardRef<HTMLDivElement, TimelineItemProps>(
  function Item({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-timeline__item", className)} {...rest} />; },
);
const Dot = forwardRef<HTMLDivElement, TimelineDotProps>(
  function Dot({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-timeline__dot", className)} {...rest} />; },
);
const Content = forwardRef<HTMLDivElement, TimelineContentProps>(
  function Content({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-timeline__content", className)} {...rest} />; },
);
const Root = forwardRef<HTMLDivElement, TimelineProps>(
  function Timeline({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-timeline", className)} {...rest} />; },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Item as TimelineItem, Dot as TimelineDot, Content as TimelineContent };

export const Timeline = Object.assign(Root, { Item, Dot, Content });
