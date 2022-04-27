import React from "react";
import styles from "./style.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.inner}>
        <h2 className={styles.header}>ABOUT ME</h2>
        <div className={styles.aboutbody}>
          <div className={styles.left}>
            <div className={styles.img}>
              <img
                src="https://res.cloudinary.com/afeezagbaje/image/upload/v1635508210/samples/cartoonize-97FEA331-3752-4F0F-B69B-905D39977A54L0001_axgfc7.jpg"
                alt="Afeez"
                border="0"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              Afeez Agbaje is a software developer with over two years building
              scalable websites for companies. His background in fashion
              industry, visual design and account management has given him a
              unique perspective on the world of technology and an informed
              mind. He is fueled by his passion for understanding th nuances of
              software engineering. He considers himself a 'forever student'.
              <br />
              <br />
              Afeez's hunger for knowledge and determination to turn ideas into
              reality has contributed to his most recent success at Decagon.
              There he has worked on a variety of projects ranging from a simple
              website to a complex application. He improved the performance of
              the department by building an application that reduces the work
              load of the department by 15%. Afeez is always interested in a
              challenge. Reach out to him if you have any questions or would
              like to work together.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
