'use client';
import React, { useState } from "react";
import styles from "../page.module.css";

// The pictures will be replaced by the ones of the real project when it is built
const Pictures = () => {
    const images = ["/Option1.jpg", "/Option2.jpg", "/Option3.jpg"]; // Array of image paths
    const [currentIndex, setCurrentIndex] = useState(0); // State for current image index
    
    // Navigate to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Navigate to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.fixed}>
            <div className={styles.carousel}>
                <button className={styles.imageButton} onClick={handlePrev}>
                    &lt;
                </button>
                <div
                    className={styles.imageContainer}
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                    }}
                ></div>
                <button className={styles.imageButton} onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
        
    );
};

export default Pictures;
