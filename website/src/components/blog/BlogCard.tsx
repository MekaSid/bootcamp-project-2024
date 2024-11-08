import React from 'react';
import styles from './blogCard.module.css';

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, imageUrl, imageAlt, slug }) => {
  return (
    <div className={styles.card}>
      <a href={`/blog/${slug}`} className={styles.imageLink}>
        <img src={imageUrl} alt={imageAlt} className={styles.image} />
      </a>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
