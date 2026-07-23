import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import Waves from "@/components/SunsetContainer/Waves/Waves";
import { BigTitle, Body, LargeBody, SmallBody, Subtitle } from "@/components/Typography/Typography";
import { Toaster } from "@/components/ui/toaster";
import Box from "@/components/Box/Box";
import Contact from "@/sections/Contact/Contact";
import Container from "@/sections/SectionContainer";
import { CASE_STUDIES } from "@/sections/CaseStudy/constants";
import styles from "./page.module.css";

const title = "Our Work — Software Case Studies";
const description =
    "Case studies from pdelabs: a clothing marketplace with an order state machine and OpenSearch-backed search, and a carpooling app matching riders along overlapping routes. What we built and how.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/work" },
    openGraph: { url: "/work", title: `${title} | pdelabs`, description },
    twitter: { title: `${title} | pdelabs`, description },
};

export default function WorkIndex() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Toaster />
            <Header />
            <section id="work-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: "white" }}>
                        <BigTitle className={styles.bigtitle}>Our work</BigTitle>
                        <LargeBody className={styles.subtitle}>
                            Two products we took from an idea to something real people use every day — and the
                            engineering decisions that got them there.
                        </LargeBody>
                    </div>
                </SunsetContainer>
            </section>
            <WaterSection>
                <div className={styles.body}>
                    <Container>
                        <div className={styles.grid}>
                            {CASE_STUDIES.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/work/${study.slug}`}
                                    className={styles.card}
                                    prefetch={false}
                                >
                                    <div className={styles.preview}>
                                        <Image
                                            src={study.images[0]}
                                            alt={`${study.name} app preview`}
                                            fill
                                            sizes="(max-width: 1250px) 100vw, 40vw"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    <Subtitle className={styles.cardTitle}>{study.name}</Subtitle>
                                    <Body className={styles.cardTagline}>{study.tagline}</Body>
                                    <div className={styles.pills}>
                                        {study.pills.slice(0, 4).map((pill) => (
                                            <SmallBody key={pill} className={styles.pill}>{pill}</SmallBody>
                                        ))}
                                    </div>
                                    <Body className={styles.cardLink}>Read the case study &rarr;</Body>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </div>
                <Waves />
                <Box pt="5rem">
                    <Contact />
                </Box>
            </WaterSection>
        </main>
    );
}

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
    <div className={"flex flex-col items-center relative bg-[#547B96] pb-24"}>{children}</div>
);
