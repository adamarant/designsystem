import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const sizeMap = {
    sm: "ds-chip--sm",
    md: "",
    lg: "ds-chip--lg",
};
export const Chip = forwardRef(function Chip({ size = "md", className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-chip", sizeMap[size], className), ...rest }));
});
//# sourceMappingURL=Chip.js.map