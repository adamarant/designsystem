import { type ComponentPropsWithoutRef } from "react";
export interface GalleryProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
export interface GalleryItemProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
}
declare const Item: import("react").ForwardRefExoticComponent<GalleryItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { Item as GalleryItem };
export declare const Gallery: import("react").ForwardRefExoticComponent<GalleryProps & import("react").RefAttributes<HTMLDivElement>> & {
    Item: import("react").ForwardRefExoticComponent<GalleryItemProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Gallery.d.ts.map