import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */
const variantMap = {
    default: "",
    interactive: "ds-card--interactive",
    elevated: "ds-card--elevated",
    hover: "ds-card--hover",
};
const aspectMap = {
    default: "",
    square: "ds-card__media--square",
    video: "ds-card__media--video",
    auto: "ds-card__media--auto",
};
/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */
const CardHeader = forwardRef(function CardHeader({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-card__header", className), ...rest }));
});
const CardTitle = forwardRef(function CardTitle({ className, ...rest }, ref) {
    return (_jsx("h3", { ref: ref, className: cn("ds-card__title", className), ...rest }));
});
const CardDescription = forwardRef(function CardDescription({ className, ...rest }, ref) {
    return (_jsx("p", { ref: ref, className: cn("ds-card__description", className), ...rest }));
});
const CardBody = forwardRef(function CardBody({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-card__body", className), ...rest }));
});
const CardFooter = forwardRef(function CardFooter({ className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-card__footer", className), ...rest }));
});
const CardMedia = forwardRef(function CardMedia({ aspect = "default", className, ...rest }, ref) {
    return (_jsx("img", { ref: ref, className: cn("ds-card__media", aspectMap[aspect], className), ...rest }));
});
/* ================================================================== */
/*  Card (root + dot notation)                                         */
/* ================================================================== */
const CardRoot = forwardRef(function Card({ variant = "default", compact, flush, className, ...rest }, ref) {
    return (_jsx("div", { ref: ref, className: cn("ds-card", variantMap[variant], compact && "ds-card--compact", flush && "ds-card--flush", className), ...rest }));
});
export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Title: CardTitle,
    Description: CardDescription,
    Body: CardBody,
    Footer: CardFooter,
    Media: CardMedia,
});
//# sourceMappingURL=Card.js.map