import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Item = forwardRef(function Item({ active, className, ...rest }, ref) {
    return _jsx("button", { ref: ref, "aria-pressed": active, className: cn("ds-segmented__item", active && "ds-segmented__item--active", className), ...rest });
});
const Root = forwardRef(function SegmentedControl({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, role: "group", className: cn("ds-segmented", className), ...rest });
});
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Item as SegmentedControlItem };
export const SegmentedControl = Object.assign(Root, { Item });
//# sourceMappingURL=SegmentedControl.js.map