"use client";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import { BigTitle, LargeBody } from "@/components/Typography/Typography";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./CaseStudyPage.module.css";

const CaseStudyHero = ({ slug, name }: { slug: string; name: string }) => {
    const { t } = useI18n();
    return (
        <section id="case-study-hero">
            <SunsetContainer>
                <div className="flex flex-col items-center" style={{ color: "white" }}>
                    <BigTitle className={styles.bigtitle}>{name}</BigTitle>
                    <LargeBody className={styles.subtitle}>{t(`caseStudy.${slug}.tagline`)}</LargeBody>
                </div>
            </SunsetContainer>
        </section>
    );
};

export default CaseStudyHero;
