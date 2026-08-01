import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* ==========================================================================
   Icons — GENERATED, do not edit.
   Source: icons.json · Regenerate: node scripts/generate-icons.js

   The closed starter set. Not a library: these are exactly the marks the
   design system's own components decide for themselves, and the set does not
   grow on request. Anything the *content* decides — a nav item, a stat card, a
   tab — stays a slot the consumer fills with their own icon set.

   Geometry: Central Icons, style solid, stroke 2, corner 2px medium, on a
   24 viewBox. One grid, one weight, no exceptions. Chevron left/right are the
   down chevron rotated rather than separate drawings, so the four can never
   drift apart — they swap in place in accordions, sort headers and pagination.

   Named Icon* and not *Icon, which is the reflex. The suffix collides with the
   package's own convention that a compound part is also exported flat, so
   `Search.Icon` has to be `SearchIcon` — and `SearchIcon` is obviously the
   magnifier. exports-shape.test.ts enforces that convention and caught it. The
   prefix also reads as a marker during the migration, where a file can hold
   both these and lucide's `SearchIcon` at once, and it happens to match how
   Central names them.

   Every icon takes `size` (px number or any CSS length, default 24) and
   forwards the rest to the <svg>. Colour comes from `currentColor`, so an icon
   inherits whatever text colour its container sets. They are decorative by
   default (`aria-hidden`); if a mark is the only content of a control, label
   the control, not the glyph.
   ========================================================================== */
