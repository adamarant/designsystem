import type { AdminSidebarLinkProps } from './types.js';
/**
 * A row in the sidebar footer: "Go to site", "Sign out".
 *
 * The shape was a slot before, and three panels had ended up with the same
 * twenty-five-line component copied verbatim while four had no footer at all.
 * What differs per project is the *action* — a callback, a fetch, a server
 * action — not the row, so the row lives here and the action arrives as a prop.
 *
 * Closes the mobile drawer on activation: a footer row either navigates away
 * or ends the session, and in both cases leaving the drawer open is wrong.
 */
export declare function AdminSidebarLink({ icon, children, href, external, onClick, type, className, }: AdminSidebarLinkProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminSidebarLink.d.ts.map