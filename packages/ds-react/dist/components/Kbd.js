import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Kbd = forwardRef(function Kbd({ className, ...rest }, ref) {
    return _jsx("kbd", { ref: ref, className: cn("ds-kbd", className), ...rest });
});
//# sourceMappingURL=Kbd.js.map