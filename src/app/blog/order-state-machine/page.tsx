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
    ExceptionDiagram,
    HappyPathDiagram,
    WaitingStateDiagram,
    WebhookFlowDiagram,
} from "@/sections/Blog/diagrams/orderStateMachine";
import styles from "./page.module.css";

const post = getPost("order-state-machine")!;

export const metadata: Metadata = {
    title: "Designing an Order State Machine With a Timeout on Every Edge",
    description:
        "A marketplace order is a multi-day negotiation between two strangers with money in the middle. How we modelled it as an explicit state machine — with a timeout on every state that waits on a person — so orders never got stuck.",
    keywords: [
        "order state machine",
        "marketplace backend architecture",
        "order lifecycle design",
        "state machine timeouts",
        "e-commerce order status",
        "webhook driven state",
        "marketplace payments",
    ],
    alternates: { canonical: "/blog/order-state-machine" },
    openGraph: {
        type: "article",
        url: "/blog/order-state-machine",
        title: "Designing an Order State Machine With a Timeout on Every Edge",
        description:
            "How we modelled a marketplace order as an explicit state machine with a timeout on every waiting state, so orders never got stuck.",
    },
    twitter: {
        title: "Designing an Order State Machine With a Timeout on Every Edge",
        description:
            "How we modelled a marketplace order as an explicit state machine with a timeout on every waiting state.",
    },
};

