import { Body, LargeBody, Subtitle, Title } from "@/components/Typography/Typography";
import styles from './Services.module.css';
import { FC } from "react";
import Container from "../SectionContainer";
import c from 'classnames';

const Services = () => {
    return (
        <section id="services" className="flex flex-col gap-1 px-8" style={{ color: 'white' }}>
            <Container>
                <Title style={{ color: 'white' }} className="text-left center white pt-8">What we offer</Title>
                <LargeBody>
                    From sleek web and mobile applications to cutting-edge AI-powered solutions, our team delivers creative, innovative and impactful projects that drive business success.
                </LargeBody>
                <div className={styles.services}>
                    <ServiceCard
                        title={"Custom Software Development"}
                        description={"Developing bespoke software solutions tailored to the specific needs and requirements of a client. This includes web applications, desktop applications, and specialized business software."}
                    />
                    <ServiceCard
                        title={"Mobile App Development"}
                        description={"Creating mobile applications for various platforms (iOS, Android) that offer a seamless user experience. This includes native app development, cross-platform solutions, or progressive web apps (PWAs)."}
                    />
                    <ServiceCard
                        title={"Software Integration and API Development"}
                        description={"Ensuring different software systems work together seamlessly by developing and implementing APIs and middleware solutions, as well as structured and non structured databases. This service often includes integration of third-party services, cloud-based solutions, and enterprise systems"}
                    />
                    <ServiceCard
                        title={"Comprehensive AI Solutions"}
                        description={"Our AI services are designed to empower businesses with artificial intelligence capabilities, enabling them to innovate, automate, and optimize their operations. By leveraging state-of-the-art AI technologies, we help organizations transform data into actionable insights and intelligent solutions."}
                    />
                </div>
            </Container>

        </section>
    )
}

export default Services;

interface ServiceCardProps {
    title: string;
    description: string;
    img?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, img }) => {
    return (
        <div className={c("rounded-lg p-2 bg-white", styles.service)}>
            <Subtitle>
                {title}
            </Subtitle>
            <Body>
                {description}
            </Body>
        </div>
    );
}
