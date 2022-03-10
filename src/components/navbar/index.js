import React, { useState } from "react";

import Logo from "../logo";
import styles from "./style.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.container}>
      <Logo />
      <div className={styles.hamburger}>
        <div
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={handleClick}
        >
          <div className={styles.menuBtnBurger}></div>
          <div className={styles.burgerNavContainer}>
            <div
              className={`${styles.burgerNavMenu} ${
                menuOpen ? styles.menuOpen : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}
        id="navmenu"
      >
        <div className={styles.navLinkContainer}>
          <a href="#about" className={styles.navMenuLink}>
            about me
          </a>
          <a href="#skills" className={styles.navMenuLink}>
            skills
          </a>
          <a href="#projects" className={styles.navMenuLink}>
            projects
          </a>
          <a href="#contact" className={styles.navMenuLink}>
            contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
