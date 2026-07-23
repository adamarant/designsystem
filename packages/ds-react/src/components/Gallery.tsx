import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface GalleryProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface GalleryItemProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Item = forwardRef<HTMLDivElement, GalleryItemProps>(
  function Item({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-gallery__thumb", className)} {...rest} />; },
);
const Root = forwardRef<HTMLDivElement, GalleryProps>(
  function Gallery({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-gallery", className)} {...rest} />; },
);
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Item as GalleryItem };

export const Gallery = Object.assign(Root, { Item });
