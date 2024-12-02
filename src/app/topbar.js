'use client'; // Mark this file as a client component

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';  // Next.js built-in link for navigation
import styles from "./page.module.css";

function Topbar(){
  const pathname = usePathname();
  return (
    <nav className={styles.topbar}>
      <logolight>
        <Link href="/">
          <img src="/Logos/PAL light.png" alt="Logo" className={styles.logolight} />
        </Link>
      </logolight>
      <sp>
        <li>
          <Link href="/project" aria-current={pathname === "/project" ? "page" : undefined}>
            Project
          </Link>
        </li>
        <li>
          <Link href="/problem" aria-current={pathname === "/problem" ? "page" : undefined}>
            Problem
          </Link>
        </li>
        <li>
          <Link href="/tech" aria-current={pathname === "/tech" ? "page" : undefined}>
            Technology
          </Link>
        </li>
        <li>
          <Link href="/pictures" aria-current={pathname === "/pictures" ? "page" : undefined}>
            Pictures
          </Link>
        </li>
        <li>
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
            Contact
          </Link>
        </li>
      </sp>
    </nav>
  );
}

export default Topbar;