import Project from "../project";
import React from "react";
import styles from "./style.module.css";
import ProjectsData from "./data";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.header}>PROJECTS</div>
          <div className={styles.projects}>
            {ProjectsData && ProjectsData ?
              ProjectsData.map((project) => (
                <Project
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.cover_img}
                  link={project.link}
                />
              )): <Project />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
