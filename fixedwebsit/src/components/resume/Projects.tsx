
import React from 'react';
import { projectData } from '../../data/resumeProjectData';
import ProjectItem from './ProjectItem';
import styles from '../../app/resume/resume.module.css';

const Projects: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      {projectData.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
