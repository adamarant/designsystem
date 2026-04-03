import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Prose = forwardRef(function Prose({ className, ...rest }, ref) {
    return _jsx("div", { ref: ref, className: cn("ds-prose", className), ...rest });
});
//# sourceMappingURL=Prose.js.map