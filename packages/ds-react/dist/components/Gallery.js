import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Item = forwardRef(function Item({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-gallery__item", className), ...rest }); });
const Root = forwardRef(function Gallery({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-gallery", className), ...rest }); });
export const Gallery = Object.assign(Root, { Item });
//# sourceMappingURL=Gallery.js.map