import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const variantMap = {
    default: "",
    subtle: "ds-divider--subtle",
    /* No CSS behind it: divider.css ships --subtle/--spacious/--vertical/--label,
       never --strong. Emitted a phantom until DS 0.30; now a no-op rather than a
       lie. Needs a DS decision before it can mean anything. */
    strong: "",
};
export const Divider = forwardRef(function Divider({ variant = "default", orientation = "horizontal", className, ...rest }, ref) {
    return (_jsx("hr", { ref: ref, className: cn("ds-divider", variantMap[variant], orientation === "vertical" && "ds-divider--vertical", className), ...rest }));
});
//# sourceMappingURL=Divider.js.map