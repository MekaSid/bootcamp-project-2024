import React from 'react';
import styles from './blogCard.module.css';


interface BlogCardProps {
	title: string;
	slug: string;
	date: string;
	description: string;
	image: string;  // renamed from image
	imageAlt: string;  // renamed from image_alt
	comments?: Comment[]; // make optional if not used
  }

  
const BlogCard: React.FC<BlogCardProps> = ({
	title,
	date,
	description,
	image,
	imageAlt,
	slug,
  }) => {
	return (
	  <div className={styles.card}>
		<a href={`/blog/${slug}`} className={styles.imageLink}>
		  <img src={image} alt={imageAlt} className={styles.image} />
		</a>
		<div className={styles.content}>
		  <h2 className={styles.title}>{title}</h2>
		  <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
		  <p className={styles.description}>{description}</p>
		</div>
	  </div>
	);
  };
  

export default BlogCard;
