import React from "react";
import { getUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h3 className={styles.title}>About</h3>
      <div className={styles.contentBox}>
        <img
          className={styles.img2}
          src={getUrl("about/img2.png")}
          alt="about img"
        />
        <ul className={styles.content}>
          <li className={styles.list}>
            <img src={getUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.contentText}>
              <h3>Wep Programming</h3>
              <p>
                It is my major so I can create new web projects by using
                Front-End
              </p>
            </div>
          </li>
          <li className={styles.list}>
            <img src={getUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.contentText}>
              <h3>Web design</h3>
              <p>
                I can also create front-end web designs. I primarily use the
                Figma.com website for this.
              </p>
            </div>
          </li>
          <li className={styles.list}>
            <img src={getUrl("about/student.png")} alt="UI icon" />
            <div className={styles.contentText}>
              <h3>Marketing</h3>
              <p>I also have 1 year of experience in marketing. I think it will help my projects gather their users</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
