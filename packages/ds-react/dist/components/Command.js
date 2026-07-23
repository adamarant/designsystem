import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../utils/cn";
const Input = forwardRef(function I({ className, ...r }, ref) { return _jsx("input", { ref: ref, className: cn("ds-command__input", className), ...r }); });
const List = forwardRef(function L({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-command__list", className), ...r }); });
const Item = forwardRef(function I({ className, ...r }, ref) { return _jsx("button", { ref: ref, className: cn("ds-command__item", className), ...r }); });
const Group = forwardRef(function G({ className, ...r }, ref) { return _jsx("div", { ref: ref, className: cn("ds-command__group", className), ...r }); });
const Root = forwardRef(function Command({ className, ...rest }, ref) { return _jsx("div", { ref: ref, className: cn("ds-command", className), ...rest }); });
/* Flat exports — RSC-safe (dot access on client refs is undefined in RSC). */
export { Input as CommandInput, List as CommandList, Item as CommandItem, Group as CommandGroup };
export const Command = Object.assign(Root, { Input, List, Item, Group });
//# sourceMappingURL=Command.js.map