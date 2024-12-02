'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import CanvaHouse from '../house/canvaHouse';

function Tech(){
    const [isRotating, setIsRotating] = useState(true); // Controls rotation
    const [cameraTarget, setCameraTarget] = useState(null); // Controls camera position
    const [showInfo, setShowInfo] = useState(null); // Controls the info window

    useEffect(() => {
        if (showInfo !== null) {
            setIsRotating(false); // Stop rotation when an info window is shown
            setCameraTarget({ x: 3, y: 3, z: 3 }); // Fix the camera view to (3, 3, 3)
        }
    }, [showInfo]);

    const handleInfoButtonClick = (buttonNumber) => {
        setIsRotating(false); // Stop rotation
        setCameraTarget({ x: 3, y: 3, z: 3 }); // Set camera target to zoom in
        setShowInfo(buttonNumber); // Show the info window
    };

    const handleCloseInfo = () => {
        setIsRotating(true); // Resume rotation
        setShowInfo(false); // Hide the info window
    };

    return (
        <div>
            <div>
                <CanvaHouse 
                    isRotating={isRotating} 
                    cameraTarget={cameraTarget} 
                    onCameraTargetReached={() => setCameraTarget(null)} 
                />
                <div className={styles.infoButton1} onClick={() => handleInfoButtonClick(1)}>
                    <button className={styles.imageButton}>+</button>
                </div>
                <div className={styles.infoButton2} onClick={() => handleInfoButtonClick(2)}>
                    <button className={styles.imageButton}>+</button>
                </div>
                <div className={styles.infoButton3} onClick={() => handleInfoButtonClick(3)}>
                    <button className={styles.imageButton}>+</button>
                </div>
                <div className={styles.infoButton4} onClick={() => handleInfoButtonClick(4)}>
                    <button className={styles.imageButton}>+</button>
                </div>
                {showInfo === 1 && (
                    <div className={styles.infoWindow}>
                        <div className={styles.infoContent}>
                            <h3>Insulation</h3>
                            <p>The panel can be addapted to any different type of biosourced insulation such as: Wood fiber, bamboo fiber, wool, or even mycellium</p>
                            <button className={styles.closeButton} onClick={handleCloseInfo}>x</button>
                        </div>
                    </div>
                )}
                {showInfo === 2 && (
                    <div className={styles.infoWindow}>
                        <div className={styles.infoContent}>
                            <h3>Frame</h3>
                            <p>The rigid frame is made of wood, a renewable and local material that provides enough resistance, protected with a waterproof underlayment made of recycled plastics</p>
                            <button className={styles.closeButton} onClick={handleCloseInfo}>x</button>
                        </div>
                    </div>
                )}
                {showInfo === 3 && (
                    <div className={styles.infoWindow}>
                        <div className={styles.infoContent}>
                            <h3>Cladding</h3>
                            <p>Different types of biomimetic cladding are proposed according to the enviroment. Imitating cactus for hot regions and polar bears for cold ones</p>
                            <button className={styles.closeButton} onClick={handleCloseInfo}>x</button>
                        </div>
                    </div>
                )}
                {showInfo === 4 && (
                    <div className={styles.infoWindow}>
                        <div className={styles.infoContent}>
                            <h3>Connections</h3>
                            <p>There are easy to install connections that guarantee quick deployability but durabitlity.</p>
                            <button className={styles.closeButton} onClick={handleCloseInfo}>x</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tech;
