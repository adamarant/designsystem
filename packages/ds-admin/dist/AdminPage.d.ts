import type { AdminPageProps } from './types.js';
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
export declare function AdminPage({ title, description, onBack, backLabel, actions, titleClassName, search, filters, toolbarActions, toolbar, status, empty, loadingLabel, pagination, footer, overlays, children, className, }: AdminPageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdminPage.d.ts.map