"use client"
import React, { FC } from 'react';
import styles from './LosDedosFooterContainer.module.css';
import Image from 'next/image'
import { Body, SmallBody, Title } from '../Typography/Typography';
import PdelabsIcon from './pdelabs-logo.svg';
import Link from 'next/link';
import { useCalendlyDialogOpen } from '../Calendly/CalendlyDialogOpenProvider';
import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react';
import c from 'classnames';

const LosDedosFooterContainer = () => {
    const { setOpen } = useCalendlyDialogOpen();
    return (
        <div className={styles.container} style={{ color: "#7c735c" }}>
            <div className={styles.losDedosContainer}>
                <Image
                    src={'/assets/los-dedos.svg'}
                    className={styles.losDedos}
                    fill
                    alt={"los-dedos"}
                />
            </div>

            <div className={styles.footer}>
                <Title>Let&apos;s create together,</Title>
                <Body className={styles.contactusButton} style={{ display: "inline-flex", gap: "0.5rem" }} onClick={() => setOpen(true)}>Schedule a call <CalendarDays /></Body>
                <div className={styles.sections}>

                    <div className={styles.section}>
                        <Body className={styles.sectionTitle}>Punta del Este labs</Body>
                        <SectionLink href={'#home'}>Home</SectionLink>
                        <SectionLink href={'#services'}>Services</SectionLink>
                        <SectionLink href={'#about-us'}>About us</SectionLink>
                        <SectionLink href={'#portfolio'}>Portfolio</SectionLink>
                    </div>
                    <div className={styles.section}>
                        <Body className={styles.sectionTitle}>Media</Body>
                        <SmallBody>Instagram</SmallBody>
                        <SmallBody>Whats app</SmallBody>
                        <SmallBody>Twitter</SmallBody>
                        <SmallBody>Linkedin</SmallBody>
                    </div>
                    <div className={c(styles.section, styles.info)}>
                        <Body className={c(styles.sectionTitle, styles.infoTitle)}>Info</Body>
                        <Link href="https://www.google.com/maps/place/The+Fingers+of+Punta+del+Este/@-34.9583751,-54.9385364,18.73z/data=!4m6!3m5!1s0x95750512eda09d7d:0xb6244bde1fa3faee!8m2!3d-34.9578543!4d-54.9371897!16s%2Fm%2F0521gjz?entry=ttu" target='_blank'><SmallBody className="inline-flex gap-x-1 center"><MapPin size={16} /> Los Dedos, Punta del Este, Uruguay</SmallBody></Link>
                        <Link href="mailto:luisgurmendez@gmail.com"><SmallBody className="inline-flex gap-x-1 center"><Mail size={16} /> contact@pdelabs.com</SmallBody></Link>
                        <Link href="tel:+59899002835"><SmallBody className="inline-flex gap-x-1 center"><Phone size={16} />  +598 99 002 835</SmallBody></Link>
                    </div>
                    <div className={styles.pdelabsTrustedSection}>
                        <PdelabsIcon className={styles.pdelabslogo} />
                        <Body>Your trusted partner for software solutions.</Body>
                    </div>
                </div>
            </div>
            <SmallBody>
                © 2024 pdelabs. All rights reserved.
            </SmallBody>
        </div >
    )
}

export default LosDedosFooterContainer;

interface SectionLinkProps {
    href: string;
    children: string;
}

const SectionLink: FC<SectionLinkProps> = ({ href, children }) => {
    return (
        <Link href={href} passHref>
            <SmallBody style={{ textDecoration: 'underline' }}>{children}</SmallBody>
        </Link>
    )
}