import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const variantMap = {
    default: "",
    subtle: "ds-divider--subtle",
    strong: "ds-divider--strong",
};
export const Divider = forwardRef(function Divider({ variant = "default", orientation = "horizontal", className, ...rest }, ref) {
    return (_jsx("hr", { ref: ref, className: cn("ds-divider", variantMap[variant], orientation === "vertical" && "ds-divider--vertical", className), ...rest }));
});
//# sourceMappingURL=Divider.js.map