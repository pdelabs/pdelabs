"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_LOCALE, Locale, LOCALE_COOKIE, isLocale } from "./config";
import { MESSAGES } from "./messages";
import { Strong } from "@/components/Typography/Typography";

function resolve(locale: Locale, path: string): any {
    const walk = (obj: any) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
    const value = walk(MESSAGES[locale]);
    if (value !== undefined) return value;
    const fallback = walk(MESSAGES[DEFAULT_LOCALE]);
    return fallback !== undefined ? fallback : path;
}

interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    /** Resolves a dot-path key to its string (or array) for the active locale. */
    t: (path: string) => any;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
    initialLocale = DEFAULT_LOCALE,
    children,
}: {
    initialLocale?: Locale;
    children: React.ReactNode;
}) {
    const [locale, setLocaleState] = useState<Locale>(initialLocale);

    // Pages are statically generated as `en`; pick up a returning visitor's
    // saved choice on the client. One re-render, no flash of the wrong content
    // for first-time (English) visitors.
    useEffect(() => {
        const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]+)`));
        const saved = match?.[1];
        if (isLocale(saved) && saved !== locale) {
            setLocaleState(saved);
            document.documentElement.lang = saved;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setLocale = useCallback((next: Locale) => {
        setLocaleState(next);
        document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
        try {
            document.documentElement.lang = next;
        } catch {
            /* no-op on the server */
        }
    }, []);

    const t = useCallback((path: string) => resolve(locale, path), [locale]);

    return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
}

/**
 * Renders a message string, turning `**bold**` into <Strong> and `\n\n` into a
 * paragraph break — so translated copy keeps the same emphasis as the original.
 */
export function Rich({ text }: { text: string }) {
    const paragraphs = String(text).split("\n\n");
    return (
        <>
            {paragraphs.map((para, pi) => (
                <React.Fragment key={pi}>
                    {pi > 0 && (
                        <>
                            <br />
                            <br />
                        </>
                    )}
                    {para.split("**").map((seg, i) =>
                        i % 2 === 1 ? <Strong key={i}>{seg}</Strong> : <React.Fragment key={i}>{seg}</React.Fragment>
                    )}
                </React.Fragment>
            ))}
        </>
    );
}
