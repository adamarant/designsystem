/* ==========================================================================
   @adamarant/ds-admin/theme

   Separate entry point on purpose: this is the only part of the package that
   needs `next-themes`. Keeping it out of the main barrel means consumers
   without that dependency (divasti) can keep importing everything else.
   ========================================================================== */

export { AdminThemeToggle } from './AdminThemeToggle.js'
export type { AdminThemeToggleProps } from './types.js'
