/* The admin package used to draw its own six marks so it could stay free of an
   icon dependency. That freedom cost a duplicate set: its chevrons, search, X
   and grip were separate drawings of marks ds-react also had, and the two
   drifted — the header burger had three bars where the site header had two.

   They now come from the set. The local names are kept so nothing in this
   package had to move, and none of this is exported: consumer-facing icons
   (row actions, nav items) are still passed in as props. */
export {
  IconArrowLeft as ArrowLeftIcon,
  IconChevronLeft as ChevronLeftIcon,
  IconChevronRight as ChevronRightIcon,
  IconSearch as SearchIcon,
  IconClose as XIcon,
  IconGrip as GripVerticalIcon,
} from "@adamarant/ds-react";
