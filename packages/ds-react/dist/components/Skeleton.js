import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
export const Skeleton = forwardRef(function Skeleton({ circle, className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-skeleton", circle && "ds-skeleton--circle", className), ...rest }));
});
//# sourceMappingURL=Skeleton.js.map