import { forwardRef } from "react";
function createIcon(displayName, children) {
    const Icon = forwardRef(function Icon({ size = 24, ...rest }, ref) {
        return (_jsx("svg", { ref: ref, width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", focusable: "false", ...rest, children: children }));
    });
    Icon.displayName = displayName;
    return Icon;
}
/* ------------------------------------------------------------------------
   Disclosure and navigation
   ------------------------------------------------------------------------ */
/** `chevron-down` */
export const IconChevronDown = createIcon("IconChevronDown", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z", fill: "currentColor" }) }));
/** `chevron-up` */
export const IconChevronUp = createIcon("IconChevronUp", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7071 9.12126C12.3166 8.73074 11.6834 8.73074 11.2929 9.12126L4.70711 15.707C4.31658 16.0976 3.68342 16.0976 3.29289 15.707C2.90237 15.3165 2.90237 14.6834 3.29289 14.2928L9.87866 7.70705C11.0502 6.53548 12.9497 6.53547 14.1213 7.70705L20.7071 14.2928C21.0976 14.6834 21.0976 15.3165 20.7071 15.707C20.3166 16.0976 19.6834 16.0976 19.2929 15.707L12.7071 9.12126Z", fill: "currentColor" }) }));
/** `chevron-left` */
export const IconChevronLeft = createIcon("IconChevronLeft", _jsx(_Fragment, { children: _jsx("g", { transform: "rotate(90 12 12)", children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z", fill: "currentColor" }) }) }));
/** `chevron-right` */
export const IconChevronRight = createIcon("IconChevronRight", _jsx(_Fragment, { children: _jsx("g", { transform: "rotate(-90 12 12)", children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L11.2929 14.8787C11.6834 15.2692 12.3166 15.2692 12.7071 14.8787L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L14.1213 16.2929C12.9498 17.4645 11.0503 17.4645 9.8787 16.2929L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z", fill: "currentColor" }) }) }));
/** `arrow-left` */
export const IconArrowLeft = createIcon("IconArrowLeft", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.0607 18.5607C10.4749 19.1464 9.52513 19.1464 8.93934 18.5607L3.43934 13.0607C3.15804 12.7794 3 12.3978 3 12C3 11.6022 3.15803 11.2207 3.43934 10.9394L8.93934 5.43934C9.52512 4.85355 10.4749 4.85355 11.0607 5.43934C11.6464 6.02512 11.6464 6.97487 11.0607 7.56066L8.12131 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H8.12133L11.0607 16.4393C11.6464 17.0251 11.6464 17.9749 11.0607 18.5607Z", fill: "currentColor" }) }));
/** `ellipsis` */
export const IconEllipsis = createIcon("IconEllipsis", _jsx(_Fragment, { children: _jsxs("g", { transform: "rotate(90 12 12)", children: [_jsx("circle", { cx: "12", cy: "12", r: "2", fill: "currentColor" }), _jsx("circle", { cx: "12", cy: "19", r: "2", fill: "currentColor" }), _jsx("circle", { cx: "12", cy: "5", r: "2", fill: "currentColor" })] }) }));
/* ------------------------------------------------------------------------
   Confirm and dismiss
   ------------------------------------------------------------------------ */
/** `close` */
export const IconClose = createIcon("IconClose", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.18934 4.18934C4.77513 3.60355 5.72487 3.60355 6.31066 4.18934L12 9.87868L17.6893 4.18934C18.2751 3.60355 19.2249 3.60355 19.8107 4.18934C20.3964 4.77513 20.3964 5.72487 19.8107 6.31066L14.1213 12L19.8107 17.6893C20.3964 18.2751 20.3964 19.2249 19.8107 19.8107C19.2249 20.3964 18.2751 20.3964 17.6893 19.8107L12 14.1213L6.31066 19.8107C5.72487 20.3964 4.77513 20.3964 4.18934 19.8107C3.60355 19.2249 3.60355 18.2751 4.18934 17.6893L9.87868 12L4.18934 6.31066C3.60355 5.72487 3.60355 4.77513 4.18934 4.18934Z", fill: "currentColor" }) }));
/** `check` */
export const IconCheck = createIcon("IconCheck", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.3209 4.24472C20.0142 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62613 20.0276 9.16825 19.8347 8.86111 19.4764L4.36111 14.2264C3.82198 13.5974 3.89482 12.6504 4.52381 12.1113C5.1528 11.5722 6.09975 11.645 6.63888 12.274L9.83825 16.0066L17.2445 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z", fill: "currentColor" }) }));
/** `plus` */
export const IconPlus = createIcon("IconPlus", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4C11 3.44772 11.4477 3 12 3Z", fill: "currentColor" }) }));
/** `minus` */
export const IconMinus = createIcon("IconMinus", _jsx(_Fragment, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z", fill: "currentColor" }) }));
/* ------------------------------------------------------------------------
   Status — variant-determined on Alert, Toast and Result
   ------------------------------------------------------------------------ */
/** `info` */
export const IconInfo = createIcon("IconInfo", _jsxs(_Fragment, { children: [_jsx("path", { d: "M11 11H12V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z", fill: "currentColor", stroke: "currentColor", strokeWidth: "0.5" })] }));
/** `success` */
export const IconSuccess = createIcon("IconSuccess", _jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M8 12.875L10.625 15.5L15 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
/** `warning` */
export const IconWarning = createIcon("IconWarning", _jsx(_Fragment, { children: _jsx("path", { d: "M12 9.01917V12.0134M12 15H12.01M10.2765 3.99036L3.27481 15.998C2.49885 17.3288 3.45836 19 4.99836 19H19.0016C20.5416 19 21.5011 17.3288 20.7252 15.998L13.7235 3.99035C12.9536 2.66988 11.0464 2.66988 10.2765 3.99036ZM12.25 15C12.25 15.1381 12.1381 15.25 12 15.25C11.8619 15.25 11.75 15.1381 11.75 15C11.75 14.8619 11.8619 14.75 12 14.75C12.1381 14.75 12.25 14.8619 12.25 15Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }));
/** `error` */
export const IconError = createIcon("IconError", _jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M12 8V12.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }), _jsx("circle", { cx: "12", cy: "15.7996", r: "1.2", fill: "currentColor" })] }));
/* ------------------------------------------------------------------------
   Affordances
   ------------------------------------------------------------------------ */
/** `search` */
export const IconSearch = createIcon("IconSearch", _jsxs(_Fragment, { children: [_jsx("path", { d: "M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }), _jsx("path", { d: "M20 20L16.05 16.05", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })] }));
/** `calendar` */
export const IconCalendar = createIcon("IconCalendar", _jsxs(_Fragment, { children: [_jsx("path", { d: "M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V7Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M4 10H20", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M8 5V3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M16 5V3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
/** `upload` */
export const IconUpload = createIcon("IconUpload", _jsx(_Fragment, { children: _jsx("path", { d: "M20 14.75V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
/** `copy` */
export const IconCopy = createIcon("IconCopy", _jsx(_Fragment, { children: _jsx("path", { d: "M9 9V4.25C9 3.55964 9.55964 3 10.25 3H19.75C20.4404 3 21 3.55964 21 4.25V13.75C21 14.4404 20.4404 15 19.75 15H15M13.75 9H4.25C3.55964 9 3 9.55964 3 10.25V19.75C3 20.4404 3.55964 21 4.25 21H13.75C14.4404 21 15 20.4404 15 19.75V10.25C15 9.55964 14.4404 9 13.75 9Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
/** `star-filled` */
export const IconStarFilled = createIcon("IconStarFilled", _jsx(_Fragment, { children: _jsx("path", { d: "M13.3726 1.86222C12.8203 0.712594 11.1798 0.71259 10.6275 1.86222L8.26537 6.77927L2.82465 7.49166C1.56329 7.65682 1.03808 9.21543 1.97724 10.101L5.95315 13.8499L4.95534 19.2025C4.71844 20.4733 6.06382 21.4154 7.17531 20.8162L12 18.2151L16.8248 20.8162C17.9363 21.4154 19.2816 20.4733 19.0447 19.2025L18.0469 13.8499L22.0228 10.101C22.962 9.21543 22.4368 7.65682 21.1754 7.49166L15.7347 6.77927L13.3726 1.86222Z", fill: "currentColor" }) }));
/** `star-outline` */
export const IconStarOutline = createIcon("IconStarOutline", _jsx(_Fragment, { children: _jsx("path", { d: "M11.5288 2.29524C11.7179 1.90159 12.2821 1.90159 12.4712 2.29524L14.9458 7.44648C15.0219 7.60491 15.1735 7.71434 15.3487 7.73728L21.0456 8.4832C21.4809 8.5402 21.6552 9.07312 21.3368 9.37342L17.1693 13.303C17.0412 13.4238 16.9832 13.6009 17.0154 13.7735L18.0616 19.3857C18.1416 19.8146 17.6852 20.144 17.2993 19.9359L12.249 17.2133C12.0937 17.1296 11.9063 17.1296 11.751 17.2133L6.70073 19.9359C6.3148 20.144 5.85841 19.8146 5.93837 19.3857L6.98459 13.7735C7.01677 13.6009 6.95885 13.4238 6.83068 13.303L2.66324 9.37342C2.34476 9.07312 2.51909 8.5402 2.95444 8.4832L8.65127 7.73728C8.82648 7.71434 8.97811 7.60491 9.05422 7.44648L11.5288 2.29524Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
/** `grip` */
export const IconGrip = createIcon("IconGrip", _jsxs(_Fragment, { children: [_jsx("path", { d: "M10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C9.55228 18 10 18.4477 10 19Z", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19Z", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z", stroke: "currentColor", strokeWidth: "2" })] }));
/* ------------------------------------------------------------------------
   Editor history
   ------------------------------------------------------------------------ */
/** `undo` */
export const IconUndo = createIcon("IconUndo", _jsxs(_Fragment, { children: [_jsx("path", { d: "M6.49985 5L3.20696 8.29289C2.81643 8.68342 2.81643 9.31658 3.20696 9.70711L6.49985 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M4 9H17C19.2091 9 21 10.7909 21 13V14C21 16.2091 19.2091 18 17 18H12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
/** `redo` */
export const IconRedo = createIcon("IconRedo", _jsxs(_Fragment, { children: [_jsx("path", { d: "M17.5 19L20.7929 15.7071C21.1834 15.3166 21.1834 14.6834 20.7929 14.2929L17.5 11", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M20 15L7 15C4.79086 15 3 13.2091 3 11L3 10C3 7.79086 4.79086 6 7 6L12 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
/* ------------------------------------------------------------------------
   Theme and chrome
   ------------------------------------------------------------------------ */
/** `sun` */
export const IconSun = createIcon("IconSun", _jsx(_Fragment, { children: _jsx("path", { d: "M12 3V2M12 22V21M18.3598 5.64005L19.0698 4.93005M4.93016 19.07L5.64016 18.36M21 12H22M2 12H3M18.3598 18.36L19.0698 19.07M4.93016 4.93005L5.64016 5.64005M15.5355 8.46447C17.4882 10.4171 17.4882 13.5829 15.5355 15.5355C13.5829 17.4882 10.4171 17.4882 8.46447 15.5355C6.51185 13.5829 6.51185 10.4171 8.46447 8.46447C10.4171 6.51185 13.5829 6.51185 15.5355 8.46447Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
/** `moon` */
export const IconMoon = createIcon("IconMoon", _jsx(_Fragment, { children: _jsx("path", { d: "M20.9638 12.7674C19.8361 13.5447 18.4693 13.9998 16.9961 13.9998C13.1301 13.9998 9.99609 10.8657 9.99609 6.99975C9.99609 5.52667 10.4511 4.15987 11.2283 3.03223C6.61911 3.42277 3 7.28768 3 11.9979C3 16.9674 7.0286 20.996 11.9981 20.996C16.7084 20.996 20.5734 17.3767 20.9638 12.7674Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
/** `menu` */
export const IconMenu = createIcon("IconMenu", _jsx(_Fragment, { children: _jsx("path", { d: "M3 7H21M3 17H21", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
/* ------------------------------------------------------------------------
   No consumer yet — kept for the Input password reveal
   ------------------------------------------------------------------------ */
/** `eye` */
export const IconEye = createIcon("IconEye", _jsxs(_Fragment, { children: [_jsx("path", { d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M21.4974 11.0946C16.66 2.96839 7.33998 2.96848 2.50257 11.0947C2.17069 11.6523 2.17069 12.3479 2.50257 12.9054C7.33998 21.0316 16.66 21.0315 21.4974 12.9053C21.8293 12.3477 21.8293 11.6521 21.4974 11.0946Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
/** `eye-off` */
export const IconEyeOff = createIcon("IconEyeOff", _jsxs(_Fragment, { children: [_jsx("path", { d: "M10.7424 5.08581C14.6841 4.54668 18.7922 6.54985 21.4978 11.0954C21.8296 11.6529 21.8298 12.3468 21.498 12.9043C21.124 13.5326 20.7233 14.1123 20.3 14.6434", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L3.70711 2.29289ZM20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM2.29289 3.70711L20.2929 21.7071L21.7071 20.2929L3.70711 2.29289L2.29289 3.70711Z", fill: "currentColor" }), _jsx("path", { d: "M10.3327 10.8948C10.6385 10.4349 10.5136 9.81418 10.0537 9.50839C9.59377 9.20261 8.97305 9.32755 8.66727 9.78745L10.3327 10.8948ZM14.2126 15.3328C14.6725 15.027 14.7974 14.4063 14.4916 13.9463C14.1858 13.4864 13.5651 13.3615 13.1052 13.6673L14.2126 15.3328ZM12 14C10.8954 14 10 13.1046 10 12H8C8 14.2092 9.79086 16 12 16V14ZM10 12C10 11.5897 10.1225 11.211 10.3327 10.8948L8.66727 9.78745C8.24565 10.4216 8 11.1836 8 12H10ZM13.1052 13.6673C12.789 13.8775 12.4103 14 12 14V16C12.8164 16 13.5785 15.7544 14.2126 15.3328L13.1052 13.6673Z", fill: "currentColor" }), _jsx("path", { d: "M6.12815 7C4.77316 7.99438 3.53535 9.35957 2.50209 11.0955C2.17024 11.6531 2.17115 12.3487 2.50305 12.9062C6.05251 18.8681 12.0149 20.4553 16.8492 17.6681", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
//# sourceMappingURL=icons.js.map