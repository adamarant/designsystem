import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const sizeMap = {
    xs: "ds-avatar--xs",
    sm: "ds-avatar--sm",
    md: "",
    lg: "ds-avatar--lg",
    xl: "ds-avatar--xl",
};
const statusMap = {
    online: "ds-avatar__status--online",
    offline: "ds-avatar__status--offline",
    busy: "ds-avatar__status--busy",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const AvatarStatus = forwardRef(function AvatarStatus({ variant, className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-avatar__status", statusMap[variant], className), ...rest }));
});
/* ================================================================== */
/*  Avatar (root + dot notation)                                       */
/* ================================================================== */
const AvatarRoot = forwardRef(function Avatar({ size = "md", square, bordered, className, ...rest }, ref) {
    return (_jsx("span", { ref: ref, className: cn("ds-avatar", sizeMap[size], square && "ds-avatar--square", bordered && "ds-avatar--bordered", className), ...rest }));
});
export const Avatar = Object.assign(AvatarRoot, {
    Status: AvatarStatus,
});
/* ================================================================== */
/*  AvatarGroup                                                        */
/* ================================================================== */
export const AvatarGroup = forwardRef(function AvatarGroup({ sm, className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-avatar-group", sm && "ds-avatar-group--sm", className), ...rest }));
});
//# sourceMappingURL=Avatar.js.map