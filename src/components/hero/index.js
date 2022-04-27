import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import React from "react";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <h2>Hi</h2>
          <h3>I am Afeez</h3>
          <div className={styles.roles}>
            <h5>React Developer</h5>
            <h5>Machine Learning</h5>
            <h5>Django Developer</h5>
          </div>
          <div className={styles.social}>
            <a href="https://www.twitter.com">
              <FaTwitter className={styles.icons} />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className={styles.icons} />
            </a>
            <a href="https://twitter.com">
              <FaLinkedin className={styles.icons} />
            </a>
            <a href="https://twitter.com">
              <FaGithub className={styles.icons} />
            </a>
          </div>
          <div className={styles.download_cont}>
            <a
              className={styles.download}
              href="https://res.cloudinary.com/afeezagbaje/image/upload/v1651093534/DevBlogs/Afeez_Agbaje_Resume_te0im1.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
