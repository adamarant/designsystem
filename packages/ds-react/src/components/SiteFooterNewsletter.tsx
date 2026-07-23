"use client";

import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  type ReactNode,
  forwardRef,
  useId,
  useState,
} from "react";
import { cn } from "../utils/cn";

/* ==================================================================
   SiteKit — SiteFooter newsletter zone (ECOSYSTEM_ROADMAP, Fase 6)

   Presentational: title + description + an inline email form with
   idle/submitting/done/error states. Submission is the consumer's
   (Supabase, Resend, an API route…), passed as `onSubmit(email)`;
   the component owns only the UX. Opt-in — render it (or pass the
   `newsletter` prop on SiteFooter) only where a newsletter belongs.
   ================================================================== */

export interface SiteFooterNewsletterProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onSubmit" | "title"> {
  title?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
  buttonLabel?: ReactNode;
  submittingLabel?: ReactNode;
  successMessage?: ReactNode;
  errorMessage?: ReactNode;
  /** Called with the entered email. Resolve for success, throw for error. */
  onSubmit: (email: string) => void | Promise<void>;
  className?: string;
}

export const SiteFooterNewsletter = forwardRef<
  HTMLDivElement,
  SiteFooterNewsletterProps
>(function SiteFooterNewsletter(
  {
    title,
    description,
    placeholder = "you@email.com",
    buttonLabel = "Subscribe",
    submittingLabel = "…",
    successMessage = "Thanks — you're in.",
    errorMessage = "Something went wrong. Try again.",
    onSubmit,
    className,
    ...rest
  },
  ref,
) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await onSubmit(email);
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div ref={ref} className={cn("ds-footer__newsletter", className)} {...rest}>
      {title != null && (
        <span className="ds-footer__newsletter-title">{title}</span>
      )}
      {description != null && (
        <p className="ds-footer__newsletter-text">{description}</p>
      )}

      {status === "done" ? (
        <p className="ds-footer__newsletter-note ds-text-success">
          {successMessage}
        </p>
      ) : (
        <form className="ds-footer__newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor={inputId} className="ds-sr-only">
            {title ?? "Email"}
          </label>
          <input
            id={inputId}
            type="email"
            required
            className="ds-input"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <button
            type="submit"
            className="ds-btn"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? submittingLabel : buttonLabel}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="ds-footer__newsletter-note ds-text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
});
