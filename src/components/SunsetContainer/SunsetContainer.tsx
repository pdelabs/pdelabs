"use client";
import { forwardRef, memo, useLayoutEffect, useRef, useState } from "react";
import styles from "./SunsetContainer.module.css";
import PDELabsSun from "../PDELabsSun/PDELabsSun";
import Waves from "./Waves/Waves";
import Cloud from "./Clouds/Cloud";

let myHeight = 0;
const sunOffset = 48;

function updateDimensions() {
    const container = document.getElementById("container");
    if (typeof (container?.clientWidth) != 'undefined') {
        //Non-IE
        myHeight = container?.clientHeight ?? 0
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myHeight = document.body.clientHeight;
    }

    // to align the sunset effects.
    myHeight = myHeight * 2;
}

const SunsetContainer = ({ children }: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sunRef = useRef<HTMLDivElement>(null);
    const sunDayRef = useRef<HTMLDivElement>(null);
    const sunSetRef = useRef<HTMLDivElement>(null);
    const skyRef = useRef<HTMLDivElement>(null);
    const horizonRef = useRef<HTMLDivElement>(null);
    const horizonNightRef = useRef<HTMLDivElement>(null);
    const darknessOverlaySkyRef = useRef<HTMLDivElement>(null);
    const positionedSunRef = useRef<HTMLDivElement>(null);
    const [sunSize, setSunSize] = useState(0);


    useLayoutEffect(() => {
        const container = containerRef.current!
        const containerClientRect = container.getBoundingClientRect();
        const containerWidth = containerClientRect.width;
        updateDimensions();
        const sunSize = Math.min(containerWidth * 0.5, 250);
        setSunSize(sunSize);
    }, []);


    useLayoutEffect(() => {
        const handleScroll = (e?: Event) => {
            e?.preventDefault();
            const container = containerRef.current!

            const containerClientRect = container.getBoundingClientRect();
            const containerWidth = containerClientRect.width;
            updateDimensions();

            let sunPosition = { y: 0, x: 0 };
            sunPosition.y = window.scrollY + sunSize / 2 + sunOffset;
            sunPosition.x = containerWidth / 2;

            sunPosition.y = Math.min(sunPosition.y, containerClientRect.height);
            // setCSSSunPosition(sunPosition.y);
            positionedSunRef.current!.style.top = `${sunPosition.y}px`;

            if (sunPosition.y === containerClientRect.height) {
                positionedSunRef.current!.style.position = `absolute`;
                // setCSSSunPositionType("absolute");
                // setCSSSunPosition(sunPosition.y - sunSize / 2);
                positionedSunRef.current!.style.top = `${sunPosition.y - sunSize / 2}px`;

            } else {
                // setCSSSunPositionType("fixed");
                positionedSunRef.current!.style.position = `fixed`;
                positionedSunRef.current!.style.top = `${sunOffset}px`;
                // setCSSSunPosition(sunOffset);
            }

            const sun = sunRef.current!
            const sunDay = sunDayRef.current!
            const sunSet = sunSetRef.current!

            const sky = skyRef.current!
            const horizon = horizonRef.current!
            const horizonNight = horizonNightRef.current!
            const darknessOverlaySky = darknessOverlaySkyRef.current!

            const sunBackground = `${sunPosition.x}px  ${sunPosition.y}px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%`
            setRadialGradient(sun, sunBackground);

            const sunDayBackground = `${sunPosition.x}px  ${sunPosition.y}px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%`
            setRadialGradient(sunDay, sunDayBackground);

            const sunSetBackground = `${sunPosition.x}px  ${sunPosition.y}px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%`
            setRadialGradient(sunSet, sunSetBackground);

            sun.style.width = `${containerWidth}px`;
            sun.style.left = "0px";
            sunDay.style.width = `${containerWidth}px`;
            sunDay.style.left = "0px";

            darknessOverlaySky.style.opacity = `${Math.min((sunPosition.y - (myHeight * 7 / 10)) / (myHeight - (myHeight * 7 / 10)), 1)}`;
            horizonNight.style.opacity = `${(sunPosition.y - (myHeight * 4 / 5)) / (myHeight - (myHeight * 4 / 5))}`;


            sunDay.style.opacity = `${(1 - sunPosition.y / myHeight)}`;
            sky.style.opacity = `${Math.min((1 - sunPosition.y / myHeight), 0.99)}`;
            sunSet.style.opacity = `${(sunPosition.y / myHeight - 0.2)}`;


            if (sunPosition.y > 0) {
                if (sunPosition.y > myHeight / 2) {
                    sun.style.opacity = `${Math.min((myHeight - sunPosition.y) / (myHeight / 2) + 0.2, 0.5)}`;
                    horizon.style.opacity = `${(myHeight - sunPosition.y) / (myHeight / 2) + 0.2}`;
                } else {
                    sun.style.opacity = `${Math.min(sunPosition.y / (myHeight / 2), 0.5)}`;
                    horizon.style.opacity = `${Math.min(sunPosition.y / (myHeight / 2), 0.99)}`;
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        updateDimensions();
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    }, [sunSize]);

    return (
        <>
            <div style={{ position: 'relative' }} >
                <PositionedSun ref={positionedSunRef} size={sunSize} />
                <div style={{ position: 'absolute', zIndex: 10000, width: '100%' }}>
                    <div style={{ position: 'relative' }}>
                        {children}
                        <div style={{ position: "absolute", top: "50%" }}>
                            <Cloud />
                        </div>
                    </div>
                </div>
                <div id="container" ref={containerRef} style={{ width: "100vw", height: "300vh", margin: 0, padding: 0 }} className={styles.container}>
                    <div ref={sunRef} className={styles.sun} />
                    <div ref={sunDayRef} className={styles.sunDay} />
                    <div ref={sunSetRef} className={styles.sunSet} />
                    <div ref={skyRef} className={styles.sky} />
                    <div ref={horizonRef} className={styles.horizon} ></div>
                    <div ref={horizonNightRef} className={styles.horizonNight} ></div>
                    <div ref={darknessOverlaySkyRef} className={styles.darknessOverlaySky} />
                </div>
            </div>
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
        </>

    )
}

export default SunsetContainer;


function setRadialGradient(element: HTMLElement, gradient: string) {
    element.style.background = `-webkit-radial-gradient(${gradient})`;
    element.style.background = `-moz-radial-gradient(${gradient})`;
    element.style.background = `-ms-radial-gradient(${gradient})`;
    element.style.background = `radial-gradient(${gradient})`;
}


const PositionedSun = forwardRef<HTMLDivElement, any>(({ size }, ref) => {
    return (
        <div className={`w-full flex justify-center`} ref={ref} style={{ zIndex: 10000 }}>
            {/* <div className="absolute"> */}
            <PDELabsSun width={size} height={size} />
            {/* </div> */}
        </div>
    )
});



