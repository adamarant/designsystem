"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useState, } from "react";
import { cn } from "../utils/cn";
export const SiteFooterNewsletter = forwardRef(function SiteFooterNewsletter({ title, description, placeholder = "you@email.com", buttonLabel = "Subscribe", submittingLabel = "…", successMessage = "Thanks — you're in.", errorMessage = "Something went wrong. Try again.", onSubmit, className, ...rest }, ref) {
    const inputId = useId();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await onSubmit(email);
            setStatus("done");
            setEmail("");
        }
        catch {
            setStatus("error");
        }
    }
    return (_jsxs("div", { ref: ref, className: cn("ds-footer__newsletter", className), ...rest, children: [title != null && (_jsx("span", { className: "ds-footer__newsletter-title", children: title })), description != null && (_jsx("p", { className: "ds-footer__newsletter-text", children: description })), status === "done" ? (_jsx("p", { className: "ds-footer__newsletter-note ds-text-success", children: successMessage })) : (_jsxs("form", { className: "ds-footer__newsletter-form", onSubmit: handleSubmit, children: [_jsx("label", { htmlFor: inputId, className: "ds-sr-only", children: title ?? "Email" }), _jsx("input", { id: inputId, type: "email", required: true, className: "ds-input", placeholder: placeholder, value: email, onChange: (e) => setEmail(e.target.value), autoComplete: "email" }), _jsx("button", { type: "submit", className: "ds-btn", disabled: status === "submitting", children: status === "submitting" ? submittingLabel : buttonLabel })] })), status === "error" && (_jsx("p", { className: "ds-footer__newsletter-note ds-text-error", children: errorMessage }))] }));
});
//# sourceMappingURL=SiteFooterNewsletter.js.map