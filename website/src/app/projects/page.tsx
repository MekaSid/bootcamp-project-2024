
import React from 'react';
import MiniProjectCard from './MiniProjectCard';
import styles from './projects.module.css'; 
import { projects } from '../../data/projectData' 

export default function ProjectsPage() {
  return (
    <div className = {styles.container}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <MiniProjectCard
          key={index}
          logo={project.logo}
          title={project.title}
          description={project.description}
          link={project.link}
          languages={project.languages}
        />
      ))}
    </div>

    </div>
    
  );
}
