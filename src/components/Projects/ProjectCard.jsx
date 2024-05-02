import { getUrl } from "../../utils";
import styles from "./projectCard.module.css";

export const ProjectCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img
          className={styles.image}
          src={getUrl(data.imageSrc)}
          alt="projects images"
        />
        <h3 className={styles.title}>{data.title}</h3>
        <p>{data.description}</p>
        <ul className={styles.listContainer}>
          {data.skills.map((items, id) => {
            return (
              <li key={id} className={styles.list}>
                {items}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a href={data.demo} target="_blank">
            Demo
          </a>
          <a href={data.source} target="_blank">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
