import React from "react";
import styles from "./style.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <span className={styles.contact}>CONTACT ME</span>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message"
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">SEND MAIL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
