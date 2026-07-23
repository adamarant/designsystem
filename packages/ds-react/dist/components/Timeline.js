import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Item = forwardRef(function Item({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-timeline__item", className), ...rest }); });
const Dot = forwardRef(function Dot({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-timeline__dot", className), ...rest }); });
const Content = forwardRef(function Content({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-timeline__content", className), ...rest }); });
const Root = forwardRef(function Timeline({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-timeline", className), ...rest }); });
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Item as TimelineItem, Dot as TimelineDot, Content as TimelineContent };
export const Timeline = Object.assign(Root, { Item, Dot, Content });
//# sourceMappingURL=Timeline.js.map