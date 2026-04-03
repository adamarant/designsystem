import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const variantMap = { default: "", ghost: "ds-icon-btn--ghost", outline: "ds-icon-btn--outline" };
const sizeMap = { xs: "ds-icon-btn--xs", sm: "ds-icon-btn--sm", md: "", lg: "ds-icon-btn--lg" };
export const IconBtn = forwardRef(function IconBtn({ variant = "default", size = "md", className, ...rest }, ref) {
    return (_jsx("button", { ref: ref, className: cn("ds-icon-btn", variantMap[variant], sizeMap[size], className), ...rest }));
});
//# sourceMappingURL=IconBtn.js.map