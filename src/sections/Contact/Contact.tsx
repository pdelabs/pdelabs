import { BigTitle, BigTitleAsH2, Body, Subtitle, Title } from '@/components/Typography/Typography';
import React from 'react';
import styles from './Contact.module.css';
import ScheduleCallButton from '@/components/ScheduleCallButton/ScheduleCallButton';
import ContactForm from './ContactForm';
import TakeItOfflineArrow from './TakeItOfflineArrow';

interface ContactProps {
    /**
     * The homepage already has its own <h1> in the hero, so the contact
     * section there renders as an <h2>. On /contact this heading *is* the
     * page's h1. Two h1s on one page muddies what the page is about.
     */
    isPageHeading?: boolean;
}

const Contact = ({ isPageHeading = false }: ContactProps) => {
    const Heading = isPageHeading ? BigTitle : BigTitleAsH2;
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.schedule}>
                <Heading>We love to take on new challenges, <span style={{ color: '#F0DFB1' }}>tell us yours.</span></Heading>
                <ScheduleCallButton>Schedule a call</ScheduleCallButton>
            </div>
            <TakeItOfflineArrow />
            <div className={styles.form}>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;
