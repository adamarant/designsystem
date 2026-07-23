export type { Size } from "./types";

export { Flex, type FlexProps } from "./primitives/Flex";
export { Stack, type StackProps } from "./primitives/Stack";
export { Grid, type GridProps } from "./primitives/Grid";
export { Text, type TextProps } from "./primitives/Text";
export { Center, type CenterProps } from "./primitives/Center";

export { Label, type LabelProps } from "./components/Label";

export {
  Button,
  ButtonGroup,
  type ButtonProps,
  type ButtonGroupProps,
} from "./components/Button";

export { Badge, type BadgeProps } from "./components/Badge";

export {
  Input,
  Textarea,
  InputGroup,
  InputGroupIcon,
  Help,
  Checkbox,
  Radio,
  type InputProps,
  type TextareaProps,
  type InputGroupProps,
  type InputGroupIconProps,
  type HelpProps,
  type CheckboxProps,
  type RadioProps,
} from "./components/Input";

/* One select, two renderings: native by default, styled panel with search via
   `searchable` / `panel`. Same export name as before — existing native usage
   is untouched. */
export {
  Select,
  type SelectProps,
  type SelectOption,
  type SelectSize,
} from "./components/Select";

export { ignorePasswordManagers } from "./utils/passwordManager";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardMedia,
  type CardProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardBodyProps,
  type CardFooterProps,
  type CardMediaProps,
} from "./components/Card";

export {
  Alert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertClose,
  type AlertProps,
  type AlertIconProps,
  type AlertContentProps,
  type AlertTitleProps,
  type AlertDescriptionProps,
  type AlertCloseProps,
} from "./components/Alert";

export {
  Tag,
  TagRemove,
  type TagProps,
  type TagRemoveProps,
} from "./components/Tag";

export {
  Avatar,
  AvatarStatus,
  AvatarGroup,
  type AvatarProps,
  type AvatarStatusProps,
  type AvatarGroupProps,
} from "./components/Avatar";

export { Spinner, type SpinnerProps } from "./components/Spinner";

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalClose,
  ModalBody,
  ModalFooter,
  type ModalProps,
  type ModalContentProps,
  type ModalHeaderProps,
  type ModalCloseProps,
  type ModalBodyProps,
  type ModalFooterProps,
} from "./components/Modal";

export {
  Tabs,
  TabsList,
  TabsTab,
  TabsIcon,
  TabsCount,
  TabsPanel,
  type TabsProps,
  type TabsListProps,
  type TabsTabProps,
  type TabsIconProps,
  type TabsCountProps,
  type TabsPanelProps,
} from "./components/Tabs";

export {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownItemIcon,
  DropdownItemLabel,
  DropdownItemShortcut,
  DropdownDivider,
  DropdownHeader,
  type DropdownProps,
  type DropdownTriggerProps,
  type DropdownMenuProps,
  type DropdownItemProps,
  type DropdownItemIconProps,
  type DropdownItemLabelProps,
  type DropdownItemShortcutProps,
  type DropdownDividerProps,
  type DropdownHeaderProps,
} from "./components/Dropdown";

export {
  Tooltip,
  TooltipContent,
  type TooltipProps,
  type TooltipContentProps,
} from "./components/Tooltip";

export {
  Toggle,
  ToggleLabel,
  ToggleLabelText,
  type ToggleProps,
  type ToggleLabelProps,
  type ToggleLabelTextProps,
} from "./components/Toggle";

export {
  ThemeToggle,
  type ThemeToggleProps,
} from "./components/ThemeToggle";

export {
  Table,
  TableWrapper,
  TableSort,
  TableFooter,
  type TableProps,
  type TableWrapperProps,
  type TableSortProps,
  type TableFooterProps,
} from "./components/Table";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionBody,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
  type AccordionBodyProps,
} from "./components/Accordion";

export {
  StatCard,
  StatCardLabel,
  StatCardValue,
  StatCardDetail,
  StatCardIcon,
  type StatCardProps,
  type StatCardLabelProps,
  type StatCardValueProps,
  type StatCardDetailProps,
  type StatCardIconProps,
} from "./components/StatCard";

export { Chip, type ChipProps } from "./components/Chip";

export {
  PageHeader,
  PageHeaderLead,
  PageHeaderTitle,
  PageHeaderDescription,
  PageHeaderActions,
  PageHeaderBack,
  type PageHeaderProps,
  type PageHeaderLeadProps,
  type PageHeaderTitleProps,
  type PageHeaderDescriptionProps,
  type PageHeaderActionsProps,
  type PageHeaderBackProps,
} from "./components/PageHeader";

