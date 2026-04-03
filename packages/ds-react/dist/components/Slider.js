import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Slider = forwardRef(function Slider({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-LSlider", className), ...rest });
});
//# sourceMappingURL=Slider.js.map