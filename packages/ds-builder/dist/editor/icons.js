import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Minimal inline icons for the editor chrome. Inline SVG (not emoji) so they
 * render identically on every device, and `currentColor` so they inherit the
 * button's colour — keeping the package free of an icon-library dependency.
 */
function Icon({ children, ...props }) {
    return (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", ...props, children: children }));
}
export const ChevronUpIcon = (props) => (_jsx(Icon, { ...props, children: _jsx("polyline", { points: "18 15 12 9 6 15" }) }));
export const ChevronDownIcon = (props) => (_jsx(Icon, { ...props, children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
export const CloseIcon = (props) => (_jsxs(Icon, { ...props, children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
export const PlusIcon = (props) => (_jsxs(Icon, { ...props, children: [_jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), _jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })] }));
export const UndoIcon = (props) => (_jsxs(Icon, { ...props, children: [_jsx("path", { d: "M9 14 4 9l5-5" }), _jsx("path", { d: "M4 9h11a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H9" })] }));
export const RedoIcon = (props) => (_jsxs(Icon, { ...props, children: [_jsx("path", { d: "m15 14 5-5-5-5" }), _jsx("path", { d: "M20 9H9a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h6" })] }));
//# sourceMappingURL=icons.js.map