import React, { useEffect, useRef, useState } from 'react';
import { Body, LargeBody, Strong, Subtitle, Title } from '@/components/Typography/Typography';
import styles from './Portfolio.module.css';
import BlobSvg from './blob.svg';
import QuotesSvg from './quotes.svg';
import c from 'classnames';
import Container from '../SectionContainer';
import Phone from './Phone';


const Portfolio = () => {
    const vamosjuntosImages = ["/assets/vamosjuntos/app_preview.png", "/assets/vamosjuntos/app_preview_2.png", "/assets/vamosjuntos/app_preview_3.png", "/assets/vamosjuntos/app_preview_4.png", "/assets/vamosjuntos/app_preview_5.png", "/assets/vamosjuntos/app_preview_6.png"];
    const demodaImages = ["/assets/demoda/app_preview.png", "/assets/demoda/app_preview2.png", "/assets/demoda/app_preview3.png", "/assets/demoda/app_preview4.png", "/assets/demoda/app_preview5.png"];
    return (
        <section id="portfolio" className={styles.section}>
            <Container>
                <div className="mt-16 mb-2" style={{ width: 150, height: '2px', backgroundColor: 'white' }} />
                <Title style={{ color: 'white' }} className="text-left center white">Portfolio</Title>
                <LargeBody>
                    Discover some of the projects we worked on, from mobile apps to web platforms and APIs.
                </LargeBody>
            </Container>
            <Showcase
                title="demoda"
                pills={["mobile", "web", "api", "search", "staff augmentation"]}
                description="demoda is a marketplace for clothing and accessories that enables small brands, second-hand stores, fashion designers, and individuals to sell their products. It oversees the entire sales process, including access to information, communication between buyers and sellers, online payments, shipping, and order tracking."
                testimonial="As co-founder of demoda, I am extremely impressed with the work pdelabs did helping in the development of our marketplace. They solved technically challenging problems such as real time messaging, complex order state machines and much more. Their commitment to understanding our vision and their ability to translate it into a functional and user-friendly platform was remarkable."
                author="Nicolas Ferro, co-founder"
                blobColor={"#69539B"}
                images={demodaImages}
            />
            <div style={{ marginTop: '2rem' }} />
            <Showcase
                title="Vamos juntos"
                pills={["api", "mobile", "web"]}
                description="Vamos Juntos is a carpooling app designed to connect drivers and passengers for shared rides, promoting convenient and eco-friendly travel. The platform facilitates the entire process, from matching users based on their routes and schedules to providing in app messages with shared location."
                testimonial="I couldn't be happier with the outstanding job pdelabs did in developing our carpooling app. Their team was always available, responsive, and really understood what we wanted, the development process was really smooth and we always knew what to expect. I highly recommend them for any software development needs."
                author="Mario Guadalupe, founder"
                isRight
                blobColor={"#4285F4"}
                images={vamosjuntosImages}
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
    images
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
                    </div>
                </div>
                <div className={styles.mobilePhoneContainer} data-phone-inside-description="false">
                    <Phone images={images} mobile />
                </div>
            </div>
        </div>
    )
}

