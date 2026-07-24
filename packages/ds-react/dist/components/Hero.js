import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Title = forwardRef(function T({ className, ...r }, ref) { return _jsx("h1", { ref: ref, className: cn("ds-hero__title", className), ...r }); });
const Description = forwardRef(function D({ className, ...r }, ref) { return _jsx("p", { ref: ref, className: cn("ds-hero__subtitle", className), ...r }); });
const Actions = forwardRef(function A({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: className, ...r }); });
const Root = forwardRef(function Hero({ className, ...rest }, ref) { return _jsx("section", { ref: ref, className: cn("ds-hero", className), ...rest }); });
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Title as HeroTitle, Description as HeroDescription, Actions as HeroActions };
export const Hero = Object.assign(Root, { Title, Description, Actions });
//# sourceMappingURL=Hero.js.map