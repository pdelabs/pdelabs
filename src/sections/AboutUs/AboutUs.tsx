import { LargeBody, Title } from '@/components/Typography/Typography';
import React from 'react';
import styles from './AboutUs.module.css';
import Container from '../SectionContainer';

const AboutUs = () => {
    return (
        <section id="about-us" style={{ paddingTop: '5rem', color: 'white' }}>
            <Container>
                <div className="mt-8 mb-2" style={{ width: 150, height: '2px', backgroundColor: 'white' }} />
                <Title>About us</Title>
                <LargeBody>
                    We are a team of developers and designers who love to create beautiful things
                </LargeBody>
            </Container>
            <div className={styles.us}>
                <UsBubble />
                <UsBubble />
                <UsBubble />
                <UsBubble />
                <UsBubble />
                <UsBubble />
                <UsBubble />
                <UsBubble />
            </div>
        </section>
    );
}

export default AboutUs;


const UsBubble = () => {
    return (
        <div className={styles.usBubble} />

    );
}