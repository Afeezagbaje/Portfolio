import React from "react";
import Skill from "../skill";
import styles from "./style.module.css";

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <div className={styles.outer}>
        <div className={styles.inner}>
          <h2 className={styles.header}>TECHNICAL SKILLS</h2>
          <div className={styles.skills}>
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
