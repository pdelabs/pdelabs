import React from 'react';
import { Title } from '@/components/Typography/Typography';
import styles from './Portfolio.module.css';
const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.section} style={{ height: "100vh", paddingTop: '5rem' }}>
            <Title>Portfolio</Title>
        </section>
    );
}

export default Portfolio; 