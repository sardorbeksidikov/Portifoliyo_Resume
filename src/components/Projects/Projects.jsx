import React from "react";
import { ProjectCard } from "./ProjectCard";
import projectData from "../../data/projects.json";
import styles from "./projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.containerBox}>
        {projectData.map((data, id) => {
          return <ProjectCard key={id} data={data} />;
        })}
      </div>
    </section>
  );
};
