'use client'

import type { AdminBadgeTone, AdminStatusBadgeProps } from './types.js'

const TONE_CLASS: Record<AdminBadgeTone, string> = {
  neutral: 'ds-badge--outline',
  success: 'ds-badge--success',
  warning: 'ds-badge--warning',
  info: 'ds-badge--info',
  error: 'ds-badge--error',
}

/** Status pill over the DS .ds-badge. Consumer maps its status → tone. */
export function AdminStatusBadge({ label, tone = 'neutral', className }: AdminStatusBadgeProps) {
  return (
    <span className={`ds-badge ${TONE_CLASS[tone]}${className ? ` ${className}` : ''}`}>{label}</span>
  )
}
