'use client';

import { useState } from 'react';
import CanvaHouse from "../house/canvaHouse";
import Problem from "../problem/page";
import React from "react";
import Image from "next/image";
import Link from 'next/link';  // Next.js built-in link for navigation
import styles from '../page.module.css';

function Project(){
    const [isRotating, setIsRotating] = useState(true); // Controls rotation
    const [cameraTarget, setCameraTarget] = useState(null); // Controls camera position
    const [showInfo, setShowInfo] = useState(false); // Controls the info window

    return (
        <div className={styles.project}>
            <div className={styles.half}>
                <div className={styles.left}>
                    <CanvaHouse 
                    isRotating={isRotating} 
                    cameraTarget={cameraTarget} 
                    onCameraTargetReached={() => setCameraTarget(null)} 
                    />
                </div>
                <div className={styles.right} align="center">
                    <h1>The modular sustainable shelter for a resilient future</h1><br></br>
                    <h2>This is Prêt-à-loger, the sustainable house of the future</h2>
                </div>
            </div>
            <div className={styles.solutionGrid}>
                <div className={styles.solutionCard}>
                    <img src="/icon1.png"/>
                    <p>Modular and scalable configuration​</p>
                </div>
                <div className={styles.solutionCard}>
                    <img src="/icon2.png"/>
                    <p>90% made of bio-sourced materials and 10% of recyclable</p>
                </div>
                <div className={styles.solutionCard}>
                    <img src="/icon3.png"/>
                    <p>Easy to assemble in less than 1 hour per unit</p>
                </div>
            </div>
            <div className={styles.vision} align="center">
                <pw>
                The reality is that the world is rapidly changing due to global warming, and our ways of living in the world need to adapt accordingly. Currently, the construction industry has a 2.6p.p. productivity deficit compared to other industries and it is responsible of the 15% of the green house gas emissions. Still, we are facing a housing deficit of 1000 million units, and many existing houses are not sustainable at all. Addressing this issue, my vision to develop more productive and sustainable construction methods and materials, focusing to adapt our environments to climate change and social challenges through industrialized buildings.
                </pw>
            </div>
        </div>
        
    );
}

export default Project;