const OrderStateMachinePost = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Header />
            <section id="post-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: "white" }}>
                        <BigTitle className={styles.title}>
                            An order state machine with a timeout on every edge
                        </BigTitle>
                        <LargeBody className={styles.dek}>
                            On a marketplace, an order is a multi-day negotiation between two strangers with money in the
                            middle. Here is how we kept ours from getting stuck.
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
                        When most people picture &ldquo;placing an order,&rdquo; they picture a checkout: you pay, and a
                        moment later a box is on its way. On a marketplace, that picture is wrong. An order is not a
                        transaction that completes in a second &mdash; it is a <Strong>multi-day exchange between two
                        strangers</Strong>, either of whom can simply stop replying, with a payment sitting in the middle
                        the entire time.
                    </Body>

                    <Body className={styles.p}>
                        We built <Link href="/work/demoda">demoda</Link>, a marketplace where small brands and individuals
                        sell clothing to buyers they have never met. The hardest part was never the catalogue or the
                        checkout. It was answering, precisely, what the system should do when a seller never confirms a
                        sale, when a paid-for package is never shipped, or when a buyer never collects it. Get that wrong
                        and money ends up stranded in a state nobody can explain.
                    </Body>

                    <Subtitle className={styles.h}>Why a status column isn&rsquo;t enough</Subtitle>
                    <Body className={styles.p}>
                        The tempting first model is a single <code>status</code> field on the order &mdash;{" "}
                        <em>pending</em>, <em>paid</em>, <em>shipped</em>, <em>done</em>. It works in a demo and falls
                        apart in production, because the interesting part of an order is not the states. It is the{" "}
                        <Strong>waits between them</Strong>. Every wait is a place where a human has to do something, and
                        might not. A string in a column has no idea that time is passing, or that an order has been
                        sitting in <em>paid</em> for nine days while the seller ignores it.
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <WaitingStateDiagram />
                        </div>
                        <figcaption className={styles.figcaption}>
                            The core idea. Every state where the system waits on a person has exactly three ways out.
                        </figcaption>
                    </figure>

                    <Body className={styles.p}>
                        So we stopped modelling the order as a status and started modelling it as an explicit{" "}
                        <Strong>state machine</Strong>: a fixed set of states, and a defined set of transitions between
                        them. The rule we held to was simple &mdash; every state where we wait on a person gets all three
                        of the exits above. The action they might take. A <em>timeout</em>, for when they don&rsquo;t. And
                        a dispute path, for when something is wrong.
                    </Body>

                    <Subtitle className={styles.h}>The happy path already forks</Subtitle>
                    <Body className={styles.p}>
                        Even the happy path is not a straight line, because demoda lets a buyer either have an item{" "}
                        <Strong>mailed</Strong> or collect it <Strong>in person</Strong>, and those are genuinely
                        different flows. Once payment clears, a mailed order waits for the seller to ship and then sits in{" "}
                        <em>shipping</em>; an in-person order goes straight to <em>waiting for pickup</em>. Both converge
                        on <em>fulfilled</em>, at which point the seller gets paid.
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <HappyPathDiagram />
                        </div>
                        <figcaption className={styles.figcaption}>
                            The path everyone hopes for &mdash; and it already branches by how the buyer chose to receive
                            the item. &ldquo;Or auto&rdquo; is the timeout quietly completing an order the buyer never got
                            around to confirming.
                        </figcaption>
                    </figure>

                    <Subtitle className={styles.h}>A timeout on every edge</Subtitle>
                    <Body className={styles.p}>
                        This is the discipline that holds the whole thing together, and it is worth stating plainly:{" "}
                        <Strong>nothing waits forever</Strong>. Every state above that waits on a person has its own
                        timeout, and they do not fire blind &mdash; they <em>nudge first</em>. A seller who hasn&rsquo;t
                        shipped gets reminded, twice; a buyer who hasn&rsquo;t picked up or confirmed receipt gets
                        reminded too. Only if the reminders are ignored does the timeout actually fire.
                    </Body>
                    <Body className={styles.p}>
                        And when it does, most states resolve <em>forward</em>. A shipped order the buyer never confirms
                        auto-completes so the seller still gets paid; the same is true for a pickup that is never
                        confirmed. The one state that resolves backward is payment itself: if the buyer never pays inside
                        the window, the order is <Strong>cancelled</Strong> and the reserved stock goes back on sale.
                        None of these are edge cases we bolted on after the first bad week &mdash; on a marketplace the
                        unhappy paths <em>are</em> the product.
                    </Body>

                    <Subtitle className={styles.h}>When it goes wrong: judging</Subtitle>
                    <Body className={styles.p}>
                        Two things break the happy path outright. A seller can <Strong>reject</Strong> an order they
                        can&rsquo;t fulfil &mdash; if it was paid by card, the buyer is refunded automatically; if it was
                        a bank transfer, which can&rsquo;t be clawed back with an API call, it goes to a human. And a
                        buyer can <Strong>report a problem</Strong>, which moves the order into <em>judging</em> &mdash; a
                        hold where the dispute is actually decided.
                    </Body>
                    <Body className={styles.p}>
                        From judging there are exactly two ways out: favour the seller and the order fulfils and funds
                        release, or favour the buyer and it refunds. Judging itself has a time limit, so even a contested
                        order can&rsquo;t sit forever &mdash; if no one resolves it in time, it defaults to fulfilled.
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <ExceptionDiagram />
                        </div>
                        <div className={styles.legend}>
                            <span className={styles.legendItem}>
                                <span className={styles.swatch} style={{ borderColor: "#D98A2B" }} /> timeout / hold
                            </span>
                            <span className={styles.legendItem}>
                                <span className={styles.swatch} style={{ borderColor: "#C96A5E" }} /> dispute / refund
                            </span>
                            <span className={styles.legendItem}>
                                <span className={styles.swatch} style={{ borderColor: "#4FA97F" }} /> success
                            </span>
                        </div>
                        <figcaption className={styles.figcaption}>
                            Everything that isn&rsquo;t the happy path. <em>Judging</em> is the arbitration hold; every
                            order still ends in exactly one of three terminal states &mdash; fulfilled, refunded, or
                            cancelled.
                        </figcaption>
                    </figure>

                    <Subtitle className={styles.h}>The app is never the source of truth</Subtitle>
                    <Body className={styles.p}>
                        One rule sits underneath all of this: the client never decides anything that involves money. The
                        app can <em>request</em> &mdash; start a checkout, mark a package sent &mdash; but the states that
                        matter are moved by the backend, reacting to a payment provider&rsquo;s webhook or to one of those
                        timers. When a buyer pays, we do not trust the app to tell us so; we wait for MercadoPago to
                        confirm it, and only then does the order become <em>paid</em>.
                    </Body>

                    <figure className={styles.figure}>
                        <div className={styles.diagram}>
                            <WebhookFlowDiagram />
                        </div>
                        <figcaption className={styles.figcaption}>
                            The client can kick off a payment, but it can never set the order&rsquo;s state. That comes
                            from the provider&rsquo;s webhook, server-side.
                        </figcaption>
                    </figure>

                    <Body className={styles.p}>
                        Order totals work the same way: they are calculated on the server, never read back from the
                        client, so the price a buyer is charged can never be something the app made up. It is a small
                        rule that removes an entire category of &ldquo;how did this order end up like that?&rdquo;
                        questions.
                    </Body>

                    <Subtitle className={styles.h}>Every transition is a testable handler</Subtitle>
                    <Body className={styles.p}>
                        Because each transition is its own handler rather than a branch buried in a giant function, each
                        one can be tested in isolation &mdash; including the ones that are annoying to reproduce for real.
                        You can test &ldquo;seller accepts but never ships&rdquo; without standing up a marketplace,
                        waiting three days, and bribing someone not to ship a jacket. That is the quiet payoff of an
                        explicit machine: the scary parts become ordinary unit tests.
                    </Body>

                    <Subtitle className={styles.h}>What it bought us</Subtitle>
                    <Body className={styles.p}>
                        Orders resolve themselves. Support is not chasing packages that have been &ldquo;shipping&rdquo;
                        for two weeks. Money is never sitting in an ambiguous place with no owner. And when someone does
                        ask what happened to an order, the answer is a path through a diagram, not an archaeology dig
                        through logs. The pattern is not specific to fashion, or even to marketplaces &mdash; it applies
                        anywhere two parties transact over time and either one can go quiet.
                    </Body>

                    <div className={styles.cta}>
                        <Body className={styles.ctaLine}>
                            Building something where the unhappy paths matter as much as the happy one? That is the part
                            we like.
                        </Body>
                        <ScheduleCallButton />
                    </div>

                    <SmallBody className={styles.footnote}>
                        This describes an architectural pattern from our work on demoda, abstracted to the design level.
                        Read the full project write-up in the <Link href="/work/demoda">demoda case study</Link>.
                    </SmallBody>
                </article>
            </WaterSection>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleJsonLd({
                            slug: "/blog/order-state-machine",
                            headline: "Designing an order state machine with a timeout on every edge",
                            description: post.excerpt,
                            datePublished: post.date,
                        })
                    ),
                }}
            />
        </main>
    );
};

export default OrderStateMachinePost;

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
    <div className="flex flex-col items-center relative bg-[#547B96] pb-24">{children}</div>
);
