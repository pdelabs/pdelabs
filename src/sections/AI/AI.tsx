"use client";
import { Body, LargeBody, SmallBody, Strong, Subtitle, Title } from "@/components/Typography/Typography";
import Container from "../SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import BlobSvg from "./blob.svg";
import c from "classnames";
import styles from "./AI.module.css";
import { Bot, Braces, LucideProps, Radar, ScanSearch, ShieldCheck, Wrench } from "lucide-react";
import { useI18n, Rich } from "@/i18n/I18nProvider";

/**
 * Body of the /ai page — everything below the sunset hero. Copy comes from the
 * i18n dictionary (ai.*); structure (icons, ordering, step numbers) is here.
 */

const CAPABILITY_META: { key: string; Icon: React.FC<LucideProps> }[] = [
    { key: "rag", Icon: ScanSearch },
    { key: "customTools", Icon: Wrench },
    { key: "autonomousAgents", Icon: Bot },
    { key: "evals", Icon: Radar },
    { key: "guardrails", Icon: ShieldCheck },
    { key: "infrastructure", Icon: Braces },
];

const VS_DESKTOP_KEYS = ["unattended", "tools", "trust", "accountable"];

const ANATOMY_KEYS = ["context", "tools", "loop", "guardrails", "evals"];
const HERMES_PILLS = ["RAG", "agentic loops", "autonomous agents", "tool use", "evals", "tracing"];
const HERMES_FEATURE_KEYS = ["loopEngine", "toolRegistry", "memory", "retrieval", "tracing", "evalHarness"];
const ENGAGEMENT_KEYS = ["audit", "prototype", "hardening"];

const AI = () => {
    const { t } = useI18n();
    return (
        <>
            <div className={styles.intro}>
                <Container>
                    <LargeBody><Rich text={t("ai.intro")} /></LargeBody>
                </Container>
            </div>

            <section id="what-we-build" className={c(styles.block, styles.anchored)}>
                <Container>
                    <SectionTitle>{t("ai.whatWeBuild.title")}</SectionTitle>
                    <LargeBody>{t("ai.whatWeBuild.lead")}</LargeBody>
                </Container>
                <div className={styles.cards}>
                    {CAPABILITY_META.map(({ key, Icon }) => (
                        <article key={key} className={c("rounded-lg bg-white", styles.card)}>
                            <Icon size={32} />
                            <Subtitle className={styles.cardTitle}>{t(`ai.capabilities.${key}.title`)}</Subtitle>
                            <SmallBody className={styles.pill}>{t(`ai.capabilities.${key}.tagline`)}</SmallBody>
                            <Body className={styles.cardDescription}><Rich text={t(`ai.capabilities.${key}.description`)} /></Body>
                            <ul className={styles.bullets}>
                                {(t(`ai.capabilities.${key}.bullets`) as string[]).map((bullet) => (
                                    <li key={bullet}><SmallBody>{bullet}</SmallBody></li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.block}>
                <Container>
                    <SectionTitle>{t("ai.vsDesktop.title")}</SectionTitle>
                    <LargeBody><Rich text={t("ai.vsDesktop.lead")} /></LargeBody>
                </Container>
                <Container>
                    <div className={styles.vsList}>
                        {VS_DESKTOP_KEYS.map((k) => (
                            <div key={k} className={styles.vsItem}>
                                <Subtitle className={styles.vsLabel}>{t(`ai.vsDesktop.items.${k}.label`)}</Subtitle>
                                <Body className={styles.vsDesc}>{t(`ai.vsDesktop.items.${k}.desc`)}</Body>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className={styles.block}>
                <Container>
                    <SectionTitle>{t("ai.anatomy.title")}</SectionTitle>
                    <LargeBody>{t("ai.anatomy.lead")}</LargeBody>
                </Container>
                <ol className={styles.anatomy}>
                    {ANATOMY_KEYS.map((key, i) => (
                        <li
                            key={key}
                            className={c("rounded-lg bg-white", styles.anatomyStep, i > 0 && i < 4 ? styles.anatomyStepLooping : null)}
                        >
                            <span className={styles.anatomyNumber}>{String(i + 1).padStart(2, "0")}</span>
                            <Subtitle className={styles.anatomyTitle}>{t(`ai.anatomySteps.${key}.title`)}</Subtitle>
                            <Body className={styles.anatomyDescription}>{t(`ai.anatomySteps.${key}.description`)}</Body>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={c(styles.block, styles.hermesSection)}>
                <BlobSvg className={styles.blob} style={{ color: '#F5D372' }} />
                <Container>
                    <SectionTitle>{t("ai.hermesTitle")}</SectionTitle>
                    <div className={c("rounded-lg bg-white", styles.hermesCard)}>
                        <div className={styles.hermesHead}>
                            <Title className={styles.hermesName}>{t("ai.hermes.heading")}</Title>
                            <LargeBody className={styles.hermesTagline}>{t("ai.hermes.tagline")}</LargeBody>
                            <div className={styles.pills}>
                                {HERMES_PILLS.map((p) => (
                                    <SmallBody key={p} className={styles.pill}>{p}</SmallBody>
                                ))}
                            </div>
                        </div>
                        <div className={styles.hermesBody}>
                            <Body className={styles.hermesDescription}><Rich text={t("ai.hermes.description")} /></Body>
                            <Body className={styles.hermesDescription}><Rich text={t("ai.hermes.outcome")} /></Body>
                        </div>
                        <div className={styles.hermesFeatures}>
                            {HERMES_FEATURE_KEYS.map((key) => (
                                <div key={key} className={styles.hermesFeature}>
                                    <Body><Strong>{t(`ai.hermes.features.${key}.title`)}</Strong></Body>
                                    <SmallBody className={styles.hermesFeatureDescription}>{t(`ai.hermes.features.${key}.description`)}</SmallBody>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.block}>
                <Container>
                    <SectionTitle>{t("ai.engagement.title")}</SectionTitle>
                    <LargeBody>{t("ai.engagement.lead")}</LargeBody>
                </Container>
                <div className={styles.cards}>
                    {ENGAGEMENT_KEYS.map((key) => (
                        <div key={key} className={c("rounded-lg bg-white", styles.card, styles.engagementCard)}>
                            <SmallBody className={styles.pill}>{t(`ai.engagementSteps.${key}.duration`)}</SmallBody>
                            <Subtitle className={styles.cardTitle}>{t(`ai.engagementSteps.${key}.title`)}</Subtitle>
                            <Body className={styles.cardDescription}>{t(`ai.engagementSteps.${key}.description`)}</Body>
                        </div>
                    ))}
                </div>
                <div className={styles.cta}>
                    <Title className={styles.ctaText}>{t("ai.cta.title")}</Title>
                    <ScheduleCallButton>{t("ai.cta.button")}</ScheduleCallButton>
                </div>
            </section>
        </>
    );
};

export default AI;
