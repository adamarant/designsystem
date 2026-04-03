import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const alignMap = {
    start: "ds-items-start",
    center: "ds-items-center",
    end: "ds-items-end",
    stretch: "ds-items-stretch",
    baseline: "ds-items-baseline",
};
const justifyMap = {
    start: "ds-justify-start",
    center: "ds-justify-center",
    end: "ds-justify-end",
    between: "ds-justify-between",
    around: "ds-justify-around",
    evenly: "ds-justify-evenly",
};
const gapMap = {
    "0": "ds-gap-0",
    "0.5": "ds-gap-0.5",
    "1": "ds-gap-1",
    "1.5": "ds-gap-1.5",
    "2": "ds-gap-2",
    "3": "ds-gap-3",
    "4": "ds-gap-4",
    "5": "ds-gap-5",
    "6": "ds-gap-6",
    "8": "ds-gap-8",
    "10": "ds-gap-10",
    "12": "ds-gap-12",
    "16": "ds-gap-16",
    "20": "ds-gap-20",
};
export const Flex = forwardRef(function Flex({ as: Tag = "div", direction, inline, wrap, align, justify, gap, className, ...rest }, ref) {
    return (_jsx(Tag, { ref: ref, className: cn(inline ? "ds-inline-flex" : "ds-flex", direction === "col" && "ds-flex-col", wrap && "ds-flex-wrap", align && alignMap[align], justify && justifyMap[justify], gap !== undefined && gapMap[gap], className), ...rest }));
});
//# sourceMappingURL=Flex.js.map