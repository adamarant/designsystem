import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function base(props) {
    return {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
        ...props,
    };
}
export function ArrowLeftIcon(props) {
    return (_jsxs("svg", { ...base(props), children: [_jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }), _jsx("polyline", { points: "12 19 5 12 12 5" })] }));
}
export function ChevronLeftIcon(props) {
    return (_jsx("svg", { ...base(props), children: _jsx("polyline", { points: "15 18 9 12 15 6" }) }));
}
export function ChevronRightIcon(props) {
    return (_jsx("svg", { ...base(props), children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
}
export function SearchIcon(props) {
    return (_jsxs("svg", { ...base(props), children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
}
export function GripVerticalIcon(props) {
    return (_jsxs("svg", { ...base(props), fill: "currentColor", stroke: "none", children: [_jsx("circle", { cx: "9", cy: "6", r: "1.5" }), _jsx("circle", { cx: "15", cy: "6", r: "1.5" }), _jsx("circle", { cx: "9", cy: "12", r: "1.5" }), _jsx("circle", { cx: "15", cy: "12", r: "1.5" }), _jsx("circle", { cx: "9", cy: "18", r: "1.5" }), _jsx("circle", { cx: "15", cy: "18", r: "1.5" })] }));
}
//# sourceMappingURL=icons.js.map