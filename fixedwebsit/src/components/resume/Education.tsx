
import React from 'react';
import { educationData } from '../../data/educationData';
import styles from '../../app/resume/resume.module.css';

const Education: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <h3 className={styles.institution}>{educationData.institution}</h3>
      <p className={styles.degree}>{educationData.degree}</p>
      <p className={styles.graduationDate}>{educationData.graduationDate}</p>
      <p className={styles.gpa}>{educationData.gpa}</p>
      <h4 className={styles.subheading}>Coursework:</h4>
      <ul className={styles.list}>
        {educationData.coursework.map((course, index) => (
          <li key={index} className={styles.listItem}>
            {course}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
