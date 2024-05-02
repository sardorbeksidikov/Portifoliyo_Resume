import React from "react";
import styles from "./styles.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MainPage } from "./components/MainPage/MainPage";
import { About } from "./components/About/About";
import { Experiece } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainPage />
      <About />
      <Projects />
      <Experiece />
      <Contact />
    </div>
  );
}

export default App;
