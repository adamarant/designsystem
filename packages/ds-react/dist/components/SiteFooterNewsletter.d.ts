import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface SiteFooterNewsletterProps extends Omit<ComponentPropsWithoutRef<"div">, "onSubmit" | "title"> {
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
export declare const SiteFooterNewsletter: import("react").ForwardRefExoticComponent<SiteFooterNewsletterProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SiteFooterNewsletter.d.ts.map