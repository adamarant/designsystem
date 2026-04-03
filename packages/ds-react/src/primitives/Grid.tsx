import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../utils/cn";

type Cols = "1" | "2" | "3" | "4";
type Gap =
  | "0" | "0.5" | "1" | "1.5" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20";

export interface GridProps extends ComponentPropsWithoutRef<"div"> {
  /** Render as a different HTML element. Default: "div" */
  as?: ElementType;
  /** Number of columns. Default: none (inherits from ds-grid default) */
  cols?: Cols;
  /** Responsive columns at sm breakpoint (640px) */
  smCols?: Cols;
  /** Responsive columns at md breakpoint (768px) */
  mdCols?: Cols;
  /** Responsive columns at lg breakpoint (1024px) */
  lgCols?: Cols;
  /** Gap between cells. Overrides the ds-grid default gap. */
  gap?: Gap;
  /** Additional className */
  className?: string;
}

const colsMap: Record<Cols, string> = {
  "1": "ds-grid-cols-1",
  "2": "ds-grid-cols-2",
  "3": "ds-grid-cols-3",
  "4": "ds-grid-cols-4",
};

const smColsMap: Record<Cols, string> = {
  "1": "ds-sm:grid-cols-1",
  "2": "ds-sm:grid-cols-2",
  "3": "ds-sm:grid-cols-3",
  "4": "ds-sm:grid-cols-4",
};

const mdColsMap: Record<Cols, string> = {
  "1": "ds-md:grid-cols-1",
  "2": "ds-md:grid-cols-2",
  "3": "ds-md:grid-cols-3",
  "4": "ds-md:grid-cols-4",
};

const lgColsMap: Record<Cols, string> = {
  "1": "ds-lg:grid-cols-1",
  "2": "ds-lg:grid-cols-2",
  "3": "ds-lg:grid-cols-3",
  "4": "ds-lg:grid-cols-4",
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

export const Grid = forwardRef<HTMLElement, GridProps>(function Grid(
  { as: Tag = "div", cols, smCols, mdCols, lgCols, gap, className, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "ds-grid",
        cols && colsMap[cols],
        smCols && smColsMap[smCols],
        mdCols && mdColsMap[mdCols],
        lgCols && lgColsMap[lgCols],
        gap !== undefined && gapMap[gap],
        className,
      )}
      {...rest}
    />
  );
});
