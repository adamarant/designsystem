import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const ColorPicker = forwardRef(function ColorPicker({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-LColor-LPicker", className), ...rest });
});
//# sourceMappingURL=ColorPicker.js.map