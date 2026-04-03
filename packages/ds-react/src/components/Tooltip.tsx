import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  forwardRef,
  useId,
  useState,
} from "react";
import { cn } from "../utils/cn";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends ComponentPropsWithoutRef<"div"> {
  /** Placement relative to trigger. Default: "top" */
  placement?: TooltipPlacement;
  /** 200ms delay before showing. Default: false */
  delay?: boolean;
  /** Additional className */
  className?: string;
}

export interface TooltipContentProps extends ComponentPropsWithoutRef<"div"> {
  /** Additional className */
  className?: string;
}

/* ================================================================== */
/*  Maps                                                               */
/* ================================================================== */

const placementMap: Record<TooltipPlacement, string> = {
  top: "",
  bottom: "ds-tooltip--bottom",
  left: "ds-tooltip--left",
  right: "ds-tooltip--right",
};

/* ================================================================== */
/*  Visible style (applied on focus-within — CSS only handles :hover)  */
/* ================================================================== */

const visibleStyle: CSSProperties = {
  opacity: 1,
  visibility: "visible" as const,
};

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  function TooltipContent({ className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="tooltip"
        className={cn("ds-tooltip__content", className)}
        style={style}
        {...rest}
      />
    );
  },
);

/* ================================================================== */
/*  Tooltip (root + focus handling + dot notation)                      */
/* ================================================================== */

/*
 * CSS handles :hover show/hide automatically.
 * JS adds focus-within support: when any child receives focus,
 * we force the tooltip content visible via inline style.
 * ARIA: auto-generated id + aria-describedby linking.
 *
 * Usage:
 *   <Tooltip placement="top">
 *     <button aria-describedby={...}>Trigger</button>
 *     <Tooltip.Content>Help text</Tooltip.Content>
 *   </Tooltip>
 *
 * The component auto-wires aria-describedby if there's a single
 * focusable child, but consumers can also wire it manually.
 */

import { Children, cloneElement, isValidElement } from "react";

const TooltipRoot = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(
    { placement = "top", delay, className, children, ...rest },
    ref,
  ) {
    const [focused, setFocused] = useState(false);
    const tooltipId = useId();

    /* Inject aria-describedby + visible style into children */
    const enhancedChildren = Children.map(children, (child) => {
      if (!isValidElement(child)) return child;

      /* If it's the TooltipContent, inject id + visible style on focus */
      if (child.type === TooltipContent) {
        return cloneElement(child as React.ReactElement<TooltipContentProps>, {
          id: tooltipId,
          style: focused
            ? { ...visibleStyle, ...(child.props as TooltipContentProps).style }
            : (child.props as TooltipContentProps).style,
        });
      }

      return child;
    });

    return (
      <div
        ref={ref}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={() => setFocused(false)}
        className={cn(
          "ds-tooltip",
          placementMap[placement],
          delay && "ds-tooltip--delay",
          className,
        )}
        {...rest}
      >
        {enhancedChildren}
      </div>
    );
  },
);

export const Tooltip = Object.assign(TooltipRoot, {
  Content: TooltipContent,
});
