import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const sizeMap = {
    sm: "ds-stack ds-stack--sm",
    md: "ds-stack",
    lg: "ds-stack ds-stack--lg",
    xl: "ds-stack ds-stack--xl",
    "2xl": "ds-stack ds-stack--2xl",
    "3xl": "ds-stack ds-stack--3xl",
};
export const Stack = forwardRef(function Stack({ as: Tag = "div", gap = "md", className, ...rest }, ref) {
    return (_jsx(Tag, { ref: ref, className: cn(sizeMap[gap], className), ...rest }));
});
//# sourceMappingURL=Stack.js.map