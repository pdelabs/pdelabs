"use client";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import { BigTitle, LargeBody } from "@/components/Typography/Typography";
import styles from "./Home.module.css";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import { useI18n } from "@/i18n/I18nProvider";

const Home = () => {
    const { t } = useI18n();
    return (
        <section id="home">
            <SunsetContainer>
                <div className="flex flex-col items-center" style={{ color: 'white' }} >
                    <BigTitle className={styles.bigtitle}>{t("home.titleLead")} <br /><span>{t("home.titleEmphasis")}</span></BigTitle>
                    <LargeBody className={styles.subtitle}>
                        {t("home.subtitle")}
                    </LargeBody>
                    <ScheduleCallButton />
                </div>
            </SunsetContainer>
        </section>

    )
}

export default Home;
