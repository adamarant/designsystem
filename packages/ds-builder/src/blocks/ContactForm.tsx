'use client'

import { useState } from 'react'

export interface ContactFormLabels {
  nome: string
  cognome: string
  email: string
  messaggio: string
  submit: string
  success: string
  error: string
}

export interface ContactFormProps {
  /** URL the form POSTs its JSON payload to. Empty means the form is inert. */
  endpoint: string
  labels: ContactFormLabels
}

type Status = 'idle' | 'sending' | 'sent' | 'failed'

/**
 * The interactive half of the contacts block.
 *
 * Deliberately transport-agnostic: it POSTs `{nome, cognome, email, messaggio}`
 * as JSON to whatever endpoint the page author configured, and reads success
 * from the HTTP status. Delivery (Resend, a queue, a CRM) stays the consumer's
 * route, so the block carries no secrets and no provider assumptions.
 *
 * With no endpoint configured the fields still render but submitting does
 * nothing — a page can be laid out and published before its route exists.
 *
 * Markup is plain DS classes rather than ds-react wrappers: the `blocks` entry
 * is what public sites ship, and it stays free of runtime dependencies. The
 * classes are exactly the ones the wrappers emit.
 */
export function ContactForm({ endpoint, labels }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!endpoint || status === 'sending') return

    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return <p className="ds-copy">{labels.success}</p>
  }

  return (
    <form className="ds-form" onSubmit={handleSubmit}>
      <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-6">
        <div className="ds-field ds-field--required">
          <label className="ds-field__label" htmlFor="contacts-nome">
            {labels.nome}
          </label>
          <input
            className="ds-input"
            id="contacts-nome"
            name="nome"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="ds-field ds-field--required">
          <label className="ds-field__label" htmlFor="contacts-cognome">
            {labels.cognome}
          </label>
          <input
            className="ds-input"
            id="contacts-cognome"
            name="cognome"
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      <div className="ds-field ds-field--required">
        <label className="ds-field__label" htmlFor="contacts-email">
          {labels.email}
        </label>
        <input
          className="ds-input"
          id="contacts-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="ds-field ds-field--required">
        <label className="ds-field__label" htmlFor="contacts-messaggio">
          {labels.messaggio}
        </label>
        <textarea
          className="ds-textarea"
          id="contacts-messaggio"
          name="messaggio"
          rows={6}
          required
        />
      </div>

      {status === 'failed' ? (
        <p className="ds-field__error" role="alert">
          {labels.error}
        </p>
      ) : null}

      <div className="ds-form__actions">
        <button
          type="submit"
          className="ds-btn ds-btn--lg ds-btn--pill"
          disabled={status === 'sending'}
        >
          {labels.submit}
        </button>
      </div>
    </form>
  )
}
