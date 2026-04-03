import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface CommandProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface CommandInputProps extends ComponentPropsWithoutRef<"input"> { className?: string; }
export interface CommandListProps extends ComponentPropsWithoutRef<"div"> { className?: string; }
export interface CommandItemProps extends ComponentPropsWithoutRef<"button"> { className?: string; }
export interface CommandGroupProps extends ComponentPropsWithoutRef<"div"> { className?: string; }

const Input = forwardRef<HTMLInputElement, CommandInputProps>(function I({ className, ...r }, ref) { return <input ref={ref} className={cn("ds-command__input", className)} {...r} />; });
const List = forwardRef<HTMLDivElement, CommandListProps>(function L({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-command__list", className)} {...r} />; });
const Item = forwardRef<HTMLButtonElement, CommandItemProps>(function I({ className, ...r }, ref) { return <button ref={ref} className={cn("ds-command__item", className)} {...r} />; });
const Group = forwardRef<HTMLDivElement, CommandGroupProps>(function G({ className, ...r }, ref) { return <div ref={ref} className={cn("ds-command__group", className)} {...r} />; });

const Root = forwardRef<HTMLDivElement, CommandProps>(
  function Command({ className, ...rest }, ref) { return <div ref={ref} className={cn("ds-command", className)} {...rest} />; },
);
export const Command = Object.assign(Root, { Input, List, Item, Group });
