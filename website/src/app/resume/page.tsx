// src/pages/ResumePage.tsx

import React from 'react';
import Education from '../../components/resume/Education';
import Skills from '../../components/resume/Skills';
import ProfessionalExperience from '../../components/resume/Experience';
import Projects from '../../components/resume/Projects';
import styles from './resume.module.css';

const ResumePage: React.FC = () => {
  return (
    <div className={styles.resumeContainer}>
      <Education />
      <Skills />
      <ProfessionalExperience />
      <Projects />
    </div>
  );
};

export default ResumePage;
