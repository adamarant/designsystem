type TurnstileTheme = "auto" | "light" | "dark";
type TurnstileSize = "normal" | "flexible" | "compact";
type TurnstileAppearance = "always" | "execute" | "interaction-only";
interface TurnstileRenderOptions {
    sitekey: string;
    action?: string;
    cData?: string;
    theme?: TurnstileTheme;
    size?: TurnstileSize;
    appearance?: TurnstileAppearance;
    language?: string;
    "response-field"?: boolean;
    callback?: (token: string) => void;
    "expired-callback"?: () => void;
    "error-callback"?: (code?: string) => void;
    "timeout-callback"?: () => void;
}
interface TurnstileApi {
    render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId?: string) => void;
    getResponse: (widgetId?: string) => string | undefined;
}
declare global {
    interface Window {
        turnstile?: TurnstileApi;
    }
}
export interface TurnstileWidgetProps {
    /** Cloudflare Turnstile site key (public). */
    siteKey: string;
    /** Called with the token when the challenge is solved. */
    onVerify: (token: string) => void;
    /** Called when the token expires. Typically used to clear form state. */
    onExpire?: () => void;
    /** Called on widget error. Receives the Cloudflare error code if present. */
    onError?: (code?: string) => void;
    /** Called when the challenge times out before being solved. */
    onTimeout?: () => void;
    /** Theme. Default: "auto" (follows system + page color scheme). */
    theme?: TurnstileTheme;
    /** Widget size. Default: "flexible". */
    size?: TurnstileSize;
    /**
     * Appearance mode. "interaction-only" makes the widget invisible unless
     * interaction is required — recommended for non-intrusive UX.
     */
    appearance?: TurnstileAppearance;
    /** Optional action tag, passed through to siteverify. */
    action?: string;
    /** Optional cData tag, passed through to siteverify. */
    cData?: string;
    /** Optional language override (e.g. "es", "en"). Default: auto. */
    language?: string;
    /** Additional className for the wrapper div. */
    className?: string;
}
export interface TurnstileWidgetHandle {
    /** Force a re-challenge. */
    reset: () => void;
    /** Read the current token from the widget, if any. */
    getResponse: () => string | undefined;
}
export declare const TurnstileWidget: import("react").ForwardRefExoticComponent<TurnstileWidgetProps & import("react").RefAttributes<TurnstileWidgetHandle>>;
export {};
//# sourceMappingURL=TurnstileWidget.d.ts.map