import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const colorMap = {
    primary: "ds-text-primary",
    secondary: "ds-text-secondary",
};
const spacingMap = {
    "1": "ds-mb-1",
    "1.5": "ds-mb-1.5",
    "2": "ds-mb-2",
    "3": "ds-mb-3",
};
export const Label = forwardRef(function Label({ color = "secondary", spacing = "2", className, ...rest }, ref) {
    return (_jsx("label", { ref: ref, className: cn("ds-block ds-text-sm ds-font-medium", colorMap[color], spacingMap[spacing], className), ...rest }));
});
//# sourceMappingURL=Label.js.map