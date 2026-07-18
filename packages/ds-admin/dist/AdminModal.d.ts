import type { AdminModalProps } from './types.js';
/**
 * Generic dialog over the DS .ds-modal — the shell every admin modal needs
 * (media picker, history, detail panel) and that projects kept rebuilding by
 * hand. AdminConfirmDialog stays the shortcut for a yes/no; reach for this one
 * whenever the body is real content.
 *
 * The .ds-modal element is itself the backdrop, so there is no separate
 * overlay node — hand-rolled copies that added one were styling nothing,
 * since the DS ships no such element.
 *
 * Renders nothing when closed.
 */
export declare function AdminModal({ open, title, children, onClose, footer, size, closeLabel, closeOnBackdrop, className, }: AdminModalProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=AdminModal.d.ts.map