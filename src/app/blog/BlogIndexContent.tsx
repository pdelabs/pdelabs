"use client";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import Waves from "@/components/SunsetContainer/Waves/Waves";
import { BigTitle, Body, LargeBody, SmallBody, Subtitle } from "@/components/Typography/Typography";
import Container from "@/sections/SectionContainer";
import { BLOG_POSTS } from "@/sections/Blog/posts";
import { useI18n } from "@/i18n/I18nProvider";
import { Locale } from "@/i18n/config";
import styles from "./page.module.css";

const DATE_LOCALE: Record<Locale, string> = { en: "en-US", es: "es-UY", pt: "pt-BR" };

export default function BlogIndexContent() {
    const { t, locale } = useI18n();
    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString(DATE_LOCALE[locale], { year: "numeric", month: "long", timeZone: "UTC" });

    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Header />
            <section id="blog-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: "white" }}>
                        <BigTitle className={styles.bigtitle}>{t("blog.heroTitle")}</BigTitle>
                        <LargeBody className={styles.subtitle}>{t("blog.heroSubtitle")}</LargeBody>
                    </div>
                </SunsetContainer>
            </section>
            <WaterSection>
                <div className={styles.body}>
                    <Container>
                        <ul className={styles.list}>
                            {BLOG_POSTS.map((post) => {
                                const minutes = post.readingTime.match(/\d+/)?.[0] ?? "";
                                return (
                                    <li key={post.slug}>
                                        <Link href={`/blog/${post.slug}`} className={styles.card} prefetch={false}>
                                            <SmallBody className={styles.meta}>
                                                {formatDate(post.date)}&nbsp;·&nbsp;{minutes} {t("blog.readingTimeSuffix")}
                                            </SmallBody>
                                            <Subtitle className={styles.cardTitle}>{t(`blogPosts.${post.slug}.title`)}</Subtitle>
                                            <Body className={styles.excerpt}>{t(`blogPosts.${post.slug}.excerpt`)}</Body>
                                            <div className={styles.tags}>
                                                {post.tags.map((tag) => (
                                                    <SmallBody key={tag} className={styles.tag}>
                                                        {tag}
                                                    </SmallBody>
                                                ))}
                                            </div>
                                            <Body className={styles.readLink}>{t("blog.read")} &rarr;</Body>
                                        </Link>
                                    </li>
                                );
                            })}
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
