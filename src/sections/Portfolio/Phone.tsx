"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Portfolio.module.css';
import Image from 'next/image';

const Phone = ({ images, mobile }: any) => {
    const src = useAppPreviewSrc(images);

    return (
        <div className={styles.phone} data-is-mobile={mobile ? "true" : "false"}>
            <Image fill src={src} alt="App preview" priority />
        </div>
    )
}

export default Phone;

function useAppPreviewSrc(images: string[]) {
    const [index, setIndex] = useState(0);
    const interval = useRef(0);
    useEffect(() => {
        interval.current = setInterval(() => {
            setIndex(i => (i + 1) % images.length);
        }, 3000) as unknown as number;

        return () => clearInterval(interval.current);
    }, []);

    return images[index];
}