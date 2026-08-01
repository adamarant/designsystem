/* The icon set.

   This page used to be an inventory of a problem: eleven marks drawn inside
   whichever component happened to need one, on three grids, with the geometry
   copied here because none of them could be imported. All of that is gone. The
   marks now come from one module and this page imports them, so what you see
   below is the shipped API rather than a specimen of it. */

import {
  Badge,
  Text,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  EllipsisIcon,
  CloseIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  SearchIcon,
  CalendarIcon,
  UploadIcon,
  CopyIcon,
  StarFilledIcon,
  StarOutlineIcon,
  GripIcon,
  UndoIcon,
  RedoIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  EyeIcon,
  EyeOffIcon,
  type IconProps,
} from "@adamarant/ds-react";

type Icon = React.ComponentType<IconProps>;

const GROUPS: { title: string; note: string; icons: [string, Icon][] }[] = [
  {
    title: "Disclosure and navigation",
    note: "Left and right are the down chevron rotated, not separate drawings, so the four cannot drift apart. They swap in place in accordions, sort headers and pagination, where a size or vertex mismatch would show as a jump.",
    icons: [
      ["ChevronDownIcon", ChevronDownIcon],
      ["ChevronUpIcon", ChevronUpIcon],
      ["ChevronLeftIcon", ChevronLeftIcon],
      ["ChevronRightIcon", ChevronRightIcon],
      ["ArrowLeftIcon", ArrowLeftIcon],
      ["EllipsisIcon", EllipsisIcon],
    ],
  },
  {
    title: "Confirm and dismiss",
    note: "CloseIcon is the most-used mark in the system: modal, drawer, bottom sheet, toast, lightbox, alert dismiss, chip and tag removal, search clear.",
    icons: [
      ["CloseIcon", CloseIcon],
      ["CheckIcon", CheckIcon],
      ["PlusIcon", PlusIcon],
      ["MinusIcon", MinusIcon],
    ],
  },
  {
    title: "Status",
    note: "Determined by the variant on Alert, Toast and Result. Their CSS has always coloured a __icon slot per variant; until now nothing filled it.",
    icons: [
      ["InfoIcon", InfoIcon],
      ["SuccessIcon", SuccessIcon],
      ["WarningIcon", WarningIcon],
      ["ErrorIcon", ErrorIcon],
    ],
  },
  {
    title: "Affordances",
    note: "StarFilledIcon and StarOutlineIcon are the same star, one solid and one not, so hovering across a rating changes the fill and nothing else.",
    icons: [
      ["SearchIcon", SearchIcon],
      ["CalendarIcon", CalendarIcon],
      ["UploadIcon", UploadIcon],
      ["CopyIcon", CopyIcon],
      ["StarFilledIcon", StarFilledIcon],
      ["StarOutlineIcon", StarOutlineIcon],
      ["GripIcon", GripIcon],
    ],
  },
  {
    title: "Editor history",
    note: "An exact 180° pair, verified rather than assumed.",
    icons: [
      ["UndoIcon", UndoIcon],
      ["RedoIcon", RedoIcon],
    ],
  },
  {
    title: "Theme and chrome",
    note: "Sun and moon swap inside the same ThemeToggle button.",
    icons: [
      ["SunIcon", SunIcon],
      ["MoonIcon", MoonIcon],
      ["MenuIcon", MenuIcon],
    ],
  },
  {
    title: "No consumer yet",
    note: "The one deliberate exception to the rule below: nothing in the system asks for these, and they are here for the password reveal that Input does not have. If that never lands, they leave.",
    icons: [
      ["EyeIcon", EyeIcon],
      ["EyeOffIcon", EyeOffIcon],
    ],
  },
];

/* Sizes, and the control tier each belongs inside. */
const SIZES: [string, number, string][] = [
  ["--ds-icon-1", 16, "inside a 24px control — size-1, xs"],
  ["--ds-icon-2", 20, "inside a 32px control — size-2, sm"],
  ["--ds-icon-3", 24, "inside a 40px control — size-3, md"],
  ["--ds-icon-4", 28, "inside a 48px control — size-4, lg"],
];

const SHIPS: [string, string][] = [
  ["Modal, Drawer, BottomSheet, Toast", "always a close mark"],
  ["Select, Combobox, Accordion, Collapsible", "always a down chevron"],
  ["Checkbox, Select option", "always a check"],
  ["Alert, Toast, Result — semantic variants", "the mark the variant names"],
  ["Pagination, Datepicker", "chevrons, in a known direction"],
  ["CopyButton, NumberInput, ThemeToggle, Sortable", "a mark tied to state"],
];

const SLOTS: [string, string][] = [
  ["EmptyState.Icon", ".ds-empty-state__icon"],
  ["StatCard.Icon", ".ds-stat-card__icon"],
  ["Tabs.Icon", ".ds-tabs__icon"],
  ["Dropdown.ItemIcon", ".ds-dropdown__item-icon"],
  ["Alert.Icon", ".ds-alert__icon"],
  ["InputGroup.Icon", ".ds-input-group__icon"],
];

