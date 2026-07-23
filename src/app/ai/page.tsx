import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import SunsetContainer from "@/components/SunsetContainer/SunsetLinearGradient";
import Waves from "@/components/SunsetContainer/Waves/Waves";
import ScheduleCallButton from "@/components/ScheduleCallButton/ScheduleCallButton";
import { BigTitle, LargeBody } from "@/components/Typography/Typography";
import { Toaster } from "@/components/ui/toaster";
import Box from "@/components/Box/Box";
import Contact from "@/sections/Contact/Contact";
import AI from "@/sections/AI/AI";
import styles from "./page.module.css";

// No " | pdelabs" suffix here — the root layout's title template appends it.
// Hardcoding it too renders "… | pdelabs | pdelabs" in the SERP.
const title = "AI Agent Development — RAG Systems & Autonomous Agents";
const socialTitle = `${title} | pdelabs`;
const description =
    "pdelabs builds AI agents that make it to production: RAG systems, agentic loops and autonomous agents, with guardrails, evals and observability from day one — powered by Hermes, our own agent runtime.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "AI agent development", "autonomous agents", "agentic AI", "agentic loops",
        "RAG development", "retrieval augmented generation", "LLM application development",
        "LLM evals", "AI engineering agency", "AI consulting",
    ],
    alternates: { canonical: "/ai" },
    openGraph: {
        url: "/ai",
        title: socialTitle,
        description,
    },
    twitter: { title: socialTitle, description },
};

export default function AIPage() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Toaster />
            <Header />
            <section id="ai-hero">
                <SunsetContainer>
                    <div className="flex flex-col items-center" style={{ color: 'white' }}>
                        <BigTitle className={styles.bigtitle}>
                            AI agents that make it to <br />production.
                        </BigTitle>
                        <LargeBody className={styles.subtitle}>
                            RAG systems, agentic loops and autonomous agents — engineered, evaluated and shipped.
                        </LargeBody>
                        <ScheduleCallButton />
                    </div>
                </SunsetContainer>
            </section>
            <WaterSection>
                <AI />
                <Waves />
                <Box pt="5rem">
                    <Contact />
                </Box>
            </WaterSection>
        </main>
    );
}

const WaterSection: FC<PropsWithChildren> = ({ children }) => (
    <div className={"flex flex-col items-center relative bg-[#547B96] pb-24"}>
        {children}
    </div>
);
