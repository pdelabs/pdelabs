"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image'
import styles from "./sun.module.css";
import { Interval } from '@/types';

const Sun = ({ width, height }: any) => {
    const [rotation, setRotation] = useState(0);
    const rotationSpeedRef = useRef(0);
    const intervalRef = useRef<Interval | undefined>(undefined);

    const handleMouseEnter = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        rotationSpeedRef.current = 0.5;
        intervalRef.current = setInterval(() => {
            setRotation(prevRotation => prevRotation + rotationSpeedRef.current);
        }, 10);
    };

    const handleMouseLeave = () => {
        const decelerate = () => {
            if (rotationSpeedRef.current <= .05) {
                clearInterval(intervalRef.current);
            } else {
                rotationSpeedRef.current *= 0.98;
                setRotation(prevRotation => prevRotation + rotationSpeedRef.current);
            }
        };

        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(decelerate, 10);
    };
    return <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `rotate(${rotation % 360}deg)` }}
        src={'/assets/sun.svg'}
        width={width}
        height={height}
        alt={"sun"}
        className={styles.sun}
    />
}

export default Sun;