import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
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
          <AnchorLink href="#about" className={styles.navMenuLink}>
            about me
          </AnchorLink>
          <AnchorLink href="#skills" className={styles.navMenuLink}>
            skills
          </AnchorLink>
          <AnchorLink href="#projects" className={styles.navMenuLink}>
            projects
          </AnchorLink>
          <AnchorLink href="#contact" className={styles.navMenuLink}>
            contact me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
