import { BigTitle, Body, Subtitle, Title } from '@/components/Typography/Typography';
import React from 'react';
import styles from './Contact.module.css';
import ScheduleCallButton from '@/components/ScheduleCallButton/ScheduleCallButton';
import ContactForm from './ContactForm';
import TakeItOfflineArrow from './TakeItOfflineArrow';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.schedule}>
                <BigTitle>We love to take on new challenges, <span style={{ color: '#F0DFB1' }}>tell us yours.</span></BigTitle>
                <ScheduleCallButton>Schedule a call</ScheduleCallButton>
            </div>
            <TakeItOfflineArrow />
            <div className={styles.form}>
                <Subtitle style={{ color: "#a9c6d4" }}>Write us</Subtitle>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;
