import React from "react";
import "./Projects.css";
import { SlideProjects } from "../Carousel/Carousel"


function Projects() {

  return (
    <div className="Projects">
      <header className="header"></header>
      <aside1 className="aside1"></aside1>
      <main className="main">
        <SlideProjects/>
      </main>
      <aside2 className="aside2">
      </aside2>
    </div>
  );
}

export default Projects;

