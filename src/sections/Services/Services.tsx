"use client";
import { Body, LargeBody, Subtitle, Title } from "@/components/Typography/Typography";
import styles from './Services.module.css';
import { FC } from "react";
import Container from "../SectionContainer";
import c from 'classnames';
import { Bot, BrainCircuit, CloudCog, Database, LucideProps, MonitorSmartphone, Smartphone } from "lucide-react";
import Link from "next/link";
import { useI18n, Rich } from "@/i18n/I18nProvider";

const CARDS: { key: string; Icon: React.FC<LucideProps>; href?: string }[] = [
    { key: "rag", Icon: Bot, href: "/ai" },
    { key: "custom", Icon: MonitorSmartphone },
    { key: "mobile", Icon: Smartphone },
    { key: "integration", Icon: CloudCog },
    { key: "data", Icon: Database },
    { key: "ml", Icon: BrainCircuit },
];

const Services = () => {
    const { t } = useI18n();
    return (
        <section id="services" className="flex flex-col gap-1 px-8 pt-10" style={{ color: 'white' }}>
            <Container>
                <LargeBody>
                    <Rich text={t("services.intro1")} />
                </LargeBody>
                <div className="mt-16 mb-2" style={{ width: 150, height: '2px', backgroundColor: 'white' }} />
                <Title style={{ color: 'white' }} className="text-left center white">{t("services.whatWeOffer")}</Title>
                <LargeBody>
                    <Rich text={t("services.intro2")} />
                </LargeBody>
            </Container>
            <div className={styles.services}>
                {CARDS.map(({ key, Icon, href }) => (
                    <ServiceCard
                        key={key}
                        Icon={Icon}
                        title={t(`services.cards.${key}.title`)}
                        seeHow={t("services.seeHow")}
                        description={<Rich text={t(`services.cards.${key}.desc`)} />}
                        href={href}
                    />
                ))}
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
    seeHow: string;
    /** When set, the whole card links to that anchor (used by the AI deep dive). */
    href?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, Icon, soon = false, seeHow, href }) => {
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
            {href && (<Body className={styles.serviceLink}>{seeHow} &rarr;</Body>)}
        </>
    );

    const className = c("rounded-lg p-2 bg-white", styles.service, href ? styles.serviceFeatured : null);

    if (href) {
        return <Link href={href} className={className} prefetch={false}>{content}</Link>;
    }

    return <div className={className}>{content}</div>;
}
