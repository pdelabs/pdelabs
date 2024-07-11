import React from 'react';
import { Body, LargeBody, Subtitle, Title } from '@/components/Typography/Typography';
import styles from './Portfolio.module.css';
import BlobSvg from './blob.svg';
import QuotesSvg from './quotes.svg';
import c from 'classnames';
import Container from '../SectionContainer';


const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.section} >
            <Container>
                <Title>Portfolio</Title>
            </Container>
            <Showcase
                title="demoda"
                pills={["mobile", "web", "design", "api", "search"]}
                description="demoda is a marketplace for clothing and accessories that enables small brands, second-hand stores, fashion designers, and individuals to sell their products. It oversees the entire sales process, including access to information, communication between buyers and sellers, online payments, shipping, and order tracking."
                testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
                author="Nicols Ferro,  co-founder"
            />

        </section>
    );
}
export default Portfolio;

const Showcase = ({ title, description, pills, testimonial, author }: any) => {
    return (
        <div className={c(styles.showcase)}>
            <BlobSvg className={styles.blob} />
            <div className={styles.showcaseContent}>
                <Subtitle>
                    {title}
                </Subtitle>
                <div className={styles.showcaseDescriptionContainer}>
                    <div className={styles.phone}></div>
                    <div className={styles.showcaseDescription}>
                        <div className={styles.pillsContainer}>
                            {pills.map((pill: string) => (
                                <Body key={pill} className={styles.pill}>{pill}</Body>
                            ))}
                        </div>
                        <LargeBody>
                            {description}
                        </LargeBody>
                        <div className={styles.testimonial}>
                            <QuotesSvg className={styles.quote} data-quote-open="true" />
                            <Body>
                                {testimonial}
                                <br />
                                <br />
                                - {author}
                            </Body>
                            <QuotesSvg className={styles.quote} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}