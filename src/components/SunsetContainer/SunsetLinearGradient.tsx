"use client";
import { FC, forwardRef, memo, useLayoutEffect, useRef, useState } from "react";
import styles from "./SunsetLinearGradient.module.css";
import PDELabsSun from "../PDELabsSun/PDELabsSun";
import Waves from "./Waves/Waves";
import Cloud from "./Clouds/Cloud";

const sunOffset = 48;

const SunsetContainer = ({ children }: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const positionedSunRef = useRef<HTMLDivElement>(null);
    const [sunSize, setSunSize] = useState(0);


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
            <div className="relative w-full">
                <PositionedSun ref={positionedSunRef} size={sunSize} />
                <div style={{ position: 'absolute', zIndex: 10000, width: '100%' }}>
                    <div className="relative">
                        <div style={{ position: "absolute", top: sunOffset + sunSize / 2, left: "50%" }}>
                            <Cloud />
                        </div>
                        <div className="relative" style={{ top: sunOffset * 2 + sunSize }}>
                            {children}
                        </div>
                    </div>
                </div>
                <div id="container" ref={containerRef} style={{ maxWidth: "100vw", height: "300vh", zIndex: 10000, margin: 0, padding: 0 }} className={styles.container}>

                </div >
            </div>
            <WavesDivision sunSize={sunSize} />
        </>

    )
}

export default SunsetContainer;


const PositionedSun = forwardRef<HTMLDivElement, any>(({ size }, ref) => {
    return (
        <div className={`w-full flex justify-center`} ref={ref} style={{ zIndex: 1 }}>
            {/* <div className="absolute"> */}
            <PDELabsSun width={size} height={size} />
            {/* </div> */}
        </div>
    )
});





interface WaveDivisionsProps {
    sunSize: number;
}
const WavesDivision: FC<WaveDivisionsProps> = ({ sunSize }) => {
    return (
        <div style={{ width: '100%', minHeight: sunSize + 1, backgroundColor: '#487C99', zIndex: 100000 }}>
            <div style={{ transform: 'translateY(-25%)' }}>
                <Waves />
            </div>
            <div style={{ transform: 'translateY(calc(-100% + 8px))', zIndex: 0 }}>
                <Waves phased />
            </div>
            <div style={{ transform: 'translateY(calc(-175% + 16px))' }}>
                <Waves />
            </div>
        </div>
    )
}