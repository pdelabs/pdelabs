import { Body, LargeBody, Strong, Subtitle, Title } from "@/components/Typography/Typography";
import styles from './Services.module.css';
import { FC } from "react";
import Container from "../SectionContainer";
import c from 'classnames';
import { Bot, BrainCircuit, CloudCog, Database, LucideProps, MonitorSmartphone, Smartphone } from "lucide-react";
import Link from "next/link";

const Services = () => {
    return (
        <section id="services" className="flex flex-col gap-1 px-8 pt-10" style={{ color: 'white' }}>
            <Container>
                <LargeBody>
                    We are a <Strong>software development company</Strong> committed to creating world-class digital products for startups and businesses around the world.
                </LargeBody>
                <div className="mt-16 mb-2" style={{ width: 150, height: '2px', backgroundColor: 'white' }} />
                <Title style={{ color: 'white' }} className="text-left center white">What we offer</Title>
                <LargeBody>
                    We build <Strong>AI products</Strong> — RAG systems, agentic loops and autonomous agents — on top of the web, mobile and data engineering that has to carry them. One team for the model and for everything around it.
                </LargeBody>
            </Container>
            <div className={styles.services}>
                <ServiceCard
                    Icon={Bot}
                    title={"AI Agents & RAG Systems"}
                    href="/ai"
                    description={
                        <>
                            <Strong>Retrieval-augmented generation, agentic loops and autonomous agents</Strong> built to run in production, not just to demo well.<br /><br /> This includes <Strong>tool use, memory, guardrails, evals and observability</Strong> — powered by Hermes, our own agent runtime.
                        </>
                    }
                />
                <ServiceCard
                    Icon={MonitorSmartphone}
                    title={"Custom Software Development"}
                    description={
                        <>
                            Developing bespoke <Strong>software solutions</Strong> tailored to the specific needs and requirements of a client.<br /><br /> This includes <Strong>web applications, desktop applications, and specialized business software</Strong>.
                        </>}
                />
                <ServiceCard
                    Icon={Smartphone}
                    title={"Mobile App Development"}
                    description={<>
                        Creating <Strong>mobile applications</Strong> that offer a seamless user experience.<br /><br /> This includes <Strong>native app development, cross-platform solutions, or progressive web apps (PWAs).</Strong>
                    </>}
                />
                <ServiceCard
                    Icon={CloudCog}
                    title={"Software Integration and API Development"}
                    description={<>Ensuring different <Strong>software systems work together seamlessly</Strong>. <br /><br /> This includes developing and implementing <Strong>APIs, middleware solutions, integrations</Strong>, as well as structured and non structured <Strong>databases</Strong>.</>}
                />
                <ServiceCard
                    Icon={Database}
                    title={"Data Engineering Solutions"}
                    description={<>
                        Refine your <Strong>raw data</Strong> into a potent tool for enriching <Strong>user experiences and generating critical insights</Strong>.<br /><br /> This includes <Strong>design and manage data pipelines and ETLs</Strong> tailored to your needs.
                    </>}
                />
                <ServiceCard
                    Icon={BrainCircuit}
                    title={"Machine Learning & Data Science"}
                    description={
                        <>
                            Leverage <Strong>state-of-the-art AI technologies</Strong> to transform your data into <Strong>actionable insights and intelligent solutions</Strong>.<br /><br /> This includes <Strong>machine learning models, predictive analytics, reinforcement learning, and data-driven automation</Strong>.
                        </>
                    }
                />
            </div>
        </section>
    )
}

export default Services;

interface ServiceCardProps {
    title: string;
    description: React.ReactNode;
    Icon: React.FC<LucideProps>;
    soon?: boolean;
    /** When set, the whole card links to that anchor (used by the AI deep dive). */
    href?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, Icon, soon = false, href }) => {
    const content = (
        <>
            {soon && (<div className={styles.soontag}>SOON</div>)}
            <Icon size={32} />
            <Subtitle style={{ paddingBottom: '1rem', textAlign: 'center' }}>
                {title}
            </Subtitle>
            <Body>
                {description}
            </Body>
            {href && (<Body className={styles.serviceLink}>See how we build them &rarr;</Body>)}
        </>
    );

    const className = c("rounded-lg p-2 bg-white", styles.service, href ? styles.serviceFeatured : null);

    if (href) {
        return <Link href={href} className={className} prefetch={false}>{content}</Link>;
    }

    return <div className={className}>{content}</div>;
}