export default function IconsPage() {
  const total = GROUPS.reduce((n, g) => n + g.icons.length, 0);

  return (
    <>
      <div className="demo-page-header">
        <h1>Icons</h1>
        <p>
          A closed set of {`${total} marks`}{" "}
          &mdash; exactly what the system&rsquo;s
          own components decide for themselves. It is not an icon library and it
          does not grow on request. Everything the <em>content</em> decides
          stays a slot you fill with your own set.
        </p>
      </div>

      <section className="demo-section">
        <h2 className="demo-section__title">The set</h2>
        <p className="demo-section__description">
          One grid and one weight: a 24 viewBox at stroke 2, corner radius 2.
          Shown at 24px. Colour is <code>currentColor</code>, so a mark inherits
          whatever text colour its container sets &mdash; which means the text
          colour hierarchy applies to icons too, and a mark that carries meaning
          takes primary, not secondary.
        </p>
        <div className="demo-preview demo-preview--col">
          {GROUPS.map((g) => (
            <div className="icon-group" key={g.title}>
              <div className="demo-token-label">
                {g.title}
                <span className="demo-token-label__size">
                  {g.icons.length} {g.icons.length === 1 ? "mark" : "marks"}
                </span>
              </div>
              <div className="icon-set">
                {g.icons.map(([name, Mark]) => (
                  <div className="icon-set__cell" key={name}>
                    <Mark size={24} />
                    <span className="icon-set__name">{name}</span>
                  </div>
                ))}
              </div>
              <Text size="xs" color="secondary">
                {g.note}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Sizing</h2>
        <p className="demo-section__description">
          <code>size</code> takes a number as pixels, or any CSS length, so{" "}
          <code>size=&quot;var(--ds-icon-2)&quot;</code> follows the token scale.
          The default is 24. Each step pairs with the control tier it sits
          inside &mdash; see <a href="/foundations/spacing">Spacing</a> for the
          heights.
        </p>
        <div className="demo-preview demo-preview--col">
          {SIZES.map(([token, px, tier]) => (
            <div className="icon-size-row" key={token}>
              <div className="demo-token-label">
                {token}
                <span className="demo-token-label__size">{px}px</span>
              </div>
              <div className="icon-size-row__marks">
                <SearchIcon size={px} />
                <ChevronDownIcon size={px} />
                <CloseIcon size={px} />
                <CheckIcon size={px} />
              </div>
              <Text size="xs" color="tertiary">
                {tier}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">What is ours and what is yours</h2>
        <p className="demo-section__description">
          <strong>
            The system ships the mark when the component decides which mark it
            is. You supply it when the content decides.
          </strong>{" "}
          The test: name the icon from the component and its state alone, knowing
          nothing about the page. If you can, it is ours.
        </p>
        <div className="demo-preview demo-preview--col">
          <div className="icon-boundary">
            <div className="icon-boundary__col">
              <div className="demo-token-label">The system draws it</div>
              {SHIPS.map(([where, what]) => (
                <div className="icon-boundary__row" key={where}>
                  <span>{where}</span>
                  <span className="icon-boundary__what">{what}</span>
                </div>
              ))}
            </div>
            <div className="icon-boundary__col">
              <div className="demo-token-label">You fill it</div>
              {SLOTS.map(([name, renders]) => (
                <div className="icon-boundary__row" key={name}>
                  <span className="icon-mono">{name}</span>
                  <span className="icon-boundary__what icon-mono">
                    {renders}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="demo-section__description">
          The right-hand column is a styled box with no mark of its own, and it
          never gains one. <code>.ds-icon-box</code> is the CSS counterpart
          &mdash; square, centred, not interactive; <code>.ds-icon-btn</code> is
          the interactive one. Neither supplies a glyph.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Replacing one</h2>
        <p className="demo-section__description">
          Every shipped mark is a default, not a fixture. Components that draw
          one take an override, so a project on its own icon set swaps a single
          mark without touching anything else &mdash; and without the set
          growing to accommodate it.
        </p>
        <div className="demo-code">
          <pre>
            <code>{`import { ChevronDownIcon } from "@adamarant/ds-react";

// the default
<Select />

// your own, same place
<Select icon={<IconChevronBottom />} />

// on the token scale rather than a fixed box
<ChevronDownIcon size="var(--ds-icon-1)" />`}</code>
          </pre>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">
          Not settled yet <Badge size="sm">4 marks</Badge>
        </h2>
        <p className="demo-section__description">
          Stated here rather than left to be discovered.{" "}
          <code>CloseIcon</code>, <code>CheckIcon</code> and{" "}
          <code>ArrowLeftIcon</code> measure stroke 3 against the set&rsquo;s 2
          &mdash; visible when the close sits beside a chevron in the same
          control &mdash; and are waiting on a re-export.{" "}
          <code>MenuIcon</code> is the two-line burger, which reads as an equals
          sign at 16px; the admin header draws a three-line one, so the system
          currently disagrees with itself and one of the two has to give.
        </p>
        <div className="demo-preview">
          {([
            ["CloseIcon", CloseIcon],
            ["CheckIcon", CheckIcon],
            ["ArrowLeftIcon", ArrowLeftIcon],
            ["MenuIcon", MenuIcon],
          ] as [string, Icon][]).map(([name, Mark]) => (
            <div className="icon-size" key={name}>
              <Mark size={24} />
              <Text size="xs" color="tertiary">
                {name}
              </Text>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
