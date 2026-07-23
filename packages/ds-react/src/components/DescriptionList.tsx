import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface DescriptionListProps extends ComponentPropsWithoutRef<"dl"> { className?: string; }
export interface DescriptionListTermProps extends ComponentPropsWithoutRef<"dt"> { className?: string; }
export interface DescriptionListDetailProps extends ComponentPropsWithoutRef<"dd"> { className?: string; }

const Term = forwardRef<HTMLElement, DescriptionListTermProps>(
  function Term({ className, ...rest }, ref) { return <dt ref={ref} className={cn("ds-description-list__term", className)} {...rest} />; },
);
const Detail = forwardRef<HTMLElement, DescriptionListDetailProps>(
  function Detail({ className, ...rest }, ref) { return <dd ref={ref} className={cn("ds-description-list__detail", className)} {...rest} />; },
);
const Root = forwardRef<HTMLDListElement, DescriptionListProps>(
  function DescriptionList({ className, ...rest }, ref) { return <dl ref={ref} className={cn("ds-description-list", className)} {...rest} />; },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Term as DescriptionListTerm, Detail as DescriptionListDetail };

export const DescriptionList = Object.assign(Root, { Term, Detail });
