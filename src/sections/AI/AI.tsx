import { Body, LargeBody, SmallBody, Strong, Subtitle, Title } from "@/components/Typography/Typography";
import Container from "../SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import BlobSvg from "./blob.svg";
import c from "classnames";
import styles from "./AI.module.css";
import { AGENT_ANATOMY, AI_ENGAGEMENT, CAPABILITIES, HERMES } from "./constants";

/**
 * Body of the /ai page — everything below the sunset hero. Lives on the water
 * (#547B96) like the rest of the site, so it uses the site's own vocabulary:
 * white cards, green pills, sun-gold accents and a blob behind the hero card.
 */
const AI = () => {
    return (
        <>
            <Intro />
            <Capabilities />
            <AgentAnatomy />
            <Hermes />
            <Engagement />
        </>
    );
};

export default AI;

const Intro = () => (
    <div className={styles.intro}>
        <Container>
            <LargeBody>
            Anyone can wire a chatbot to an API. The hard part is everything after the demo: retrieval that holds up
            on messy documents, agents that recover from their own mistakes, budgets that keep the bill sane, and
            evals that tell you the moment quality slips.
            <br /><br />
            That is the part we do. <Strong>RAG systems, agentic loops and autonomous agents</Strong>, engineered
                like software rather than assembled like a prompt.
            </LargeBody>
        </Container>
    </div>
);

const Capabilities = () => (
    <section id="what-we-build" className={c(styles.block, styles.anchored)}>
        <Container>
            <SectionTitle>What we build</SectionTitle>
            <LargeBody>
                Six things we do well, and the pieces that go into each of them.
            </LargeBody>
        </Container>
        <div className={styles.cards}>
            {CAPABILITIES.map(({ id, title, tagline, description, bullets, Icon }) => (
                <article key={id} className={c("rounded-lg bg-white", styles.card)}>
                    <Icon size={32} />
                    <Subtitle className={styles.cardTitle}>{title}</Subtitle>
                    <SmallBody className={styles.pill}>{tagline}</SmallBody>
                    <Body className={styles.cardDescription}>{description}</Body>
                    <ul className={styles.bullets}>
                        {bullets.map((bullet) => (
                            <li key={bullet}><SmallBody>{bullet}</SmallBody></li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    </section>
);

const AgentAnatomy = () => (
    <section className={styles.block}>
        <Container>
            <SectionTitle>What is inside an agent we ship</SectionTitle>
            <LargeBody>
                An agent is not a prompt. It is five systems that have to hold together — and steps two to four run
                in a loop until the goal is met or a budget stops it.
            </LargeBody>
        </Container>
        <ol className={styles.anatomy}>
            {AGENT_ANATOMY.map(({ step, title, description }, i) => (
                <li
                    key={step}
                    className={c("rounded-lg bg-white", styles.anatomyStep, i > 0 && i < 4 ? styles.anatomyStepLooping : null)}
                >
                    <span className={styles.anatomyNumber}>{step}</span>
                    <Subtitle className={styles.anatomyTitle}>{title}</Subtitle>
                    <Body className={styles.anatomyDescription}>{description}</Body>
                </li>
            ))}
        </ol>
    </section>
);

const Hermes = () => (
    <section className={c(styles.block, styles.hermesSection)}>
        <BlobSvg className={styles.blob} style={{ color: '#F5D372' }} />
        <Container>
            <SectionTitle>Built in-house</SectionTitle>
            <div className={c("rounded-lg bg-white", styles.hermesCard)}>
                <div className={styles.hermesHead}>
                    <Title className={styles.hermesName}>{HERMES.name}</Title>
                    <LargeBody className={styles.hermesTagline}>{HERMES.tagline}</LargeBody>
                    <div className={styles.pills}>
                        {HERMES.pills.map((p) => (
                            <SmallBody key={p} className={styles.pill}>{p}</SmallBody>
                        ))}
                    </div>
                </div>
                <div className={styles.hermesBody}>
                    <Body className={styles.hermesDescription}>{HERMES.description}</Body>
                    <Body className={styles.hermesDescription}>{HERMES.outcome}</Body>
                </div>
                <div className={styles.hermesFeatures}>
                    {HERMES.features.map(({ title, description }) => (
                        <div key={title} className={styles.hermesFeature}>
                            <Body><Strong>{title}</Strong></Body>
                            <SmallBody className={styles.hermesFeatureDescription}>{description}</SmallBody>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
);

const Engagement = () => (
    <section className={styles.block}>
        <Container>
            <SectionTitle>How an AI project with us goes</SectionTitle>
            <LargeBody>
                Short steps, each one ending in something you can actually judge.
            </LargeBody>
        </Container>
        <div className={styles.cards}>
            {AI_ENGAGEMENT.map(({ title, duration, description }) => (
                <div key={title} className={c("rounded-lg bg-white", styles.card, styles.engagementCard)}>
                    <SmallBody className={styles.pill}>{duration}</SmallBody>
                    <Subtitle className={styles.cardTitle}>{title}</Subtitle>
                    <Body className={styles.cardDescription}>{description}</Body>
                </div>
            ))}
        </div>
        <div className={styles.cta}>
            <Title className={styles.ctaText}>Have a workflow you think an agent should be doing?</Title>
            <ScheduleCallButton>Let&apos;s talk about it</ScheduleCallButton>
        </div>
    </section>
);
