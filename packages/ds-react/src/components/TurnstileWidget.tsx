"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

/* ================================================================== */
/*  Cloudflare Turnstile widget                                        */
/* ================================================================== */

/**
 * Thin React wrapper around the Cloudflare Turnstile client script.
 *
 * This component is presentational — it does NOT verify tokens. Pair it
 * with server-side `verifyTurnstileToken` from `@digiko-npm/cms/captcha`.
 *
 * The widget itself is rendered inside an iframe by Cloudflare's script,
 * so no DS CSS is required. Style the wrapper via the `className` prop
 * if you need to constrain its layout (margin, width, etc.).
 *
 * Docs: https://developers.cloudflare.com/turnstile/
 */

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const SCRIPT_ID = "cf-turnstile-script";

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
  render: (
    container: HTMLElement,
    options: TurnstileRenderOptions,
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptLoader: Promise<TurnstileApi> | null = null;

function loadTurnstileScript(): Promise<TurnstileApi> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Turnstile: window is not available"));
  }
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }
  if (scriptLoader) {
    return scriptLoader;
  }

  scriptLoader = new Promise<TurnstileApi>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const onReady = () => {
      if (window.turnstile) {
        resolve(window.turnstile);
      } else {
        reject(new Error("Turnstile: script loaded but window.turnstile is missing"));
      }
    };

    if (existing) {
      existing.addEventListener("load", onReady, { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Turnstile: script failed to load")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", onReady, { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Turnstile: script failed to load")),
      { once: true },
    );
    document.head.appendChild(script);
  });

  return scriptLoader;
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

export const TurnstileWidget = forwardRef<
  TurnstileWidgetHandle,
  TurnstileWidgetProps
>(function TurnstileWidget(
  {
    siteKey,
    onVerify,
    onExpire,
    onError,
    onTimeout,
    theme = "auto",
    size = "flexible",
    appearance,
    action,
    cData,
    language,
    className,
  },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const apiRef = useRef<TurnstileApi | null>(null);
  const [failed, setFailed] = useState(false);

  // Stable callback refs so re-renders don't force a widget re-render.
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);
  const onTimeoutRef = useRef(onTimeout);
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);
  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);
  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  }, [onTimeout]);

  useEffect(() => {
    let cancelled = false;

    loadTurnstileScript()
      .then((api) => {
        if (cancelled || !containerRef.current) return;
        apiRef.current = api;

        widgetIdRef.current = api.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          size,
          ...(appearance ? { appearance } : {}),
          ...(action ? { action } : {}),
          ...(cData ? { cData } : {}),
          ...(language ? { language } : {}),
          callback: (token) => onVerifyRef.current?.(token),
          "expired-callback": () => onExpireRef.current?.(),
          "error-callback": (code) => onErrorRef.current?.(code),
          "timeout-callback": () => onTimeoutRef.current?.(),
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (apiRef.current && widgetIdRef.current) {
        try {
          apiRef.current.remove(widgetIdRef.current);
        } catch {
          // widget may already be gone
        }
      }
      widgetIdRef.current = null;
    };
    // siteKey + display config are the only props that require a re-mount.
  }, [siteKey, theme, size, appearance, action, cData, language]);

  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        if (apiRef.current && widgetIdRef.current) {
          apiRef.current.reset(widgetIdRef.current);
        }
      },
      getResponse: () => {
        if (apiRef.current && widgetIdRef.current) {
          return apiRef.current.getResponse(widgetIdRef.current);
        }
        return undefined;
      },
    }),
    [],
  );

  if (failed) {
    return (
      <div role="alert" className={className}>
        Verification unavailable. Please reload the page.
      </div>
    );
  }

  return <div ref={containerRef} className={className} />;
});
