import React from "react";
import { getUrl } from "../../utils";
import styles from "./experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experiece = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.topTitle}>Experience</h2>
      <marquee scrollAmount="8" behavior="scroll" direction="left">
        <div className={styles.containerBox}>
          <div className={styles.skillsContainer}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skillsMapContainer}>
                  <div className={styles.skillsImg}>
                    <img src={getUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <div>
                    <p>{skill.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <ul className={styles.historyContainer}>
        <h1>Phone Number</h1>
        </ul> */}
        </div>
      </marquee>
    </section>
  );
};
