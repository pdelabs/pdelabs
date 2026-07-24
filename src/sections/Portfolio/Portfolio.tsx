"use client";
import React from 'react';
import { Body, LargeBody, Strong, Subtitle } from '@/components/Typography/Typography';
import styles from './Portfolio.module.css';
import BlobSvg from './blob.svg';
import QuotesSvg from './quotes.svg';
import c from 'classnames';
import Container from '../SectionContainer';
import Phone from './Phone';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';


const Portfolio = () => {
    const { t } = useI18n();
    const vamosjuntosImages = ["/assets/vamosjuntos/app_preview.png", "/assets/vamosjuntos/app_preview_2.png", "/assets/vamosjuntos/app_preview_3.png", "/assets/vamosjuntos/app_preview_4.png", "/assets/vamosjuntos/app_preview_5.png", "/assets/vamosjuntos/app_preview_6.png"];
    const demodaImages = ["/assets/demoda/app_preview.png", "/assets/demoda/app_preview2.png", "/assets/demoda/app_preview3.png", "/assets/demoda/app_preview4.png", "/assets/demoda/app_preview5.png"];
    return (
        <section id="portfolio" className={styles.section}>
            <Container>
                <SectionTitle>{t("portfolio.title")}</SectionTitle>
                <LargeBody>
                    {t("portfolio.intro")}
                </LargeBody>
            </Container>
            <Showcase
                title="demoda"
                pills={t("portfolio.demoda.pills")}
                description={t("portfolio.demoda.description")}
                testimonial={t("portfolio.demoda.testimonial")}
                author={t("portfolio.demoda.author")}
                readCaseStudy={t("portfolio.readCaseStudy")}
                blobColor={"#69539B"}
                images={demodaImages}
                href="/work/demoda"
            />
            <div style={{ marginTop: '2rem' }} />
            <Showcase
                title="Vamos Juntos"
                pills={t("portfolio.vamos.pills")}
                description={t("portfolio.vamos.description")}
                testimonial={t("portfolio.vamos.testimonial")}
                author={t("portfolio.vamos.author")}
                readCaseStudy={t("portfolio.readCaseStudy")}
                isRight
                blobColor={"#4285F4"}
                images={vamosjuntosImages}
                href="/work/vamos-juntos"
            />

        </section>
    );
}
export default Portfolio;

const Showcase = ({
    title,
    description,
    pills,
    testimonial,
    author,
    isRight,
    blobColor,
    images,
    href,
    readCaseStudy
}: any) => {
    return (
        <div className={c(styles.showcase)} data-horientation={isRight ? "right" : "left"}>
            <BlobSvg className={c(styles.blob, isRight ? styles.rightBlob : null)} style={{ color: blobColor }} />
            <div className={styles.showcaseContent}>
                <Subtitle style={{ textAlign: isRight ? 'right' : 'left' }}>
                    {title}
                </Subtitle>
                <div className={styles.showcaseDescriptionContainer} style={isRight ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                    <div data-phone-inside-description="true">
                        <Phone images={images} />
                    </div>
                    <div className={styles.showcaseDescription}>
                        <div className={styles.pillsContainer} style={isRight ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                            {pills.map((pill: string) => (
                                <Body key={pill} className={styles.pill}>{pill}</Body>
                            ))}
                        </div>
                        <LargeBody>
                            {description}
                        </LargeBody>
                        <div className={styles.testimonial}>
                            <QuotesSvg className={styles.quote} data-quote-open="true" />
                            <Body className={styles.testimonialContent}>
                                {testimonial}
                                <br />
                                <br />
                                - <Strong>{author}</Strong>
                            </Body>
                            <QuotesSvg className={styles.quote} />
                        </div>
                        {href && (
                            <Link href={href} className={styles.caseStudyLink} prefetch={false}>
                                <Body><Strong>{readCaseStudy} &rarr;</Strong></Body>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={styles.mobilePhoneContainer} data-phone-inside-description="false">
                    <Phone images={images} mobile />
                </div>
            </div>
        </div>
    )
}

