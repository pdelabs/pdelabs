import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import { BigTitle, Body, LargeBody, SmallBody, Strong, Subtitle } from "@/components/Typography/Typography";
import { articleJsonLd } from "@/seo";
import { getPost } from "@/sections/Blog/posts";
import {
    AgentLoopDiagram,
    AnatomyDiagram,
    DemoVsProductionDiagram,
} from "@/sections/Blog/diagrams/aiAgent";
import styles from "./page.module.css";

const post = getPost("ai-agents-in-production")!;

export const metadata: Metadata = {
    title: "What Actually Goes Inside a Production AI Agent",
    description:
        "Anyone can wire an LLM to an API and get a demo. Everything hard is after that. The loop, tools, memory, guardrails and evals that turn a prompt into an AI agent you can actually run in production.",
    keywords: [
        "production AI agent",
        "AI agent architecture",
        "agentic loop",
        "LLM agent design",
        "agent guardrails",
        "LLM evals",
        "tool use",
        "autonomous agents",
    ],
    alternates: { canonical: "/blog/ai-agents-in-production" },
    openGraph: {
        type: "article",
        url: "/blog/ai-agents-in-production",
        title: "What Actually Goes Inside a Production AI Agent",
        description:
            "The loop, tools, memory, guardrails and evals that turn a prompt into an AI agent you can actually run in production.",
    },
    twitter: {
        title: "What Actually Goes Inside a Production AI Agent",
        description:
            "The five systems that turn a prompt into an AI agent you can actually run in production.",
    },
};

