import React from "react";
import styles from "./style.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.header}>ABOUT ME</h2>
        <div className={styles.aboutbody}>
          <div className={styles.left}>
            <div className={styles.img}>
              <img src="https://res.cloudinary.com/afeezagbaje/image/upload/v1635508210/samples/cartoonize-97FEA331-3752-4F0F-B69B-905D39977A54L0001_axgfc7.jpg" alt="Afeez" border="0"/>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              in aliquam mauris rhoncus viverra netus imperdiet congue.
              Tristique phasellus risus, ipsum lectus tincidunt id lacus. In
              nulla orci odio nunc blandit ultrices a sodales. Viverra amet
              scelerisque dictum vel dictum ut bibendum et et. Sagittis semper
              aliquam lorem diam, ultrices dignissim in. Id nibh vehicula a
              mattis pharetra ultrices volutpat netus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
