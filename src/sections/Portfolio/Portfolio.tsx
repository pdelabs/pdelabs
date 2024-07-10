import React from 'react';
import { LargeBody, Subtitle, Title } from '@/components/Typography/Typography';
import styles from './Portfolio.module.css';
import BlobSvg from './blob.svg';
import c from 'classnames';

const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.section} >
            <Title>Portfolio</Title>
            <div className={c(styles.showcase)}>
                <BlobSvg className={styles.blob} />
                <div className={styles.showcaseContent}>
                    <Subtitle>
                        demoda
                    </Subtitle>
                    <div className={styles.showcaseDescriptionContainer}>
                        <div className={styles.phone}></div>
                        <LargeBody className={styles.showcaseDescription}>
                            demoda is a fashion e-commerce platform that allows users to shop for the latest fashion trends. Users can also upload their own designs and sell them on the platform.
                        </LargeBody>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default Portfolio; 