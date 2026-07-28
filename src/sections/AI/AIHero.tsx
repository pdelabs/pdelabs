"use client";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import { BigTitle, LargeBody } from "@/components/Typography/Typography";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "@/app/ai/page.module.css";

const AIHero = () => {
    const { t } = useI18n();
    return (
        <section id="ai-hero">
            <SunsetContainer>
                <div className="flex flex-col items-center" style={{ color: "white" }}>
                    <BigTitle className={styles.bigtitle}>
                        {t("ai.hero.title")} <br />{t("ai.hero.emphasis")}
                    </BigTitle>
                    <LargeBody className={styles.subtitle}>{t("ai.hero.subtitle")}</LargeBody>
                    <ScheduleCallButton />
                </div>
            </SunsetContainer>
        </section>
    );
};

export default AIHero;
