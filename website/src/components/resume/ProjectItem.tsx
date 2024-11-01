// src/components/ProjectItem.tsx

import React from 'react';
import { Project } from '../../data/resumeProjectData';
import styles from '../../app/resume/resume.module.css';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className={styles.projectItem}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.role}>{project.role}</p>
      <p className={styles.duration}>{project.duration}</p>
      <ul className={styles.list}>
        {project.description.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
