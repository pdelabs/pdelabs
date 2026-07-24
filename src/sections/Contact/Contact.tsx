"use client";
import { BigTitle, BigTitleAsH2 } from '@/components/Typography/Typography';
import React from 'react';
import styles from './Contact.module.css';
import ScheduleCallButton from '@/components/ScheduleCallButton/ScheduleCallButton';
import ContactForm from './ContactForm';
import TakeItOfflineArrow from './TakeItOfflineArrow';
import { useI18n } from '@/i18n/I18nProvider';

interface ContactProps {
    /**
     * The homepage already has its own <h1> in the hero, so the contact
     * section there renders as an <h2>. On /contact this heading *is* the
     * page's h1. Two h1s on one page muddies what the page is about.
     */
    isPageHeading?: boolean;
}

const Contact = ({ isPageHeading = false }: ContactProps) => {
    const { t } = useI18n();
    const Heading = isPageHeading ? BigTitle : BigTitleAsH2;
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.schedule}>
                <Heading>{t("contact.heading1")} <span style={{ color: '#F0DFB1' }}>{t("contact.heading2")}</span></Heading>
                <ScheduleCallButton>{t("buttons.scheduleCallShort")}</ScheduleCallButton>
            </div>
            <TakeItOfflineArrow />
            <div className={styles.form}>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;
