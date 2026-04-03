import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const ScrollArea = forwardRef(function ScrollArea({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-scroll-area", className), ...rest });
});
//# sourceMappingURL=ScrollArea.js.map