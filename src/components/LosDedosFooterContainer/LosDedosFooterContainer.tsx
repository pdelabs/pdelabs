"use client";
import React, { FC } from "react";
import styles from "./LosDedosFooterContainer.module.css";
import Image from "next/image";
import { Body, SmallBody, Title } from "../Typography/Typography";
import PdelabsIcon from "./pdelabs-logo.svg";
import Link from "next/link";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import c from "classnames";
import useOpenCalendly from "@/hooks/useOpenCalendly";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_NUMBER } from "@/seo";

const LosDedosFooterContainer = () => {
  const openCalendly = useOpenCalendly();
  return (
    <footer className={styles.container} style={{ color: "#7c735c" }}>
      <div className={styles.losDedosContainer}>
        <Image
          src={"/assets/los-dedos.svg"}
          className={styles.losDedos}
          fill
          alt={"los-dedos"}
        />
      </div>

      <div className={styles.footer}>
        <Title>Let&apos;s create together,</Title>
        <Body
          className={styles.contactusButton}
          style={{ display: "inline-flex", gap: "0.5rem" }}
          onClick={openCalendly}
        >
          Schedule a call <CalendarDays />
        </Body>
        <div className={styles.sections}>
          <div className={styles.section}>
            <Body className={styles.sectionTitle}>Punta del Este labs</Body>
            <SectionLink href={"/#home"}>Home</SectionLink>
            <SectionLink href={"/#services"}>Services</SectionLink>
            <SectionLink href={"/ai"}>AI Agents &amp; RAG</SectionLink>
            <SectionLink href={"/work"}>Work</SectionLink>
            <SectionLink href={"/work/demoda"}>demoda case study</SectionLink>
            <SectionLink href={"/work/vamos-juntos"}>
              Vamos Juntos case study
            </SectionLink>
            <SectionLink href={"/#dev-process"}>
              Development Process
            </SectionLink>
            <SectionLink href={"/contact"}>Contact</SectionLink>
            <SectionLink href={"/blog/inspiration"}>
              Why &ldquo;Punta del Este&rdquo;
            </SectionLink>
          </div>
          <div className={styles.section}>
            <Body className={styles.sectionTitle}>Media</Body>
            <Link
              target="_blank"
              href="https://www.instagram.com/puntadelestelabs/"
            >
              <SmallBody>Instagram</SmallBody>
            </Link>
            <Link target="_blank" href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              <SmallBody>Whats app</SmallBody>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/pdelabs"
            >
              <SmallBody>Linkedin</SmallBody>
            </Link>
            <Link target="_blank" href="https://github.com/pdelabs/">
              <SmallBody>Github</SmallBody>
            </Link>
          </div>
          <div className={c(styles.section, styles.info)}>
            <Body className={c(styles.sectionTitle, styles.infoTitle)}>
              Info
            </Body>
            <Link
              href="https://www.google.com/maps/place/The+Fingers+of+Punta+del+Este/@-34.9583751,-54.9385364,18.73z/data=!4m6!3m5!1s0x95750512eda09d7d:0xb6244bde1fa3faee!8m2!3d-34.9578543!4d-54.9371897!16s%2Fm%2F0521gjz?entry=ttu"
              target="_blank"
            >
              <SmallBody className="inline-flex gap-x-1 center">
                <MapPin size={16} /> Los Dedos, Punta del Este, Uruguay
              </SmallBody>
            </Link>
            <Link href={`mailto:${CONTACT_EMAIL}`}>
              <SmallBody className="inline-flex gap-x-1 center">
                <Mail size={16} /> {CONTACT_EMAIL}
              </SmallBody>
            </Link>
            <Link href={`tel:${CONTACT_PHONE}`}>
              <SmallBody className="inline-flex gap-x-1 center">
                <Phone size={16} /> +598 99 002 835
              </SmallBody>
            </Link>
          </div>
          <div className={styles.pdelabsTrustedSection}>
            <PdelabsIcon className={styles.pdelabslogo} />
            <Body>Your trusted partner for software solutions.</Body>
          </div>
        </div>
      </div>
      <SmallBody>
        © {new Date().getFullYear()} punta del este labs. All rights reserved.
      </SmallBody>
    </footer>
  );
};

export default LosDedosFooterContainer;

interface SectionLinkProps {
  href: string;
  children: string;
}

const SectionLink: FC<SectionLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <SmallBody style={{ textDecoration: "underline" }}>{children}</SmallBody>
    </Link>
  );
};