const AiAgentsPost = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Header />
            <section id="post-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: "white" }}>
                        <BigTitle className={styles.title}>What actually goes inside a production AI agent</BigTitle>
                        <LargeBody className={styles.dek}>
                            Anyone can wire an LLM to an API and get a demo. Everything hard is after that. Here is what
                            is actually inside an agent we would put in front of your users.
                        </LargeBody>
                    </div>
                </SunsetContainer>
            </section>

            <WaterSection>
                <article className={styles.article}>
                    <SmallBody className={styles.byline}>
                        By Punta del Este Labs&nbsp;·&nbsp;{post.readingTime}
                    </SmallBody>

                    <Body className={styles.p}>
                        There is a moment, early in every AI project, where someone wires a language model to a couple of
                        API calls, types a question, and watches it do something genuinely impressive. That moment is
                        real, and it is also a trap &mdash; because the distance between that demo and something you can
                        put in front of users is most of the actual work. <Strong>A demo answers once and hopes. An
                        agent runs, checks itself, recovers, and knows when to stop.</Strong>
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <DemoVsProductionDiagram />
                        </div>
                        <figcaption className={styles.figcaption}>
                            The whole difference in one picture. A demo is a straight line that ends in hope; an agent is
                            a governed loop that ends in a checked result.
                        </figcaption>
                    </figure>

                    <Body className={styles.p}>
                        We have shipped enough of these to have opinions about what has to be there. What follows is the
                        anatomy &mdash; the five systems we build around a model before we would call the result an
                        agent. It is the same skeleton behind <Link href="/ai">Hermes</Link>, the runtime we use so we
                        stop rebuilding it every time.
                    </Body>

                    <Subtitle className={styles.h}>An agent is a loop, not a prompt</Subtitle>
                    <Body className={styles.p}>
                        The single idea that separates a real agent from a chatbot is the <Strong>loop</Strong>. Instead
                        of asking the model for the answer, you ask it for the <em>next step</em>. It proposes an action,
                        your code runs that action, you feed the result back, and you ask again &mdash; until the goal is
                        met or a budget says stop. The model never touches the world directly; it only ever proposes, and
                        your loop decides.
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <AgentLoopDiagram />
                        </div>
                        <figcaption className={styles.figcaption}>
                            Plan, act, observe, decide. The loop is what lets an agent recover from a bad step instead of
                            confidently shipping it &mdash; and the &ldquo;done / budget&rdquo; exit is what stops it
                            running forever.
                        </figcaption>
                    </figure>

                    <Body className={styles.p}>
                        This is also where most naïve agents fail. If the loop has no way to notice a tool returned an
                        error, it barrels ahead on a false assumption. If it has no budget, a small misunderstanding
                        becomes an expensive infinite loop. The loop is not glamorous, but it is the control structure
                        everything else hangs off.
                    </Body>

                    <Subtitle className={styles.h}>Tools: the only way it touches the world</Subtitle>
                    <Body className={styles.p}>
                        An agent is only as capable as the tools you give it, and only as safe as the way you define
                        them. Every capability &mdash; read a record, send an email, charge a card &mdash; is a{" "}
                        <Strong>typed, validated function</Strong> with a schema the model has to fill in correctly. The
                        model&rsquo;s output is never trusted raw; it is parsed against that schema, and a malformed call
                        is rejected and retried rather than executed on a guess.
                    </Body>
                    <Body className={styles.p}>
                        The important tools are also <em>idempotent</em> and <em>scoped</em>. Idempotent, so that a
                        retried step doesn&rsquo;t send the same email twice. Scoped, so that the tool which reads
                        invoices physically cannot delete them. The permissions live in the tool, not in the prompt
                        &mdash; because a prompt is a suggestion, and a permission check is not.
                    </Body>

                    <Subtitle className={styles.h}>Memory: what survives between steps</Subtitle>
                    <Body className={styles.p}>
                        A model has no memory of its own; it sees only what you put in front of it. So an agent needs
                        two kinds. <Strong>Working memory</Strong> is the running context of the current task &mdash;
                        what it has tried, what came back &mdash; kept small on purpose, because a bloated context is
                        both slower and dumber. <Strong>Long-term memory</Strong> is durable recall across runs, usually
                        retrieval over your data, so the agent can pull in the one relevant document instead of being
                        handed all of them. Deciding what the model is <em>allowed</em> and <em>able</em> to see is half
                        of building a good agent.
                    </Body>

                    <Subtitle className={styles.h}>Guardrails: the difference between can and may</Subtitle>
                    <Body className={styles.p}>
                        Autonomy is only useful when it is bounded. Guardrails are the boundary: <Strong>budgets</Strong>{" "}
                        on tokens, steps and money so a run cannot spiral; <Strong>timeouts</Strong> so it cannot hang;{" "}
                        <Strong>approval gates</Strong> where a human signs off before anything irreversible; and{" "}
                        <Strong>reversible operations</Strong> so the worst realistic outcome is an undo, not an
                        incident. There is also the adversarial side &mdash; a document the agent reads can try to hijack
                        it, so untrusted input is treated as data, never as instructions.
                    </Body>

                    <Subtitle className={styles.h}>Evals: how you know it still works tomorrow</Subtitle>
                    <Body className={styles.p}>
                        This is the system teams skip, and the one that decides whether the project survives contact
                        with a second month. An agent has no compiler telling you a change broke something; a reworded
                        prompt can quietly wreck a case that used to pass. So quality has to become a <em>number</em>. We
                        build a <Strong>golden set</Strong> of real cases with known-good outcomes, score new versions
                        against it &mdash; often with a model acting as judge on a rubric &mdash; and gate every change on
                        it in CI. Without evals, you are not improving an agent so much as disturbing it and hoping.
                    </Body>

                    <Subtitle className={styles.h}>The five systems, together</Subtitle>
                    <Body className={styles.p}>
                        None of these is exotic on its own. What makes an agent production-grade is that all five are
                        present and wired together: context feeding the loop, tools letting it act, guardrails bounding
                        it, evals judging it. Take any one away and you are back to a demo &mdash; impressive in the room,
                        unpredictable everywhere else.
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <AnatomyDiagram />
                        </div>
                        <figcaption className={styles.figcaption}>
                            The anatomy. The loop is the engine; context, tools, guardrails and evals are the four
                            systems that make it safe to let run.
                        </figcaption>
                    </figure>

                    <Body className={styles.p}>
                        This is exactly the scaffolding <Link href="/ai">Hermes</Link> gives us for free, so a project
                        starts at the interesting problem &mdash; your workflow, your data, your definition of a good
                        outcome &mdash; instead of at the plumbing every agent needs and no demo bothers with.
                    </Body>

                    <div className={styles.cta}>
                        <Body className={styles.ctaLine}>
                            Have a workflow where an agent would earn its keep? We are good at telling you which ones will
                            and which ones won&rsquo;t.
                        </Body>
                        <ScheduleCallButton />
                    </div>
                </article>
            </WaterSection>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleJsonLd({
                            slug: "/blog/ai-agents-in-production",
                            headline: "What actually goes inside a production AI agent",
                            description: post.excerpt,
                            datePublished: post.date,
                        })
                    ),
                }}
            />
        </main>
    );
};

export default AiAgentsPost;

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
    <div className="flex flex-col items-center relative bg-[#547B96] pb-24">{children}</div>
);
