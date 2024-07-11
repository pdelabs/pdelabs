
import React, { FC, ReactNode } from 'react';
import { LargeBody, Subtitle, Title } from '@/components/Typography/Typography';
import styles from './DevelopmentProcess.module.css';

// https://lordicon.com/collections

// inspiration https://css-for-js.dev/ "Curriculum" section

const DevelopmentProcess: FC = () => {
    return (
        <section id="development-process" className={styles.section}>
            <Title>Development Process</Title>
            <div className={styles.devProcess}>
                <DevelopmentStep
                    title="Discovery"
                    description="Our product discovery process is designed to ensure a comprehensive understanding of your idea, target audience, and market landscape. By employing various techniques, including user research, competitive analysis, and strategic product planning, to create a plan for your project right from the start."
                    icon="discovery" />

                <DevelopmentStep
                    title="Design"
                    description={<>Our UX/UI design process is a collaborative effort between our clients and our team of experts. Using industry-standard design tools and techniques, we create high-fidelity prototypes that showcase the app&apos;s look and feel on any device or screen.</>}
                    icon="design" />

                <DevelopmentStep
                    title="Software Architecture"
                    description={<>Our expert team of architects and designers collaboratively ensure that the final product excels not only in functionality but also in scalability and long-term maintainability. By leveraging their expertise, we guarantee that your app is designed and structured to accommodate future growth and evolving needs.</>}
                    icon="architecture" />

                <DevelopmentStep
                    title="Development"
                    description={<>By harnessing the power of Flutter, we can streamline frontend development with a single codebase for both iOS and Android or any device, reducing development time and cost. Its extensive collection of pre-built widgets empowers us to design visually captivating and responsive interfaces.</>}
                    icon="development" />

                <DevelopmentStep
                    title="Testing"
                    description={<>Our team of QA experts plays a critical role in ensuring the quality of your application by conducting rigorous testing throughout the development process. Their efforts are aimed at identifying and rectifying any potential issues that could arise in the production environment, ensuring a seamless and comfortable user experience.</>}
                    icon="testing" />

                <DevelopmentStep
                    title="Deployment"
                    description={<>We prioritize a smooth and successful launch of your application, and we take the necessary steps to optimize the process. Once your application is launched and operational, our commitment to support and maintenance continues.</>}
                    icon="deployment" />
            </div>
        </section>
    );
}

export default DevelopmentProcess;

interface DevelopmentStepProps {
    title: string;
    description: ReactNode;
    icon: string;
}

const DevelopmentStep: FC<DevelopmentStepProps> = ({
    title,
    description,
    icon
}) => {

    return (
        <div className={styles.devStep}>
            <Subtitle>{title}</Subtitle>
            <LargeBody>{description}</LargeBody>
        </div>
    );

}