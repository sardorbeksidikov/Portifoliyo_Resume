import React from "react";
import { getUrl } from "../../utils";
import styles from "./mainPage.module.css";
import { FaTelegram } from "react-icons/fa";

export const MainPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.title}>Hello! I Sardorbek</h2>
        <h3 className={styles.text}> Front end Developer</h3>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sardorbek-sdikov-b282162a0">
            <i id={styles.linkedin} className="fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://github.com/sardorbeksidikov">
            <i id={styles.github} className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://t.me/sardorbek_sidikov1">
            <FaTelegram id={styles.telegram} className="teletram-icon" />
          </a>
        </div>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}>
          Download Resume
        </a>
       
       
      </div>
      <img className={styles.img1} src={getUrl("main/img1.png")} />
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
    </section>
  );
};
