import React from 'react';
import styles from '../page.module.css';

// Some better resolution images will be put in this page
function Problem() {
    return (
        <div className={styles.page}>
            <div className={styles.fixed}>
                <div className={styles.sectionFixed} style={ {backgroundImage: "url('/problem1.jpg" }}>
                    <div className={styles.textProblem}>
                        <h1w>1000 million</h1w><br></br>
                        <pw>of new housing needed for 2025</pw>
                    </div>
                </div>
                <div className={styles.sectionFixed} style={{ backgroundImage: "url('/problem2.jpg" }}>
                    <div className={styles.textProblem}>
                        <h1w>15%</h1w><br></br>
                        <pw>of green house gas emissions are produced by the construction industry</pw>
                    </div>
                </div>
                <div className={styles.sectionFixed} style={{ backgroundImage: "url('/problem3.png" }}>
                    <div className={styles.textProblem}>
                        <h1w>216 millon</h1w><br></br>
                        <pw>people are displaced due to natural or human-made disasters</pw>
                    </div>
                </div>
                <div className={styles.sectionFixed} style={{ backgroundImage: "url('/problem4.jpg" }}>
                    <div className={styles.textProblem}>
                        <h1w>$63.4 billion USD</h1w><br></br>
                        <pw>is the deficit of investment in temporary housing</pw>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Problem;
