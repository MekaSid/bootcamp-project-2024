
import React from 'react';
import { skillsData } from '../../data/skillsData';
import styles from '../../app/resume/resume.module.css';

const Skills: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <h4 className={styles.subheading}>Programming Languages:</h4>
      <p className={styles.skillItem}>{skillsData.programmingLanguages.join(', ')}</p>
      <h4 className={styles.subheading}>Frameworks/Libraries:</h4>
      <p className={styles.skillItem}>{skillsData.frameworks.join(', ')}</p>
      <h4 className={styles.subheading}>Software Skills:</h4>
      <p className={styles.skillItem}>{skillsData.softwareSkills.join(', ')}</p>
    </section>
  );
};

export default Skills;
