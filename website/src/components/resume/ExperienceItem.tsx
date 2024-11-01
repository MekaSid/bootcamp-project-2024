// src/components/ExperienceItem.tsx

import React from 'react';
import { Experience } from '../../data/experienceData';
import styles from '../../app/resume/resume.module.css';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className={styles.experienceItem}>
      <h3 className={styles.company}>{experience.company}</h3>
      <p className={styles.position}>{experience.position}</p>
      <p className={styles.duration}>{experience.duration}</p>
      <ul className={styles.list}>
        {experience.responsibilities.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
