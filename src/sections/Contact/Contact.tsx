import { Body, Subtitle, Title } from '@/components/Typography/Typography';
import React from 'react';
import styles from './Contact.module.css';
import ScheduleCallButton from '@/components/ScheduleCallButton/ScheduleCallButton';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.schedule}>
                <Title>We love to take on new challenges, <span style={{ color: '#F0DFB1' }}>tell us yours.</span></Title>
                <ScheduleCallButton>Schedule a call</ScheduleCallButton>
            </div>
            <div className={styles.separator} />
            <div className={styles.form}>
                <Subtitle>Write us</Subtitle>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;
