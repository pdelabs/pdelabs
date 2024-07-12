import { Strong } from "@/components/Typography/Typography";
import React, { ReactNode } from "react";

export const CARD_WIDTH = 350;

interface DevelopmentStepProps {
    number: number;
    title: string;
    description: ReactNode;
    icon: string;
}


export const STEPS: DevelopmentStepProps[] = [
    {
        number: 0,
        title: 'Discovery',
        description: <>We turn your visionary ideas into precise, actionable plans. This step is designed to thoroughly <Strong>understand your idea and gather detailed functional requirements.</Strong><br /><br /> Through in-depth discussions, we ensure all perspectives are considered, translating your needs into <Strong>clear documentation</Strong>. Our technical experts assess feasibility, identifying <Strong>potential challengess.</Strong></>,
        icon: 'discovery',
    },
    {
        number: 1,
        title: 'Design',



        description: (
            <>Now let&apos;s transform functional requirements into visually stunning and <Strong>user-friendly interfaces.</Strong> This step focuses on creating an engaging and intuitive experience for your users.
                <br /><br />
                Our design iterates over <Strong>wireframes and prototypes</Strong>, allowing us to visualize the layout and flow of the product.
            </>
        ),
        icon: 'design',
    },
    {
        number: 2,
        title: 'Software Architecture',
        description: <>We ensure that the final product excels not only in functionality but also in <Strong>scalability, long-term maintainability and cost efficiency</Strong>. <br /><br />We guarantee that your app is <Strong>designed and structured</Strong> to accommodate future growth and evolving needs.</>,
        icon: 'architecture',
    },
    {
        number: 3,
        title: 'Development',
        description: <>Here is where the fun begins! Our team of engineers works diligently to <Strong>bring your product to life</Strong>. <br /><br /> By following industry best practices and leveraging the latest technologies, we ensure that your app is not only functional but also <Strong>high-performing, secure, and scalable</Strong>.</>,
        icon: 'development',
    },
    {
        number: 4,
        title: 'Testing',
        description: <>Ensuring the quality and reliability of your application through <Strong>comprehensive testing plans</Strong>.<br /><br /> Our QA experts conduct various types of testing, including <Strong>functional, integration, performance, and user acceptance testing</Strong>, to identify and address any issues that may arise in production.</>,
        icon: 'testing',
    },
    {
        number: 5,
        title: 'Release & Deployment',
        description: (
            <>
                Our team manages the deployment process, from <Strong>setting up servers</Strong>, configuring all necessary systems to deploying to the <Strong>app stores</Strong> if needed.
                <br /><br />
                We monitor the launch closely to address any issues promptly, ensuring <Strong>minimal downtime</Strong>. With our support, your product is delivered to the market efficiently and effectively
            </>
        ),
        icon: 'deployment',
    },
]

interface Pos { x: number, y: number }

type CardPositions = {
    [i: number]: Pos;
}

export const CARD_POSITIONS: CardPositions = {
    0: {
        x: 16,
        y: 0,
    },
    1: {
        x: 5,
        y: 33,
    },
    2: {
        x: 38,
        y: 35,
    },
    3: {
        x: 71,
        y: 28,
    },
    4: {
        x: 16,
        y: 66,
    },
    5: {
        x: 64,
        y: 72,
    },
};
