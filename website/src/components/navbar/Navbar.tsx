import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header>
        <nav className={style.navbar}>
        <ul className={style.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
        </ul>
        </nav>

    </header>
  );
}