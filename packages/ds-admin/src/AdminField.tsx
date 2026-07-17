'use client'

import type { AdminFieldProps } from './types.js'

/**
 * A labelled form field over .ds-field. The label row carries an optional
 * right-aligned actions slot — locale pills, AI buttons, anything consumer-
 * specific — so a consumer never forks the field to add its own control. The
 * control itself is passed as children; hint/error render below.
 */
export function AdminField({
  label,
  children,
  htmlFor,
  actions,
  hint,
  error,
  required = false,
  className,
}: AdminFieldProps) {
  const classes = ['ds-field', required ? 'ds-field--required' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="ds-flex ds-justify-between ds-items-center">
        <label className="ds-field__label" htmlFor={htmlFor}>
          {label}
        </label>
        {actions}
      </div>
      {children}
      {error ? (
        <p className="ds-field__error">{error}</p>
      ) : hint ? (
        <p className="ds-field__hint">{hint}</p>
      ) : null}
    </div>
  )
}
