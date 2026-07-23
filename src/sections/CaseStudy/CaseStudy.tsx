import { Body, LargeBody, SmallBody, Strong, Subtitle, Title } from "@/components/Typography/Typography";
import Container from "../SectionContainer";
import Phone from "../Portfolio/Phone";
import QuotesSvg from "../Portfolio/quotes.svg";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import styles from "./CaseStudy.module.css";
import { CaseStudyData } from "./constants";

const CaseStudy = ({ data }: { data: CaseStudyData }) => {
    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.facts}>
                    <Fact label="Role" value={data.role} />
                    <Fact label="Platforms" value={data.platforms} />
                    <Fact label="Timeline" value={data.year} />
                </div>
                <div className={styles.pills}>
                    {data.pills.map((pill) => (
                        <Body key={pill} className={styles.pill}>{pill}</Body>
                    ))}
                </div>
                <LargeBody className={styles.intro}>{data.intro}</LargeBody>
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
                <Title className={styles.blockTitle}>The problem</Title>
                <div className={styles.cards}>
                    {data.challenge.map(({ title, body }) => (
                        <article key={title} className={styles.card}>
                            <Subtitle className={styles.cardTitle}>{title}</Subtitle>
                            <Body className={styles.cardBody}>{body}</Body>
                        </article>
                    ))}
                </div>
            </Container>

            <Container>
                <Divider />
                <Title className={styles.blockTitle}>What we built</Title>
                <ol className={styles.highlights}>
                    {data.highlights.map(({ title, body, bullets }, i) => (
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
                <Title className={styles.blockTitle}>The stack</Title>
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
                        {data.testimonial.quote}
                        <br />
                        <br />
                        - <Strong>{data.testimonial.author}</Strong>
                    </Body>
                    <QuotesSvg className={styles.quote} />
                </div>
            </Container>

            <Container>
                <div className={styles.cta}>
                    <Subtitle className={styles.ctaTitle}>Have something like this to build?</Subtitle>
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
