import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type Gap =
  | "0" | "0.5" | "1" | "1.5" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20";

type Align = "start" | "center" | "end" | "stretch" | "baseline";
type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";

export interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  /** Render as a different HTML element. Default: "div" */
  as?: ElementType;
  /** Flex direction. Default: row */
  direction?: "row" | "col";
  /** Use inline-flex instead of flex */
  inline?: boolean;
  /** Enable flex-wrap */
  wrap?: boolean;
  /** align-items */
  align?: Align;
  /** justify-content */
  justify?: Justify;
  /** Gap between children */
  gap?: Gap;
  /** Additional className */
  className?: string;
}

const alignMap: Record<Align, string> = {
  start: "ds-items-start",
  center: "ds-items-center",
  end: "ds-items-end",
  stretch: "ds-items-stretch",
  baseline: "ds-items-baseline",
};

const justifyMap: Record<Justify, string> = {
  start: "ds-justify-start",
  center: "ds-justify-center",
  end: "ds-justify-end",
  between: "ds-justify-between",
  around: "ds-justify-around",
  evenly: "ds-justify-evenly",
};

const gapMap: Record<Gap, string> = {
  "0": "ds-gap-0",
  "0.5": "ds-gap-0.5",
  "1": "ds-gap-1",
  "1.5": "ds-gap-1.5",
  "2": "ds-gap-2",
  "3": "ds-gap-3",
  "4": "ds-gap-4",
  "5": "ds-gap-5",
  "6": "ds-gap-6",
  "8": "ds-gap-8",
  "10": "ds-gap-10",
  "12": "ds-gap-12",
  "16": "ds-gap-16",
  "20": "ds-gap-20",
};

export const Flex = forwardRef<HTMLElement, FlexProps>(function Flex(
  {
    as: Tag = "div",
    direction,
    inline,
    wrap,
    align,
    justify,
    gap,
    className,
    ...rest
  },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        inline ? "ds-inline-flex" : "ds-flex",
        direction === "col" && "ds-flex-col",
        wrap && "ds-flex-wrap",
        align && alignMap[align],
        justify && justifyMap[justify],
        gap !== undefined && gapMap[gap],
        className,
      )}
      {...rest}
    />
  );
});
