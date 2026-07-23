import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface HeroProps extends ComponentPropsWithoutRef<"section"> { className?: string; }
export interface HeroTitleProps extends ComponentPropsWithoutRef<"h1"> { className?: string; }
export interface HeroDescriptionProps extends ComponentPropsWithoutRef<"p"> { className?: string; }
export interface HeroActionsProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Title = forwardRef<HTMLHeadingElement, HeroTitleProps>(function T({ className, ...r }, ref) { return <h1 ref={ref} className={cn("ds-hero__title", className)} {...r} />; });
const Description = forwardRef<HTMLParagraphElement, HeroDescriptionProps>(function D({ className, ...r }, ref) { return <p ref={ref} className={cn("ds-hero__description", className)} {...r} />; });
const Actions = forwardRef<HTMLDivElement, HeroActionsProps>(function A({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-hero__actions", className)} {...r} />; });

const Root = forwardRef<HTMLElement, HeroProps>(
  function Hero({ className, ...rest }, ref) { return <section ref={ref} className={cn("ds-hero", className)} {...rest} />; },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Title as HeroTitle, Description as HeroDescription, Actions as HeroActions };

export const Hero = Object.assign(Root, { Title, Description, Actions });
