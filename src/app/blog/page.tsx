import type { Metadata } from "next";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import Waves from "@/components/SunsetContainer/Waves/Waves";
import { BigTitle, Body, LargeBody, SmallBody, Subtitle } from "@/components/Typography/Typography";
import Container from "@/sections/SectionContainer";
import { BLOG_POSTS } from "@/sections/Blog/posts";
import styles from "./page.module.css";

const title = "Blog — Notes on Building Software";
const description =
    "Field notes from pdelabs: how we design and ship software. State machines, AI agents, nearshore engineering, and the decisions behind the products we build.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog" },
    openGraph: { url: "/blog", title: `${title} | pdelabs`, description },
    twitter: { title: `${title} | pdelabs`, description },
};

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", timeZone: "UTC" });

export default function BlogIndex() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Header />
            <section id="blog-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: "white" }}>
                        <BigTitle className={styles.bigtitle}>Notes on building software</BigTitle>
                        <LargeBody className={styles.subtitle}>
                            How we design and ship the things we build &mdash; and the decisions behind them.
                        </LargeBody>
                    </div>
                </SunsetContainer>
            </section>
            <WaterSection>
                <div className={styles.body}>
                    <Container>
                        <ul className={styles.list}>
                            {BLOG_POSTS.map((post) => (
                                <li key={post.slug}>
                                    <Link href={`/blog/${post.slug}`} className={styles.card} prefetch={false}>
                                        <SmallBody className={styles.meta}>
                                            {formatDate(post.date)}&nbsp;·&nbsp;{post.readingTime}
                                        </SmallBody>
                                        <Subtitle className={styles.cardTitle}>{post.title}</Subtitle>
                                        <Body className={styles.excerpt}>{post.excerpt}</Body>
                                        <div className={styles.tags}>
                                            {post.tags.map((tag) => (
                                                <SmallBody key={tag} className={styles.tag}>
                                                    {tag}
                                                </SmallBody>
                                            ))}
                                        </div>
                                        <Body className={styles.readLink}>Read &rarr;</Body>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div>
                <Waves />
            </WaterSection>
        </main>
    );
}

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
    <div className="flex flex-col items-center relative bg-[#547B96] pb-24">{children}</div>
);
