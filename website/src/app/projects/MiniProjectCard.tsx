import React from 'react';
import styles from './MiniProjectCard.module.css';

interface MiniProjectCardProps {
  logo: string;
  title: string;
  description: string;
  link: string;
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ logo, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${title} logo`} className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};


export default MiniProjectCard;
