import React from 'react';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/profilepicture.png" alt="Profile" className={styles.profilePic} />
      <h1 className={styles.nameTitle}>Sid Meka</h1>
      <p className={styles.description}>
        Hi, I am Sid Meka and this is my personal website. I like to practice the piano, play basketball, and cook food for my friends and family.
      </p>
    </div>
  );
};

export default About;
