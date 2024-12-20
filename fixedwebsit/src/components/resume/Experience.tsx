
import React from 'react';
import { experienceData } from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';
import styles from '../../app/resume/resume.module.css';

const ProfessionalExperience: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      {experienceData.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </section>
  );
};

export default ProfessionalExperience;
