export interface ContactFormLabels {
    nome: string;
    cognome: string;
    email: string;
    messaggio: string;
    submit: string;
    success: string;
    error: string;
}
export interface ContactFormProps {
    /** URL the form POSTs its JSON payload to. Empty means the form is inert. */
    endpoint: string;
    labels: ContactFormLabels;
}
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
export declare function ContactForm({ endpoint, labels }: ContactFormProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ContactForm.d.ts.map