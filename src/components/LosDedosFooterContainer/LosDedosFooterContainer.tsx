import React from 'react';
import styles from './LosDedosFooterContainer.module.css';
import Image from 'next/image'

const LosDedosFooterContainer = () => {

    return (
        <div className={styles.container}>
            <Image
                src={'/assets/los-dedos.svg'}
                className={styles.losDedos}
                width={500}
                height={1500}
                alt={"los-dedos"}
            />
        </div>
    )
}

export default LosDedosFooterContainer;

