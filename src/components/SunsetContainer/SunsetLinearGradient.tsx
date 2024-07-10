"use client";
import { FC, forwardRef, memo, useLayoutEffect, useRef, useState } from "react";
import styles from "./SunsetLinearGradient.module.css";
import PDELabsSun from "../PDELabsSun/PDELabsSun";
import Waves from "./Waves/Waves";
import Image from 'next/image'
import c from 'classnames';

const sunOffset = 48 + 56;

const SunsetContainer: FC<any> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const positionedSunRef = useRef<HTMLDivElement>(null);
    const [sunSize, setSunSize] = useState(250);

    useLayoutEffect(() => {
        const container = containerRef.current!
        const containerClientRect = container.getBoundingClientRect();
        const containerWidth = containerClientRect.width;
        const sunSize = Math.min(containerWidth * 0.5, 250);
        setSunSize(sunSize);
    }, []);


    useLayoutEffect(() => {
        const handleScroll = (e?: Event) => {
            e?.preventDefault();
            const container = containerRef.current!

            const containerClientRect = container.getBoundingClientRect();
            const containerWidth = containerClientRect.width;

            let sunPosition = { y: 0, x: 0 };
            sunPosition.y = window.scrollY + sunSize / 2 + sunOffset;
            sunPosition.x = containerWidth / 2;

            sunPosition.y = Math.min(sunPosition.y, containerClientRect.height);
            positionedSunRef.current!.style.top = `${sunPosition.y}px`;

            if (sunPosition.y === containerClientRect.height) {
                positionedSunRef.current!.style.position = `absolute`;
                positionedSunRef.current!.style.top = `${sunPosition.y - sunSize / 2}px`;

            } else {
                positionedSunRef.current!.style.position = `fixed`;
                positionedSunRef.current!.style.top = `${sunOffset}px`;
            }

        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    }, [sunSize]);

    return (
        <>
            <div ref={containerRef} style={{ maxWidth: "100vw", minHeight: "100vh", zIndex: 10, margin: 0, padding: 0 }} className={styles.container}>
                <PositionedSun ref={positionedSunRef} size={sunSize} />
                <div className="relative" style={{ top: sunOffset + sunSize, padding: '1rem 2rem' }}>
                    {children}
                </div>
            </div >
            <WavesDivision sunSize={sunSize} />
        </>

    )
}

export default SunsetContainer;


const PositionedSun = forwardRef<HTMLDivElement, any>(({ size }, ref) => {
    return (
        <div className={`w-full flex justify-center`} ref={ref}>
            <PDELabsSun width={size} height={size} />
        </div>
    )
});

PositionedSun.displayName = "PositionedSun";


interface WaveDivisionsProps {
    sunSize: number;
}
const WavesDivision: FC<WaveDivisionsProps> = ({ sunSize }) => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: sunSize / 2 + 1.5, backgroundColor: '#487C99', zIndex: 5 }}>
            <div style={{ position: 'absolute', width: '100%', height: 0 }}>
                <div style={{ transform: 'translateY(-25%)' }}>
                    <Waves />
                </div>
                <div style={{ transform: 'translateY(calc(-100% + 8px))', zIndex: 0 }}>
                    <Image
                        src={'/assets/whale-tale.svg'}
                        className={c('absolute right-4 bottom-16', styles.whaleTale)}
                        width={230}
                        height={450}
                        alt={"whale-tale"}
                    />
                    <Waves phased />
                </div>
                <div style={{ transform: 'translateY(calc(-175% + 16px))' }}>
                    <Waves />
                </div>
                <div style={{ transform: 'translateY(calc(-250% + 24px))' }}>
                    <Waves phased />
                </div>
            </div>
        </div>
    )
}