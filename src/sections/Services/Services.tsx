import { Body, LargeBody, Strong, Subtitle, Title } from "@/components/Typography/Typography";
import styles from './Services.module.css';
import { FC } from "react";
import Container from "../SectionContainer";
import c from 'classnames';
import { Bot, CloudCog, Database, LucideProps, MonitorSmartphone, Smartphone, TabletSmartphone } from "lucide-react";

const Services = () => {
    return (
        <section id="services" className="flex flex-col gap-1 px-8" style={{ color: 'white' }}>
            <Container>

                <div className="mt-8 mb-2" style={{ width: 150, height: '2px', backgroundColor: 'white' }} />
                <Title style={{ color: 'white' }} className="text-left center white">What we offer</Title>
                <LargeBody>
                    From sleek web and mobile applications to cutting-edge AI-powered solutions, our team delivers creative, innovative and impactful projects that drive business success.
                </LargeBody>
            </Container>
            <div className={styles.services}>
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
                    soon
                    Icon={Bot}
                    title={"Comprehensive AI Solutions"}
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
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, Icon, soon = false }) => {
    return (
        <div className={c("rounded-lg p-2 bg-white", styles.service)}>
            {soon && (<div className={styles.soontag}>SOON</div>)}
            <Icon size={32} />
            <Subtitle>
                {title}
            </Subtitle>
            <Body>
                {description}
            </Body>
        </div>
    );
}
