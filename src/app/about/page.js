'use client';
import React from 'react';
import styles from '../page.module.css';

function About() {
  return (
    <div>
      <section className={styles.profileSection}>
        <img src="/Profile.jpg" alt="Profile" />
        <div className={styles.profileDescription}>
          <h1w>Daniel Felipe SÁNCHEZ RUIZ</h1w><br></br>
          <h2w>Civil Engineer from Universidad los Andes</h2w><br></br>
          <h2w>MEng. & MSc. Innovation and Creative Technologist from ESILV</h2w><br></br>
          <pw>
          Engineer, manager, and strategist, committed to the development of the industry through innovation. Aiming to bridge the gap between research and industrialization, while ensuring the sustainability of technology over time.
          </pw>
        </div>
      </section>
    <div>
      <section className={styles.description}>
        <h2>Motivation</h2>
        <p>
        The reality is that the world is rapidly changing due to global warming, and our ways of living in the world need to adapt accordingly. Currently, the construction industry has a 2.6p.p. productivity deficit compared to other industries and it is responsible of the 15% of the green house gas emissions. Still, we are facing a housing deficit of 1000 million units, and many existing houses are not sustainable at all. Addressing this issue, my vision to develop more productive and sustainable construction methods and materials, focusing to adapt our environments to climate change and social challenges through industrialized buildings.
        </p>
      </section>
      <section className={styles.projectsSection}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <img src="/Logos/BIOS.png"/>
            <h3>BIOS project</h3>
            <p>A bubbly inflatable organic structure used as a low-tech temporary house for camping or disaster shelter.</p>
            <button className={styles.mainButton} onClick={() => window.open('https://ift.devinci.fr/projects/bios', '_blank')}>
             Learn more
            </button>
          </div>
          <div className={styles.projectCard}>
            <img src="/Logos/Uniandes.png"/>
            <h3>Industrialization level in construction</h3>
            <p>A methodology to define and calculate the industrialization level in construction projects.</p>
            <button className={styles.mainButton} onClick={() => window.open('http://hdl.handle.net/1992/56963', '_blank')}>
             Learn more
            </button>
          </div>
          <div className={styles.projectCard}>
            <img src="/Logos/Kickstarter.png"/>
            <h3>Stick nTag</h3>
            <p>A NFC leather gadget attachable to any surface, for programming repetitive shortcuts on your phone.</p>
            <button className={styles.mainButton} onClick={() => window.open('https://www.kickstarter.com/projects/1319726851/quickstarter-stick-ntag?ref=user_menu', '_blank')}>
             Learn more
            </button>
          </div>
        </div>
      </section>
      <section className={styles.companiesSection}>
      <h2>Companies</h2>
        <div className={styles.companyLogos}>
          <img src="/Logos/Uniandes.png"/>
          <img src="/Logos/Bolivar.png"/>
          <img src="/Logos/ESILV.png"/>
          <img src="/Logos/IFT dark.png"/>
          <img src="/Logos/Vinci.png"/>
          <img src="/Logos/Bouygues.png"/>
        </div>
        <script src="scrollLogos.js" defer></script>
      </section>
      <section className={styles.skillsSection}>
        <h2>Skills</h2>
        <div className={styles.skill}>
          <p>Spanish</p>
          <div className={styles.skillBar}>
            <div className={styles.skillFill} style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <p>English</p>
          <div className={styles.skillBar}>
            <div className={styles.skillFill} style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <p>French</p>
          <div className={styles.skillBar}>
            <div className={styles.skillFill} style={{ width: '80%' }}></div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default About;
