import React from "react";
import TiltCard from "../components/TiltCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <TiltCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
