-- @adamarant/ds-builder 0.6.0 — author-defined page order.
--
-- Adds the column the page switcher drags against. Replace `builder_` with your
-- project's table prefix before running. Safe to re-run.
--
-- Existing rows all land on position 0, so until the first drag the switcher
-- falls back to its previous order (most recently edited first).

alter table builder_pages
  add column if not exists position integer not null default 0;

-- Seed a stable starting order from the current listing order, so the first
-- drag moves one row instead of shuffling everything.
with ordered as (
  select id, row_number() over (order by updated_at desc) - 1 as pos
  from builder_pages
)
update builder_pages p
set position = ordered.pos
from ordered
where p.id = ordered.id and p.position = 0;
