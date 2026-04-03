import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Chip = forwardRef(function Chip({ className, ...rest }, ref) {
    return _jsx("span", { ref: ref, className: cn("ds-chip", className), ...rest });
});
//# sourceMappingURL=Chip.js.map