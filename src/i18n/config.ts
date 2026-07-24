export const LOCALES = ["en", "es", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "pdelabs-locale";

export const LOCALE_LABELS: Record<Locale, { label: string; native: string }> = {
    en: { label: "EN", native: "English" },
    es: { label: "ES", native: "Español" },
    pt: { label: "PT", native: "Português" },
};

export function isLocale(value: string | undefined): value is Locale {
    return !!value && (LOCALES as readonly string[]).includes(value);
}
