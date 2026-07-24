"use client";
import { FC } from "react";
import c from "classnames";
import { LOCALES, LOCALE_LABELS } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./LanguageSelector.module.css";

interface LanguageSelectorProps {
    className?: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ className }) => {
    const { locale, setLocale } = useI18n();
    return (
        <div className={c(styles.group, className)} role="group" aria-label="Language">
            {LOCALES.map((l) => (
                <button
                    key={l}
                    type="button"
                    onClick={() => setLocale(l)}
                    className={c(styles.option, l === locale ? styles.active : null)}
                    aria-pressed={l === locale}
                    aria-label={LOCALE_LABELS[l].native}
                >
                    {LOCALE_LABELS[l].label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
