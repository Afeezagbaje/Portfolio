import React from "react";
import styles from "./style.module.css";

const Project = ({ image, name, link, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.projectContainer}>
            <div className={styles.image}>
              <img
                src={image}
                alt={name}
              />
            </div>
            <div className={styles.projectBody}>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href={link}>visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Project.defaultProps = {
  image:
    "https://res.cloudinary.com/afeezagbaje/image/upload/v1634713363/samples/Logos/Screenshot_2021-10-20_at_07.48.18_fcvej1.png",
  name: "DecaAid",
  link: "http://decaaid.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectu pretium arcu id faucibus. Amet, interdum augue vel ligul adipiscing nec rhoncus, risus. Scelerisque amet, ultricies etiam sollicitudin luctus sapien. Built with Django Rest Framework, React, Node JS, Redis, Ruby on Rails and PHP",
};

export default Project;
