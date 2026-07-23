/* ==================================================================
   Shared control-size vocabulary.

   Maps 1:1 onto the DS height tiers (spacing.css):
     xs → --ds-size-1 (24px)
     sm → --ds-size-2 (32px)
     md → --ds-size-3 (40px, default — no class emitted)
     lg → --ds-size-4 (48px)

   Law (designsystem/CLAUDE.md §3): inline components at the same size
   tier MUST share the same height. Every control's `size` prop derives
   from this union so that a row mixing Button/Input/Select/Tag can be
   aligned by construction. Button additionally extends to xl/2xl
   (--ds-size-5/6) for hero CTAs; controls whose CSS has no xs tier
   narrow with Exclude<Size, "xs">.
   ================================================================== */

export type Size = "xs" | "sm" | "md" | "lg";
