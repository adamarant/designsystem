"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState, } from "react";
/* ================================================================== */
/*  Cloudflare Turnstile widget                                        */
/* ================================================================== */
/**
 * Thin React wrapper around the Cloudflare Turnstile client script.
 *
 * This component is presentational — it does NOT verify tokens. Pair it
 * with server-side `verifyTurnstileToken` from `@adamarant/cms/captcha`.
 *
 * The widget itself is rendered inside an iframe by Cloudflare's script,
 * so no DS CSS is required. Style the wrapper via the `className` prop
 * if you need to constrain its layout (margin, width, etc.).
 *
 * Docs: https://developers.cloudflare.com/turnstile/
 */
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const SCRIPT_ID = "cf-turnstile-script";
let scriptLoader = null;
function loadTurnstileScript() {
    if (typeof window === "undefined") {
        return Promise.reject(new Error("Turnstile: window is not available"));
    }
    if (window.turnstile) {
        return Promise.resolve(window.turnstile);
    }
    if (scriptLoader) {
        return scriptLoader;
    }
    scriptLoader = new Promise((resolve, reject) => {
        const existing = document.getElementById(SCRIPT_ID);
        const onReady = () => {
            if (window.turnstile) {
                resolve(window.turnstile);
            }
            else {
                reject(new Error("Turnstile: script loaded but window.turnstile is missing"));
            }
        };
        if (existing) {
            existing.addEventListener("load", onReady, { once: true });
            existing.addEventListener("error", () => reject(new Error("Turnstile: script failed to load")), { once: true });
            return;
        }
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", onReady, { once: true });
        script.addEventListener("error", () => reject(new Error("Turnstile: script failed to load")), { once: true });
        document.head.appendChild(script);
    });
    return scriptLoader;
}
export const TurnstileWidget = forwardRef(function TurnstileWidget({ siteKey, onVerify, onExpire, onError, onTimeout, theme = "auto", size = "flexible", appearance, action, cData, language, className, }, ref) {
    const containerRef = useRef(null);
    const widgetIdRef = useRef(null);
    const apiRef = useRef(null);
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
            if (cancelled || !containerRef.current)
                return;
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
            if (!cancelled)
                setFailed(true);
        });
        return () => {
            cancelled = true;
            if (apiRef.current && widgetIdRef.current) {
                try {
                    apiRef.current.remove(widgetIdRef.current);
                }
                catch {
                    // widget may already be gone
                }
            }
            widgetIdRef.current = null;
        };
        // siteKey + display config are the only props that require a re-mount.
    }, [siteKey, theme, size, appearance, action, cData, language]);
    useImperativeHandle(ref, () => ({
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
    }), []);
    if (failed) {
        return (_jsx("div", { role: "alert", className: className, children: "Verification unavailable. Please reload the page." }));
    }
    return _jsx("div", { ref: containerRef, className: className });
});
//# sourceMappingURL=TurnstileWidget.js.map