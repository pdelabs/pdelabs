"use client";
import { Body, LargeBody, SmallBody, Strong, Subtitle, Title } from "@/components/Typography/Typography";
import Container from "../SectionContainer";
import Phone from "../Portfolio/Phone";
import QuotesSvg from "../Portfolio/quotes.svg";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import styles from "./CaseStudy.module.css";
import { CaseStudyData } from "./constants";
import { useI18n, Rich } from "@/i18n/I18nProvider";

const CaseStudy = ({ data }: { data: CaseStudyData }) => {
    const { t } = useI18n();
    const cs = `caseStudy.${data.slug}`;
    const challenge = t(`${cs}.challenge`) as { title: string; body: string }[];
    const highlights = t(`${cs}.highlights`) as { title: string; body: string; bullets?: string[] }[];
    const pills = t(`${cs}.pills`) as string[];
    const testimonial = t(`${cs}.testimonial`) as { quote: string; author: string };

    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.facts}>
                    <Fact label={t("caseStudy.labels.role")} value={t(`${cs}.role`)} />
                    <Fact label={t("caseStudy.labels.platforms")} value={t(`${cs}.platforms`)} />
                    <Fact label={t("caseStudy.labels.timeline")} value={t(`${cs}.year`)} />
                </div>
                <div className={styles.pills}>
                    {pills.map((pill) => (
                        <Body key={pill} className={styles.pill}>{pill}</Body>
                    ))}
                </div>
                <LargeBody className={styles.intro}><Rich text={t(`${cs}.intro`)} /></LargeBody>
            </Container>

            <Container>
                {/* Phone hides one variant per breakpoint, so both have to be rendered
                    — otherwise the screenshots vanish entirely under 1250px. */}
                <div className={styles.phoneRow}>
                    <Phone images={data.images} />
                    <Phone images={data.images} mobile />
                </div>
            </Container>

            <Container>
                <Divider />
                <Title className={styles.blockTitle}>{t("caseStudy.labels.theProblem")}</Title>
                <div className={styles.cards}>
                    {challenge.map(({ title, body }) => (
                        <article key={title} className={styles.card}>
                            <Subtitle className={styles.cardTitle}>{title}</Subtitle>
                            <Body className={styles.cardBody}>{body}</Body>
                        </article>
                    ))}
                </div>
            </Container>

            <Container>
                <Divider />
                <Title className={styles.blockTitle}>{t("caseStudy.labels.whatWeBuilt")}</Title>
                <ol className={styles.highlights}>
                    {highlights.map(({ title, body, bullets }, i) => (
                        <li key={title} className={styles.highlight}>
                            <span className={styles.highlightNumber}>{String(i + 1).padStart(2, "0")}</span>
                            <div className={styles.highlightContent}>
                                <Subtitle className={styles.highlightTitle}>{title}</Subtitle>
                                <Body className={styles.highlightBody}>{body}</Body>
                                {bullets && (
                                    <ul className={styles.bullets}>
                                        {bullets.map((bullet) => (
                                            <li key={bullet}><SmallBody>{bullet}</SmallBody></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>

            <Container>
                <Divider />
                <Title className={styles.blockTitle}>{t("caseStudy.labels.theStack")}</Title>
                <div className={styles.stack}>
                    {data.stack.map(({ group, items }) => (
                        <div key={group} className={styles.stackGroup}>
                            <SmallBody className={styles.stackLabel}>{group}</SmallBody>
                            <div className={styles.stackItems}>
                                {items.map((item) => (
                                    <SmallBody key={item} className={styles.stackItem}>{item}</SmallBody>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <Container>
                <div className={styles.testimonial}>
                    <QuotesSvg className={styles.quote} data-quote-open="true" />
                    <Body className={styles.testimonialContent}>
                        {testimonial.quote}
                        <br />
                        <br />
                        - <Strong>{testimonial.author}</Strong>
                    </Body>
                    <QuotesSvg className={styles.quote} />
                </div>
            </Container>

            <Container>
                <div className={styles.cta}>
                    <Subtitle className={styles.ctaTitle}>{t("caseStudy.labels.ctaTitle")}</Subtitle>
                    <ScheduleCallButton />
                </div>
            </Container>
        </div>
    );
};

export default CaseStudy;

const Fact = ({ label, value }: { label: string; value: string }) => (
    <div className={styles.fact}>
        <SmallBody className={styles.factLabel}>{label}</SmallBody>
        <Body className={styles.factValue}>{value}</Body>
    </div>
);

const Divider = () => <div className={styles.divider} />;