export { Divider, type DividerProps } from "./components/Divider";
export { Progress,
  ProgressBar, type ProgressProps, type ProgressBarProps } from "./components/Progress";
export { Skeleton, type SkeletonProps } from "./components/Skeleton";
export { EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions, type EmptyStateProps } from "./components/EmptyState";
export { Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator, type BreadcrumbProps } from "./components/Breadcrumb";
export { Pagination,
  PaginationList,
  PaginationItem, type PaginationProps } from "./components/Pagination";
export { Kbd, type KbdProps } from "./components/Kbd";
export { Search,
  SearchInput, type SearchProps } from "./components/Search";
export { IconBtn, type IconBtnProps } from "./components/IconBtn";

export { Nav,
  NavList,
  NavItem, type NavProps } from "./components/Nav";
export { Toast,
  ToastClose, type ToastProps } from "./components/Toast";
export { Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerClose, type DrawerProps } from "./components/Drawer";
export { Popover,
  PopoverTrigger,
  PopoverContent, type PopoverProps } from "./components/Popover";
export { Collapsible,
  CollapsibleTrigger,
  CollapsibleContent, type CollapsibleProps } from "./components/Collapsible";
export { CopyButton, type CopyButtonProps } from "./components/CopyButton";
export { SegmentedControl,
  SegmentedControlItem, type SegmentedControlProps } from "./components/SegmentedControl";
export { Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent, type TimelineProps } from "./components/Timeline";
export { DescriptionList,
  DescriptionListTerm,
  DescriptionListDetail, type DescriptionListProps } from "./components/DescriptionList";
export { Result,
  ResultIcon,
  ResultTitle,
  ResultDescription,
  ResultActions, type ResultProps } from "./components/Result";
export { TruncatedText, type TruncatedTextProps } from "./components/TruncatedText";
export { BottomNav,
  BottomNavItem, type BottomNavProps } from "./components/BottomNav";
export { Toolbar, type ToolbarProps } from "./components/Toolbar";
export { Gallery,
  GalleryItem, type GalleryProps } from "./components/Gallery";
export { ScrollArea, type ScrollAreaProps } from "./components/ScrollArea";
export { Hero,
  HeroTitle,
  HeroDescription,
  HeroActions, type HeroProps } from "./components/Hero";
export { Prose, type ProseProps } from "./components/Prose";

export { BottomSheet,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetBody, type BottomSheetProps } from "./components/BottomSheet";
export { Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup, type CommandProps } from "./components/Command";
export { Datepicker, type DatepickerProps } from "./components/Datepicker";
export { DropZone, type DropZoneProps } from "./components/DropZone";
export { CustomSelect, type CustomSelectProps } from "./components/CustomSelect";
export { Slider, type SliderProps } from "./components/Slider";
export { Field, type FieldProps } from "./components/Field";
export {
  Combobox,
  type ComboboxProps,
  type ComboboxOption,
} from "./components/Combobox";
export { NumberInput, type NumberInputProps } from "./components/NumberInput";
export { PinInput, type PinInputProps } from "./components/PinInput";
export { ColorPicker, type ColorPickerProps } from "./components/ColorPicker";
export { StarRating, type StarRatingProps } from "./components/StarRating";
export { Sortable, type SortableProps } from "./components/Sortable";
export { AdminLayout,
  AdminLayoutSidebar,
  AdminLayoutMain,
  AdminLayoutHeader, type AdminLayoutProps } from "./components/AdminLayout";

export {
  useContextMenu,
  type UseContextMenuOptions,
  type UseContextMenuReturn,
  type ContextMenuItem,
  type ContextMenuAction,
  type ContextMenuDivider,
  type ContextMenuLabel,
} from "./components/ContextMenu";

export {
  TurnstileWidget,
  type TurnstileWidgetProps,
  type TurnstileWidgetHandle,
} from "./components/TurnstileWidget";

export { ClipReveal, type ClipRevealProps } from "./components/ClipReveal";

/* SiteKit (Fase 6) — site chrome written once. */
export {
  SiteHeader,
  type SiteHeaderProps,
  type SiteNavItem,
} from "./components/SiteHeader";
export { SiteFooter, type SiteFooterProps } from "./components/SiteFooter";
export {
  LangSwitcher,
  type LangSwitcherProps,
  type LangSwitcherItem,
} from "./components/LangSwitcher";
