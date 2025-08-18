import React from "react";
import { motion } from "framer-motion";

const TiltCard = ({ project }) => {
  return (
    <motion.div
      className="tilt-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

export default TiltCard;
