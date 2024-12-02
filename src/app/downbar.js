import React from "react";
import Image from "next/image";
import Link from 'next/link';  // Next.js built-in link for navigation
import styles from "./page.module.css";

function Downbar(){
  return (
    <nav className={styles.downbar}>
      <logolight>
        <Link href="/">
          <img src="/Logos/PAL dark.png" alt="Logo" className={styles.logodark} />
        </Link>
      </logolight>
      <sp>    
        <p align="right">2024. All rights reserved (R)</p>
        <p align="right">By: Daniel Sánchez</p>
        <p align="right">Institute of Futute Technologies</p>
        <p align="right">12 Av. Leonard de Vinci</p>
        <p align="right">Courbevoie (92400)</p>
        <p align="right">Paris, France</p>
      </sp>
    </nav>
  );
}

export default Downbar;