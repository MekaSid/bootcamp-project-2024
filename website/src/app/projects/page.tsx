
import React from 'react';
import MiniProjectCard from './MiniProjectCard';
import styles from './projects.module.css'; 
import { projects } from './projectData' 

export default function ProjectsPage() {
  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <MiniProjectCard
          key={index}
          logo={project.logo}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}
