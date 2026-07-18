'use client'

import { AdminPageHeader } from './AdminPageHeader.js'
import { AdminToolbar } from './AdminToolbar.js'
import { AdminEmptyState } from './AdminEmptyState.js'
import { AdminSpinner } from './AdminSpinner.js'
import { AdminPagination } from './AdminPagination.js'
import type { AdminPageProps } from './types.js'

/**
 * The page-level contract for an admin screen: header, toolbar, body, footer,
 * spaced by the system rather than by whatever wrapper the page happened to
 * open with.
 *
 * This exists because the primitives alone weren't enough. AdminPageHeader and
 * AdminToolbar each lay out their own row correctly, but the space *between*
 * them belonged to the consumer — so one page wrapped them in
 * `ds-flex ds-flex-col ds-gap-6` (24px gap on top of the header's own 24px
 * margin = 48px), the next used a bare <div> and patched it with `ds-mb-4` on
 * the toolbar, and the same project drifted page to page. An audit across 14
 * admin panels found eight different wrappers for this one job.
 *
 * So the rhythm moved in here. There is no `gap` prop and no spacing escape
 * hatch: pages declare what they contain, not how far apart it sits.
 *
 * `status` centralises the two states every list page reimplements. Note that
 * header and toolbar stay mounted while loading — the search box shouldn't
 * vanish mid-fetch — which the common `if (loading) return <Spinner/>` early
 * return gets wrong.
 *
 * Overlays go in `overlays`, not `children`: a modal that returns a wrapper
 * node while closed would otherwise occupy a slot in the flex column and add a
 * phantom gap under the page.
 *
 * @example
 * <AdminPage
 *   title="Shots"
 *   actions={<Button onClick={openEditor}>New Shot</Button>}
 *   search={{ value: q, onChange: setQ, placeholder: 'Search shots…' }}
 *   filters={[{ variant: 'segmented', value: type, onChange: setType, options: TYPES }]}
 *   status={loading ? 'loading' : shots.length === 0 ? 'empty' : 'ready'}
 *   empty={{ title: 'No shots yet', actions: <Button>Create your first shot</Button> }}
 *   pagination={{ page, totalPages, onPageChange: setPage }}
 *   overlays={<ShotEditor open={editorOpen} onClose={close} />}
 * >
 *   <div className="ds-grid ds-gap-4 ds-sm:grid-cols-2">{cards}</div>
 * </AdminPage>
 */
export function AdminPage({
  title,
  description,
  onBack,
  backLabel,
  actions,
  titleClassName,
  search,
  filters,
  toolbarActions,
  toolbar,
  status = 'ready',
  empty,
  loadingLabel,
  pagination,
  footer,
  overlays,
  children,
  className,
}: AdminPageProps) {
  // A header without a title isn't a thing — actions and back belong to one.
  const hasHeader = title !== undefined
  const hasToolbarProps = search !== undefined || filters !== undefined || toolbarActions !== undefined
  const showToolbar = toolbar !== undefined || hasToolbarProps

  let body
  if (status === 'loading') {
    body = <AdminSpinner label={loadingLabel} />
  } else if (status === 'empty' && empty) {
    body = <AdminEmptyState variant="card" {...empty} />
  } else {
    body = children
  }

  const showFooter = footer !== undefined || (pagination !== undefined && status === 'ready')

  return (
    <>
      <div className={className ? `ds-admin-page ${className}` : 'ds-admin-page'}>
        {hasHeader && (
          <AdminPageHeader
            title={title!}
            description={description}
            onBack={onBack}
            backLabel={backLabel}
            actions={actions}
            titleClassName={titleClassName}
          />
        )}

        {showToolbar && (
          <div className="ds-admin-page__toolbar">
            {toolbar ?? (
              <AdminToolbar search={search} filters={filters} actions={toolbarActions} />
            )}
          </div>
        )}

        {body !== undefined && body !== null && (
          <div className="ds-admin-page__body">{body}</div>
        )}

        {showFooter && (
          <div className="ds-admin-page__footer">
            {footer ?? (pagination && <AdminPagination {...pagination} />)}
          </div>
        )}
      </div>
      {overlays}
    </>
  )
}
