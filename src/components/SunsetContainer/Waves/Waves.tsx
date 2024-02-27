import React, { useLayoutEffect, useState } from 'react';
import styles from './Waves.module.css';

const Waves = ({ phased }: any) => {
    const [wave, setWave] = useState("");

    useLayoutEffect(() => {
        setWave(generateWave(40, phased));
    }, [])

    return (
        <div className={styles.waveBorder} style={{ clipPath: wave }}>
            <div className={styles.waves} style={{ clipPath: wave }}></div>
        </div>
    )
}

export default Waves;

function generateWave(height: number, phased: boolean) {
    let clipPath = '';
    const amplitude = 4;
    const offset = amplitude;
    const frequency = Math.ceil(document.body.clientWidth / 200);
    const phase = phased ? 180 : 0;
    const points = 150;
    const units = 2 * Math.PI * frequency / points;
    const path = 'polygon(100% 100%, 0% 100% ';
    let clipPathString = path;

    let radPhase = phase * Math.PI / 180;

    for (let i = 0; i <= points; i++) {
        let val = offset + amplitude * Math.cos(i * units + radPhase);
        let valY = (val / height * 100).toFixed(2);
        let valX = (i * 100 / points).toFixed(2);
        clipPathString += ', ' + valX + '% ' + valY + '%';
    }
    clipPathString += ')';

    clipPath = clipPathString;
    return clipPath;
}
