"use client";

import Link from "next/link";

const COMPONENTS = [
  {
    "name": "Button",
    "href": "/components/button",
    "cat": "Action",
    "description": "Inverted primary, rounded-full CTAs, refined sizing."
  },
  {
    "name": "Card",
    "href": "/components/card",
    "cat": "Layout",
    "description": "Surface + border, hover with shadow lift, rounded-xl."
  },
  {
    "name": "Input",
    "href": "/components/input",
    "cat": "Form",
    "description": "Form inputs with surface bg, clean borders, focus ring."
  },
  {
    "name": "Checkbox",
    "href": "/components/checkbox",
    "cat": "Form",
    "description": "Custom-drawn checkbox: a native input restyled inside a label wrapper."
  },
  {
    "name": "Radio",
    "href": "/components/radio",
    "cat": "Form",
    "description": "Custom-drawn radio: a native input restyled inside a label wrapper."
  },
  {
    "name": "Badge",
    "href": "/components/badge",
    "cat": "Data Display",
    "description": "Pill shape, border + subtle bg, clean and refined."
  },
  {
    "name": "Navigation",
    "href": "/components/nav",
    "cat": "Navigation",
    "description": "Fixed glass header, backdrop-blur, h-16. Clean links."
  },
  {
    "name": "Modal",
    "href": "/components/modal",
    "cat": "Overlay",
    "description": "Backdrop blur, shadow-2xl, rounded-xl. Smooth scale transition."
  },
  {
    "name": "Toast",
    "href": "/components/toast",
    "cat": "Feedback",
    "description": "Notification toasts with positions and enter/exit animations."
  },
  {
    "name": "Table",
    "href": "/components/table",
    "cat": "Data Display",
    "description": "Data table with sorting, selection, sticky headers, striping, and responsive stacking."
  },
  {
    "name": "Tabs",
    "href": "/components/tabs",
    "cat": "Navigation",
    "description": "Horizontal/vertical tab navigation with pill, small, and full-width variants."
  },
  {
    "name": "Alert",
    "href": "/components/alert",
    "cat": "Feedback",
    "description": "Contextual feedback banners with semantic variants and dismissibility."
  },
  {
    "name": "Divider",
    "href": "/components/divider",
    "cat": "Layout",
    "description": "Horizontal and vertical separators with optional centered label."
  },
  {
    "name": "Dropdown",
    "href": "/components/dropdown",
    "cat": "Overlay",
    "description": "Floating menu with surface bg, scale transition, keyboard-friendly items."
  },
  {
    "name": "Context Menu",
    "href": "/components/context-menu",
    "cat": "Overlay",
    "description": "Cursor-anchored floating menu for right-click contextual actions. Position is set at runtime by a JS wrapper."
  },
  {
    "name": "Tooltip",
    "href": "/components/tooltip",
    "cat": "Feedback",
    "description": "Inverted bubble with arrow, positioned via modifier classes."
  },
  {
    "name": "Avatar",
    "href": "/components/avatar",
    "cat": "Data Display",
    "description": "User photos, token images, initials. Stackable in groups."
  },
  {
    "name": "Skeleton",
    "href": "/components/skeleton",
    "cat": "Data Display",
    "description": "Loading placeholders with a subtle pulse animation."
  },
  {
    "name": "Empty State",
    "href": "/components/empty-state",
    "cat": "Feedback",
    "description": "Centered message for when there's no data to display."
  },
  {
    "name": "Toggle",
    "href": "/components/toggle",
    "cat": "Form",
    "description": "A toggle (switch) control for binary on/off states."
  },
  {
    "name": "Theme Toggle",
    "href": "/components/theme-toggle",
    "cat": "Action",
    "description": "A modern light/dark switch that shows both icons (sun + moon) at once, so the current and available theme are always visible. aria-checked=\"true\" means dark mode."
  },
  {
    "name": "Breadcrumb",
    "href": "/components/breadcrumb",
    "cat": "Navigation",
    "description": "A horizontal breadcrumb trail for hierarchical navigation."
  },
  {
    "name": "Pagination",
    "href": "/components/pagination",
    "cat": "Navigation",
    "description": "A row of page-number controls for navigating multi-page content."
  },
  {
    "name": "Tag",
    "href": "/components/tag",
    "cat": "Data Display",
    "description": "Interactive, optionally removable tag for categorisation and filtering."
  },
  {
    "name": "Accordion",
    "href": "/components/accordion",
    "cat": "Layout",
    "description": "A vertically stacked set of collapsible sections. CSS-only open/close via modifier."
  },
  {
    "name": "Drawer",
    "href": "/components/drawer",
    "cat": "Overlay",
    "description": "A sliding overlay panel anchored to the edge of the viewport."
  },
  {
    "name": "Progress",
    "href": "/components/progress",
    "cat": "Data Display",
    "description": "Progress bar with label row and step indicator for multi-step flows."
  },
  {
    "name": "Datepicker",
    "href": "/components/datepicker",
    "cat": "Form",
    "description": "Calendar dropdown for date selection. Popover positioning with scale animation. Supports compact mode for inline/table usage."
  },
  {
    "name": "Drop Zone",
    "href": "/components/drop-zone",
    "cat": "Form",
    "description": "Dashed-border upload area with icon, label, hint, and progress states."
  },
  {
    "name": "Select",
    "href": "/components/custom-select",
    "cat": "Form",
    "description": "One select, two renderings: styled panel by default when options are provided (search auto over 5), OS-native via children or the native prop."
  },
  {
    "name": "Popover",
    "href": "/components/popover",
    "cat": "Overlay",
    "description": "Flexible popover for displaying complex content anchored to a trigger element."
  },
  {
    "name": "Slider",
    "href": "/components/slider",
    "cat": "Form",
    "description": "Range slider input with customizable thumb and track styling."
  },
  {
    "name": "Timeline",
    "href": "/components/timeline",
    "cat": "Data Display",
    "description": "Vertical timeline for roadmaps, activity feeds, and step-based flows."
  },
  {
    "name": "Kbd",
    "href": "/components/kbd",
    "cat": "Action",
    "description": "Keyboard shortcut display with a raised 3D key appearance."
  },
  {
    "name": "Command",
    "href": "/components/command",
    "cat": "Overlay",
    "description": "Command palette / search overlay following the Cmd+K pattern."
  },
  {
    "name": "Sortable",
    "href": "/components/sortable",
    "cat": "Action",
    "description": "Drag-to-reorder styles for table rows or list items. Provides grip handle, dragging states, and drop zone indicators."
  },
  {
    "name": "Search",
    "href": "/components/search",
    "cat": "Action",
    "description": "Inline search bar with dropdown results, keyboard navigation, and mobile expansion."
  },
  {
    "name": "Toolbar",
    "href": "/components/toolbar",
    "cat": "Navigation",
    "description": "Horizontal bar with action buttons, segmented controls, and scrollable groups."
  },
  {
    "name": "Chip",
    "href": "/components/chip",
    "cat": "Data Display",
    "description": "Interactive filter/sort chips with optional remove button."
  },
  {
    "name": "Icon Button",
    "href": "/components/icon-btn",
    "cat": "Action",
    "description": "Standalone icon button for actions, toolbars, and table rows."
  },
  {
    "name": "Bottom Nav",
    "href": "/components/bottom-nav",
    "cat": "Navigation",
    "description": "Mobile bottom navigation bar, hidden on desktop."
  },
  {
    "name": "Spinner",
    "href": "/components/spinner",
    "cat": "Feedback",
    "description": "CSS-only loading spinner with size and color variants."
  },
  {
    "name": "Field",
    "href": "/components/field",
    "cat": "Form",
    "description": "Unified wrapper for form fields — label + input slot + hint + error."
  },
  {
    "name": "Stat Card",
    "href": "/components/stat-card",
    "cat": "Data Display",
    "description": "Compact metric display with label, value, detail, and optional icon."
  },
  {
    "name": "Collapsible",
    "href": "/components/collapsible",
    "cat": "Layout",
    "description": "Single collapsible section — a standalone, simplified accordion item."
  },
  {
    "name": "Description List",
    "href": "/components/description-list",
    "cat": "Data Display",
    "description": "Key-value pairs display with horizontal, vertical, bordered, and striped layouts."
  },
  {
    "name": "Result",
    "href": "/components/result",
    "cat": "Data Display",
    "description": "Feedback page for success, error, 404, or informational outcomes."
  },
  {
    "name": "Combobox",
    "href": "/components/combobox",
    "cat": "Form",
    "description": "Text input with filterable dropdown results. Supports single/multi-select, inline creation, and keyboard navigation."
  },
  {
    "name": "Number Input",
    "href": "/components/number-input",
    "cat": "Form",
    "description": "Numeric input with increment/decrement stepper buttons."
  },
  {
    "name": "Pin Input",
    "href": "/components/pin-input",
    "cat": "Form",
    "description": "One-character-per-field input for OTP codes, PINs, and verification."
  },
  {
    "name": "Segmented Control",
    "href": "/components/segmented-control",
    "cat": "Navigation",
    "description": "Toggle between 2-5 mutually exclusive options. Compact alternative to tabs."
  },
  {
    "name": "Copy Button",
    "href": "/components/copy-button",
    "cat": "Action",
    "description": "Icon button with clipboard feedback state (idle → copied)."
  },
  {
    "name": "Gallery",
    "href": "/components/gallery",
    "cat": "Layout",
    "description": "Image gallery with main image, thumbnail strip, and lightbox overlay."
  },
  {
    "name": "Scroll Area",
    "href": "/components/scroll-area",
    "cat": "Layout",
    "description": "Custom-styled scrollbar for overflow containers. Cross-browser."
  },
  {
    "name": "Color Picker",
    "href": "/components/color-picker",
    "cat": "Form",
    "description": "Grid of color swatches for selection."
  },
  {
    "name": "Truncated Text",
    "href": "/components/truncated-text",
    "cat": "Data Display",
    "description": "Display long text (hashes, addresses, IDs) with middle or end truncation."
  },
  {
    "name": "Bottom Sheet",
    "href": "/components/bottom-sheet",
    "cat": "Overlay",
    "description": "Mobile overlay sliding up from the bottom."
  },
  {
    "name": "Star Rating",
    "href": "/components/star-rating",
    "cat": "Form",
    "description": "Display or input star ratings with half-star support."
  },
  {
    "name": "Hero",
    "href": "/components/hero",
    "cat": "Layout",
    "description": "Full-width hero section with background image, gradient overlay, and optional frosted glass backdrop."
  },
  {
    "name": "Prose & Editorial",
    "href": "/components/prose",
    "cat": "Layout",
    "description": "Long-form reading typography. ds-prose-block is a full markdown-rendered container (functional / docs / CMS output). ds-editorial-title, ds-editorial-lede and ds-editorial-body are the editorial long-form family for articles, blog posts and magazine layouts (promoted from esys blog 12 Apr 2026 — fills the gap between ds-hero-title which is too big and ds-prose-block whose h2 is too heavy for article rhythm)."
  },
  {
    "name": "Admin Layout",
    "href": "/components/admin-layout",
    "cat": "Layout",
    "description": "Sidebar + header + main content system for admin dashboards with collapsible sidebar."
  },
  {
    "name": "Page Header",
    "href": "/components/page-header",
    "cat": "Layout",
    "description": "Top bar of an admin/dashboard page: optional back arrow, title, and right-aligned actions slot."
  },
  {
    "name": "Admin Page",
    "href": "/components/admin-page",
    "cat": "Layout",
    "description": "Vertical rhythm contract for an admin page: header, toolbar, body and footer spaced by the system instead of by a per-page wrapper."
  },
  {
    "name": "Admin Form Layout",
    "href": "/components/admin-form",
    "cat": "Layout",
    "description": "Two-column admin edit shell: growing main column + fixed-width sidebar, single column below lg."
  },
  {
    "name": "Media Library",
    "href": "/components/media-library",
    "cat": "Layout",
    "description": "Grid items, selection toolbar, detail panel, and folder sidebar for media management UI."
  }
];

export default function ComponentsIndex() {
  return (
    <>
      <div className="demo-page-header">
        <h1>Components</h1>
        <p>All 65 components in the design system.</p>
      </div>
      <div className="demo-preview demo-preview--col">
        {COMPONENTS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="demo-component-link"
            style={{ textDecoration: "none" }}
          >
            <span className="demo-component-link__name">{c.name}</span>
            <span className="demo-component-link__cat">{c.cat}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
