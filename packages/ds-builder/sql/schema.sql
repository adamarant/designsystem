-- @adamarant/ds-builder — page store schema.
--
-- Two tables, per project prefix. Replace `builder_` with your project's table
-- prefix (e.g. `esys_`) before running — the same convention as @adamarant/cms.
-- Both tables have RLS enabled with NO public policies: pages are read/written
-- only through the service_role key in server code (Server Components / API
-- routes), never from the browser. Public visitors get the published content
-- server-rendered; they never touch these tables directly.

-- One row per page. Holds the working draft and the last published snapshot
-- side by side, so editing never affects the live page.
create table if not exists builder_pages (
  id                uuid primary key default gen_random_uuid(),
  slug              text not null unique,
  title             text not null default '',
  status            text not null default 'draft' check (status in ('draft', 'published')),
  -- source locale + the locales this page holds content for (consumer-defined)
  default_locale    text not null default 'en',
  locales           text[] not null default array['en'],
  -- the editable working copy (a PageDocument JSON)
  draft_content     jsonb not null default
                      '{"schemaVersion":1,"defaultLocale":"en","locales":["en"],"blocks":[]}'::jsonb,
  -- the live snapshot; null until first publish
  published_content jsonb,
  -- monotonically increasing published version counter
  current_version   integer not null default 0,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

alter table builder_pages enable row level security;

-- Immutable snapshot per publish, for history and rollback.
create table if not exists builder_page_versions (
  id         uuid primary key default gen_random_uuid(),
  page_id    uuid not null references builder_pages(id) on delete cascade,
  version    integer not null,
  content    jsonb not null,
  note       text,
  created_at timestamptz not null default now(),
  unique (page_id, version)
);

alter table builder_page_versions enable row level security;

create index if not exists builder_page_versions_page_idx
  on builder_page_versions (page_id);
