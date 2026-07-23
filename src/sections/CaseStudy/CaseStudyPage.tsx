import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import Waves from "@/components/SunsetContainer/Waves/Waves";
import { BigTitle, LargeBody } from "@/components/Typography/Typography";
import { Toaster } from "@/components/ui/toaster";
import Box from "@/components/Box/Box";
import Contact from "@/sections/Contact/Contact";
import CaseStudy from "./CaseStudy";
import { CaseStudyData } from "./constants";
import { caseStudyJsonLd } from "@/seo";
import styles from "./CaseStudyPage.module.css";

/**
 * Both case studies render identically — only the data differs. Keeping the
 * shell here means a third one is a data file and a four-line page.
 */
export function caseStudyMetadata(data: CaseStudyData): Metadata {
    const url = `/work/${data.slug}`;
    // No " | pdelabs" here — the root layout's title template appends it.
    return {
        title: data.metaTitle,
        description: data.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            url,
            title: `${data.metaTitle} | pdelabs`,
            description: data.metaDescription,
            images: [{ url: data.images[0], alt: `${data.name} app preview` }],
        },
        twitter: {
            title: `${data.metaTitle} | pdelabs`,
            description: data.metaDescription,
            images: [data.images[0]],
        },
    };
}

const CaseStudyPage = ({ data }: { data: CaseStudyData }) => {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Toaster />
            <Header />
            <section id="case-study-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: "white" }}>
                        <BigTitle className={styles.bigtitle}>{data.name}</BigTitle>
                        <LargeBody className={styles.subtitle}>{data.tagline}</LargeBody>
                    </div>
                </SunsetContainer>
            </section>
            <WaterSection>
                <CaseStudy data={data} />
                <Waves />
                <Box pt="5rem">
                    <Contact />
                </Box>
            </WaterSection>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(data)) }}
            />
        </main>
    );
};

export default CaseStudyPage;

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
    <div className={"flex flex-col items-center relative bg-[#547B96] pb-24"}>{children}</div>
);
