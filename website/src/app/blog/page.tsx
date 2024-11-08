import React from 'react';
import styles from './blog.module.css';
import BlogCard from '../../components/blog/BlogCard';
import blogs from '../../data/blogData';

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.cardContainer}>
        {blogs.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            imageUrl={post.image}
            imageAlt={post.imageAlt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
