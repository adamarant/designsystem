'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
export function ContactForm({ endpoint, labels }) {
    const [status, setStatus] = useState('idle');
    async function handleSubmit(e) {
        e.preventDefault();
        if (!endpoint || status === 'sending')
            return;
        const form = e.currentTarget;
        const payload = Object.fromEntries(new FormData(form).entries());
        setStatus('sending');
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok)
                throw new Error(String(res.status));
            form.reset();
            setStatus('sent');
        }
        catch {
            setStatus('failed');
        }
    }
    if (status === 'sent') {
        return _jsx("p", { className: "ds-copy", children: labels.success });
    }
    return (_jsxs("form", { className: "ds-form", onSubmit: handleSubmit, children: [_jsxs("div", { className: "ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-6", children: [_jsxs("div", { className: "ds-field ds-field--required", children: [_jsx("label", { className: "ds-field__label", htmlFor: "contacts-nome", children: labels.nome }), _jsx("input", { className: "ds-input", id: "contacts-nome", name: "nome", autoComplete: "given-name", required: true })] }), _jsxs("div", { className: "ds-field ds-field--required", children: [_jsx("label", { className: "ds-field__label", htmlFor: "contacts-cognome", children: labels.cognome }), _jsx("input", { className: "ds-input", id: "contacts-cognome", name: "cognome", autoComplete: "family-name", required: true })] })] }), _jsxs("div", { className: "ds-field ds-field--required", children: [_jsx("label", { className: "ds-field__label", htmlFor: "contacts-email", children: labels.email }), _jsx("input", { className: "ds-input", id: "contacts-email", name: "email", type: "email", autoComplete: "email", required: true })] }), _jsxs("div", { className: "ds-field ds-field--required", children: [_jsx("label", { className: "ds-field__label", htmlFor: "contacts-messaggio", children: labels.messaggio }), _jsx("textarea", { className: "ds-textarea", id: "contacts-messaggio", name: "messaggio", rows: 6, required: true })] }), status === 'failed' ? (_jsx("p", { className: "ds-field__error", role: "alert", children: labels.error })) : null, _jsx("div", { className: "ds-form__actions", children: _jsx("button", { type: "submit", className: "ds-btn ds-btn--lg ds-btn--pill", disabled: status === 'sending', children: labels.submit }) })] }));
}
//# sourceMappingURL=ContactForm.js.map